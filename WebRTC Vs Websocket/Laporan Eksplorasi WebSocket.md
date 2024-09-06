# WebSocket

**WebSocket** adalah protokol komunikasi yang memungkinkan interaksi dua arah (full-duplex) antara klien dan server melalui satu koneksi TCP yang tetap terbuka. Ini memungkinkan data untuk dikirim secara real-time dengan latensi rendah, tanpa harus membuka koneksi baru setiap kali data dikirim. WebSocket banyak digunakan dalam aplikasi yang membutuhkan komunikasi real-time seperti chat, permainan online, atau aplikasi keuangan.

## 1. Definisi WebSocket

WebSocket adalah protokol berbasis TCP yang menyediakan komunikasi dua arah antara klien (biasanya browser) dan server. Koneksi dimulai dengan handshake HTTP, yang kemudian di-upgrade menjadi koneksi WebSocket yang lebih efisien dan memungkinkan data dikirim dan diterima dalam bentuk pesan teks atau biner. Setelah koneksi dibuka, data dapat dikirim bolak-balik secara terus-menerus tanpa overhead HTTP tambahan.

## 2. Latar Belakang

Sebelum adanya WebSocket, aplikasi web yang memerlukan komunikasi real-time sering kali mengandalkan teknik seperti polling, long-polling, atau menggunakan plugin eksternal. Metode-metode ini kurang efisien karena mengakibatkan peningkatan latensi dan penggunaan bandwidth yang lebih tinggi, serta sering kali tidak memberikan pengalaman pengguna yang optimal.

WebSocket dikembangkan sebagai solusi untuk mengatasi masalah ini, menyediakan mekanisme komunikasi yang lebih efisien dan responsif antara klien dan server. WebSocket diadopsi sebagai standar oleh IETF (Internet Engineering Task Force) dalam RFC 6455 dan didukung oleh sebagian besar browser modern.

## 3. Manfaat Penggunaan WebSocket

- **Komunikasi Dua Arah (Full-Duplex):** WebSocket memungkinkan data dikirim dari klien ke server dan sebaliknya dalam waktu nyata tanpa harus membuka ulang koneksi. Hal ini sangat efisien untuk aplikasi yang membutuhkan komunikasi data terus-menerus.
- **Latensi Rendah:** Tidak seperti polling atau long-polling yang memerlukan interval untuk mengirimkan data, WebSocket memungkinkan pengiriman data instan begitu ada perubahan, mengurangi latensi.
- **Overhead Kecil:** Setelah handshake HTTP awal, WebSocket menghindari overhead tambahan yang biasanya ada di setiap request HTTP, membuatnya lebih ringan dan lebih cepat.
- **Real-Time:** WebSocket sangat cocok untuk aplikasi yang memerlukan data real-time, seperti permainan online, obrolan (chat), atau dashboard data.
- **Skalabilitas:** Karena efisiensi dalam komunikasi, WebSocket dapat mendukung lebih banyak koneksi dengan server secara bersamaan dibandingkan metode komunikasi konvensional.

## 4. Perbandingan Sebelum dan Sesudah Adanya WebSocket

- **Sebelum WebSocket:**
  - Menggunakan teknik seperti polling dan long-polling yang membutuhkan pengiriman permintaan HTTP secara berkala, menambah latensi dan overhead.
  - Aplikasi real-time sering kali bergantung pada plugin eksternal seperti Flash untuk komunikasi dua arah, yang rentan terhadap masalah keamanan.
  - Setiap kali data perlu dikirim atau diterima, klien harus membuat koneksi HTTP baru, yang menambah beban pada server dan jaringan.
  
- **Sesudah WebSocket:**
  - Komunikasi real-time dapat dilakukan dengan efisiensi yang lebih tinggi, tanpa perlu membuka koneksi baru untuk setiap pengiriman data.
  - Penggunaan protokol WebSocket menghilangkan kebutuhan akan plugin eksternal atau metode polling.
  - Pengalaman pengguna menjadi lebih responsif dengan latensi yang lebih rendah dan penghematan sumber daya jaringan.
  - WebSocket memungkinkan data dikirim secara real-time dalam berbagai bentuk, seperti teks, biner, atau bahkan streaming data.

## 5. Alternative Signaling WebSocket

Ada beberapa alternatif selain **WebSocket** untuk proses **signaling** dalam video conference yang menggunakan **WebRTC**. Signaling adalah komponen penting untuk pertukaran informasi antara klien yang ingin membangun koneksi peer-to-peer, dan ada beberapa teknologi lain yang dapat digunakan untuk tujuan ini selain WebSocket. Berikut adalah beberapa alternatif signaling untuk video conference:

### 1. **HTTP/HTTPS (Polling atau Long Polling)**

- **Polling** adalah metode di mana klien secara periodik mengirimkan permintaan HTTP ke server untuk memeriksa apakah ada pesan baru yang perlu diterima.
- **Long polling** adalah variasi dari polling di mana klien membuat permintaan HTTP dan server menahannya hingga ada data yang siap dikirim. Setelah server merespons, klien segera mengirim permintaan baru.

   **Kelebihan**:

- Mudah diterapkan di atas infrastruktur web tradisional.
- Kompatibel dengan banyak lingkungan karena berbasis HTTP.

   **Kekurangan**:

- Lebih lambat dan kurang efisien dibandingkan WebSocket karena ada latensi dalam menunggu permintaan dan respons.
- Membutuhkan lebih banyak overhead karena permintaan HTTP berulang.

### 2. **SSE (Server-Sent Events)**

- **SSE** adalah mekanisme komunikasi di mana server dapat mengirim data ke klien secara berkelanjutan melalui koneksi HTTP.
- Dalam **SSE**, klien membuka koneksi HTTP ke server, dan server terus-menerus mengirimkan pembaruan data ke klien tanpa klien perlu meminta data secara terus-menerus.

   **Kelebihan**:

- Protokol yang relatif sederhana untuk implementasi server-to-client.
- Cocok untuk skenario di mana server perlu mengirimkan data berkelanjutan kepada klien (mirip seperti notifikasi).

   **Kekurangan**:

- Hanya mendukung komunikasi satu arah (server ke klien), sehingga tidak cocok jika klien juga perlu mengirimkan data ke server, kecuali digabungkan dengan mekanisme lain seperti HTTP POST.
- Tidak secepat atau seefisien WebSocket dalam hal komunikasi dua arah.

### 3. **MQTT (Message Queuing Telemetry Transport)**

- **MQTT** adalah protokol pesan berbasis publish/subscribe yang dirancang untuk perangkat dengan sumber daya terbatas dan jaringan bandwidth rendah. Ini bisa digunakan sebagai alternatif signaling untuk WebRTC, terutama pada lingkungan Internet of Things (IoT).
- Dengan menggunakan **broker MQTT**, klien dapat mengirim dan menerima pesan signaling dengan cara publish/subscribe.

   **Kelebihan**:

- Ringan dan efisien, cocok untuk jaringan dengan bandwidth terbatas.
- Cocok untuk aplikasi yang membutuhkan komunikasi real-time tetapi dengan overhead yang sangat kecil.

   **Kekurangan**:

- Kurang populer dan lebih rumit dibanding WebSocket dalam konteks aplikasi web umum.
- Membutuhkan server broker MQTT terpisah untuk mengatur pesan publish/subscribe.

### 4. **Peer-to-Peer Data Channel (WebRTC Data Channels)**

- Dalam beberapa kasus, **WebRTC Data Channel** itu sendiri dapat digunakan untuk signaling setelah koneksi peer-to-peer awal dibuat. WebRTC Data Channel adalah jalur komunikasi data yang memungkinkan pengiriman pesan antara dua klien secara langsung setelah koneksi peer-to-peer sudah terbangun.

   **Kelebihan**:

- Menghindari server signaling untuk komunikasi data yang sangat cepat.
- Efisien dan dapat digunakan untuk komunikasi real-time dengan sedikit overhead.

   **Kekurangan**:

- Tetap memerlukan server signaling di awal untuk membangun koneksi awal peer-to-peer.
- Tidak cocok untuk skenario signaling awal, karena membutuhkan WebRTC terlebih dahulu untuk aktif.

### 5. **XMPP (Extensible Messaging and Presence Protocol)**

- **XMPP** adalah protokol pesan berbasis XML yang mendukung pengiriman pesan secara real-time. XMPP dapat digunakan sebagai protokol signaling untuk WebRTC karena mendukung pesan terstruktur dan komunikasi peer-to-peer.

   **Kelebihan**:

- Dapat menangani berbagai tipe pesan dan interaksi real-time.
- Banyak digunakan dalam aplikasi pesan instan seperti WhatsApp atau Google Talk.

   **Kekurangan**:

- Berbasis XML, yang bisa lebih berat dan lebih rumit dibandingkan WebSocket yang berbasis pesan biner atau teks.
- Kurang umum digunakan untuk signaling dalam aplikasi WebRTC dibandingkan WebSocket.

### 6. **gRPC (gRPC with HTTP/2)**

- **gRPC** adalah framework komunikasi yang dibangun di atas HTTP/2 dan memungkinkan klien dan server bertukar pesan dalam waktu nyata. Dengan gRPC, klien dapat mengirim dan menerima pesan signaling melalui koneksi yang tetap terbuka dan mendukung komunikasi full-duplex.

   **Kelebihan**:

- Mendukung komunikasi dua arah (full-duplex) dengan latensi rendah.
- Berbasis HTTP/2, yang berarti efisiensi lebih baik daripada HTTP/1.x.

   **Kekurangan**:

- Lebih kompleks untuk diimplementasikan dibandingkan WebSocket dalam aplikasi web.
- Lebih sering digunakan dalam komunikasi layanan antar server (microservices) daripada untuk aplikasi browser-klien.

### Kesimpulan

Meskipun **WebSocket** adalah salah satu metode signaling yang paling populer dan umum digunakan dalam video conference karena efisiensinya dalam komunikasi dua arah secara real-time, alternatif lain seperti **HTTP/HTTPS long polling**, **SSE**, **MQTT**, dan **XMPP** juga dapat digunakan tergantung pada kebutuhan aplikasi. Namun, alternatif ini sering kali lebih lambat atau lebih kompleks dibandingkan WebSocket, terutama ketika dibutuhkan signaling cepat untuk komunikasi WebRTC.

### Kesimpulan

WebSocket dan WebRTC memiliki tujuan yang berbeda tetapi bisa saling melengkapi dalam membangun aplikasi yang memerlukan komunikasi real-time. Jika Anda membutuhkan komunikasi real-time antara server dan klien (client-server), WebSocket adalah pilihan yang tepat. Namun, jika Anda memerlukan koneksi langsung antar pengguna (P2P) dengan audio/video atau berbagi data dalam real-time, WebRTC adalah solusi yang lebih cocok.
