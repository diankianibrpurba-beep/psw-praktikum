NAMA    :Dian Kiani Belinna Purba
NIM     :41426036
Prodi   :D4 TRPL

**PSWI Minggu 7 Sesi 2: Pengujian Lintas Halaman, Aksesibilitas, dan Integrasi Navigasi**

# 1. Cara Menjalankan

Buka folder `W07S02` di VS Code, lalu klik kanan `index.html` dan pilih **Open with Live Server**. Halaman akan terbuka di `http://127.0.0.1:5500/index.html`. 

Untuk melakukan pengujian dan audit lengkap:
- Tekan **F12** untuk membuka DevTools.
- Tekan **Ctrl+Shift+M** untuk membuka device toolbar (uji responsif 320px, 768px, 1200px).
- Tekan tombol **Tab** dan **Shift+Tab** pada keyboard untuk menguji aksesibilitas urutan fokus navigasi.
- Tekan **Ctrl + (+/-)** untuk menguji pembesaran (*zoom*) hingga 200%.

*Catatan Path:* Di modul, file `style.css` dipanggil dari folder bersama. Pada proyek ini, file CSS berada di subfolder `css/style.css` dan dipanggil secara konsisten di seluruh halaman (`index.html`, `kegiatan.html`, `daftar.html`, `tentang.html`, dan `kontak.html`).

# 2. Penjelasan Kode & Struktur Halaman

Proyek ini merupakan integrasi lima halaman utama Komunitas Web Mahasiswa dengan pendekatan konsistensi tata letak dan aksesibilitas:

- **`<html lang="id">` & Meta Viewport:** Mengatur bahasa dokumen ke Bahasa Indonesia serta memastikan skala halaman menyesuaikan lebar layar perangkat (`width=device-width, initial-scale=1.0`).
- **Navigasi Konsisten (`aria-current="page"`):** Menggunakan elemen semantik `<nav>` dan `<ul class="nav-list">`. Atribut `aria-current="page"` disematkan khusus pada tautan halaman yang sedang aktif agar pembaca layar (*screen reader*) mengenali lokasi pengguna saat ini.
- **Konsistensi Stylesheet (`css/style.css`):** Menggunakan satu file CSS bersama untuk mengatur tata letak Flexbox pada navigasi agar berjejer horizontal, penataan formulir bersusun vertikal, serta perbaikan posisi `<figure>` dan `<figcaption>`.
- **Aset & Path Relatif Web:** Seluruh gambar dipanggil menggunakan path web relatif yang konsisten tanpa melibatkan path drive Windows (`C:\...`) untuk mencegah kegagalan pemuatan aset (error 404).

# 3. No 6: Audit Keseluruhan Lintas Halaman

Audit dilakukan pada setiap halaman web untuk memastikan interaksi keyboard, tampilan responsif (320px dan 1200px), pembesaran (*zoom* 200%), serta validasi HTML bebas dari error.

| Halaman | Kasus | Harapan | Hasil Nyata | Status |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | Uji Link & Navigasi | Semua link dapat diklik, `aria-current="page"` hanya di 'Beranda' | Navigasi berpindah lancar, indikator aktif berada di 'Beranda' | **Sesuai** |
| `index.html` | Zoom 200% & Keyboard | Konten tidak terpotong, fokus Tab terlihat jelas di menu navigasi | Tampilan menyesuaikan tanpa overflow, *outline* fokus terlihat | **Sesuai** |
| `kegiatan.html` | Aset Gambar & Tabel | Gambar dokumentasi & banner termuat (tidak 404), tabel terformat | Gambar muncul rata kiri dengan caption di bawah, tabel rapi | **Sesuai** |
| `kegiatan.html` | Viewport 320px | Tabel dan gambar tidak menyebabkan scroll horizontal | Tabel dan gambar menyesuaikan lebar layar 320px | **Sesuai** |
| `daftar.html` | Form & Validasi Input | Form tersusun vertikal, input `required` memicu tooltip error saat kosong | Form gagal dikirim jika ada kolom wajib yang kosong | **Sesuai** |
| `daftar.html` | Uji Input Kode (6 Digit) | `pattern="[0-9]{6}"` menolak input kurang/lebih dari 6 digit | Peringatan validasi browser muncul jika format kode salah | **Sesuai** |
| `tentang.html` | Path Aset & Layout | Banner pemandangan termuat, navigasi aktif di 'Tentang' | Gambar termuat sempurna via path relatif, `aria-current` sesuai | **Sesuai** |
| `kontak.html` | Aksesibilitas Link Mailto/Tel | Link email (`mailto:`) dan telp (`tel:`) dapat diinteraksi | Browser memicu aksi default pembuka aplikasi email/telepon | **Sesuai** |

# 4. No 7: Latihan Mandiri dan Matriks Uji

# 4.1 Dugaan Sebelum Eksperimen

Bagian ini ditulis sebelum menjalankan eksperimen pada pengujian formulir pendaftaran dan keterbacaan data panjang di halaman `daftar.html` pada viewport 320px.

| Eksperimen | Dugaan Saya | Alasan Teknis |
| :--- | :--- | :--- |
| Data Teks Panjang Tanpa Spasi (tanpa `overflow-wrap`) | Teks menembus kotak form/kartu dan memicu scroll horizontal (`Console: true`) | Teks tanpa spasi tidak memiliki titik pemotongan alami, sehingga lebarnya melebihi batas wadah pendaftaran. |
| Input Form Kosong (Kolom Wajib) | Form menolak pengiriman data dan menyorot input error pertama | Atribut `required` pada HTML5 memblokir *event submit* sebelum seluruh syarat terpenuhi. |
| Pengujian Keyboard (`Tab`) di 320px | Fokus berpindah secara berurutan mulai dari link navigasi hingga tombol Submit form | Urutan fokus (*tabindex* alami) mengikuti urutan dokumen HTML dari atas ke bawah. |
| Zoom 200% di Layar Kecil | Layout tetap bersusun satu kolom, tidak ada teks yang saling bertumpuk | CSS menggunakan unit fleksibel dan `max-width: 100%` pada elemen input dan gambar. |

# 4.2 Hasil Aktual & Matriks Uji

| No | Jenis Kasus | Input / Kondisi | Tindakan | Dugaan | Hasil Aktual | Sesuai? |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Kasus Normal** | Mengisi form `daftar.html` dengan data valid & klik link navigasi | Klik semua menu dan kirim form valid | Semua link berjalan, `aria-current` tepat, form berhasil dikirim | Jalur navigasi tidak ada yang 404, `aria-current` hanya di halaman aktif, data form terproses | **Ya** |
| 2 | **Kasus Batas** | Viewport 320px & Zoom 200% pada `kegiatan.html` dan `daftar.html` | Ubah ukuran layar di DevTools dan tekan Ctrl+ | Konten tidak terpotong, interaksi form dan tabel tetap tersedia | Layar 320px dan zoom 200% menampilkan seluruh elemen dengan rapi tanpa kehilangan fungsi | **Ya** |
| 3 | **Kasus Batas** | Input kode peserta tepat 6 digit numerik (`001234`) | Ketik 6 digit angka lalu klik Daftar | Input diterima oleh validasi `pattern="[0-9]{6}"` | Form lolos validasi regex dan diproses | **Ya** |
| 4 | **Kasus Gagal** | Mengosongkan Email / Nama wajib, atau mengisi kode kurang dari 6 digit | Klik tombol *Daftar* saat form belum valid | Form ditolak dan browser memunculkan peringatan validasi | Browser menahan submit (*blocked*) dan menampilkan tooltip error pada kolom terkait | **Ya** |
| 5 | **Kasus Gagal** | Memasukkan teks catatan sangat panjang tanpa spasi (320px) | Tempel string panjang tanpa spasi ke form/paragraf | Teks meluber keluar wadah jika tanpa `overflow-wrap: anywhere` | Teks meluber keluar area tampilan (`scrollWidth > clientWidth`) | **Ya** |
| 6 | **Retest** | Penambahan CSS `overflow-wrap: anywhere;` pada teks panjang | Ulangi pengujian pada viewport 320px | Teks terpotong rapi ke baris bawah dan scroll horizontal hilang | Teks terbungkus rapat di dalam wadah, scroll horizontal hilang (`Console: false`) | **Ya** |

# 4.3 Penilaian & Penjelasan Bukti

- **Penjelasan Kasus Gagal & Retest:** Pada saat data teks panjang tanpa spasi diuji tanpa properti `overflow-wrap`, kata tersebut tidak dapat dipotong oleh browser sehingga meluber keluar dari lebar wadah (memicu scroll horizontal). Setelah ditambahkan `overflow-wrap: anywhere;`, browser diizinkan memotong string di posisi mana saja sehingga tata letak kembali utuh.
- **Penjelasan Validasi Form:** Pengujian form terbukti aman karena atribut `required`, `type="email"`, `type="tel"`, dan `pattern="[0-9]{6}"` secara aktif mencegah data tidak valid masuk ke sistem.

# 5. Troubleshooting & Catatan Diagnosis

Dalam proses integrasi dan pengujian modul W07S02, ditemukan beberapa kendala teknis yang diselesaikan dengan pola diagnosis aman:

1. **Gejala: Menu navigasi bersusun ke bawah (vertikal).**
   - *Pemeriksaan:* Diperiksa melalui *DevTools Elements & Computed Style*. Ditemukan bahwa file `css/style.css` sempat tidak terload/terhapus.
   - *Tindakan:* Menghubungkan kembali `<link rel="stylesheet" href="css/style.css">` dan menambahkan aturan `.nav-list { display: flex; gap: 20px; }`.
   - *Retest:* Refresh browser, menu navigasi kembali berjejer horizontal ke samping.

2. **Gejala: Teks caption (`figcaption`) bergeser ke sebelah kanan gambar.**
   - *Pemeriksaan:* Diperiksa CSS bawaan `figure`. Gambar dan caption berada dalam alur inline.
   - *Tindakan:* Mengatur `main figure:not(.banner-foto) { text-align: left; }` dan `figcaption { display: block; margin-top: 5px; }`.
   - *Retest:* Gambar tetap di posisi kiri (*default*) dan teks keterangan berada tepat di bawahnya.

3. **Gejala: Gambar tidak muncul (Error 404 pada Network Tab).**
   - *Pemeriksaan:* Jalur gambar menggunakan nama file lokal dengan ekstensi yang tidak sesuai huruf besar/kecilnya (`PEMANDANGAN.JPG`).
   - *Tindakan:* Mengganti sumber gambar menggunakan path URL web online yang stabil serta memastikan tidak ada path lokal Windows (`C:\...`).
   - *Retest:* Tab Network menunjukkan status `304` untuk seluruh aset gambar.

# 6. Batasan Sistem

- Gambar aset dimuat menggunakan URL gambar online (Unsplash/Bing CDN). Jika tidak ada koneksi internet, gambar tidak akan muncul dan browser hanya akan menampilkan teks alternatif (`alt`).
- Pengujian validasi formulir saat ini menggunakan validasi bawaan HTML5 (*client-side validation*) tanpa pemrosesan backend (*server-side*).
- Indikator halaman aktif `aria-current="page"` diset secara manual di masing-masing file HTML.

# 7. AI Use Statement

- **Alat AI yang Digunakan:** Gemini & Claude.
- **Tujuan:** Membantu diagnosis layout CSS (Flexbox & Figcaption), menyusun skenario uji matriks W07S02, serta merapikan struktur dokumentasi README sesuai standar modul praktikum.
- **Bagian yang Dibantu:** Pembuatan kueri CSS perbaikan layout navigasi/gambar, formulasi tabel audit & matriks uji kasus normal/batas/gagal, serta panduan troubleshooting.
- **Verifikasi Mandiri:** Seluruh saran kode dan skenario uji telah dijalankan langsung di browser lokal menggunakan DevTools (Mode Responsive 320px/1200px, Tab Keyboard, Zoom 200%, dan Pengecekan Network Tab). Hasil aktual dicatat berdasarkan pengujian nyata.
- **Keamanan Data:** Tidak ada data pribadi, NIM nyata, password, atau API key yang dimasukkan ke dalam alat AI.

# 8. Sumber Aset

- Banner Pemandangan → Unsplash Nature Collection (`https://images.unsplash.com/photo-1506744038136-46273834b3fb`)
- HTML Icon → https://cdn-icons-png.flaticon.com/512/2721/2721292.png
- CSS Icon → https://cdn-icons-png.flaticon.com/512/732/732190.png 
- Audit Icon → https://cdn-icons-png.flaticon.com/512/1828/1828911.png 
- HTML Icon Kegiatan → https://tse2.mm.bing.net/th/id/OIP.jqrxDUc6QcUvRkZ1PyYZtQHaHa 
- Bootcamp Icon → https://cdn-icons-png.flaticon.com/512/1055/1055687.png