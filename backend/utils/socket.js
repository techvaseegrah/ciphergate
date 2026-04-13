const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');

let io;

const init = (server) => {
    io = socketIO(server, {
        cors: {
            origin: [
                'http://localhost:3000',
                'http://localhost:5173',
                'https://tvtasks.netlify.app',
                'https://techvaseegrah.ciphergate.in',
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        },
        // Allow fallback to polling if websocket fails initially
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        pingTimeout: 60000,
        pingInterval: 25000,
    });

    // Authentication Middleware for Socket.IO
    io.use((socket, next) => {
        const token = socket.handshake.auth?.token;

        if (!token) {
            console.warn('[Socket] Connection attempt without token');
            return next(new Error('Authentication error: No token provided'));
        }

        try {
            // Verify token using the secret from environment
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            socket.user = decoded; // Attach user info to socket
            next();
        } catch (err) {
            console.error(`[Socket] Auth failed for token: ${token.substring(0, 10)}... — Error: ${err.message}`);
            return next(new Error(`Authentication error: ${err.message}`));
        }
    });

    io.on('connection', (socket) => {
        const transport = socket.conn.transport.name;
        const userId = socket.user?.id || 'Unknown';
        console.log(`[Socket] Client connected: ${socket.id} (User: ${userId}, Transport: ${transport})`);

        socket.on('join-subdomain', (subdomain) => {
            if (subdomain) {
                socket.join(subdomain);
                console.log(`[Socket] ${socket.id} joined room: ${subdomain}`);
            }
        });

        socket.on('disconnect', (reason) => {
            console.log(`[Socket] Client disconnected: ${socket.id} — reason: ${reason}`);
        });
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error('Socket.io not initialized!');
    }
    return io;
};

module.exports = { init, getIO };
