# **Evaluasi Kinerja Event Handling dalam Pemrograman Synchronous vs Asynchronous pada Halaman Produk Website dengan Fitur Pemeriksaan Stok**
## Penanggung Jawab : Alya Naila Putri Ashadilla
## Link chatGPT : https://chatgpt.com/share/abe1eb16-3fbc-4f7d-bc1a-c44939832c2b
## **Deskripsi Eksperimen**
Eksperimen ini bertujuan untuk membandingkan kinerja antara pemrograman synchronous dan asynchronous dalam konteks fitur pemeriksaan ketersediaan stok pada halaman produk sebuah website. Tujuan eksperimen adalah untuk mengukur dan menganalisis waktu eksekusi dari kedua pendekatan dalam menangani simulasi proses lambat dan menentukan mana yang lebih efisien dalam konteks ini.

## **Identifikasi Problem**
- **Konteks Permasalahan:** Website e-commerce dengan halaman produk memerlukan fitur untuk memeriksa ketersediaan stok dari beberapa gudang secara bersamaan.
- **Permasalahan:** Bagaimana pemrograman synchronous dan asynchronous mempengaruhi waktu eksekusi dan responsivitas saat memeriksa ketersediaan stok, terutama ketika ada simulasi proses lambat.
- **Solusi:** Mengimplementasikan dan membandingkan dua pendekatan pemrograman (synchronous dan asynchronous) untuk menentukan metode yang lebih efisien dalam konteks fitur pemeriksaan stok.

## **Metodologi Eksperimen**
1. **Implementasi Synchronous:**
   - Menyusun fungsi pemeriksaan stok yang dilakukan secara berurutan.
   - Menggunakan simulasi proses lambat untuk masing-masing gudang.
   - Mengukur waktu eksekusi dengan mencatat waktu mulai dan selesai.

2. **Implementasi Asynchronous:**
   - Menyusun fungsi pemeriksaan stok yang dilakukan secara bersamaan menggunakan promises dan `setTimeout`.
   - Menggunakan simulasi proses lambat dengan delay yang ditentukan.
   - Mengukur waktu eksekusi setelah semua promises selesai.

3. **Pengukuran dan Analisis:**
   - Membandingkan waktu eksekusi antara kedua pendekatan.
   - Menganalisis hasil untuk menentukan apakah asynchronous memberikan keuntungan dalam hal waktu eksekusi dan responsivitas.

## **Hasil Eksperimen**
- **Synchronous Programming:** Hasil eksperimen menunjukkan bahwa metode synchronous, yang memproses tugas satu per satu secara berurutan, memiliki waktu eksekusi lebih cepat dibandingkan dengan asynchronous.
- **Asynchronous Programming:** Meskipun metode asynchronous dirancang untuk meningkatkan efisiensi dengan memproses tugas secara bersamaan, hasil eksperimen menunjukkan bahwa metode ini memerlukan waktu lebih lama. Hal ini mungkin disebabkan oleh overhead tambahan dari event loop dan promises.

## Kapan Sebaiknya Event Handling Digunakan?
Event handling sebaiknya digunakan dalam situasi berikut:
1. **Interaksi Pengguna di Aplikasi Web**: Ketika Anda perlu merespons aksi pengguna seperti klik tombol, pengisian formulir, atau perpindahan kursor, event handling sangat penting. Misalnya, saat pengguna mengklik tombol "Beli Sekarang" di situs e-commerce, event handling akan menangani proses pengiriman data ke server dan menampilkan konfirmasi kepada pengguna.

2. **Pemrosesan Asynchronous**: Ketika Anda ingin mengelola tugas-tugas yang tidak memerlukan blokir jalannya program, seperti pengambilan data dari server, pemrosesan file, atau operasi jaringan, event handling memungkinkan program untuk melanjutkan operasi lain tanpa harus menunggu tugas selesai. Misalnya, saat melakukan permintaan API untuk mendapatkan data produk di latar belakang sambil membiarkan pengguna terus menjelajahi situs.

3. **Mengelola Beberapa Sumber Input**: Dalam aplikasi real-time atau yang membutuhkan pengelolaan berbagai sumber input secara bersamaan, event handling dapat digunakan untuk merespons berbagai event seperti data yang masuk dari sensor, aliran data jaringan, atau update dari pengguna lain.

4. **Meningkatkan Responsivitas UI**: Dalam aplikasi dengan antarmuka pengguna yang kompleks, event handling memungkinkan pembaruan UI yang responsif dan dinamis berdasarkan aksi pengguna atau perubahan data. Ini sangat berguna dalam aplikasi yang membutuhkan tampilan data secara real-time atau interaktif.

5. **Membuat Aplikasi Modular dan Scalable**: Dengan menggunakan event handling, kode dapat diorganisir dengan baik dalam modul-modul yang terpisah, masing-masing menangani event tertentu. Ini membantu dalam pengembangan aplikasi yang lebih scalable dan mudah dipelihara.


## **Kesimpulan**
Eksperimen ini menunjukkan bahwa dalam konteks pemeriksaan ketersediaan stok dengan simulasi proses lambat, metode synchronous lebih cepat daripada metode asynchronous. Meskipun asynchronous programming memiliki potensi untuk meningkatkan efisiensi dalam situasi I/O-bound atau dengan banyak operasi bersamaan, overhead tambahan dari promises dan event loop dalam kasus ini menyebabkan metode synchronous lebih efisien. Eksperimen ini berhasil mencapai tujuannya dengan memberikan wawasan yang berguna mengenai kapan dan bagaimana masing-masing pendekatan pemrograman sebaiknya digunakan. Hasil ini menunjukkan bahwa pemilihan metode pemrograman harus mempertimbangkan jenis tugas dan overhead yang terkait.