async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.weather.com/v3/weather/forecast?city=${city}&key=API_KEY`);
        
        // Jika respons tidak sukses (misalnya 404 atau 500), kita bisa menangani kesalahan
        if (!response.ok) {
            throw new Error(`Gagal mengambil data cuaca: ${response.statusText}`);
        }

        const weatherData = await response.json();
        
        // Menampilkan data cuaca kepada pengguna
        console.log(`Cuaca di ${city}: ${weatherData.temperature} derajat`);

    } catch (error) {
        // Menangani error, misalnya memberikan pesan kepada pengguna atau mencoba ulang
        console.error("Terjadi kesalahan:", error.message);
        console.log("Mohon coba beberapa saat lagi.");
    }
}

// Memanggil fungsi untuk mengambil data cuaca
const city = "Jakarta";
fetchWeatherData(city);

// Output: Jika ada kesalahan, program tetap berfungsi dan memberikan informasi kepada pengguna
