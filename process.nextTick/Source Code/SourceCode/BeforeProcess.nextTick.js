// Simulasi pemrosesan data besar tanpa menggunakan process.nextTick
function processData(records) {
    console.log("Starting data processing...");

    records.forEach(record => {
        // Operasi pemrosesan berat (misalnya, validasi)
        for (let i = 0; i < 1e6; i++) {
            // Simulasi beban kerja
            Math.sqrt(i);
        }
    });

    console.log("Data processing completed.");
}

// Simulasi pengambilan data dari database
let data = Array(100).fill().map((_, i) => ({ id: i, value: `Record ${i}` }));

processData(data);

console.log("Program end.");
