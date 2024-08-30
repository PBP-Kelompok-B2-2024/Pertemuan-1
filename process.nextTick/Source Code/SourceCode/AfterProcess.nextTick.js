// Simulasi pemrosesan data besar dengan menggunakan process.nextTick
function processData(records) {
    console.log("Starting data processing...");

    function processNext(index) {
        if (index >= records.length) {
            console.log("Data processing completed.");
            return;
        }

        // Operasi pemrosesan berat (misalnya, validasi)
        for (let i = 0; i < 1e6; i++) {
            // Simulasi beban kerja
            Math.sqrt(i);
        }

        // Pindah ke record berikutnya pada tick berikutnya
        process.nextTick(() => processNext(index + 1));
    }

    processNext(0);
}

// Simulasi pengambilan data dari database
let data = Array(100).fill().map((_, i) => ({ id: i, value: `Record ${i}` }));

processData(data);

console.log("Program end.");
