NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
PRODI   : D4 TRPL

# PSWI Minggu 6 Sesi 3: Responsive Images, Fluid Typography, Container Queries, dan Aksesibilitas

# 1. Cara Menjalankan

Buka folder proyek di VS Code, lalu klik kanan `index.html` dan pilih **Open with Live Server**. Halaman akan terbuka di `http://127.0.0.1:5500/index.html`. Lalu klik `F12` untuk membuka DevTools, pakai Device Toolbar (`Ctrl+Shift+M`) untuk menguji mode responsif, atau ubah ukuran kontainer secara manual untuk menguji *container queries*.

# 2. Penjelasan Kode & Konsep Penting

Berikut penjelasan terkait komponen inti yang wajib dipahami oleh mahasiswa pengembang web:

- **Responsive Images (`srcset` & `sizes`)**:
  - `srcset` menyediakan daftar beberapa file gambar dengan ukuran resolusi berbeda (misal: kecil, sedang, besar) beserta deskripsi lebarnya (misal: `400w`, `800w`).
  - Atribut `sizes` memberitahu browser berapa ukuran slot tampilan gambar tersebut pada berbagai ukuran *viewport*. Dengan cara ini, browser akan mengunduh gambar yang ukurannya paling pas dengan layar user untuk menghemat kuota data dan mempercepat waktu dimuat.
- **Media Query (`@media`)**:
  - Dipakai untuk mengubah gaya tata letak halaman berdasarkan ukuran layar perangkat secara keseluruhan (*viewport-based*).
  - Dalam proyek ini, pendekatan *mobile-first* diterapkan: tata letak dasar diatur satu kolom, lalu media query `min-width: 48rem` (setara dengan 768px) digunakan untuk memperluas grid menjadi dua kolom saat ruang layar mencukupi.
- **Container Queries (`@container`)**:
  - Berbeda dengan media query yang bergantung pada layar perangkat, *container queries* memantau ukuran lebar dari **elemen pembungkus (*parent container*)** itu sendiri.
  - Pembungkus `.card-wrap` dijelaskan sebagai `container-type: inline-size`. Aturan `@container (min-width: 30rem)` membuat komponen kartu di dalamnya dapat mengubah *padding* atau tata letaknya secara independen berdasarkan ruang sempit atau luas tempat kartu itu berada (misalnya saat diletakkan di dalam *sidebar* yang kecil).
- **Fluid Typography (`clamp()`)**:
  - Pakai fungsi matematika CSS `clamp(minimum, preferred, maximum)` untuk membuat ukuran font (`h1`) berskala secara lancar mengikuti perubahan ukuran layar tanpa memerlukan titik henti (*breakpoint*) yang kaku.
- **Aksesibilitas & Reduced Motion (`prefers-reduced-motion`)**:
  - Fitur aksesibilitas penting bagi user yang mengalami gangguan vestibular atau sensitivitas terhadap animasi bergerak. 
  - Aturan `@media (prefers-reduced-motion: reduce)` mendeteksi pilihan sistem operasi user dan otomatis menonaktifkan transisi atau animasi CSS agar layar tidak bergerak berlebihan.
- **Penataan Teks & Layout Pendukung**:
  - `overflow-wrap: anywhere` diterapkan pada elemen judul dan paragraf kartu agar teks yang sangat panjang tanpa spasi dapat diputus secara rapi di dalam kotak tanpa menyebabkan *overflow* atau merusak tata letak horizontal.

# 3. Matriks Pengujian Viewport & Fitur

Prediksi ditulis sebelum eksperimen dijalankan, dan hasil aktual diverifikasi langsung di browser menggunakan DevTools.

| No | Kasus | Kondisi / Viewport | Prediksi (sebelum uji) | Hasil Aktual | Sesuai? |
| :-- | :---- | :----------------- | :--------------------- | :----------- | :------ |
| 1 | Normal | Mobile (320px) | Layout 1 kolom, gambar dan teks tersusun vertikal, Console `false` | Layout 1 kolom rapi, tidak ada *overflow* horizontal, Console `false` | Ya |
| 2 | Batas | Container Query (< 30rem) | *Padding* kartu bernilai standar (`1rem`) | *Padding* kartu menyesuaikan ukuran wadah yang sempit | Ya |
| 3 | Batas | Container Query (≥ 30rem) | *Padding* kartu berubah menjadi `1.5rem` saat wadah melebihi 30rem | *Padding* berubah secara otomatis saat lebar kontainer melewati batas | Ya |
| 4 | Aksesibilitas | Reduced Motion Aktif | Transisi pada elemen kartu menjadi nonaktif (*instant change*) | Efek transisi mati saat diemulasikan melalui panel *Rendering* | Ya |
| 5 | Zooming | Zoom 200% | Teks tidak meluber, fungsi *fluid typography* menyesuaikan proporsional | Konten terbaca jelas dengan struktur 1 kolom yang fleksibel | Ya |

# 4. Latihan Mandiri dan Matriks Uji

# 4.1 Dugaan Sebelum Eksperimen
- **Data Panjang:** Penambahan kata tanpa spasi pada paragraf kartu akan menyebabkan teks meluber keluar dari batas kotak jika properti pembungkus teks belum diterapkan.
- **Perbaikan CSS:** Dengan menambahkan `overflow-wrap: anywhere`, teks panjang akan terpotong secara rapi ke baris berikutnya di dalam area kartu.
- **Navigasi Keyboard:** Tombol `Tab` bergerak secara berurutan sesuai urutan elemen interaktif di dalam struktur HTML.

# 4.2 Hasil Aktual Data Panjang

| Pengamatan | Gagal (tanpa pembungkus teks) | Retest (`overflow-wrap: anywhere`) |
| :--------- | :----------------------------- | :--------------------------------- |
| `document.documentElement.clientWidth` | 320 | 320 |
| `scrollWidth` elemen teks | 986 | 254 |
| `clientWidth` elemen teks | 254 | 254 |
| `halamanOverflow` | `true` | `false` |
| Tampilan | Teks menembus tepi kartu | Teks terbungkus rapi di dalam kotak kartu |

# 5. Catatan Diagnosis

Beberapa penyesuaian yang dilakukan selama proses pengembangan:
1. **Definisi Kontainer:** Aturan `@container` awalnya tidak merespons karena elemen induk `.card-wrap` belum diberi deklarasi `container-type: inline-size`. Setelah ditambahkan, kueri kontainer berjalan sempurna.
2. **Pengujian Nilai Lebar:** Memastikan penggunaan `document.documentElement.clientWidth` untuk membaca ukuran *viewport* secara akurat saat debugging.

# 6. Batasan

- Gambar card 1 bersumber dari aset lokal dan tautan eksternal pendukung yang memerlukan koneksi internet untuk muat penuh.
- Fokus pengujian utama pada komponen *header*, *grid*, *card*, *container query*, dan aksesibilitas penjelajahan.

# 7. AI Use Statement

- **Alat:** Gemini AI.
- **Tujuan:** Membantu memahami penerapan sintaks `clamp()`, konfigurasi `container-type: inline-size`, penyusunan skenario uji, serta perapian struktur dokumen *README*.
- **Bagian Bantuan:** Penjelasan konsep *Container Queries*, diagnosis awal saat aturan kontainer tidak aktif, dan format penyusunan tabel matriks uji.
- **Verifikasi:** Kode dan hasil pengujian divalidasi melalui Google Chrome DevTools (tab *Elements*, *Computed*, dan *Rendering*).
- **Data:** Pakai data fiktif dan struktur kode praktikum mahasiswa; bebas dari informasi sensitif/pribadi/rahasia.

# Sumber Aset
Gambar Profil & Ilustrasi Kegiatan Lokal Pribadi/Aset Praktikum Web Responsif.
HTML Icon → https://cdn-icons-png.flaticon.com/512/2721/2721292.png

CSS Icon → https://cdn-icons-png.flaticon.com/512/732/732190.png

Audit Icon → https://cdn-icons-png.flaticon.com/512/1828/1828911.png 

HTML Icon Kegiatan → https://tse2.mm.bing.net/th/id/OIP.jqrxDUc6QcUvRkZ1PyYZtQHaHa

Bootcamp Icon → https://cdn-icons-png.flaticon.com/512/1055/1055687.png

Berikut adalah tambahan bagian **Milestone, Backlog, dan Bug Log** yang disusun dengan format gaya penulisan *README* sebelumnya agar bisa langsung kamu gabungkan ke dalam file dokumentasimu:

# Milestone, Backlog, dan Bug Log

Bagian ini mencatat tahapan pencapaian proyek milestone, daftar rencana atau tugas mendatang backlog, serta catatan perbaikan kesalahan bug log selama siklus pengembangan web.

# Milestone

* **Milestone 1 (Selesai):** Inisialisasi struktur dasar HTML (`index.html`), penataan gaya *mobile-first*, dan layout CSS Grid dasar.
* **Milestone 2 (Selesai):** Implementasi fitur lanjutan mencakup *Responsive Images* (`srcset`), *Fluid Typography* (`clamp`), dan *Container Queries* (`@container`).
* **Milestone 3 (Selesai):** Pengujian aksesibilitas (Reduced Motion & Audit), penyusunan matriks uji, serta finalisasi dokumentasi `README.md`.

# Backlog (Daftar Pengembangan Selanjutnya)

* [ ] Menambahkan halaman detail kegiatan terpisah (*sub-page* untuk setiap kartu).
* [ ] Mengimplementasikan *Dark Mode* pakai variabel CSS dan `prefers-color-scheme`.
* [ ] Menambahkan formulir kontak interaktif dengan validasi input yang aman.

# Bug Log (Catatan Kendala & Perbaikan)

| No | Kendala / Gejala Error | Penyebab Teknis | Solusi / Perbaikan | Status |
| --- | --- | --- | --- | --- |
| 1 | Teks judul atau paragraf panjang menembus keluar dari kotak kartu (*overflow*). | Tidak adanya aturan pembungkus kata otomatis pada elemen teks sempit. | Menambahkan properti `overflow-wrap: anywhere` pada `.card h3` dan `.card p`. | **Resolved (Selesai)** |
| 2 | Aturan `@container` pada CSS tidak merespons perubahan ukuran wadah kartu. | Elemen pembungkus induk (`.card-wrap`) belum didefinisikan sebagai kontainer. | Menambahkan deklarasi `container-type: inline-size` pada `.card-wrap`. | **Resolved (Selesai)** |
| 3 | Perbedaan tampilan lebar layar saat *debugging* pakai JavaScript. | Penggunaan `window.innerWidth` yang tidak stabil terhadap scrollbar. | Beralih pakai `document.documentElement.clientWidth` untuk pengukuran akurat. | Resolved (Selesai) |