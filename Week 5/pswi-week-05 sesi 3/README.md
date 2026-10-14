NAMA    :Dian Kiani Belinna Purba
NIM     :41426036
Prodi   :D4 TRPL

**Praktikum PSW I – Week 5 Sesi 3**

# Cara Menjalankan
- Buka `index.html` langsung di browser.  
- Atau pakai Live Server di VS Code untuk preview.  

# Implementasi & Pengalaman
- Struktur HTML pakai elemen semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.  
- Navigasi fleksibel dengan Flexbox.  
- Katalog kegiatan menggunakan Grid, card responsif.  
- Tambahan tombol Greeting dengan JavaScript.  

# Hasil Uji Layout
Uji Nol Card
- Container `.catalog` kosong, layout tetap stabil.  

Uji Satu Card
- Card tunggal tampil rapi, auto-placement benar.  

Uji Lima Card
- 4 card di baris pertama, card ke-5 otomatis turun ke baris kedua.  

Uji 320px Viewport
- Card wrap rapi, teks tetap terbaca, tidak overflow.  

Uji Urutan Tab
- Fokus Tab sesuai alur DOM: navigasi → card → tombol Greeting → footer.  

# Batasan
- Validasi form hanya client-side, belum ada backend.  
- Data tidak disimpan ke database.  
- Tampilan baru diuji di Chrome/Edge.  
- Aksesibilitas baru diuji keyboard, belum screen reader.  

# Validasi HTML & CSS
- **Before**: terdapat warning *“Section lacks heading”* pada `<section>` tanpa `<h2>–<h6>`.  
- **After**: setelah menambahkan heading, validasi bersih.  

![Validasi HTML](attachments/8PzbHZHvdZpVZjQCSTdmd.png)

📌 Penjelasan: Validator memberi peringatan agar setiap `<section>` memiliki heading untuk aksesibilitas. Setelah diperbaiki, hasil validasi menunjukkan dokumen sesuai standar.  

# Latihan Mandiri dan Matriks Uji

| Kasus        | Harapan                          | Prediksi sebelum uji                   | Hasil aktual setelah uji              | Bukti SS |
|--------------|----------------------------------|----------------------------------------|---------------------------------------|----------|
| 320px        | Tidak overflow, card tetap terbaca | Card wrap rapi, teks masih terbaca     | Card wrap rapi, teks terbaca jelas    | ✔ SS 320px |
| Satu card    | Auto-placement benar             | Card tunggal tampil rapi di grid       | Card tunggal tampil rapi di grid      | ✔ SS 1 card |
| Lima card    | Auto-placement benar             | 4 card di baris pertama + 1 turun      | 4 card di baris pertama + 1 turun     | ✔ SS 5 card |
| Tidak overflow | Card tetap terbaca             | Tidak ada elemen keluar container      | Semua card tetap dalam container      | ✔ SS overflow |
| Urutan Tab   | Sama dengan alur DOM             | Fokus Tab pindah sesuai urutan HTML    | Fokus Tab sesuai urutan DOM           | ✔ SS Tab-nav |

# TROUBLESHOOTING DAN AI USE STATEMENT
**-Gejala & Pemeriksaan-**
- **Halaman tidak berubah** → File belum disimpan; setelah save dan refresh, halaman tampil normal.  
- **404 Not Found** → Path salah karena kapitalisasi nama folder; setelah diperbaiki, halaman bisa diakses.  
- **CSS tidak cocok** → Card tidak bergaya sesuai harapan; diperiksa di DevTools tab *Computed*, ternyata konflik selector.  
- **ReferenceError: greetingButton is null** → Script dijalankan sebelum DOM siap; solusi dengan `DOMContentLoaded`.  
- **Elemen null** → Selector salah ketik; setelah diperbaiki, elemen bisa diakses.  
- **Data tidak sesuai** → Parsing salah; setelah diperbaiki, output sesuai harapan.  

# Narasi Troubleshooting
Selama praktikum Week 5 Sesi 3, saya mengalami beberapa error di console browser. Halaman tidak berubah karena lupa save, atau muncul 404 karena path file salah. Ada juga tampilan card yang tidak cocok akibat konflik CSS specificity, yang saya periksa lewat DevTools dan catat sebagai “known issue” sesuai teori. Error paling jelas adalah **ReferenceError: greetingButton is null**, karena script jalan sebelum DOM siap. Setelah saya bungkus kode dengan `DOMContentLoaded`, tombol Greeting berfungsi dan console normal. 

# Catatan Penggunaan AI/AI use statement
- Saya memakai AI untuk penjelasan konsep dan diagnosis dengan **data fiktif**, bukan data asli.    
- Saran AI saya uji ulang di browser dan matriks uji, misalnya untuk validasi HTML dan konflik CSS specificity.  
- Alat yang dipakai (DevTools, Validator), tujuan (memeriksa error), bagian bantuan (penjelasan konsep), dan verifikasi (uji ulang di browser).  
- AI membantu saya menyusun tabel pengujian.
- AI membantu saya dalam menyusun apa-apa saja yang perlu saya lakukan menurut modul.

# Prediksi dan Implemengtasi
- **Sebelum uji**: saya menduga card akan tetap wrap rapi di 320px, auto-placement akan benar, dan urutan Tab sesuai DOM.  
- **Sesudah uji**: hasil aktual sesuai prediksi, tidak ada overflow, card tetap terbaca, dan Tab navigation berjalan sesuai alur HTML.  
- **Refleksi**: validasi HTML/CSS ternyata penting untuk memastikan struktur semantik benar dan aksesibilitas terjaga. Dengan latihan mandiri ini, saya lebih percaya diri bahwa layout responsif bisa diuji sistematis, bukan hanya “kelihatan bagus”.  

# Milestone, Backlog, dan Bug Log

# Milestone
- Week 5 Sesi 2: Validasi form client-side sudah diuji.  
- Week 5 Sesi 3: Layout responsif diuji dengan matriks nol/satu/lima card, viewport 320px, dan urutan Tab. Validasi HTML/CSS sudah dilakukan. README lengkap disusun.  


# Backlog
- Menambahkan validasi server-side untuk form.    
- Uji kompatibilitas di browser lain (Firefox, Safari).  
- Menambah interaksi JavaScript lebih kompleks (misalnya konfirmasi submit atau validasi dinamis).  
- Optimalkan desain responsif untuk berbagai ukuran layar.  

# Bug Log  
Selama Week 5 Sesi 3, beberapa bug sempat muncul saat pengujian. Pertama, validator HTML menampilkan peringatan section lacks heading karena ada <section> tanpa heading. Dugaan saya, struktur semantik belum lengkap. Setelah menambahkan <h2>, peringatan hilang dan validasi bersih. Kedua, di console sempat muncul ReferenceError karena script dijalankan sebelum elemen DOM siap. Solusinya adalah menambahkan event DOMContentLoaded, dan setelah retest error tidak muncul lagi. Ketiga, terjadi konflik CSS specificity antara aturan .card p dan .notice. Hasilnya sesuai teori: selector .card p lebih kuat sehingga tetap menang meskipun .notice ditulis setelahnya. Bug dicatat sebagai “known issue” untuk menunjukkan pemahaman konsep specificity. Lalu, pada viewport kecil sempat terjadi overflow karena padding terlalu besar, namun setelah margin dan padding disesuaikan, layout kembali stabil.

# Sumber Aset
HTML Icon → https://cdn-icons-png.flaticon.com/512/2721/2721292.png

CSS Icon → https://cdn-icons-png.flaticon.com/512/732/732190.png

Audit Icon → https://cdn-icons-png.flaticon.com/512/1828/1828911.png 

HTML Icon Kegiatan → https://tse2.mm.bing.net/th/id/OIP.jqrxDUc6QcUvRkZ1PyYZtQHaHa

Bootcamp Icon → https://cdn-icons-png.flaticon.com/512/1055/1055687.png

Card percobaan ke-5 menggunakan ikon Git dari Flaticon → https://cdn-icons-png.flaticon.com/512/919/919851.png 

Font web yang dipakai: Arial.