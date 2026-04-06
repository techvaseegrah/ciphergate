import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import appContext from './AppContext';
import { toast } from 'react-toastify';

const SocketContext = createContext();

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const { subdomain } = useContext(appContext);
    const socketRef = useRef(null);
    const toastShownRef = useRef(false);

    useEffect(() => {
        if (!subdomain || subdomain === 'main') {
            return;
        }

        // ─── PRODUCTION FIX ───────────────────────────────────────────────────
        // In production, VITE_API_URL is set to '/api' (relative).
        // We connect to the SAME ORIGIN (no port!) so traffic flows through
        // Nginx on port 443. Nginx then proxies /socket.io/ → backend:5001
        // internally. Connecting to :5001 directly would be firewall-blocked.
        //
        // In local dev, Vite proxies /api but NOT /socket.io/, so we connect
        // directly to localhost:5001.
        // ─────────────────────────────────────────────────────────────────────
        const isProduction = import.meta.env.VITE_API_URL === '/api';

        const socketUrl = isProduction
            ? window.location.origin          // e.g. https://techvaseegrah.ciphergate.in  (no port)
            : (import.meta.env.VITE_SOCKET_URL || 'http://localhost:5001');

        // Retrieve token for auth — NEVER log the token to console in production
        const token = localStorage.getItem('token');

        const newSocket = io(socketUrl, {
            // polling first → lets Nginx handle the HTTP upgrade to WebSocket.
            // 'websocket' only would bypass the upgrade handshake and fail.
            transports: ['polling', 'websocket'],

            // Pass JWT in handshake auth so the backend can validate it
            auth: { token },

            reconnection: true,
            reconnectionAttempts: 8,
            reconnectionDelay: 2000,
            reconnectionDelayMax: 15000,

            // 20s timeout handles slow SSL / proxy handshakes
            timeout: 20000,

            // Required for cookies / CORS with credentials
            withCredentials: true,

            // Must match the Nginx proxy_pass location and backend path config
            path: '/socket.io/',
        });

        socketRef.current = newSocket;
        setSocket(newSocket);

        newSocket.on('connect', () => {
            // Log transport used to confirm WebSocket upgrade succeeded
            const transport = newSocket.io.engine.transport.name;
            console.log(`[Socket] Connected: ${newSocket.id} (transport: ${transport})`);
            setIsConnected(true);
            toastShownRef.current = false;
            toast.success('Live updates connected', { toastId: 'socket-connect' });
            newSocket.emit('join-subdomain', subdomain);
        });

        newSocket.on('disconnect', (reason) => {
            console.log('[Socket] Disconnected:', reason);
            setIsConnected(false);
        });

        newSocket.on('connect_error', (error) => {
            if (!toastShownRef.current) {
                // Do NOT log the token or sensitive data here
                console.error('[Socket] Connection error:', error.message);
                toast.error('Real-time updates unavailable. Retrying...', { toastId: 'socket-error' });
                toastShownRef.current = true;
            }
            setIsConnected(false);
        });

        // Forward real-time attendance updates to any listener in the app
        newSocket.on('attendance-update', (data) => {
            window.dispatchEvent(new CustomEvent('attendance-update', { detail: data }));
        });

        return () => {
            newSocket.disconnect();
        };
    }, [subdomain]);

    const value = {
        socket,
        isConnected,
        socketRef
    };

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;