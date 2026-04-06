const socketIO = require('socket.io');

let io;

const init = (server) => {
    io = socketIO(server, {
        cors: {
            origin: [
                'http://localhost:3000',
                'http://localhost:5173',            // Vite dev server
                'https://tvtasks.netlify.app',
                'https://techvaseegrah.ciphergate.in',
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        },
        // Allow both transports so Nginx can handle upgrade
        transports: ['polling', 'websocket'],
        // Use the standard /socket.io/ path
        path: '/socket.io/',
        // Increase ping/pong timeouts to survive slow proxies
        pingTimeout: 60000,
        pingInterval: 25000,
    });

    io.on('connection', (socket) => {
        console.log(`[Socket] Client connected: ${socket.id} (transport: ${socket.conn.transport.name})`);

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
