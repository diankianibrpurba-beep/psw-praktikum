NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 11 Sesi 3: Advanced Fetch API, AbortController, dan Failure Matrix**

## 1. Tujuan Praktikum

Praktikum Sesi 3 ini berfokus pada pengembangan penanganan kesalahan (*error handling*) jaringan tingkat lanjut pada aplikasi web. Materi utamanya mencakup implementasi pembatasan waktu otomatis menggunakan `AbortController` (Timeout), penerapan struktur blok `try...catch...finally` untuk mengelola status tombol interaktif, serta pengujian ketahanan sistem melalui matriks kegagalan dan uji coba mandiri data ekstrim.

## 2. Backlog (Daftar Tugas Pengerjaan)

| ID | Task / Fitur yang Dikerjakan | Prioritas | Status |
| :--- | :--- | :--- | :--- |
| **BL-01** | Mengintegrasikan `AbortController` dengan pengaturan batas waktu (timeout) 5 detik pada fungsi `fetch`. | Tinggi | **Done** |
| **BL-02** | Mengonfigurasi blok `try...catch...finally` untuk memastikan pembersihan *timer* dan pengaktifan kembali tombol di akhir proses. | Tinggi | **Done** |
| **BL-03** | Melakukan serangkaian pengujian skenario kegagalan (*Failure Matrix*) meliputi status 404, kondisi offline, data kosong, dan berkas rusak. | Tinggi | **Done** |
| **BL-04** | Merancang dan menguji skenario mandiri tambahan (*stress test*) menggunakan berkas data ekstrim dan duplikasi data. | Sedang | **Done** |
| **BL-05** | Menyusun dokumentasi lengkap laporan praktikum beserta catatan kendala dan perbaikan. | Tinggi | **Done** |

## 3. Milestone (Tahapan Pengembangan)

- **Inisialisasi Kontrol Waktu:** Menambahkan inisialisasi `AbortController` dan pengaturan pewaktu (*timer*) sebelum proses pengambilan data dimulai untuk mencegah proses pemuatan yang berjalan tanpa batas.
- **Penyempurnaan Blok Eksekusi:** Menata ulang struktur penanganan error agar dapat membedakan antara kesalahan pembatalan waktu (*AbortError*) dengan kesalahan umum lainnya.
- **Pengujian Skenario Kegagalan:** Melaksanakan pengujian bertahap untuk memastikan sistem memberikan tanggapan yang tepat pada berbagai kondisi jaringan dan struktur data yang tidak sesuai.
- **Eksplorasi Uji Mandiri:** Menambahkan variasi berkas data khusus untuk menguji ketahanan logika validasi internal aplikasi terhadap anomali tipe data dan duplikasi data.
- **Finalisasi Dokumentasi:** Merapikan kode sumber dan menyusun seluruh hasil pengujian ke dalam laporan penugasan.

## 4. Ringkasan Pelaksanaan Praktikum (Langkah 3 – 7)

- **Implementasi AbortController dan Timeout:** Menggunakan objek `AbortController` yang dihubungkan ke opsi `signal` pada fungsi `fetch`, disertai pengaturan waktu 5 detik menggunakan `setTimeout` untuk membatalkan proses secara otomatis jika respons terlalu lambat.
- **Pengelolaan Blok Finally:** Memastikan perintah pembersihan pewaktu (`clearTimeout`) dan pengaktifan tombol muat diletakkan di dalam blok `finally` agar tombol tidak mengalami kondisi terkunci permanen apabila terjadi kesalahan.
- **Skenario Kegagalan Berkas dan Jaringan:** Melakukan pengujian kondisi jaringan terputus, respons peladen gagal, berkas data kosong, serta berkas dengan kesalahan sintaksis penulisan.
- **Uji Coba Mandiri (Stress Test & Duplikasi):** Menerapkan pengujian tambahan menggunakan berkas data dengan tipe nilai yang tidak sesuai pada kolom tertentu serta data yang identik untuk melihat respons validasi sistem secara langsung.

## 5. Matriks Uji

| Kasus / Kondisi | Input / Tindakan | Harapan (Prediksi) | Hasil Aktual & Analisis Teknis | Status / Bukti | 
| ----- | ----- | ----- | ----- | ----- | 
| **Uji Lambat / Timeout** | Proses pengambilan data dibuat melebihi batas waktu 5 detik. | Sistem membatalkan proses secara paksa dan menampilkan peringatan waktu habis. | Blok menangkap kesalahan `AbortError`, tombol kembali aktif, dan pesan peringatan tampil di layar. | **Berhasil** *(Screenshot 1)* | 
| **Uji Tanpa Jaringan (Offline)** | Jaringan internet atau peladen lokal dimatikan saat tombol diklik. | Sistem menangkap gangguan koneksi tanpa menghentikan aplikasi secara total. | Masuk ke blok penanganan error, tombol kembali aktif, dan pesan kendala jaringan tercatat. | **Berhasil** *(Screenshot 2)* | 
| **Uji Data Kosong** | Berkas JSON diisi dengan array kosong tanpa isi data. | Sistem memproses data tanpa kendala dan memberikan informasi bahwa belum ada kegiatan. | Proses berjalan lancar hingga selesai dan menampilkan keterangan status kosong pada antarmuka. | **Berhasil** *(Screenshot 3)* | 
| **Uji Berkas Rusak** | Berkas JSON sengaja dirusak format penulisannya. | Sistem mendeteksi kesalahan sintaksis dan menampilkannya sebagai pesan kendala. | Proses pembacaan data gagal diterjemahkan, lalu kesalahan tertangkap oleh sistem penanganan. | **Berhasil** *(Screenshot 4)* | 
| **Uji Status 404** | Alamat path berkas diarahkan ke lokasi yang tidak tersedia. | Sistem mendeteksi kode status HTTP yang gagal dan memunculkan keterangan yang sesuai. | Pengecekan status gagal memicu pelemparan pesan kesalahan yang akurat pada antarmuka. | **Berhasil** *(Screenshot 5)* | 
| **Uji Mandiri Data Ekstrim** | Berkas data menyertakan tipe nilai yang tidak sesuai dengan ketentuan validasi. | Sistem menolak data tersebut dan menghentikan proses render untuk menjaga integritas tampilan. | Logika validasi mendeteksi ketidaksesuaian tipe data dan menampilkan pesan kesalahan kustom. | **Berhasil** *(Screenshot 6)* | 
| **Uji Mandiri Duplikasi Data** | Berkas data menyertakan item kegiatan yang identik secara berulang. | Seluruh data dirender tanpa menyebabkan gangguan tata letak atau error sistem. | Sistem berhasil menampilkan semua item dengan aman tanpa merusak susunan antarmuka. | **Berhasil** *(Screenshot 7)* | 

## 6. Bug Log (Catatan Kendala & Perbaikan)

| No | Kendala / Bug yang Ditemukan | Penyebab Teknis | Solusi / Perbaikan yang Dilakukan | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| 1 | **Kesalahan penulisan nama fungsi objek dokumen** | Terdapat kekeliruan ketik pada awal pembuatan kode sumber. | Memperbaiki penulisan ke bentuk fungsi penjelajah dokumen yang tepat. | **Selesai** | 
| 2 | **Pengujian batas waktu sulit diamati pada lingkungan lokal** | Berkas data lokal berukuran sangat kecil sehingga proses selesai kurang dari satu detik. | Melakukan pengujian sementara dengan memperketat durasi pewaktu atau memanfaatkan fitur pembatasan jaringan. | **Selesai** | 
| 3 | **Tombol interaktif tetap terkunci saat terjadi kesalahan** | Perintah pengaktifan tombol belum diletakkan pada bagian akhir proses yang selalu dieksekusi. | Memindahkan fungsi pemulihan status tombol ke dalam blok penutup proses secara menyeluruh. | **Selesai** |

# AI Usage Statement 
Memakai AI untuk penyusunan struktur laporan dan mengarahkan ke percobaan mengikuti arahan modul dan percobaan mandiri. Dalam penyusunan tugas praktikum, penulisan kode sumber, serta perancangan dokumentasi laporan README.md untuk Sesi 3 ini, saya pakai bantuan Gemini sebagai alat bantu diskusi, pengecekan logika penanganan error (error handling), serta penyusunan struktur kalimat laporan. Seluruh hasil kode dan dokumentasi telah ditinjau, diuji coba secara langsung pada perangkat lokal, dan disesuaikan kembali agar sesuai dengan ketentuan modul praktikum week 11 sesi 3