# Pertemuan 1 PBP Praktik Kelompok B2

## Anggota Kelompok
- Adrian Pratama Sasmita (231524033)
- Alya Naila Putri Ashadilla (231524036)
- Faisal Bashri Albir (231524042)
- Muhammad Hasbi Asshidiqi (231524054)
- Muhammad Samudera Bagja (231524058)
- Muhammad Zaky Aliyashfi (231524059)
- Yahya Alfon Sinaga (231524064)

## Pendahuluan
Pada pertemuan pertama perkuliahan Prinsip Bahasa Pemrograman Praktik, kami memilih sebuah topik yang berjudul "Asynchronous Vs Synchronous" dalam pemrograman. Keduanya merupakan paradigma dalam pemrograman yang mengatur bagaimana kode dieksekusi, terutama dalam konteks pemrosesan tugas yang memerlukan waktu lama atau operasi I/O seperti membaca file atau berkomunikasi dengan server. Pemahaman yang baik mengenai perbedaan ini akan membantu kita menulis kode yang lebih efisien dan responsif.

## Definisi Umum Asynchronous vs Synchronous Programming
**Synchronous programming** adalah model pemrograman di mana tugas-tugas dieksekusi secara berurutan. Setiap tugas harus selesai sebelum tugas berikutnya dimulai. Ini berarti bahwa jika satu tugas membutuhkan waktu lama untuk diselesaikan, seluruh program akan berhenti dan menunggu sampai tugas tersebut selesai.

Sebaliknya, **asynchronous** programming memungkinkan tugas-tugas untuk dieksekusi tanpa harus menunggu tugas lainnya selesai. Dengan kata lain, kode dapat melanjutkan eksekusinya sambil menunggu tugas yang membutuhkan waktu lama untuk diselesaikan. Ini dicapai melalui berbagai mekanisme seperti callbacks, promises, dan async/await, yang memungkinkan penanganan operasi I/O dan tugas-tugas lain yang memakan waktu secara lebih efisien.

## Manfaat Penerapan Asynchronous Programming
Penerapan asynchronous programming memiliki beberapa manfaat signifikan:

1. Efisiensi Waktu Eksekusi: Dengan tidak perlu menunggu setiap tugas selesai sebelum melanjutkan ke tugas berikutnya, program dapat menyelesaikan lebih banyak pekerjaan dalam waktu yang lebih singkat, terutama dalam lingkungan yang bergantung pada operasi I/O.

2. Responsivitas Aplikasi: Dalam aplikasi berbasis web atau GUI, penggunaan asynchronous programming dapat mencegah aplikasi menjadi "terhenti" saat menunggu operasi I/O selesai, sehingga meningkatkan pengalaman pengguna.

3. Skalabilitas Lebih Baik: Asynchronous programming memungkinkan aplikasi untuk menangani lebih banyak pengguna atau proses sekaligus, tanpa harus menambah jumlah thread atau resource yang signifikan.

## Dampak Apabila Tidak Menerapkan Asynchronous Programming
Tidak menerapkan asynchronous programming, terutama dalam konteks di mana banyak operasi I/O atau tugas yang memakan waktu lama, dapat memiliki beberapa dampak negatif:

- Blokir Eksekusi: Program dapat menjadi tidak responsif saat menunggu operasi selesai, menyebabkan pengalaman pengguna yang buruk dan aplikasi yang lambat.

- Penggunaan Resource yang Tidak Efisien: Tanpa asynchronous programming, aplikasi mungkin memerlukan lebih banyak resource untuk menangani jumlah tugas yang sama, karena setiap tugas harus menunggu giliran untuk dieksekusi.

- Skalabilitas Terbatas: Program yang hanya menggunakan synchronous programming dapat menghadapi kesulitan dalam menangani banyak permintaan atau proses sekaligus, membatasi kemampuan aplikasi untuk berkembang dan beradaptasi dengan kebutuhan pengguna.

## Penutup
Dengan memahami perbedaan antara asynchronous dan synchronous programming, serta dampak penerapannya, kita dapat menulis kode yang lebih efisien dan responsif. Eksperimen-eksperimen dalam repository ini bertujuan untuk mendemonstrasikan konsep-konsep ini melalui berbagai contoh dan kasus penggunaan, membantu mahasiswa untuk menguasai teknik-teknik penting dalam pemrograman modern.