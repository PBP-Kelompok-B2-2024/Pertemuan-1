# **Perbandingan Kinerja antara Pemrograman Synchronous dan Asynchronous dalam Konteks Event Handling**
### Penanggung Jawab : Alya Naila Putri Ashadilla
### Link chatGPT : https://chatgpt.com/share/abe1eb16-3fbc-4f7d-bc1a-c44939832c2b
### **Judul Problem**
**Perbandingan Kinerja Pemrograman Synchronous dan Asynchronous dalam Menangani Event Handling pada Fitur Pemeriksaan Ketersediaan Stok di Berbagai Gudang**

### **Deskripsi Eksperimen**
Eksperimen ini bertujuan untuk membandingkan kinerja antara pemrograman synchronous dan asynchronous dalam konteks event handling pada fitur aplikasi yang memeriksa ketersediaan stok produk di berbagai gudang. Tujuannya adalah untuk menentukan metode mana yang lebih efisien dalam menyelesaikan tugas-tugas pemrosesan stok ketika pengguna memasukkan jumlah produk yang ingin dibeli.

### **Identifikasi Problem**
**Konteks Permasalahan:**
Dalam aplikasi e-commerce, pengguna dapat memasukkan jumlah produk yang ingin dibeli, dan sistem perlu memeriksa ketersediaan stok di berbagai gudang secara real-time untuk memastikan produk yang dipesan tersedia.

**Permasalahan:**
Terdapat kebutuhan untuk menentukan apakah pemrograman synchronous atau asynchronous lebih efisien untuk memproses informasi ketersediaan stok, terutama ketika menangani operasi yang memerlukan waktu atau delay.

**Solusi:**
Menerapkan dua pendekatan pemrograman—synchronous dan asynchronous—untuk memeriksa ketersediaan stok dan mengukur waktu eksekusi dari masing-masing pendekatan untuk menentukan metode yang paling efisien.

### **Metodologi Eksperimen**
1. **Persiapan Kode:**
   - Implementasikan fungsi pemeriksaan stok menggunakan pemrograman synchronous yang memproses setiap gudang secara berurutan.
   - Implementasikan fungsi pemeriksaan stok menggunakan pemrograman asynchronous dengan promises dan `setTimeout` untuk mensimulasikan delay.

2. **Pengukuran Waktu:**
   - Untuk synchronous, ukur waktu eksekusi dengan mencatat waktu mulai dan selesai.
   - Untuk asynchronous, ukur waktu eksekusi setelah semua promises selesai dan hitung waktu totalnya.

3. **Uji Coba dan Observasi:**
   - Jalankan kedua pendekatan dengan simulasi proses lambat dan amati waktu eksekusi masing-masing.
   - Bandingkan hasil waktu eksekusi antara synchronous dan asynchronous.

### **Hasil Eksperimen**
- **Synchronous Programming:** Memproses ketersediaan stok secara berurutan dengan waktu eksekusi yang lebih singkat. Waktu eksekusi total lebih cepat dibandingkan dengan pendekatan asynchronous dalam eksperimen ini.
- **Asynchronous Programming:** Memproses ketersediaan stok secara bersamaan menggunakan promises dan `setTimeout`, namun memerlukan waktu lebih lama dibandingkan dengan synchronous. Ini disebabkan oleh overhead tambahan dari promises dan event loop, serta delay simulasi yang mempengaruhi hasil waktu eksekusi.

### **Kesimpulan**
Eksperimen menunjukkan bahwa dalam konteks aplikasi ini, pemrograman synchronous lebih cepat daripada pemrograman asynchronous. Hal ini disebabkan oleh overhead tambahan dari promises dan event loop dalam asynchronous programming serta jenis tugas yang lebih cocok untuk synchronous programming dalam kasus ini. 

**Kesimpulan Kesesuaian Output:**
Eksperimen ini memberikan pemahaman bahwa pemilihan metode pemrograman harus disesuaikan dengan konteks dan jenis tugas yang dihadapi. Untuk tugas-tugas CPU-bound atau yang memerlukan pemrosesan cepat, synchronous programming dapat lebih efisien. Sebaliknya, untuk operasi I/O-bound atau ketika menangani banyak tugas secara bersamaan, asynchronous programming dapat memberikan keuntungan yang lebih besar.
