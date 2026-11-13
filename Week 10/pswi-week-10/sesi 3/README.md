NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 10 Sesi 3: State Management, DOM Manipulation, dan Event Delegation**

# 1. Tujuan Praktikum

1. Mengelola data daftar peserta di dalam memori sementara memakai *array* JavaScript (`peserta`).

2. Sinkron perubahan data pada memori ke tampilan antarmuka HTML secara otomatis melalui fungsi `render()`.

3. Cegah halaman melakukan *reload* otomatis saat pengiriman *form* pakai `event.preventDefault()` serta validasi input agar tidak kosong/hanya berisi spasi.

4. Menerapkan teknik *event delegation* pada elemen pembungkus daftar untuk hapus item secara dinamis berdasarkan ID unik (`dataset.id`).

# 2. Struktur Tugas

text
pswi-week-10/
  sesi-03/
    index.html       
    style.css        
    main.js          
    README.md        
    bukti/           

# 3. Ringkasan Cara Kerja Sistem

* **Penyimpanan State Sementara:** Seluruh data nama peserta beserta ID uniknya disimpan dalam variabel *array* di memori. Karena masih disimpan di memori sementara, data akan otomatis kembali kosong apabila halaman browser dimuat ulang (*refresh*).

* **Pembaruan Tampilan Otomatis:** Setiap kali terjadi penambahan atau penghapusan data pada *array*, fungsi pembaruan tampilan akan membersihkan daftar lama dan mencetak ulang seluruh elemen daftar beserta tombol hapusnya yang sudah disematkan atribut `data-id`.

* **Validasi Input & Keamanan:** Sebelum data disimpan, sistem membersihkan spasi berlebih pada awal dan akhir teks. Jika kosong, sistem menolak penyimpanan dan menampilkan peringatan. Teks nama juga ditampilkan menggunakan properti teks biasa (`textContent`) sehingga aman dari penyisipan tag HTML berbahaya.

* **Event Delegation untuk Hapus Data:** klik tidak dipasang pada setiap tombol hapus satu per satu, tapi dipusatkan pada elemen induk daftar (`<ul>`). Sistem mendeteksi tombol mana yang diklik berdasarkan ID-nya, menyaring data keluar dari *array*, lalu memperbarui tampilan.

# 4. Analisis Penyesuaian Kode (Mengapa Kode Perlu Digabung Secara Utuh)

Dalam pelaksanaan praktikum, potongan instruksi yang disajikan pada modul terbagi ke dalam beberapa tahapan terpisah (mulai dari inisialisasi data, pembuatan fungsi *render*, penambahan *event listener* form, hingga *event delegation* tombol hapus). Apabila bagian-bagian tersebut dijalankan secara terpisah atau tidak disatukan dengan struktur yang tepat, akan muncul kendala teknis seperti:

* **Error Variabel & Lingkup (*ReferenceError*):** Fungsi atau variabel yang dipanggil di bagian bawah tidak dikenali karena belum dideklarasikan di urutan paling atas, atau terjadi duplikasi nama variabel akibat menyalin potongan kode secara berulang.

* **Konflik *Event Listener* & *Reload* Halaman:** Tanpa penyatuan alur kerja yang bersih dan penempatan `event.preventDefault()` di awal proses pengiriman form, halaman browser akan terus memuat ulang (*refresh*) dan menghilangkan data baru yang baru saja diketik.

Oleh karena itu, seluruh langkah pada modul perlu digabungkan dan dirapikan ke dalam satu alur file `main.js` yang utuh dan berurutan (inisialisasi variabel, fungsi *render*, *event* tambah, *event* hapus, dan inisialisasi awal). Penyatuan struktur ini memastikan seluruh proses saling terhubung secara sinkron dan berjalan bebas dari *error*.

# 5. Matriks Uji & Hasil Pengamatan

| No | Skenario Pengujian | Input / Langkah | Hasil yang Diharapkan | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| 1 | Tambah Data Valid | Memasukkan nama (misal: `Budi`) lalu klik **Tambah** atau tekan **Enter** | Data masuk ke array memori, tampil di daftar tanpa *reload* halaman | Berhasil | 
| 2 | Validasi Input Kosong | Mengosongkan input atau hanya mengisi spasi (`   `) lalu submit | Muncul pesan `"Nama harus diisi"` dan data kosong tidak ditambahkan | Berhasil | 
| 3 | Pemeriksaan `data-id` | Melakukan *Inspect Element* pada tombol **Hapus** yang muncul | Setiap tombol memiliki atribut `data-id` unik sesuai ID peserta | Berhasil | 
| 4 | Hapus Item | Mengklik tombol **Hapus** pada item pertama, tengah, maupun terakhir | Item yang dipilih langsung terhapus dari tampilan dan array memori | Berhasil | 
| 5 | Keamanan Input Markup | Memasukkan teks menyerupai tag HTML (misal: `<b>Dian</b>`) | Teks ditampilkan apa adanya sebagai teks biasa (aman karena memakai `textContent`) | Berhasil | 
| 6 | Uji *Reload* Browser | Melakukan *refresh* (`F5`) setelah daftar terisi data | Data kembali kosong karena penyimpanan masih bersifat sementara di memori (*in-memory*) | Sesuai Ekspektasi | 

# 6. Kesimpulan

Seluruh fitur pengelolaan daftar peserta pada Sesi 3 telah berhasil diimplementasikan dan berjalan dengan baik. Penggunaan `event.preventDefault()` menjaga halaman tetap stabil tanpa *reload*, penggunaan properti teks murni mencegah eksekusi tag HTML berbahaya, dan *event delegation* memudahkan penghapusan elemen dinamis secara tepat berdasarkan ID uniknya. Penyusunan kode secara terpadu dalam satu berkas `main.js` terbukti mengatasi masalah pemanggilan variabel dan membuat aplikasi berjalan tanpa kendala.

- Milestone: Pencapaian tugas pada sesi praktikum ini mencakup kerangka antarmuka dan penataan gaya dasar, pembangunan state management berbasis array, dan fungsi render DOM otomatis, penerapan validasi input dan pencegahan reload bawaan form, implementasi fitur hapus dinamis pakai event delegation dengan dataset.id, hingga penyelesaian pengujian fungsionalitas sesuai skenario pada matriks uji.

- Backlog: Pengembangan lanjutan yang belum diimplementasikan pada tahap ini dan masuk dalam daftar rencana perbaikan berikutnya meliputi integrasi penyimpanan permanen pakai localStorage agar data peserta tidak hilang saat halaman di-refresh, penambahan fitur sunting (edit) nama peserta secara langsung di dalam daftar, serta penambahan fitur pencarian atau filter nama peserta.

- Bug Log: Selama proses pengembangan awal, ditemukan beberapa kendala teknis berupa ReferenceError akibat potongan kode modul yang dieksekusi terpisah tanpa urutan deklarasi variabel yang tepat, serta terjadinya reload halaman otomatis yang menghapus data setiap kali tombol tambah ditekan. Seluruh bug tersebut telah berhasil diselesaikan dengan menggabungkan alur logika secara terstruktur di dalam satu berkas main.js dan menambahkan event.preventDefault() pada event listener pengiriman form.