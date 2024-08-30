# Mengatasi Race Condition dalam Penggunaan Asynchronous Operations di Lingkungan Konkurensi
### Tanggal Eksperimen : 29 Agustus 2024
### Penanggung Jawab : Faisal Bashri Albir

### Link chatGPT : https://chatgpt.com/c/3aa59a4a-32c1-4ced-a8b3-7ba2647aadbd

### **Deskripsi Eksperimen**
Tujuan dari eksperimen ini adalah untuk mengeksplorasi dan mengimplementasikan berbagai teknik yang dapat digunakan untuk mengatasi race condition ketika menggunakan operasi asinkron dalam pengembangan perangkat lunak, khususnya dalam konteks manajemen konkurensi. Eksperimen ini bertujuan untuk membandingkan efektivitas berbagai metode dalam mencegah race condition dan memastikan integritas data saat operasi asinkron berjalan secara paralel.

### **Identifikasi Problem**
- **Konteks Permasalahan:** Dalam pengembangan aplikasi yang menggunakan operasi asinkron, sering kali terdapat situasi di mana dua atau lebih operasi mencoba mengakses dan memodifikasi data yang sama pada waktu yang hampir bersamaan. Ketika tidak ada kontrol yang tepat, hal ini dapat menyebabkan race condition, di mana hasil akhirnya bisa menjadi tidak terduga dan menyebabkan bug yang sulit dilacak.
  
- **Permasalahan:** Race condition terjadi ketika dua operasi asinkron memodifikasi variabel atau sumber daya yang sama secara bersamaan, tanpa adanya mekanisme kontrol akses yang tepat. Ini dapat menyebabkan data korupsi, perilaku tak terduga, atau bahkan crash dalam aplikasi.

- **Solusi:** Eksperimen ini mengidentifikasi dan menguji lima teknik utama untuk mengatasi race condition:
  1. Menggunakan Mutex (Mutual Exclusion)
  2. Menggunakan Atomic Operations
  3. Menggunakan Channels atau Queue
  4. Menggunakan Web Workers
  5. Menggunakan `Lock` Object secara Manual

### **Metodologi Eksperimen**
Langkah-langkah eksperimen ini secara garis besar mencakup:
1. **Pemahaman Permasalahan:** Mengidentifikasi situasi race condition dalam konteks operasi asinkron dan mengapa hal itu terjadi.
2. **Pengembangan Kode:** Menulis kode JavaScript yang mencerminkan race condition melalui operasi asinkron, dan kemudian mengimplementasikan lima solusi yang berbeda untuk mengatasinya.
3. **Eksperimen dan Pengujian:** Menguji setiap solusi dengan menjalankan operasi asinkron secara paralel dan mengamati apakah race condition terjadi atau tidak.
4. **Analisis:** Membandingkan hasil dari setiap solusi untuk menilai efektivitas masing-masing dalam mencegah race condition.

### **Hasil Eksperimen**
Hasil dari eksperimen ini menunjukkan bahwa:
- Sebelum penerapan solusi, race condition sering terjadi, menyebabkan data tidak konsisten dan hasil yang tak terduga.
- Setelah penerapan solusi:
  - **Mutex** dan **Manual Lock** memberikan kontrol eksklusif yang efektif, memastikan hanya satu operasi yang dapat mengakses sumber daya pada satu waktu.
  - **Atomic Operations** mencegah race condition pada operasi sederhana seperti penambahan atau pengurangan.
  - **Channels/Queue** memastikan urutan eksekusi yang tertib, menghindari konflik.
  - **Web Workers** mengisolasi operasi ke thread yang berbeda, menghilangkan race condition dengan menghindari akses simultan ke sumber daya yang sama.

### **Kesimpulan**
Eksperimen ini berhasil menunjukkan bahwa setiap teknik yang diuji memiliki keunggulan dan keterbatasan dalam konteks tertentu:
- **Mutex** dan **Manual Lock** efektif dalam skenario yang membutuhkan kontrol akses yang ketat.
- **Atomic Operations** adalah solusi yang sederhana dan efisien untuk operasi dasar.
- **Channels/Queue** dan **Web Workers** cocok untuk situasi yang membutuhkan eksekusi berurutan atau isolasi proses.
Secara keseluruhan, hasil eksperimen ini sesuai dengan tujuan awal, yaitu mengidentifikasi dan menerapkan solusi yang dapat mencegah race condition dalam penggunaan asynchronous operations, memastikan integritas data dalam aplikasi yang berjalan secara paralel.
