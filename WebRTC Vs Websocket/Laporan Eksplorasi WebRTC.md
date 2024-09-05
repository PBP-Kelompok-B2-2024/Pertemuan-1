# WebRTC Vs Websocket

**WebRTC (Web Real-Time Communication)** adalah teknologi yang memungkinkan aplikasi web dan perangkat untuk berkomunikasi langsung satu sama lain dalam bentuk media streaming (video, audio) dan pertukaran data dalam real-time. Hal ini dilakukan melalui browser tanpa memerlukan plugin atau software tambahan.

## 1. Definisi WebRTC
WebRTC adalah API berbasis JavaScript yang memungkinkan browser atau aplikasi web untuk melakukan komunikasi real-time dengan audio, video, dan transfer data tanpa memerlukan perangkat lunak tambahan. WebRTC menyediakan kemampuan untuk membuat koneksi peer-to-peer (P2P), yang memungkinkan transmisi data atau media secara langsung antara dua browser atau aplikasi tanpa melewati server.

## 2. Latar Belakang
Sebelum adanya WebRTC, pengembang web yang ingin mengimplementasikan komunikasi real-time, seperti panggilan video atau audio di browser, harus menggunakan plugin atau teknologi eksternal seperti Adobe Flash atau Silverlight. Pengguna juga perlu mengunduh perangkat lunak tambahan untuk berinteraksi secara real-time, yang seringkali menyebabkan masalah kompatibilitas, keamanan, dan pengalaman pengguna yang buruk.

Dengan kemajuan teknologi web, WebRTC dikembangkan oleh Google dan mulai diadopsi sebagai standar oleh W3C dan IETF. WebRTC diciptakan untuk mengatasi masalah interoperabilitas ini dengan menyediakan API terbuka yang memungkinkan pengembang membangun komunikasi real-time secara lebih mudah, efisien, dan aman langsung di browser.

## 3. Manfaat Penggunaan WebRTC
- **Tanpa Plugin:** WebRTC beroperasi langsung di browser tanpa memerlukan plugin tambahan, sehingga mengurangi risiko keamanan dari perangkat lunak pihak ketiga.
- **Komunikasi Peer-to-Peer:** WebRTC memungkinkan komunikasi langsung antara dua perangkat (P2P), yang meminimalkan latensi dan mempercepat pengiriman data.
- **Keamanan:** Data yang dikirimkan melalui WebRTC dilindungi oleh enkripsi secara default, memastikan komunikasi yang aman.
- **Real-Time:** Dengan WebRTC, pengguna bisa mengirim dan menerima media (audio, video) serta data lain secara langsung dan dalam waktu nyata.
- **Cross-Platform:** WebRTC didukung oleh banyak browser modern, baik di desktop maupun perangkat mobile, yang membuatnya dapat digunakan secara luas di berbagai perangkat dan platform.
  
## 4. Perbandingan Sebelum dan Sesudah Adanya WebRTC
- **Sebelum WebRTC:**
  - Penggunaan plugin seperti Flash atau Silverlight yang rentan terhadap masalah keamanan.
  - Implementasi komunikasi real-time cenderung kompleks dan membutuhkan infrastruktur tambahan seperti server media.
  - Pengalaman pengguna lebih buruk karena memerlukan instalasi plugin atau software tambahan.
  - Latensi lebih tinggi karena komunikasi biasanya harus melalui server perantara, bukan langsung antara pengguna.
  
- **Sesudah WebRTC:**
  - Pengguna tidak perlu lagi mengunduh atau menginstal perangkat lunak tambahan untuk melakukan panggilan video atau berbagi data.
  - Pengembang dapat mengimplementasikan komunikasi real-time secara lebih mudah dengan API standar yang didukung oleh semua browser modern.
  - Kecepatan dan latensi komunikasi meningkat karena menggunakan koneksi peer-to-peer langsung.
  - Keamanan lebih baik dengan dukungan enkripsi end-to-end secara default.


## 5. WebSocket VS WebRTC
WebSocket dan WebRTC adalah dua teknologi yang berbeda, meskipun keduanya berfungsi untuk komunikasi real-time. Berikut penjelasan mengenai perbedaan dan hubungan antara **WebSocket** dan **WebRTC**:

### A. **WebSocket:**
- **Definisi:** WebSocket adalah protokol komunikasi berbasis TCP yang memungkinkan koneksi dua arah (full-duplex) antara klien dan server. Koneksi WebSocket tetap terbuka, memungkinkan pertukaran data terus menerus dan real-time antara browser (klien) dan server.
- **Fungsi:** WebSocket digunakan untuk mengirim dan menerima data dalam bentuk pesan secara efisien dan real-time antara klien dan server. WebSocket ideal untuk aplikasi yang membutuhkan pembaruan data secara terus-menerus, seperti aplikasi chat, notifikasi, atau permainan online.
- **Komunikasi:** WebSocket adalah komunikasi klien-server (client-server). Artinya, data dikirim dari klien ke server, kemudian server dapat merespons balik.

### B. **WebRTC:**
- **Definisi:** WebRTC adalah teknologi peer-to-peer (P2P) yang memungkinkan komunikasi real-time langsung antara dua perangkat (browser) tanpa perlu melewati server (setelah koneksi awal).
- **Fungsi:** WebRTC digunakan untuk berbagi media (audio, video) dan data secara langsung antara pengguna dalam koneksi P2P. Ini lebih sering digunakan untuk komunikasi video/audio dan berbagi data seperti file dalam aplikasi seperti video conferencing atau game.
- **Komunikasi:** WebRTC berfokus pada koneksi peer-to-peer (P2P). Setelah koneksi diinisiasi melalui server signaling, media dan data mengalir langsung antara perangkat pengguna tanpa memerlukan server perantara untuk transportasi data.

### C. **Perbedaan Utama:**
- **Koneksi:** WebSocket menggunakan model client-server, di mana klien berkomunikasi dengan server yang mengelola komunikasi dan pengiriman data. Sementara WebRTC menggunakan model P2P setelah inisiasi koneksi, di mana dua perangkat dapat berkomunikasi langsung satu sama lain.
- **Use Case:** WebSocket lebih cocok untuk aplikasi seperti chat atau notifikasi di mana pesan sederhana perlu dikirim bolak-balik secara real-time. WebRTC lebih cocok untuk aplikasi yang melibatkan media real-time seperti panggilan video atau streaming audio.
- **Data yang Dikomunikasikan:** WebSocket mengirimkan data dalam bentuk pesan teks atau biner. WebRTC terutama digunakan untuk mengirimkan media (audio, video), meskipun juga bisa digunakan untuk transfer data melalui kanal data WebRTC.

### D. **Hubungan antara WebSocket dan WebRTC:**
Meskipun berbeda, WebSocket dan WebRTC dapat digunakan bersama dalam beberapa skenario. Contoh penggunaannya adalah dalam **signaling**.

- **Signaling (Pengaturan Koneksi):** WebRTC memerlukan mekanisme signaling untuk memulai koneksi P2P. Signaling melibatkan pertukaran informasi seperti alamat IP dan port yang diperlukan untuk mengatur komunikasi P2P. **WebSocket** bisa digunakan untuk signaling ini, karena WebSocket memungkinkan pertukaran data real-time antara klien dan server.
  
  Setelah signaling selesai, WebRTC akan membuat koneksi P2P, dan komunikasi audio, video, atau data akan terjadi secara langsung antara perangkat pengguna tanpa perlu server perantara. WebSocket bisa tetap digunakan untuk komunikasi non-media, seperti sinkronisasi state atau pesan real-time sederhana.

### E. **Kapan Menggunakan WebSocket vs. WebRTC:**
- **Gunakan WebSocket** jika Anda hanya membutuhkan komunikasi dua arah yang real-time antara klien dan server, seperti chat atau sistem notifikasi.
- **Gunakan WebRTC** jika Anda membutuhkan komunikasi langsung (P2P) antara pengguna, terutama untuk media seperti panggilan video, streaming audio, atau berbagi file besar tanpa perantara server.

### Kesimpulan:
WebSocket dan WebRTC memiliki tujuan yang berbeda tetapi bisa saling melengkapi dalam membangun aplikasi yang memerlukan komunikasi real-time. Jika Anda membutuhkan komunikasi real-time antara server dan klien (client-server), WebSocket adalah pilihan yang tepat. Namun, jika Anda memerlukan koneksi langsung antar pengguna (P2P) dengan audio/video atau berbagi data dalam real-time, WebRTC adalah solusi yang lebih cocok.

## Repository Github Untuk Project Berbasis WebRTC
**Web RTC Experiments Oleh Muaz Khan**

https://github.com/muaz-khan/WebRTC-Experiment/tree/master?tab=readme-ov-file

**WebRTC Video Conference Simple Peer Oleh Dirvann**

https://github.com/Dirvann/webrtc-video-conference-simple-peer