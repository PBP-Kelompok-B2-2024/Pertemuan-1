const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Menyimpan koordinat gambar
let drawingHistory = [];

wss.on('connection', function connection(ws) {
    // Kirim history gambar ke user baru
    ws.send(JSON.stringify({ type: 'history', history: drawingHistory }));

    ws.on('message', function incoming(message) {
        const data = JSON.parse(message);

        // Simpan koordinat gambar
        if (data.type === 'drawing') {
            drawingHistory.push(data);
        }

        // Broadcast ke semua client
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.send('Welcome to the online whiteboard!');
});

console.log('WebSocket server is running on ws://localhost:8080');
