# **Optimasi Pengambilan dan Pemrosesan Data Produk Menggunakan Promise dalam JavaScript***
## Penanggung Jawab : Alya Naila Putri Ashadilla
## Link chatGPT : https://chatgpt.com/share/53fcf0b0-cc90-4f56-999e-07f742bc0fc7
## **Deskripsi Eksperimen**
Tujuan dari eksperimen ini adalah untuk mengoptimalkan proses pengambilan dan pemrosesan data produk pada aplikasi web dengan menggunakan promise dalam JavaScript. Eksperimen ini dilakukan untuk membandingkan efisiensi, keterbacaan kode, dan kemampuan penanganan kesalahan antara penggunaan callback tradisional dan promise dalam mengelola operasi asinkron.

## **Identifikasi Problem**
- **Konteks Permasalahan**: Dalam pengembangan aplikasi web, terutama yang memerlukan pengambilan dan pemrosesan data dari server, sering kali ditemukan masalah dalam mengelola operasi asinkron. Ketika menggunakan callback secara berulang, kode menjadi sulit dibaca, dipelihara, dan rentan terhadap kesalahan.
- **Permasalahan**: Penggunaan callback untuk menangani operasi asinkron menyebabkan "callback hell," di mana struktur kode bersarang membuatnya sulit diikuti dan dikelola. Selain itu, penanganan kesalahan tersebar di berbagai titik, yang menyulitkan debugging.
- **Solusi**: Mengimplementasikan promise dalam JavaScript sebagai solusi untuk mengatasi masalah keterbacaan kode, meningkatkan kemampuan penanganan kesalahan, dan memungkinkan pengelolaan operasi asinkron yang lebih baik, termasuk eksekusi paralel.

## **Metodologi Eksperimen**
1. **Implementasi Kode Awal**: Menulis fungsi untuk mengakses dan memproses data produk menggunakan callback. Menangani operasi asinkron dengan callback yang bersarang.
2. **Implementasi Kode dengan Promise**: Menulis ulang fungsi yang sama menggunakan promise. Menerapkan chaining `.then()` untuk mengelola alur kerja dan `.catch()` untuk penanganan kesalahan.
3. **Pengujian**: Menjalankan kedua versi kode dan membandingkan hasil dari segi keterbacaan, pemeliharaan, penanganan kesalahan, dan eksekusi paralel.
4. **Analisis**: Membandingkan performa kedua pendekatan dalam skenario pengembangan aplikasi nyata, terutama dalam hal efisiensi dan efikasi.

## **Hasil Eksperimen**
Eksperimen menunjukkan bahwa penggunaan promise dalam JavaScript memberikan beberapa keunggulan dibandingkan dengan callback:
- **Keterbacaan dan Pemeliharaan Kode**: Kode dengan promise lebih bersih, datar, dan mudah diikuti, sehingga memudahkan pengembangan dan pemeliharaan aplikasi.
- **Penanganan Kesalahan**: Promise memungkinkan penanganan kesalahan secara terpusat dengan `.catch()`, mengurangi kompleksitas dalam menangani error.
- **Eksekusi Paralel**: Promise mendukung eksekusi paralel dengan `Promise.all()`, memungkinkan operasi asinkron berjalan bersamaan, yang dapat meningkatkan efisiensi waktu.
- **Performa**: Meskipun ada sedikit overhead dalam menggunakan promise, efisiensi pengelolaan operasi asinkron dan kemudahan pemeliharaan kode menjadikannya lebih unggul dalam aplikasi web modern.

## **Kesimpulan**
Eksperimen ini berhasil mencapai tujuannya untuk menunjukkan bahwa penerapan promise dalam JavaScript meningkatkan keterbacaan, pemeliharaan, dan penanganan kesalahan dalam pengelolaan operasi asinkron. Penggunaan promise juga mempermudah eksekusi paralel, yang merupakan keuntungan penting dalam aplikasi web. Berdasarkan hasil ini, penggunaan promise disarankan dalam pengembangan aplikasi web yang memerlukan pengelolaan operasi asinkron yang efisien dan terstruktur. Output dari eksperimen ini sesuai dengan tujuan yang diharapkan, yaitu meningkatkan efisiensi dan kualitas kode dalam aplikasi yang menggunakan operasi asinkron.