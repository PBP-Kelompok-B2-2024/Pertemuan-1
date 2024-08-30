# Penerapan try/catch dalam Penanganan Kesalahan pada Aplikasi JavaScript untuk Meningkatkan Ketangguhan dan Pemeliharaan Kode
### Tanggal Eksperimen : 29 Agustus 2024
### Penanggung Jawab : Adrian Pratama Sasmita

### Link chatGPT : <https://chatgpt.com/share/9509564a-66c2-40fc-9c1a-9c3540e2258e>

## Deskripsi Eksperimen

Tujuan dari eksperimen ini adalah untuk mengevaluasi efektivitas penggunaan try/catch dalam menangani kesalahan pada aplikasi JavaScript, khususnya dalam konteks industri yang melibatkan interaksi dengan sumber daya eksternal seperti API. Eksperimen ini bertujuan untuk membandingkan kinerja, ketangguhan, kompleksitas, dan pengalaman pengguna antara kode yang tidak menggunakan try/catch dengan kode yang menggunakan try/catch.

## Identifikasi Permasalahan

- **Konteks Permasalahan:** Pada aplikasi industri yang melibatkan komunikasi dengan layanan pihak ketiga, seperti API, sering terjadi kesalahan tak terduga seperti kegagalan jaringan atau server yang tidak merespons.
- **Permasalahan:** Konteks Permasalahan diatas dapat menyebabkan aplikasi berhenti mendadak, memberikan pengalaman pengguna yang buruk, dan sulit dipelihara.
- **Solusi:** Solusinya adalah dengan menggunakan try/catch untuk menangani kesalahan secara lebih baik, memastikan aplikasi tetap berjalan meskipun terjadi kesalahan, dan memberikan pesan kesalahan yang informatif kepada pengguna.

## Metodologi Eksperimen

1. **Menulis Kode Tanpa try/catch:** Kode ditulis untuk mengambil data dari API eksternal tanpa menggunakan try/catch. Kode ini dibiarkan rentan terhadap kesalahan.
2. **Menulis Kode Dengan try/catch:** Kode yang sama kemudian diperbaiki dengan menambahkan blok try/catch untuk menangani potensi kesalahan.
3. **Membandingkan Hasil:** Kedua versi kode diuji dalam skenario yang sama untuk membandingkan ketangguhan, kompleksitas, dan pengalaman pengguna.
4. **Analisis:** Hasil dari kedua pendekatan tersebut dianalisis untuk menilai perbedaan yang signifikan.

## Hasil Eksperimen

- **Tanpa try/catch:** Kode lebih sederhana, tetapi rentan terhadap kegagalan yang tidak terduga. Ketika terjadi kesalahan, program langsung berhenti dan memberikan pengalaman pengguna yang buruk.
- **Dengan try/catch:** Kode menjadi lebih terstruktur dan kompleks, tetapi jauh lebih tangguh dan dapat menangani kesalahan dengan baik. Pengguna mendapatkan pesan kesalahan yang lebih informatif, dan aplikasi tetap berjalan meskipun terjadi masalah.
- **Perbandingan:** Kode dengan try/catch menunjukkan peningkatan signifikan dalam hal ketangguhan program dan pengalaman pengguna. Pemeliharaan kode juga menjadi lebih mudah karena penanganan kesalahan yang konsisten dan terpusat.

## Kesimpulan

Eksperimen ini menunjukkan bahwa penggunaan try/catch dalam aplikasi JavaScript memberikan banyak manfaat dalam hal ketangguhan, pemeliharaan, dan pengalaman pengguna. Hasil eksperimen ini sesuai dengan tujuan yang telah ditetapkan, yaitu mengevaluasi efektivitas try/catch dalam menangani kesalahan. Implementasi try/catch terbukti mampu menjaga aplikasi tetap berjalan meskipun terjadi kesalahan, yang sangat penting dalam konteks industri di mana ketangguhan aplikasi menjadi prioritas utama.
