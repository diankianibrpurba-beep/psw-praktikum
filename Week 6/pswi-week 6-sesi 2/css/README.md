NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
PRODI   : D4 TRPL

# PSWI Minggu 6 Sesi 2: Mobile-first dan Media Query

# 1. Cara Menjalankan

Buka folder `sesi-02` di VS Code, lalu klik kanan `index.html` dan pilih **Open with Live Server**. Halaman akan terbuka di `http://127.0.0.1:5500/index.html`. Setelah itu tekan F12 untuk membuka DevTools, tekan Ctrl+Shift+M untuk membuka device toolbar, pilih mode Responsive, lalu isi lebar layar secara manual.
Di modul, `style.css` dan `main.js` disebut ada di folder utama. Di proyek saya, keduanya ada di subfolder `css/` dan `js/`. Tidak masalah karena path di `index.html` sudah sesuai.

# 2. Penjelasan Kode

Halaman ini adalah katalog kegiatan dari Minggu 5 yang saya buat dengan pendekatan mobile-first. Artinya, saya mulai dari tampilan satu kolom untuk layar kecil, lalu menambah kolom saat ruangnya cukup.

- Meta viewport (`width=device-width, initial-scale=1.0`) membuat lebar halaman mengikuti lebar layar perangkat.
- Grid satu kolom (`grid-template-columns: 1fr`) adalah tampilan dasar untuk layar kecil.
- Media query `min-width: 48rem` mengubah katalog menjadi dua kolom saat lebar layar minimal 48rem. Jika 1rem = 16px, berarti 768px. Breakpoint ini ditentukan oleh kecukupan ruang, bukan oleh ukuran perangkat tertentu.
- `.card { min-width: 0; }` dipakai karena item grid dan flex memiliki `min-width: auto` secara bawaan, sehingga tidak mau lebih kecil dari isinya. Dengan `min-width: 0`, kartu boleh mengecil mengikuti kolom.
- `overflow-wrap: anywhere` pada `.card h3` dan `.card p` membuat teks boleh dipotong di mana saja, sehingga kata yang sangat panjang tidak keluar dari kartu.
- `.nav-list { flex-wrap: wrap; }` membuat menu boleh turun ke baris berikutnya kalau tidak muat.
- `input, select, textarea { max-width: 100%; }` menjaga form tidak keluar dari wadah. Halaman saya belum memiliki form, jadi aturan ini hanya disiapkan.

Saya mengasumsikan 1rem = 16px. Asumsi ini saya cek lewat Console dengan `getComputedStyle(document.documentElement).fontSize`.

# 3. No 6: Matriks Viewport

Prediksi saya tulis sebelum menguji. Hasil aktual saya isi berdasarkan yang benar-benar terlihat di browser. Untuk mengecek scroll horizontal, saya memakai perintah ini di Console (`true` berarti ada overflow):

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth
```

# 3.1 Uji ukuran kecil, sedang, dan besar

| No | Kasus | Viewport | Prediksi (sebelum uji) | Hasil aktual | Sesuai? |
| :-- | :---- | :------- | :--------------------- | :----------- | :------ |
| 1 | Kecil | 320px | Satu kolom, empat kartu bertumpuk, judul panjang turun ke baris bawah, Console `false` | | |
| 2 | Batas bawah | 767px | Masih satu kolom karena media query belum aktif | | |
| 3 | Batas | 768px | Dua kolom karena 48rem tepat terpenuhi | | |
| 4 | Batas atas | 769px | Dua kolom | | |
| 5 | Besar | 1200px | Dua kolom, tanpa scroll horizontal, Console `false` | | |
| 6 | Zoom | 200% | Layar sekitar 1280px menjadi sekitar 640 CSS px, layout kembali satu kolom, konten tidak terpotong | | |

# 3.2 Overflow yang disengaja (width 900px)

Untuk bagian ini, kartu pertama saya beri class `bug`. Antara before dan after, yang berubah hanya CSS. HTML-nya sama.

| Tahap | CSS yang dipakai | Viewport | Prediksi (sebelum uji) | Hasil aktual | Sesuai? |
| :---- | :--------------- | :------- | :--------------------- | :----------- | :------ |
| Before | `.card.bug { width: 900px; }` | 900px | Kartu selebar 900px lebih lebar dari kolomnya (sekitar 430px), muncul scroll horizontal, Console `true` | | |
| After | `.card.bug { width: 100%; max-width: 100%; }` | 900px | Kartu mengikuti lebar kolom, scroll horizontal hilang, Console `false` | | |

Penjelasan: overflow terjadi karena lebar tetap 900px lebih besar daripada lebar kolom grid, sehingga kartu keluar dari wadahnya. Setelah diganti menjadi `width: 100%` dan `max-width: 100%`, kartu mengikuti lebar kolom dan scroll horizontal hilang. Setelah selesai, class `bug` dan aturannya saya hapus lagi.

# 4. No 7: Latihan Mandiri dan Matriks Uji

# 4.1 Dugaan sebelum eksperimen

Bagian ini saya tulis sebelum menjalankan eksperimen dan tidak saya ubah setelahnya. Eksperimennya: saya menaruh satu kata panjang tanpa spasi di kartu 3, lalu menguji pada lebar 320px, pertama tanpa `overflow-wrap`, lalu dengan `overflow-wrap: anywhere`.

| Eksperimen | Dugaan saya | Alasan |
| :--------- | :----------- | :---- |
| Data panjang, CSS gagal, 320px | Kata keluar dari kartu dan muncul scroll horizontal, Console `true` | Kata tanpa spasi tidak punya tempat untuk dipotong, jadi lebarnya (sekitar 900px) melebihi kotak paragraf (sekitar 254px). |
| Ukuran kotak paragraf kartu 3 | Sekitar 254px | 320 - 32 (padding body) - 32 (padding kartu) - 2 (border). |
| Data panjang, CSS perbaikan, 320px | Kata terpecah ke beberapa baris di dalam kartu, Console `false`, `scrollWidth` hampir sama dengan `clientWidth` | `overflow-wrap: anywhere` membolehkan kata dipotong di mana saja. |
| Perbandingan CSS gagal dan perbaikan | Hanya CSS yang berubah, HTML tetap | Penyebabnya ada di aturan `overflow-wrap`, bukan di struktur HTML. |
| Keyboard (Tab), 320px | Tab pertama ke “Beranda”. Urutannya: empat link navigasi, empat link Detail, lalu tombol Greeting (sembilan titik fokus). | Urutan Tab mengikuti urutan elemen di HTML, sedangkan `h1` dan paragraf tidak bisa difokuskan. |
| Sekitar breakpoint | 767px = satu kolom; 768px dan 769px = dua kolom | `min-width: 48rem` terpenuhi mulai 768px. |
| Zoom 200% | Konten tetap lengkap dan tidak terpotong, layout satu kolom | Zoom membuat lebar viewport efektif menjadi sekitar 640 CSS px. |

# 4.2 Hasil aktual data panjang

Cara mengukurnya, saya jalankan kode di bawah di Console:

```js
const p = document.querySelectorAll('.card p')[2];
console.log({
  clientWidth: document.documentElement.clientWidth,
  pScroll: p.scrollWidth,
  pClient: p.clientWidth,
  halamanOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
});
```

| Pengamatan | Gagal (tanpa `overflow-wrap`) | Retest (`overflow-wrap: anywhere`) |
| :--------- | :----------------------------- | :--------------------------------- |
| `document.documentElement.clientWidth` | 320 | |
| `scrollWidth` paragraf kartu 3 | 986 | |
| `clientWidth` paragraf kartu 3 | 254 | |
| `halamanOverflow` | `true` | |
| `overflow-wrap` / `word-break` | `normal` / `normal` | |
| Tampilan | Kata menembus tepi kartu | |

Hasil kasus gagal sesuai dugaan: kata menembus (986px dibandingkan 254px), dan lebar kotak paragraf memang 254px. Hasil retest dicatat setelah pengujian.

# 4.3 Matriks uji

| No | Jenis | Kondisi | Tindakan | Dugaan | Hasil aktual | Sesuai? |
| :-- | :---- | :------ | :------- | :----- | :----------- | :------ |
| 1 | Normal | 320px tanpa data panjang | Buka halaman, cek Console | Satu kolom; cek ukuran kotak paragraf | Lihat No. 6 baris 1 | |
| 2 | Batas | 767 / 768 / 769px | Ubah lebar viewport | 767px satu kolom; 768px dan 769px dua kolom | Lihat No. 6 baris 2 sampai 4 | |
| 3 | Batas | Zoom 200% | Tekan Ctrl + sampai 200% | Konten tetap lengkap dan layout menjadi satu kolom | Lihat No. 6 baris 6 | |
| 4 | Batas | Keyboard, 320px | Tab dari atas, Shift+Tab, Enter pada tombol Greeting | Tab pertama ke “Beranda”; urutan fokus mengikuti urutan elemen di HTML | Catat urutan fokus, tampilan outline, hasil Shift+Tab, dan hasil menekan Enter pada tombol | |
| 5 | Gagal | Kata panjang, tanpa `overflow-wrap`, 320px | Cek Console | Kata meluber dan scroll horizontal muncul | `scrollWidth` 986, `clientWidth` 254, `halamanOverflow` `true` | Ya |
| 6 | Retest | Kata panjang, `overflow-wrap: anywhere`, 320px | Ulangi pengujian | Kata terbungkus di dalam kartu dan scroll horizontal hilang | | |

# 4.4 Penjelasan

Pada kasus gagal, kata tanpa spasi tidak punya tempat untuk dipotong, sehingga lebarnya (986px) lebih besar daripada kotak paragraf (254px) dan kata keluar dari kartu. `min-width: 0` hanya membuat kartu boleh mengecil, tetapi tidak memotong kata. Setelah `overflow-wrap: anywhere` ditambahkan, browser boleh memotong kata di mana saja, sehingga teks tetap berada di dalam kartu. Setelah retest, catat apakah dugaan sebelum eksperimen sesuai dengan hasil aktual.

# 5. Catatan Diagnosis

Saya pakai pola dari modul: kecilkan kasus, baca bukti, ubah satu penyebab, lalu retest. Ada tiga masalah yang saya temui:

1. **Kata panjang tampak rapi.** CSS gagal sudah terpasang, tetapi kata di kartu terlihat rapi. Setelah saya periksa, kartu 3 masih berisi teks pendek “Menguji kualitas.” sehingga kata panjangnya belum ada di `index.html`. Saya menambahkan kata panjang ke paragraf kartu 3, lalu menguji ulang.
2. **Tampilan rapi padahal angkanya meluber.** Console menunjukkan `overflow-wrap` bernilai `normal`, `scrollWidth` 986, dan `clientWidth` 254. Artinya kata memang meluber ke sisi kanan di luar area yang terlihat. Setelah saya scroll ke kanan, kata yang menembus kartu terlihat.
3. **`window.innerWidth` tidak konsisten.** Hasilnya berubah-ubah (656, lalu 1020), bukan 320. Saya lalu memakai `document.documentElement.clientWidth`, yang hasilnya 320. `clientWidth` paragraf 254 juga cocok dengan hitungan 320 - 32 - 32 - 2. Jadi lebar 320px terbukti benar dan `window.innerWidth` tidak saya pakai sebagai patokan.

# 6. Batasan

- Gambar kartu dimuat dari CDN Flaticon. Kalau tidak ada internet, gambar tidak muncul dan yang tampil hanya teks alt.
- Halaman belum memiliki input, select, atau textarea. Aturan `max-width: 100%` untuk form baru disiapkan dan belum diuji langsung.
- Breakpoint 48rem saya anggap 768px dengan root font 16px.
- Hanya ada satu breakpoint (dua kolom), jadi di layar 1200px ke atas kartu terlihat lebar karena container belum diberi `max-width`.
- Kode uji sementara (class `bug`, kata panjang, dan CSS gagal).

# 7. AI Use Statement

- Alat: Claude dan Copilot.
- Tujuan: memahami konsep media query, `min-width: 0`, dan `overflow-wrap`, menyusun skenario uji, serta merapikan format README.
- Bagian yang dibantu: contoh CSS untuk kasus overflow 900px dan data panjang, kerangka tabel matriks uji, dan bantuan diagnosis saat kata panjang tidak terlihat meluber.
- Verifikasi: semua saran saya jalankan sendiri di browser (DevTools mode Responsive, zoom, dan Console `scrollWidth` / `clientWidth`). Hasil aktual saya catat dari pengamatan sendiri. Saran yang tidak cocok dengan hasil, misalnya soal `window.innerWidth`, saya cek ulang dengan `document.documentElement.clientWidth`.
- Data: hanya data fiktif. Tidak ada password, API key, atau data pribadi.

# Sumber Aset
HTML Icon → https://cdn-icons-png.flaticon.com/512/2721/2721292.png

CSS Icon → https://cdn-icons-png.flaticon.com/512/732/732190.png

Audit Icon → https://cdn-icons-png.flaticon.com/512/1828/1828911.png 

HTML Icon Kegiatan → https://tse2.mm.bing.net/th/id/OIP.jqrxDUc6QcUvRkZ1PyYZtQHaHa

Bootcamp Icon → https://cdn-icons-png.flaticon.com/512/1055/1055687.png