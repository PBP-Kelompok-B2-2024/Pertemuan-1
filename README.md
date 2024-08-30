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

## Alasan mempelajari asynchronous dan synchronous programming 
Bertujuan untuk memahami cara kerja aplikasi dalam menangani tugas secara efisien. Asynchronous programming memungkinkan aplikasi melakukan banyak tugas sekaligus, meningkatkan responsivitas dan mengurangi waktu tunggu. Di sisi lain, synchronous programming, meskipun lebih sederhana, digunakan ketika tugas-tugas harus dilakukan berurutan tanpa interupsi.

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

## Penerapan asynchronous programming di industri
Penerapan asynchronous programming di industri sangat penting, terutama dalam aplikasi web, mobile, dan sistem real-time seperti layanan streaming dan game online. Asynchronous programming memungkinkan aplikasi menangani banyak permintaan pengguna sekaligus tanpa penundaan, menjaga performa dan responsivitas yang tinggi, yang sangat penting dalam lingkungan dengan lalu lintas data yang tinggi.

## Eksperimen Yang Dilakukan
Dari tema besar Asynchronous vs Synchronous programming ini, ada beberapa topik yang kami ambil untuk dilakukan eksperimen ini, diantaranya :
- setTimeout
- Try/Catch
- event handling
- promise
- Throttle
- Race Condition
- Non-Blocking
- Event Loop
- Process.nextTick
- AbortController
- Async Function
- ReactiveX
- WebSocket

Dengan masing masing topik memiliki studi kasus masing masing yang relevan dengan industri
## Penutup
Dengan memahami perbedaan antara asynchronous dan synchronous programming, serta dampak penerapannya, kita dapat menulis kode yang lebih efisien dan responsif. Eksperimen-eksperimen dalam repository ini bertujuan untuk mendemonstrasikan konsep-konsep ini melalui berbagai contoh dan kasus penggunaan, membantu mahasiswa untuk menguasai teknik-teknik penting dalam pemrograman modern.