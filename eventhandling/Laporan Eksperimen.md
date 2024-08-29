# **Perbandingan Kinerja antara Pemrograman Synchronous dan Asynchronous dalam Konteks Event Handling**
### Penanggung Jawab : Alya Naila Putri Ashadilla
### Link chatGPT : https://chatgpt.com/share/abe1eb16-3fbc-4f7d-bc1a-c44939832c2b
## **Deskripsi Eksperimen**
Eksperimen ini bertujuan untuk membandingkan kinerja antara pemrograman synchronous dan asynchronous dalam konteks pengolahan stok barang di beberapa gudang. Fokus utama dari eksperimen ini adalah untuk mengevaluasi waktu eksekusi kedua pendekatan pemrograman dan melihat apakah asynchronous programming memberikan keuntungan dibandingkan dengan synchronous programming dalam kasus yang melibatkan simulasi proses lambat.

## **Identifikasi Problem**
- **Konteks Permasalahan:** Dalam banyak aplikasi industri, pemrograman asynchronous sering dipilih untuk mengelola tugas-tugas I/O-bound secara lebih efisien. Namun, ada situasi di mana synchronous programming mungkin lebih efisien, terutama untuk tugas-tugas CPU-bound atau proses cepat.
- **Permasalahan:** Perbedaan kinerja antara synchronous dan asynchronous programming dalam tugas yang melibatkan simulasi proses lambat. Kinerja yang diukur dengan menggunakan simulasi delay untuk menilai apakah asynchronous programming benar-benar memberikan keuntungan dalam konteks ini.
- **Solusi:** Untuk mengidentifikasi apakah asynchronous programming lebih cepat atau lambat dibandingkan dengan synchronous programming, dilakukan eksperimen dengan membandingkan waktu eksekusi dari kedua pendekatan untuk tugas yang sama.

## **Metodologi Eksperimen**
1. **Implementasi Kode:**
   - **Synchronous Programming:** Implementasi fungsi yang memeriksa ketersediaan stok secara berurutan, dengan simulasi proses lambat menggunakan loop.
   - **Asynchronous Programming:** Implementasi fungsi yang memeriksa ketersediaan stok secara bersamaan menggunakan promises dan `setTimeout` untuk mensimulasikan delay.

2. **Pengukuran Waktu:**
   - **Synchronous:** Mengukur waktu eksekusi dengan `performance.now()` dari awal hingga akhir proses.
   - **Asynchronous:** Mengukur waktu eksekusi setelah semua promises selesai dengan `performance.now()`.

3. **Analisis Data:**
   - Membandingkan waktu eksekusi antara synchronous dan asynchronous programming untuk mengevaluasi kinerja relatif kedua pendekatan.

## **Hasil Eksperimen**
- **Synchronous Programming:** Waktu eksekusi untuk tugas-tugas yang dilakukan secara berurutan. Hasil menunjukkan bahwa synchronous programming lebih cepat dalam konteks eksperimen ini.
- **Asynchronous Programming:** Waktu eksekusi untuk tugas-tugas yang dilakukan secara bersamaan dengan promises dan `setTimeout`. Hasil menunjukkan bahwa asynchronous programming memerlukan waktu lebih lama dibandingkan dengan synchronous.

## **Kesimpulan**
Eksperimen ini menunjukkan bahwa dalam kasus yang melibatkan simulasi proses lambat, synchronous programming dapat memberikan waktu eksekusi yang lebih cepat dibandingkan dengan asynchronous programming. Ini menggarisbawahi bahwa asynchronous programming memiliki overhead tambahan dari event loop dan promises yang mungkin tidak sebanding dengan keuntungan untuk tugas-tugas yang cepat atau CPU-bound. Eksperimen ini sesuai dengan tujuan untuk mengevaluasi kinerja kedua pendekatan pemrograman dan memberikan wawasan tentang kapan sebaiknya menggunakan synchronous atau asynchronous programming tergantung pada jenis tugas dan konteks aplikasinya.
