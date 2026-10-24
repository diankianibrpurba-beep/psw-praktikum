NAMA    :Dian Kiani Belinna Purba
NIM     :41426036
Prodi   :D4 TRPL

**PSWI Minggu 7 Sesi 2: Pengujian Lintas Halaman, Aksesibilitas, dan Integrasi Navigasi**

# 1. Tujuan Praktikum

* Memahami dan menerapkan alur kerja Git branching secara terstruktur (`git switch -c`, `git diff`, `git merge`).
* Menambahkan elemen aksesibilitas, struktur HTML5 semantik, dan petunjuk format (*form hints*) pada halaman pendaftaran (`daftar.html`).
* Melakukan simulasi *code review* secara lokal bersama rekan sejawat (peer review) dan mendokumentasikannya.
* Menjalankan pengujian berbasis matriks uji (kasus normal, batas, dan gagal) pada berbagai *viewport* dan tingkat *zoom*.
* Menyusun dokumentasi troubleshooting dan transparansi penggunaan kecerdasan buatan (*AI Use Statement*).

# 2. Struktur Proyek & Integrasi File

Struktur folder dan file pada modul `sesi-03` ini adalah sebagai berikut:
pswi-week7-sesi 3/
├── README.md
├── review.md
├── index.html
├── daftar.html
├── tentang.html
├── kegiatan.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── bukti/
    ├── git branch main dan fitur-petunjuk.png
    ├── git log.png
    ├── tampilan 1200px.png
    ├── tampilan 320px.png
    ├── uji tab+keyboard.png
    ├── validator.png
    └── zoom 200%.png

# 3. Workflow & Eksekusi Perintah Git

Berikut adalah urutan perintah Git yang telah dijalankan di terminal VS Code selama pengembangan fitur:

1. **Membuat dan Pindah ke Branch Fitur:**
   bash
   git switch -c fitur-petunjuk

2. **Menambahkan Perubahan pada Form:**
   Memperbarui `daftar.html` dengan menambahkan petunjuk format input (`<small class="form-hint">`) serta validasi atribut `pattern="[0-9]{6}"`.

3. **Pemeriksaan Status dan Staging:**
   bash
   git status
   git add daftar.html README.md

4. **Commit Perubahan Fitur:**
   bash
   git commit -m "feat(w07s03): tambahkan petunjuk format form pendaftaran"

5. **Simulasi Review & Peninjauan Diff:**
   bash
   git diff main...fitur-petunjuk
   # atau melihat detail commit terakhir:
   git show HEAD

6. **Penggabungan Branch (Merge) ke Main:**
   bash
   git switch main
   git merge fitur-petunjuk
   git log --oneline -n 5

# Keputusan yang diambil:

* **Konflik / Penyesuaian CSS:** Melakukan penyesuaian styling `.form-hint` secara langsung pada CSS agar konsisten di seluruh ukuran viewport.
* **Validasi Form Native:** Mengaktifkan validasi HTML5 bawaan browser untuk mencegah pengalihan formulir jika format tidak sesuai.
* **Integrasi Navigasi:** Memastikan atribut accessibility `aria-current="page"` aktif secara konsisten pada tautan halaman aktif.

# 4. Latihan Mandiri dan Matriks Uji (Nomor 7)

Pengujian dilakukan langsung di browser (Live Server) menggunakan instrumen pengujian layar (320px, 1200px), navigasi keyboard (Tab/Shift+Tab), dan pembesaran layar (*zoom 200%*).

| Jenis Kasus | Input / Kondisi | Tindakan | Prediksi / Harapan | Hasil Aktual & Analisis | Status / Bukti | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| **Kasus Normal** | Mengisi seluruh kolom wajib pada `daftar.html` dengan data valid (Kode: `123456`, Email: `nama@domain.com`). | Klik tombol **Daftar** (*submit form*). | Form berhasil dikirim tanpa adanya cegatan dari validasi browser. | Formulir lolos validasi HTML5 dan data terkirim sesuai *action*. Hasil sesuai karena atribut `required` dan `pattern` terpenuhi. | Sesuai (`bukti/formulir pendaftaran.png`) | 
| **Kasus Batas (Boundary)** | Teks petunjuk format form yang panjang diuji pada viewport 320px dan zoom 200%. | Mengubah ukuran layar browser ke 320px dan menaikkan zoom ke 200%. | Teks petunjuk berpotensi terpotong/meluber keluar dari container jika tidak dibungkus. | Berkat aturan `overflow-wrap: anywhere;` dan Flexbox `flex-direction: column`, tampilan tetap rapi tanpa scroll horizontal. | Sesuai (`bukti/tampilan 320px.png`, `bukti/zoom 200%.png`) | 
| **Kasus Gagal** | Memasukkan kode peserta kurang dari 6 digit (contoh: `001`) atau format email tanpa `@`. | Mengisi data invalid lalu menekan tombol **Daftar**. | Validasi regex `pattern="[0-9]{6}"` mencegat pengiriman dan menampilkan tooltip error. | Browser menolak *submit* dan langsung memfokuskan kursor pada kolom yang salah beserta tooltip peringatan bawaan. | Sesuai (`bukti/uji tab+keyboard.png`) | 

# 5. Troubleshooting dan AI Use Statement (Nomor 8)

# A. Catatan Troubleshooting

1. **Masalah Terminal Nyangkut (*Pager Mode*):**
   * *Gejala:* Saat menjalankan `git log` atau `git diff`, terminal menampilkan titik dua `:` atau pesan `(press RETURN)` dan tidak bisa mengetik perintah baru.
   * *Pemeriksaan & Solusi:* Menekan tombol **`q`** di keyboard untuk keluar dari mode *pager* Git, kemudian terminal kembali ke prompt normal (`PS C:\...>`) dan perintah `git switch main` dapat dieksekusi.

2. **Pencegahan Error 404 & Link CSS:**
   * *Pemeriksaan:* Memastikan seluruh path gambar di folder `bukti/` dan stylesheet `css/style.css` pakai jalur yang benar tanpa huruf kapital yang salah.

# B. AI Use Statement

* **Alat AI yang Digunakan:** Gemini (Google AI Assistant).
* **Tujuan Penggunaan:** Membantu memahami alur kerja *Git Branching* (`git switch`, `git diff`, `git merge`), merancang simulasi *code review* interaktif, serta merapikan struktur dokumentasi matriks uji.
* **Bagian Bantuan AI:**
  * Analisa pesan interaktif pada terminal VS Code.
  * Penyusunan catatan review bersama teman sekelast.
* **Verifikasi Mandiri:** Seluruh kode HTML (`daftar.html`), CSS, dan perintah Git dieksekusi di terminal VS Code lokal dan diverifikasi melalui Live Server.