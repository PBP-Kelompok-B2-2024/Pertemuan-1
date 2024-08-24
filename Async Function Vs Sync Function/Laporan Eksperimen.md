# Meningkatkan Efisiensi Pemrosesan File Log dalam Aplikasi Server Menggunakan Async Function
### Penanggung Jawab : Muhammad Zaky Aliyashfi
### Link chatGPT : https://chatgpt.com/share/06cf056a-607c-42f0-bb36-cac5bed8ac93
## Deskripsi Eksperimen
Eksperimen ini bertujuan untuk mengevaluasi peningkatan efisiensi dan responsivitas aplikasi server saat memproses file log menggunakan async function dibandingkan dengan metode sinkron. Dalam konteks aplikasi server yang harus menangani banyak operasi I/O secara bersamaan, eksperimen ini mencoba membuktikan bahwa penggunaan async function dapat mengurangi waktu eksekusi dan meningkatkan kemampuan server untuk tetap responsif.

## Identifikasi Permasalahan
- **Konteks Permasalahan**: Di industri, server aplikasi sering kali diharuskan untuk memproses banyak file log yang dihasilkan oleh berbagai layanan atau aplikasi. Pemrosesan ini perlu dilakukan dengan cepat dan efisien agar server tetap dapat menangani permintaan lain secara simultan.

- **Permasalahan**: Ketika file log diproses secara sinkron (synchronous), setiap operasi I/O seperti membaca file akan memblokir eksekusi program sampai operasi tersebut selesai. Hal ini menyebabkan server menjadi tidak responsif dan lambat, terutama saat volume file log besar atau berukuran besar.

- **Solusi**: Menggunakan async function untuk memproses file log secara paralel atau semi-paralel memungkinkan server tetap responsif. Pendekatan ini memungkinkan eksekusi operasi I/O secara non-blocking, yang berarti server dapat menangani permintaan lain sambil menunggu operasi I/O selesai.

## Metodologi Eksperimen
1. Persiapan File Log: Buat beberapa file log (log1.txt, log2.txt, log3.txt) di direktori yang sama dengan kode eksperimen.
2. Implementasi Kode Sinkron: Menulis kode untuk memproses file log secara sinkron menggunakan fs.readFileSync di Node.js.
3. Implementasi Kode Asinkron: Menulis kode untuk memproses file log secara asinkron menggunakan async function dengan await dan Promise.all.
4. Pelaksanaan Eksperimen: Jalankan kedua versi kode (sinkron dan asinkron) secara terpisah di Node.js.
5. Pengukuran Waktu dan Responsivitas: Mengukur waktu eksekusi untuk memproses file log dan mengamati responsivitas server selama proses berlangsung untuk setiap metode.
6. Analisis Hasil: Membandingkan waktu eksekusi dan responsivitas antara metode sinkron dan asinkron.

## Hasil Eksperimen
- **Kode Sinkron**: Meskipun pemrosesan dilakukan secara sinkron, waktu eksekusi totalnya sedikit lebih cepat daripada kode asinkron dalam beberapa kasus tertentu (misalnya, perbedaan 2 ms). Hal ini karena kode sinkron tidak memiliki overhead tambahan dari mekanisme async dan event loop. Semua operasi dijalankan secara berurutan, yang dalam konteks sederhana seperti membaca beberapa file kecil, dapat lebih cepat.

- **Kode Asinkron**: Kode asinkron menunjukkan bahwa meskipun waktu eksekusi total sedikit lebih lambat daripada kode sinkron dalam pengujian ini, manfaatnya terlihat dari perspektif responsivitas dan kemampuan untuk melakukan tugas lain secara bersamaan. Ketika server memproses file log secara asinkron, server tetap dapat merespons permintaan lain atau melakukan tugas lain tanpa menunggu operasi I/O selesai, yang meningkatkan efisiensi penggunaan sumber daya dan meningkatkan skalabilitas aplikasi.

## Perbandingan
Penggunaan async function di JavaScript memberikan keuntungan utama dalam hal responsivitas dan non-blocking I/O, yang sangat penting dalam aplikasi server atau aplikasi yang memerlukan skalabilitas tinggi.

1. **Responsivitas**: Kode sinkron memblokir thread utama selama operasi I/O berlangsung. Ini berarti aplikasi tidak dapat melakukan tugas lain sampai operasi selesai. Dalam kode asinkron, operasi I/O tidak memblokir eksekusi lainnya. Aplikasi dapat terus berjalan dan merespons permintaan pengguna lain, yang membuat aplikasi lebih responsif dan memberikan pengalaman pengguna yang lebih baik.

2. **Skalabilitas**: Dalam aplikasi server, kemampuan untuk menangani banyak koneksi atau permintaan secara bersamaan sangat penting. Dengan async function, server dapat memulai operasi I/O, seperti membaca file atau mengakses database, dan sementara menunggu hasilnya, server dapat memproses permintaan lain. Ini meningkatkan kemampuan aplikasi untuk menangani lebih banyak pengguna atau permintaan dalam waktu yang sama, membuatnya lebih skalabel.

3. **Efisiensi Penggunaan Sumber Daya**: Async function memungkinkan aplikasi untuk lebih efisien menggunakan sumber daya sistem. Misalnya, sambil menunggu operasi I/O, CPU dapat digunakan untuk tugas lain. Dalam pendekatan sinkron, CPU bisa tidak aktif atau idle sementara menunggu I/O selesai, yang tidak efisien.

4. **Pengalaman Pengguna yang Lebih Baik**: Dalam aplikasi klien (seperti aplikasi web atau mobile), async function memungkinkan antarmuka pengguna tetap responsif selama operasi latar belakang berlangsung. Ini berarti pengguna tidak mengalami lag atau freeze dalam aplikasi, yang meningkatkan kepuasan pengguna.

5. **Kompleksitas Kode**: Meskipun async function menambahkan sedikit kompleksitas karena pengelolaan promise dan async/await, manfaat dalam hal kemampuan pemeliharaan, skalabilitas, dan responsivitas sangat berharga, terutama untuk aplikasi skala besar dan produksi.

## Kesimpulan
Eksperimen ini menunjukkan bahwa meskipun kode sinkron mungkin lebih cepat dalam waktu eksekusi untuk tugas yang sangat sederhana, penggunaan async function memberikan manfaat signifikan dalam hal responsivitas, skalabilitas, dan efisiensi penggunaan sumber daya. Oleh karena itu, untuk aplikasi server yang memerlukan penanganan banyak operasi I/O secara bersamaan atau aplikasi yang harus tetap responsif kepada pengguna, penggunaan async function sesuai dan bermanfaat.