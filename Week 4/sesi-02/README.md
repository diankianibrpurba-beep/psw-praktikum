NAMA  : Dian Kiani Belinna Purba
NIM   : 41426036
PRODI : d4 TRPL (2)
# Praktikum Week 4 Sesi 2

# Tujuan
- Memvalidasi struktur HTML dengan W3C Validator.
- Menguji perilaku CSS (specificity, box model).
- Memeriksa landmark, heading, dan navigasi dengan DevTools.
- Melakukan validasi form (checkbox, input wajib).
- Melakukan pengujian terarah terhadap error umum.
- Membuktikan fungsi JavaScript sederhana.

---

# Langkah Menjalankan
1. Buka `index.html` di browser.
2. Navigasi halaman dengan Tab/Shift+Tab.
3. Isi input sesuai kasus uji.
4. Klik tombol submit dan amati hasil.
5. Gunakan DevTools untuk memeriksa struktur, box model, dan aturan CSS.

---

# Validasi HTML
- **Error ditemukan:** `<aside>` di luar `<body>`, `<main>` di dalam `<header>`, `<article>` tidak ditutup, heading tidak berurutan, navigasi tidak sesuai id.
- **Perbaikan:** Semua elemen dipindahkan ke posisi semantik yang benar, heading diperbaiki, navigasi menggunakan `#id`.
- Saat melakukan data panjang (lebih dari 300 huruf saat uji coba di catatn, maka web otomatis membatasi jumlah huruf).

---

# Pemeriksaan DevTools

| Pemeriksaan             | Bukti yang Dicatat                                      | Hasil   |
|-------------------------|---------------------------------------------------------|---------|
| Bahasa Dokumen          | html mempunyai lang=id                                  | Lulus   |
| Judul Halaman           | title tampil pada tab browser                           | Lulus   |
| Hierarki Heading        | h1, h2, dan h3 berurutan logis                          | Lulus   |
| Landmark                | header, nav, main, footer ditemukan                     | Lulus   |
| Navigasi                | Tautan menuju id yang tersedia                          | Lulus   |
| Aturan .card pada form  | Klik `<form class="card">` → aturan `.card` muncul       | Lulus   |
| Aturan .notice pada p   | Klik `<p class="notice">` → aturan `.notice` muncul      | Lulus   |
| Konflik specificity     | Pada `<p class="notice">` di dalam form → `.card p` aktif, `.notice` dicoret | Lulus   |

## Narasi Hasil Uji
- Pemeriksaan struktur semantik (lang, title, heading, landmark, navigasi) semuanya lulus.  
- Selector `.card` terbukti hanya aktif pada elemen form dengan class `card`.  
- Selector `.notice` terbukti hanya aktif pada paragraf dengan class `notice`.  
- Saat paragraf `.notice` berada di dalam form `.card`, aturan `.card p` lebih spesifik sehingga menang.  
- Urutan aturan CSS dibalik tetap menghasilkan hasil yang sama, membuktikan bahwa **specificity lebih kuat daripada urutan**.  

---

Penjelasan
.card p terdiri dari class selector + element selector → specificity 0-1-1.

.notice hanya class selector → specificity 0-1-0.

.Karena 0-1-1 lebih tinggi daripada 0-1-0, aturan .card p lebih kuat.

.Urutan penulisan tidak mengubah hasil jika specificity berbeda.
Note: Specificity 0‑1‑1 itu ialah cara CSS menghitung “tingkat kekuatan” si selector. Angka itu mewakili tiga kategori:

Kolom pertama (ID selector) → berapa banyak selector ID (#id) yang dipakai.

Kolom kedua (class, attribute, pseudo‑class selector) → berapa banyak selector class (.class), attribute ([type="text"]), atau pseudo‑class (:hover, :nth-child) yang dipakai.

Kolom ketiga (element, pseudo‑element selector) → berapa banyak selector elemen (p, h1, div) atau pseudo‑element (::before, ::after) yang dipakai.

Jadi kalau ditulis 0‑1‑1 artinya:

0 ID selector,

1 class selector,

1 element selector.

# AI Use Statement

Memakai AI untuk membantu menjelaskan konsep validasi HTML, aksesibilitas, konflik specificity CSS, serta box model. AI juga dipakai untuk menyusun tabel pengujian, merangkum hasil observasi, dan membuat penjelasan peta fungsi kode agar lebih sistematis.

Semua saran dari AI tidak langsung dipakai, tetapi dikonfirmasi ulang dengan pengujian manual:
- Validator W3C digunakan untuk memastikan struktur HTML benar. Misalnya, AI menunjukkan error `<main>` di dalam `<header>`, lalu diperbaiki dan divalidasi ulang.
- DevTools dipakai untuk memeriksa landmark, heading, dan box model. AI menjelaskan teori content-box vs border-box, lalu hasilnya diverifikasi di browser.
- Form validation diuji langsung: AI menjelaskan bahwa atribut `required` pada checkbox mencegah submit, dan hasilnya terbukti saat form dicoba.
- Konflik specificity: AI menghitung skor `.card p` = 0‑1‑1 dan `.notice` = 0‑1‑0. Penjelasan ini diuji dengan DevTools, terbukti aturan `.card p` tetap aktif meskipun urutan CSS dibalik.
- JavaScript tombol salam: AI menjelaskan fungsi alert dan console log, lalu diuji dengan klik tombol di browser.

AI juga membantu membuat peta kode HTML:
- `<header>` berfungsi sebagai judul halaman.  
- `<main>` berisi konten utama (profil, tujuan belajar, form).  
- `<form class="card">` berisi input wajib (nama, email, telepon, prodi, tiket, mode kehadiran, minat, catatan, kode peserta).  
- `<script src="main.js">` dipakai untuk menampilkan salam.  

# Sumber Aset
- Gambar ilustrasi: istockphoto.com (https://www.istockphoto.com/id/foto-foto/sql-injection)   

# Batasan
Dalam pengerjaan sesi ini ada beberapa keterbatasan yang saya temui:
- Data yang dikirim melalui form tidak disimpan ke database atau sistem backend; pengujian berhenti pada tahap submit.
- Tampilan card masih sederhana dan belum dioptimalkan untuk semua ukuran layar. Warna dan layout bisa berbeda tergantung browser yang dipakai.
- Pengujian dilakukan di browser Edge; kompatibilitas dari browser lain belum diverifikasi.
- JavaScript yang dipakai hanya menampilkan alert sederhana sebagai salam, belum ada interaksi lebih kompleks.
- Aksesibilitas diuji dengan navigasi keyboard (Tab/Shift+Tab), namun tidak dengan alat lain.
Catatan koreksi ini bertujuan untuk mengetahui apa-apa saja yang perlu dikembangkan di sesi selanjutnya.

# Milestone, Backlog, dan Bug Log:

# Milestone
- **Week 4 Sesi 2**: Struktur HTML divalidasi, form dengan atribut `required`, `pattern`, dan `maxlength` diuji. Tabel pengujian dibuat, konflik specificity dicatat, lalu box model dibanding.
- **Week 4 Sesi 3 (Persiapan)**: Menyusun tabel perbandingan content-box vs border-box, menyiapkan palet warna, ukuran teks, dan skala jarak dengan topik "Unit, Tipografi, dan Sistem Gaya Dasar."

# Backlog
- Menambahkan validasi server-side untuk form.
- Menyatukan database agar data tersimpan.
- Optimasi desain yang responsif untuk bermacam ukuran layar.

# Bug Log
- Input catatan tidak bisa lebih dari 300 karakter (sesuai `maxlength`), sehingga user merasa ada “limit ngetik”.
- Warna background card sempat terlihat menyatu dengan body karena pemilihan warna gelap.
- Navigasi keyboard kadang lompat ke elemen yang tidak diinginkan.
- Specificity `.card p` selalu menang atas `.notice`, walau urutan CSS dibalik.
