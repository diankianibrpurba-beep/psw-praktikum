NAMA  : Dian Kiani Belinna Purba
NIM   : 41426036
PRODI : D4 TRPL (2)
# Praktikum 4 sesi 3

# 1. Pendahuluan
Di sesi ini saya belajar tentang **unit, tipografi, dan sistem gaya dasar**.  
Awalnya saya kira CSS cuma buat warna dan ukuran, tapi ternyata ada hal penting kayak `box-sizing`, custom properties, dan cara atur line-height biar teks lebih enak dibaca.

# 2. Cara Menjalankan
- Buka folder `Week 4/sesi-03` di VS Code.  
- Jalankan `index.html` dengan Live Server.  
- Pastikan `style.css` sudah terhubung di `<head>`.  
- Coba resize layar, zoom, dan tab keyboard untuk uji.

# 3. Implementasi & Pengalaman
- **Box-sizing** → saat memakai `border-box`, saya paham kenapa elemen tak melebar kalau ada padding. Sebelumnya bingung kenapa kotak jadi tambah besar.  
- **Custom properties** → ternyata kalau pakai `--brand` dan `--space`, mudah ganti warna/spacing. Jadi tidak perlu ubah banyak baris CSS.  
- **Tipografi** → pakai `rem` bikin ukuran teks ikut skala browser. Pas zoom 200%, teks masih terbaca. Jadi saya paham kenapa `px` kadang bikin teks terlihat kaku.  
- **Line-height tanpa unit** → awalnya saya kira harus pakai `px`, tapi ternyata kalau tanpa unit lebih fleksibel.  
- **Max-width 65ch** → baru tahu kalau `ch` itu ukuran karakter. Jadi paragraf tidak kepanjangan, lebih nyaman dibaca.  
- **Focus-visible** → pas coba tab keyboard, outline biru muncul. Jadi saya paham pentingnya aksesibilitas, bukan cuma tampilan.

# 4. Hasil Uji
- **Resize layar kecil & besar**  
  - Harapan: wadah `main` tetap di tengah, tidak melewati batas.  
  - Hasil nyata: sesuai, form tetap di dalam `main`.  

- **Ganti `--brand`**  
  - Harapan: semua outline dan komponen ikut berubah.  
  - Hasil nyata: sesuai, warna fokus langsung berubah.  

- **Zoom 200%**  
  - Harapan: teks tetap terbaca, tidak terpotong.  
  - Hasil nyata: sesuai, teks masih jelas dan layout tidak rusak.  

- **Tab keyboard**  
  - Harapan: outline fokus muncul di input dan button.  
  - Hasil nyata: sesuai, outline biru terlihat jelas.  

- **Validasi CSS**  
  - Harapan: tidak ada error besar.  
  - Hasil nyata: sesuai, cuma ada aturan lama yang aku hapus.

# 5. Catatan Diagnosis
- Pernah salah tulis selector, jadi CSS tidak jalan. Setelah cek di DevTools, ketahuan ada typo.  
- Ada masalah kecil antara aturan lama dan baru, saya hapus yang tak dipakai.  
- Semua kontrol bisa dipakai dengan keyboard, jadi aksesibilitas baik.

# 6. AI Use Statement
Saya pakai AI Copilot buat bantu menjelaskan konsep CSS, bikin draft README, menjelaskan fungsi tag-nya, dan memberi ide diagnosis error. 

# 7. Penjelasan validator before & after
- **Before:**  
  - Validator menampilkan error *“Stray end tag div”* karena ada `<p>` yang ditutup dengan `</div>`.  
  - Validator juga menampilkan error *“Attribute required not allowed on element input”* karena parser bingung akibat tag salah tutup.  

- **After:**  
  - Tag penutup diperbaiki jadi `</p>`.  
  - Atribut `required` ditulis dengan benar.  
  - Validator menunjukkan *“Document checking completed. No errors or warnings to show.”*  
 *tambahan untuk audit:
  Validator: sebelum ada error (colr, 2rrem, brace hilang), sesudah sudah valid.

Box Model: screenshot before (error, ukuran tidak konsisten) dan after (sudah benar dengan box-sizing: border-box).

Fokus Keyboard: before outline default kurang jelas, after ditambahkan :focus-visible jadi outline biru tegas.

## Uji Batasan
- Validasi hanya di browser.  
- Tidak ada server/database.  
- Tampilan masih sederhana.  
- Uji cuma di Chrome/Edge.  
- JavaScript masih dasar.  
- Aksesibilitas baru pakai keyboard.

# Milestone: catat tahap pencapaian besar (misalnya validasi HTML selesai, Box Model audit selesai, fokus keyboard ditambahkan).

# Backlog: daftar kerjaan yang belum dikerjakan tapi direncanakan (misalnya validasi server‑side, uji di browser lain, tambah interaksi JS).

# Bug Log: catatan error yang ditemukan saat uji (contoh: typo colr, unit 2rrem, brace hilang).

