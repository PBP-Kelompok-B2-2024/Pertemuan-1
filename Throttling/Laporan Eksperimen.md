# **Throttling dalam Implementasi Event Listeners untuk Penghematan Sumber Daya pada Aplikasi JavaScript**
### Tanggal Eksperimen : 29 Agustus 2024
### Penanggung Jawab : Faisal Bashri Albir

### Link chatGPT : https://chatgpt.com/c/3aa59a4a-32c1-4ced-a8b3-7ba2647aadbd
### **Deskripsi Eksperimen**
Tujuan dari eksperimen ini adalah untuk mengevaluasi efektivitas penerapan throttling pada event listeners dalam sebuah aplikasi JavaScript, khususnya saat menangani event yang sering dipicu, seperti scrolling atau resizing. Eksperimen ini bertujuan untuk membandingkan kinerja aplikasi sebelum dan sesudah penerapan throttling guna mengukur peningkatan efisiensi dan penghematan sumber daya.

### **Identifikasi Problem**
- **Konteks Permasalahan:** Dalam aplikasi web yang memiliki interaksi tinggi, event seperti scroll dan resize sering kali dipicu secara berlebihan, menyebabkan fungsi yang terkait dijalankan berkali-kali dalam waktu singkat. Ini dapat mengakibatkan penurunan kinerja aplikasi, seperti lagging atau rendering yang tidak responsif.
- **Permasalahan:** Tanpa penerapan throttling, event listeners dapat menghabiskan sumber daya secara berlebihan karena setiap event diproses tanpa jeda. Hal ini tidak hanya memperburuk pengalaman pengguna tetapi juga meningkatkan beban pada CPU dan memori.
- **Solusi:** Menerapkan throttling pada event listeners untuk membatasi frekuensi eksekusi fungsi yang di-trigger oleh event tersebut, sehingga kinerja aplikasi tetap stabil meskipun event sering terjadi.

### **Metodologi Eksperimen**
1. **Identifikasi Fungsi yang Terpengaruh:** Tentukan event listeners mana yang sering dipicu dalam aplikasi (misalnya, scroll atau resize).
2. **Implementasi Tanpa Throttling:** Jalankan aplikasi dengan event listeners yang tidak menggunakan throttling dan ukur performanya.
3. **Penerapan Throttling:** Terapkan teknik throttling pada event listeners tersebut.
4. **Pengujian Performa:** Ulangi pengujian performa aplikasi setelah throttling diterapkan.
5. **Analisis Data:** Bandingkan hasil pengujian sebelum dan sesudah penerapan throttling untuk mengukur peningkatan efisiensi.

### **Hasil Eksperimen**
Eksperimen menunjukkan bahwa sebelum penerapan throttling, aplikasi mengalami penurunan kinerja yang signifikan saat event scrolling dan resizing dipicu secara cepat dan berulang. Setelah penerapan throttling, terjadi peningkatan kinerja yang nyata. Fungsi yang terkait dengan event tersebut hanya dipanggil sekali dalam interval waktu tertentu, yang mengurangi beban pada CPU dan meningkatkan responsivitas aplikasi. 

### **Kesimpulan**
Penerapan throttling pada event listeners dalam aplikasi JavaScript terbukti efektif dalam menghemat sumber daya dan meningkatkan kinerja aplikasi. Eksperimen ini berhasil mencapai tujuannya, yaitu mengurangi beban pemrosesan yang disebabkan oleh event listeners yang terlalu sering dipicu, sehingga menghasilkan pengalaman pengguna yang lebih responsif dan efisien.
