const socketIO = require('socket.io');

let io;

const init = (server) => {
    io = socketIO(server, {
        cors: {
            origin: [
                'http://localhost:3000',
                'https://tvtasks.netlify.app',
                'https://techvaseegrah.ciphergate.in',
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }
    });

    io.on('connection', (socket) => {
        console.log(`New client connected: ${socket.id}`);

        socket.on('join-subdomain', (subdomain) => {
            if (subdomain) {
                socket.join(subdomain);
                console.log(`Socket ${socket.id} joined room: ${subdomain}`);
            }
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
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
