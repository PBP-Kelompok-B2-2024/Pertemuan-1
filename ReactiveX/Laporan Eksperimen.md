# Peningkatan Pengelolaan Data Asinkron dalam Aplikasi dengan Menggunakan ReactiveX di Bahasa Pemrograman Dart
### Tanggal Eksperimen : 26 Agustus 2024
### Penanggung Jawab : Yahya Alfon Sinaga

### Link chatGPT : <https://chatgpt.com/share/828f4403-d203-4b4e-91a7-10cf3495fde7>

## Deskripsi Eksperimen

Tujuan dari eksperimen ini adalah untuk mengevaluasi bagaimana penerapan ReactiveX, khususnya dengan menggunakan pustaka `rxdart` di bahasa pemrograman Dart, dapat meningkatkan keterbacaan, modularitas, komposabilitas, dan pengelolaan kesalahan dalam pengembangan aplikasi yang kompleks. Eksperimen ini juga bertujuan untuk membandingkan efektivitas pendekatan tradisional terhadap pendekatan ReactiveX dalam menangani operasi asinkron, terutama dalam konteks penggabungan data dari beberapa sumber API.

## Identifikasi Permasalahan

- **Konteks Permasalahan:** Dalam pengembangan aplikasi modern, seperti e-commerce, seringkali diperlukan pengambilan data dari beberapa API yang berbeda secara asinkron. Pengelolaan data yang diambil dari berbagai sumber ini sering menjadi tantangan, terutama dalam hal menjaga keterbacaan kode, komposabilitas, dan pengelolaan kesalahan.
  
- **Permasalahan:** Pendekatan tradisional menggunakan `Future` dan `await` sering kali menghasilkan kode yang sulit dibaca, kurang modular, dan sulit di-maintain, terutama ketika operasi asinkron harus digabungkan dan dikelola dengan baik. Masalah ini dapat menyebabkan peningkatan risiko kesalahan dan penurunan performa aplikasi.

- **Solusi:** Menerapkan ReactiveX dengan pustaka `rxdart` untuk menangani aliran data secara reaktif, memungkinkan pengelolaan operasi asinkron yang lebih efisien, modular, dan terstruktur.

## Metodologi Eksperimen

1. **Identifikasi Problem:** Mengidentifikasi permasalahan dalam pengelolaan data asinkron pada aplikasi yang memerlukan pengambilan data dari beberapa API.
2. **Pendekatan Tradisional:** Mengimplementasikan kode yang menangani pengambilan dan penggabungan data dari dua API menggunakan pendekatan tradisional tanpa ReactiveX.
3. **Pendekatan ReactiveX:** Mengimplementasikan kode yang sama tetapi dengan menggunakan ReactiveX dan pustaka `rxdart`.
4. **Pengujian:** Membandingkan hasil dari kedua pendekatan, mencatat perbedaan dalam keterbacaan kode, modularitas, komposabilitas, dan pengelolaan kesalahan.
5. **Analisis:** Menganalisis perbedaan antara kedua pendekatan dan menentukan manfaat serta kelemahan masing-masing.

## Hasil Eksperimen

- **Pendekatan Tradisional:** Kode yang menggunakan `Future` dan `await` berhasil mengambil dan menggabungkan data dari dua API, namun kode menjadi panjang, sulit dibaca, dan kurang modular. Pengelolaan kesalahan juga kurang terstruktur karena hanya menggunakan `try-catch` secara keseluruhan.
- **Pendekatan ReactiveX:** Dengan penerapan ReactiveX, kode menjadi lebih pendek, lebih modular, dan lebih mudah dibaca. Komposabilitas meningkat karena penggunaan operator seperti `flatMap` dan `map`, yang mempermudah penggabungan aliran data. Pengelolaan kesalahan lebih terstruktur dan terisolasi dalam setiap aliran data.
- **Perbandingan:** Pendekatan ReactiveX menunjukkan peningkatan signifikan dalam hal keterbacaan, modularitas, komposabilitas, dan pengelolaan kesalahan dibandingkan dengan pendekatan tradisional.

## Kesimpulan

Eksperimen ini menunjukkan bahwa penerapan ReactiveX dengan pustaka `rxdart` pada bahasa pemrograman Dart berhasil meningkatkan efektivitas dalam menangani operasi asinkron yang kompleks, terutama dalam hal keterbacaan, modularitas, dan pengelolaan kesalahan. Output dari eksperimen ini sesuai dengan tujuan awal, yaitu untuk membandingkan dan mengevaluasi pendekatan tradisional dengan pendekatan ReactiveX. Kesimpulan utama adalah bahwa ReactiveX merupakan solusi yang lebih baik untuk pengembangan aplikasi yang kompleks dan membutuhkan penanganan data asinkron secara efisien dan terstruktur.
