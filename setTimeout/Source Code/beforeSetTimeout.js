console.log("Starting without setTimeout...");

// Mulai hitung waktu
const startTimeWithoutTimeout = performance.now();

// Fungsi untuk mensimulasikan operasi yang memakan waktu lama
function heavyComputationWithoutTimeout() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    console.log("Sum without setTimeout:", sum);
}

// Jalankan operasi berat tanpa penundaan
heavyComputationWithoutTimeout();

// Selesai hitung waktu
const endTimeWithoutTimeout = performance.now();
console.log("Execution time without setTimeout: " + (endTimeWithoutTimeout - startTimeWithoutTimeout) + " milliseconds.");
