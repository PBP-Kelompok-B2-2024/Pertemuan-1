# **Membatalkan Permintaan HTTP yang Tidak Diperlukan untuk Meningkatkan Responsivitas Aplikasi***
### Tanggal Eksperimen : 30 Agustus 2024
### Penanggung Jawab : Muhammad Samudera Bagja
### LinkChatGPT      : https://chatgpt.com/c/674c8534-a64c-453e-b33e-6d5bd9ae5943

### 1. Identifikasi Problem
**Problem Identifikasi** adalah situasi di mana aplikasi web melakukan permintaan HTTP (seperti `fetch`) ke API eksternal. Jika pengguna melakukan tindakan yang menyebabkan permintaan menjadi tidak relevan (misalnya, berpindah halaman), permintaan tersebut tetap berjalan hingga selesai, meskipun tidak diperlukan. Hal ini dapat mengakibatkan penggunaan bandwidth dan resource yang tidak efisien serta menurunkan responsivitas aplikasi.

### 2. Deskripsi Problem
**Deskripsi Problem** adalah masalah yang muncul ketika permintaan HTTP berlangsung lebih lama dari yang diinginkan, dan aplikasi tidak memiliki mekanisme untuk membatalkan permintaan yang tidak lagi relevan. Ini menyebabkan aplikasi tetap menunggu hingga permintaan selesai, yang dapat membebani resource dan mengakibatkan pengalaman pengguna yang kurang optimal. Penggunaan resource yang tidak perlu dan penurunan performa aplikasi menjadi masalah yang perlu diatasi.

### 3. Metodologi Experiment
**Metodologi Experiment** melibatkan dua pendekatan berbeda dalam menangani permintaan HTTP:
1. **Sebelum AbortController**: Menggunakan permintaan HTTP biasa tanpa mekanisme pembatalan. Permintaan akan terus berlangsung hingga selesai, meskipun mungkin sudah tidak relevan lagi.
2. **Setelah AbortController**: Menggunakan `AbortController` untuk membatalkan permintaan HTTP yang tidak lagi diperlukan. `AbortController` memungkinkan pembatalan permintaan secara eksplisit dan memberikan kontrol lebih besar atas operasi asynchronous.

### 4. Pelaksanaan Experiment
**Pelaksanaan Experiment** dilakukan dengan membuat dua skrip Node.js:
1. **Sebelum AbortController**:
   - Skrip ini melakukan permintaan HTTP menggunakan `fetch` tanpa pembatalan. Permintaan dibiarkan berjalan hingga selesai.
2. **Setelah AbortController**:
   - Skrip ini menggunakan `AbortController` untuk membatalkan permintaan HTTP setelah 1 detik. Permintaan yang dibatalkan memberikan umpan balik bahwa pembatalan telah terjadi.

Kedua skrip dijalankan di lingkungan Node.js dengan `node-fetch` diinstal untuk mendemonstrasikan perbedaan.

### 5. Analisis Hasil Experiment
**Analisis Hasil Experiment** menunjukkan perbedaan signifikan antara kedua pendekatan:
- **Sebelum AbortController**: Permintaan HTTP berjalan hingga selesai tanpa memperhatikan relevansi permintaan, mengakibatkan penggunaan resource yang tidak perlu dan potensi penurunan performa aplikasi.
- **Setelah AbortController**: Dengan menggunakan `AbortController`, permintaan HTTP dapat dibatalkan sebelum selesai jika sudah tidak relevan. Ini mengurangi penggunaan bandwidth dan resource, serta meningkatkan responsivitas aplikasi dengan menghindari penundaan yang tidak perlu. Penanganan kesalahan juga menjadi lebih spesifik dan terkelola dengan baik.

Hasil eksperimen menunjukkan bahwa penerapan **AbortController** memberikan manfaat dalam hal efisiensi resource dan responsivitas aplikasi, serta meningkatkan pengalaman pengguna dengan mengelola permintaan asynchronous dengan lebih baik.