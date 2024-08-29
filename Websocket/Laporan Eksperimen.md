# Efisiensi Komunikasi Real-Time di Aplikasi Monitoring Produksi dengan Penerapan WebSocket

### Penanggung Jawab : Yahya Alfon Sinaga

### Link chatGPT : <https://chatgpt.com/share/b32c08d5-2bc3-401d-8b5b-5bd4f6e0e427>

## Deskripsi Eksperimen

Eksperimen ini bertujuan untuk menguji dan membandingkan efisiensi, latensi, dan kompleksitas antara metode polling HTTP tradisional dan WebSocket dalam konteks aplikasi monitoring produksi pabrik. Dengan eksperimen ini, diharapkan dapat ditemukan solusi yang lebih efisien dan responsif untuk menangani komunikasi real-time dalam aplikasi yang memerlukan pembaruan data segera, seperti dashboard produksi.

## Identifikasi Permasalahan

- **Konteks Permasalahan:** Dalam industri manufaktur, aplikasi monitoring produksi memerlukan pembaruan data secara real-time untuk menampilkan notifikasi atau peringatan jika terjadi masalah di jalur produksi. Pendekatan polling HTTP tradisional sering kali tidak efisien dan menyebabkan latensi yang tinggi.
- **Permasalahan:** Penggunaan polling HTTP menyebabkan peningkatan beban jaringan dan server serta latensi yang tinggi, yang dapat mengurangi responsivitas dan efisiensi sistem monitoring.
- **Solusi:** Implementasi WebSocket sebagai solusi komunikasi dua arah real-time untuk menggantikan polling HTTP, dengan tujuan mengurangi latensi, menghemat bandwidth, dan meningkatkan pengalaman pengguna.

## Metodologi Eksperimen

1. **Identifikasi Problem:** Mengidentifikasi kebutuhan aplikasi monitoring untuk pembaruan data real-time dan masalah yang ditimbulkan oleh polling HTTP.
2. **Implementasi Pendekatan Pertama (Polling HTTP):** Mengembangkan kode untuk melakukan polling ke server setiap beberapa detik guna memeriksa adanya data baru.
3. **Implementasi Pendekatan Kedua (WebSocket):** Mengembangkan kode untuk menggunakan WebSocket agar menerima data secara langsung dan real-time dari server.
4. **Pengujian:** Menjalankan kedua pendekatan dalam kondisi simulasi yang menyerupai skenario nyata di industri untuk membandingkan efisiensi, latensi, dan pengalaman pengguna.
5. **Analisis Hasil:** Menganalisis data yang diperoleh dari kedua pendekatan dan melakukan perbandingan terhadap beberapa aspek, termasuk efisiensi jaringan, latensi, dan kompleksitas kode.

## Hasil Eksperimen

- **Polling HTTP:** Menghasilkan penggunaan bandwidth yang tinggi dan latensi yang lebih besar, dengan kode yang relatif sederhana namun kurang efisien dalam komunikasi real-time.
- **WebSocket:** Menunjukkan peningkatan efisiensi jaringan dan pengurangan latensi secara signifikan, dengan peningkatan kompleksitas kode yang masih dapat dikelola. WebSocket memberikan pengalaman pengguna yang lebih responsif dan interaktif dalam aplikasi monitoring produksi.

## Kesimpulan

Eksperimen ini berhasil menunjukkan bahwa penerapan WebSocket pada aplikasi monitoring produksi pabrik lebih efisien dan responsif dibandingkan metode polling HTTP tradisional. WebSocket memungkinkan komunikasi real-time dengan latensi rendah dan penggunaan bandwidth yang lebih efisien, meskipun membutuhkan implementasi yang lebih kompleks. Hasil eksperimen ini sesuai dengan tujuan awal, yaitu menemukan solusi yang lebih baik untuk menangani komunikasi real-time dalam aplikasi industri, menjadikan WebSocket sebagai pilihan yang lebih tepat dalam skenario serupa.
