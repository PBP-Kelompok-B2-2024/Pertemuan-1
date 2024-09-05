const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');
let drawing = false;

// WebSocket signaling server
const socket = new WebSocket('ws://192.168.18.5:8080');

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});

// Draw on canvas
canvas.addEventListener('mousemove', draw);

let lastX = 0;
let lastY = 0;
let isThrottling = false;
const threshold = 5; // Minimum distance before sending the next point

function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Hanya gambar jika jarak lebih besar dari threshold
    const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
    if (distance > threshold && !isThrottling) {
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);

        // Send drawing data to other users
        socket.send(JSON.stringify({
            type: 'drawing',
            x, y
        }));

        lastX = x;
        lastY = y;

        isThrottling = true;
        setTimeout(() => {
            isThrottling = false;
        }, 50); // Set throttling duration (50 ms)
    }
}



// Handle WebSocket messages
socket.onmessage = async (message) => {
    // Cek apakah data dalam bentuk Blob
    if (typeof message.data === 'object') {
        const textData = await message.data.text(); // Konversi Blob menjadi string
        try {
            const data = JSON.parse(textData); // Parse string menjadi JSON
            
            // Jika menerima history gambar
            if (data.type === 'history') {
                data.history.forEach(d => {
                    ctx.lineWidth = 5;
                    ctx.lineCap = 'round';
                    ctx.strokeStyle = 'black';

                    ctx.lineTo(d.x, d.y);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(d.x, d.y);
                });
            }

            // Jika menerima data gambar baru
            if (data.type === 'drawing') {
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'black';

                ctx.lineTo(data.x, data.y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(data.x, data.y);
            }
        } catch (error) {
            console.error('Error parsing message data:', error);
        }
    } else {
        console.error('Received unknown data type:', message.data);
    }
};