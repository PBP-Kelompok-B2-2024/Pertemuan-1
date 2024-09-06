const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// Array untuk menyimpan history gambar
let drawHistory = [];

// Ketika client baru terhubung
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Kirim riwayat gambar ke client baru
    ws.send(JSON.stringify({
        type: 'history',
        history: drawHistory
    }));

    // Ketika server menerima pesan dari client
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'drawing' || data.type === 'startDrawing' || data.type === 'stopDrawing') {
            // Simpan data gambar ke history
            drawHistory.push(data);

            // Kirim data gambar ke semua client
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }

        if (data.type === 'clearCanvas') {
            // Hapus history ketika canvas dibersihkan
            drawHistory = [];

            // Kirim pesan clearCanvas ke semua client
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'clearCanvas' }));
                }
            });
        }
    });

    // Ketika client terputus
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('Server started on ws://localhost:8080');
