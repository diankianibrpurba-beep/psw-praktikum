NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 12 Sesi 3: Integrasi Data Lanjutan, Penanganan Asinkron, dan Validasi Keamanan DOM**

## 1. Tujuan Praktikum

Praktikum Week 12 Sesi 3 ini bertujuan untuk mengelola alur data asinkron pakai modern JavaScript, menerapkan validasi struktur data tingkat lanjut untuk cegah error, dan memastikan seluruh elemen web memenuhi standar keamanan DOM terhadap kerentanan injeksi skrip.

## 2. Backlog (Daftar Tugas Pengerjaan)

| ID | Task / Fitur yang Dikerjakan | Prioritas | Status |
| :--- | :--- | :--- | :--- |
| **BL-01** | Menyiapkan struktur dasar berkas dan antarmuka HTML pendukung modul Sesi 3 dengan elemen semantik yang bersih. | Tinggi | **Done** |
| **BL-02** | Mengonfigurasi penanganan fungsi asinkron dan pemeriksaan respons jaringan secara ketat menggunakan penanganan error yang andal. | Tinggi | **Done** |
| **BL-03** | Menerapkan validasi tipe data berlapis untuk memastikan struktur data yang diterima sesuai dengan spesifikasi sistem. | Tinggi | **Done** |
| **BL-04** | Mengamankan proses render DOM dari potensi manipulasi injeksi dengan menerapkan metode pembersihan teks yang aman. | Tinggi | **Done** |
| **BL-05** | Melakukan serangkaian pengujian kasus batas (*edge cases*) dan simulasi kesalahan sistem menggunakan perangkat pengembang. | Tinggi | **Done** |
| **BL-06** | Mengevaluasi performa dan kualitas web secara keseluruhan untuk memastikan kepatuhan terhadap standar teknis yang berlaku. | Sedang | **Done** |
| **BL-07** | Menyusun laporan dokumentasi praktikum `README.md` secara terstruktur serta mencatat pernyataan penggunaan asisten AI. | Sedang | **Done** |

## 3. Milestone (Tahapan Pengembangan)

* Tahap 1 – Inisialisasi: Mempersiapkan arsitektur folder dan file program agar mudah dikelola.
* Tahap 2 – Konfigurasi Fungsi Asinkron: Mengatur alur pemanggilan data agar berjalan secara non-blocking dengan manajemen status proses yang jelas bagi user.
* Tahap 3 – Validasi & Penanganan Error: Membangun mekanisme pertahanan kode (*defensive programming*) untuk mendeteksi kegagalan jaringan maupun ketidaksesuaian format data masuk.
* Tahap 4 – Rendering Aman pada DOM: Menyusun fungsi penampil data ke layar dengan mengutamakan keamanan teks murni untuk menghindari risiko eksploitasi skrip.
* Tahap 5 – Pengujian Kasus Ekstrem: Menguji ketahanan aplikasi terhadap berbagai skenario error seperti alamat sumber yang tidak valid atau perubahan tipe data tak terduga.
* Tahap 6 – Dokumentasi & Finalisasi: Melengkapi catatan pengembangan, laporan pengujian, serta ringkasan instruksi teknis ke dalam dokumen proyek.

# 4. Ringkasan Pelaksanaan Praktikum (Langkah 1 – 6)

# Langkah 1: Pengaturan Struktur Asinkron dan Manajemen Respon
* Pakai pola pemanggilan asinkron untuk mengambil sumber data eksternal tanpa ganggu kenyamanan interaksi antarmuka pengguna.
* Periksa status keberhasilan transmisi data secara manual sebelum tahapan pengolahan data lanjutan dijalankan oleh sistem.

# Langkah 2: Penerapan Validasi Struktur dan Tipe Data
* Menyisipkan pemeriksaan tipe data secara spesifik guna memastikan format data yang diproses benar-benar berupa kumpulan elemen yang valid.
* Mencegah potensi berhentinya aplikasi secara mendadak saat menghadapi struktur data tak terduga melalui penerapan blok pengaman eksekusi.

# Langkah 3: Sanitasi dan Keamanan Teks pada DOM
* Mengonfirmasi pembersihan elemen daftar lama secara menyeluruh sebelum proses penyisipan data baru ke dalam struktur halaman web.
* Memanfaatkan properti khusus penanganan teks murni agar setiap karakter khusus atau sisipan kode markup diperlakukan sebagai teks biasa yang aman.

# Langkah 4: Pengujian Kasus Batas dan Simulasi Kegagalan
* Melakukan pengujian fungsionalitas dengan sengaja mengubah jalur akses data untuk memverifikasi ketepatan respons sistem terhadap kode kesalahan jaringan.
* Memeriksa konsistensi tampilan antarmuka saat kondisi data kosong atau saat menerima bentuk data yang tidak sesuai dengan ketentuan awal.

# Langkah 5: Evaluasi dan Penyelarasan Kualitas Sistem
* Memastikan seluruh komponen kode mematuhi kaidah penulisan yang bersih, terstruktur, dan mudah dipelihara untuk pengembangan jangka panjang.
* Melakukan pemeriksaan silang antara hasil pengujian di konsol peramban dengan spesifikasi modul praktikum yang diinstruksikan.

# Langkah 6: Penyusunan Dokumen Proyek dan Kesiapan Publikasi
* Mendokumentasikan seluruh tahapan pengerjaan ke dalam format laporan yang terstandarisasi.
* Mencatat parameter teknis penting terkait lingkungan eksekusi program serta batasan penyimpanan lokal sebagai referensi pengembangan lanjutan.

# 5. Matriks Uji

| Kasus / Kondisi | Input / Tindakan | Harapan (Prediksi) | Hasil Aktual & Analisis Teknis | Status / Bukti |
| :--- | :--- | :--- | :--- | :--- |
| **Uji Fungsi Asinkron Normal** | Menjalankan proses pemuatan data dengan sumber berkas yang valid dan terhubung dengan baik. | Data berhasil ditarik dan dirender ke dalam antarmuka web tanpa hambatan atau jeda berlebih. | Proses berjalan lancar, data tampil secara dinamis, dan catatan jaringan menunjukkan status keberhasilan yang sesuai. | **Berhasil** |
| **Uji Simulasi Jalur Gagal** | Mengubah alamat sumber data menjadi direktori yang tidak tersedia untuk memicu status kesalahan. | Sistem mendeteksi kegagalan, mengarahkan eksekusi ke blok penanganan error, dan menampilkan pesan informatif. | Blok pengaman berhasil menangkap kendala transmisi, menampilkan pemberitahuan error, dan menjaga stabilitas aplikasi. | **Berhasil** |
| **Uji Ketidaksesuaian Format Data** | Mengubah struktur isi sumber data dari bentuk kumpulan elemen menjadi bentuk objek tunggal. | Sistem menolak format yang salah melalui validasi tipe data dan menghentikan proses render secara aman. | Validasi internal mengenali kesalahan bentuk data, memicu pengecualian, dan mencegah aplikasi mengalami galat total. | **Berhasil** |
| **Uji Keamanan Injeksi Teks** | Menyisipkan karakter berbasis markup HTML ke dalam string data masukan untuk diuji tampilannya. | Karakter markup tidak dieksekusi sebagai elemen penampil gaya, melainkan tercetak murni sebagai teks biasa. | Penggunaan metode render teks murni berhasil meredam potensi eksekusi kode asing, menjaga integritas halaman tetap aman. | **Berhasil** |

# 6. Bug Log (Catatan Kendala & Perbaikan)

| No | Kendala / Bug yang Ditemukan | Penyebab Teknis | Solusi / Perbaikan yang Dilakukan | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Kegagalan respons status jaringan tidak terdeteksi otomatis** | Pemanggilan fungsi standar peramban tidak secara langsung menganggap kode status kegagalan sebagai pengecualian. | Menambahkan pemeriksaan manual kondisi status respons sebelum tahapan penguraian data lanjutan dilakukan. | **Selesai** |
| 2 | **Potensi gangguan sistem saat struktur data berubah bentuk** | Perulangan data mengharapkan format kumpulan elemen, sehingga gagal ketika menerima bentuk tunggal. | Menyisipkan fungsi validasi tipe data di awal proses untuk menyaring format yang tidak sesuai secara aman. | **Selesai** |
| 3 | **Penumpukan elemen antarmuka saat pemuatan data berulang** | Elemen daftar baru terus ditambahkan ke dalam wadah tanpa membersihkan data riwayat sebelumnya. | Memanggil fungsi pembersihan wadah tampilan terlebih dahulu sebelum proses render data baru dijalankan. | **Selesai** |

# 7. Kesiapan Deployment & AI Use Statement

* Catatan Kesiapan Deployment: Seluruh berkas web telah diatur pakai jalur relatif yang konsisten serta memperhatikan sensitivitas huruf. Pengujian menyeluruh telah diselesaikan pada lingkungan lokal, dengan catatan bahwa penyimpanan data berbasis web bersifat terikat pada domain asal dan tidak otomatis berpindah.
* AI Use Statement: Asisten AI dimanfaatkan sebagai teman diskusi dalam merancang struktur logika penanganan proses asinkron, menyusun validasi data, menganalisis penanganan error jaringan, serta bantu merapikan format dokumentasi laporan praktikum.