# **Meningkatkan performa dan responsivitas aplikasi menggunakan metode Non-Blocking***
## Penanggung Jawab : Muhammad Hasbi Asshidiqi
## LinkChatGPT      : https://chatgpt.com/c/6d9fd473-8aec-44a2-8998-23864e04f05d

## 1. Identifikasi Problem:
Problem Utama: Dalam aplikasi yang memerlukan akses ke sumber daya yang lambat (seperti file, jaringan, atau database), operasi blocking dapat menyebabkan penurunan performa karena program menunggu operasi selesai sebelum melanjutkan. Hal ini membuat aplikasi menjadi tidak efisien, terutama jika banyak tugas harus diselesaikan secara paralel.

## 2. Deskripsi Problem:
Blocking I/O: Ketika membaca file secara sinkron (blocking), program menunggu hingga operasi selesai sebelum melanjutkan. Jika ada lima file untuk dibaca, maka total waktu eksekusi bisa sangat tinggi karena program tidak dapat melakukan operasi lain sementara menunggu.

Non-Blocking I/O: Ketika membaca file secara asinkron (non-blocking), program memulai operasi pembacaan file dan segera melanjutkan ke operasi berikutnya tanpa menunggu hasil. Ini memungkinkan beberapa operasi pembacaan berjalan secara paralel, mengurangi waktu total yang dibutuhkan.

## 3. Metodologi Experiment:
Membuat beberapa file teks yang akan digunakan dalam eksperimen untuk dibaca oleh program.
Menjalankan kedua versi program (blocking dan non-blocking) secara terpisah untuk membaca file-file tersebut.
Mengukur waktu eksekusi total untuk setiap versi program menggunakan fungsi waktu (time.time()).
Membandingkan waktu eksekusi antara kedua versi untuk melihat dampak dari penggunaan blocking vs non-blocking I/O.

## 4. Pelaksanaan Experiment:
Persiapan File: Siapkan lima file teks dengan nama file_0.txt, file_1.txt, ..., file_4.txt, masing-masing berisi beberapa baris teks.
Menjalankan Program Blocking:
Jalankan skrip Python untuk versi blocking.
Catat waktu yang dibutuhkan untuk menyelesaikan operasi pembacaan semua file.
Menjalankan Program Non-Blocking:
Jalankan skrip Python untuk versi non-blocking menggunakan asyncio.
Catat waktu yang dibutuhkan untuk menyelesaikan operasi pembacaan semua file.
Perbandingan Waktu Eksekusi:
Bandingkan waktu eksekusi antara versi blocking dan non-blocking.

## 5. Analisis Hasil Experiment:
Blocking I/O: Program blocking akan memiliki waktu eksekusi yang lebih tinggi karena menunggu setiap operasi pembacaan file selesai sebelum melanjutkan ke operasi berikutnya. Waktu eksekusi total adalah jumlah waktu yang diambil oleh setiap operasi pembacaan file.

Non-Blocking I/O: Program non-blocking akan memiliki waktu eksekusi yang lebih rendah karena semua operasi pembacaan file dimulai hampir bersamaan, dan program tidak perlu menunggu setiap operasi selesai sebelum melanjutkan. Waktu eksekusi total akan lebih dekat ke waktu yang dibutuhkan oleh satu operasi pembacaan file (tergantung pada bagaimana operasi pembacaan dilakukan secara paralel).
