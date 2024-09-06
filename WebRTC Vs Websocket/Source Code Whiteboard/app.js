const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');
let drawing = false;
const eraseBtn = document.getElementById('eraseBtn');
let lastX = 0;
let lastY = 0;
let isThrottling = false;
const threshold = 5; // Minimum distance before sending the next point
let currentColor = 'black'; // Default color
let currentLineWidth = 5; // Default line width

// WebSocket signaling server
const socket = new WebSocket('ws://192.168.65.78:8080');

// Fungsi untuk menghapus seluruh canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Hapus seluruh canvas

    // Kirim pesan ke server untuk memberitahu semua client
    socket.send(JSON.stringify({
        type: 'clearCanvas'
    }));
}

// Event listener untuk tombol erase
eraseBtn.addEventListener('click', clearCanvas);

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;

    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);

    // Kirim pesan startDrawing
    socket.send(JSON.stringify({
        type: 'startDrawing',
        x: lastX,
        y: lastY,
        color: currentColor, // Kirim juga warna yang sedang digunakan
        lineWidth: currentLineWidth // Kirim juga ukuran kuas yang sedang digunakan
    }));
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();

    // Kirim pesan stopDrawing
    socket.send(JSON.stringify({
        type: 'stopDrawing'
    }));
});

// Draw on canvas
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Hanya gambar jika jarak lebih besar dari threshold
    const distance = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
    if (distance > threshold && !isThrottling) {
        ctx.lineWidth = currentLineWidth; // Set ukuran kuas sesuai tombol yang dipilih
        ctx.strokeStyle = currentColor; // Set warna sesuai palet
        ctx.lineTo(x, y);
        ctx.stroke();

        lastX = x;
        lastY = y;

        // Send drawing data to other users
        socket.send(JSON.stringify({
            type: 'drawing',
            x: x,
            y: y,
            color: currentColor, // Kirim juga warna yang sedang digunakan
            lineWidth: currentLineWidth // Kirim juga ukuran kuas
        }));

        isThrottling = true;
        setTimeout(() => {
            isThrottling = false;
        }, 50); // Set throttling duration (50 ms)
    }
}

// Handle WebSocket messages
socket.onmessage = async (message) => {
    // Jika pesan adalah Blob, konversi ke string
    if (message.data instanceof Blob) {
        const text = await message.data.text(); // Konversi Blob ke string
        try {
            const data = JSON.parse(text); // Parsing string JSON
            processReceivedData(data); // Panggil fungsi untuk memproses data
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    } else if (typeof message.data === 'string') {
        // Jika data langsung berupa string (untuk berjaga-jaga)
        try {
            const data = JSON.parse(message.data);
            processReceivedData(data); // Panggil fungsi untuk memproses data
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    } else {
        console.error('Received unknown data type:', message.data);
    }
};

// Fungsi untuk memproses data yang diterima (history atau drawing)
function processReceivedData(data) {
    if (data.type === 'history') {
        // Load riwayat gambar
        data.history.forEach(d => {
            processReceivedData(d); // Panggil fungsi ini secara rekursif
        });
    } else if (data.type === 'startDrawing') {
        ctx.beginPath();
        ctx.moveTo(data.x, data.y);
    } else if (data.type === 'drawing') {
        ctx.lineWidth = data.lineWidth || 5; // Gunakan ukuran kuas yang diterima
        ctx.lineCap = 'round';
        ctx.strokeStyle = data.color || 'black'; // Gunakan warna yang diterima
        ctx.lineTo(data.x, data.y);
        ctx.stroke();
    } else if (data.type === 'stopDrawing') {
        ctx.beginPath(); // Reset path
    } else if (data.type === 'clearCanvas') {
        // Bersihkan canvas di semua client
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Mengubah warna palet saat tombol warna ditekan
const colorButtons = document.querySelectorAll('.colorBtn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentColor = button.getAttribute('data-color');
    });
});

// Mengubah ukuran kuas saat tombol ukuran ditekan
const sizeButtons = document.querySelectorAll('.sizeBtn');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentLineWidth = button.getAttribute('data-size');
    });
});