console.log("Starting with setTimeout...");

// Mulai hitung waktu
const startTimeWithTimeout = performance.now();

// Fungsi untuk mensimulasikan operasi yang memakan waktu lama
function heavyComputationWithTimeout() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    console.log("Sum with setTimeout:", sum);
    
    // Selesai hitung waktu di dalam callback
    const endTimeWithTimeout = performance.now();
    console.log("Execution time with setTimeout: " + (endTimeWithTimeout - startTimeWithTimeout) + " milliseconds.");
}

// Jalankan operasi berat dengan penundaan menggunakan setTimeout
setTimeout(heavyComputationWithTimeout, 0);
