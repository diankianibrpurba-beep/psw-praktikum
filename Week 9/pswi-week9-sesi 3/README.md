NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 9 Sesi 3: Pure Functions, Collection Management, Destructuring & Scope, dan ES Modules**

1. Tujuan Praktikum

- Memahami dan menerapkan konsep *Pure Functions* (fungsi murni) yang bersifat deterministik tanpa (*side effects*).
- Mengelola koleksi data berbasis array memakai `.filter()` dan `.map()` untuk manipulasi data secara eksplisit.
- Menerapkan teknik *Destructuring* objek serta menganalisis perilaku isolasi *Block Scope* (`let`/`const`) hingga penanganan `ReferenceError`.
- Memperbaiki *scope* variabel secara terstruktur tanpa mencemari cakupan global (*global scope*).
- Memisahkan logika program ke dalam struktur ES Modules (`import`/`export`) dan uji eksekusi modul memakai server lokal (*Live Server*) untuk menghindari kendala *CORS Policy*.
- Menyusun matriks pengujian sistematis, catatan *troubleshooting*, serta transparansi pemakaian AI (*AI Use Statement*).

2. Struktur Proyek & Integrasi File

Struktur folder dan file pada modul `psw-week9-sesi3` ini adalah sebagai berikut:
psw-week9-sesi3/
├── README.md
├── index.html
├── js/
│   ├── main.js
│   └── utils.js
└── bukti/
    ├── 01_pure_function.png
    ├── 02_filter_map_koleksi.png
    ├── 03_reference_error_scope.png
    ├── 04_perbaikan_scope_aman.png
    └── 05_es_modules_live_server.png

3. Workflow & Eksekusi Perintah Git

Berikut adalah urutan perintah Git yang telah dijalankan di terminal VS Code selama pengembangan dan pengujian program:

1. Memeriksa Status dan Mengatur Branch Utama:
   git status
   git checkout -b main

2. Menambahkan Perubahan Kode Script dan Laporan:
   Memperbarui logika pada `js/main.js` dan `js/utils.js` untuk nomor 3 sampai dengan nomor 6 serta melengkapi dokumentasi pada `README.md`.

3. Melakukan Staging File:
   git add js/main.js js/utils.js index.html README.md bukti/

4. Commit Perubahan Fitur Logika JavaScript:
   git commit -m "feat(w09s03): implementasi pure function, filter map koleksi, scope isolation, dan es modules"

5. Pemeriksaan Riwayat Commit:
   git log --oneline -n 5

*Keputusan yang diambil:*

- *Pengikatan Script Modul:* Menggunakan atribut `<script type="module" src="js/main.js"></script>` pada HTML untuk mendukung fitur native ES Modules (`import`/`export`).
- *Isolasi Block Scope:* Mengisolasi variabel di dalam kurung kurawal `{}` untuk membuktikan batasan *scope* lokal serta menangkap pesan `ReferenceError` saat diakses dari luar.
- *Manajemen Scope Aman:* Memindahkan nilai variabel lokal ke *outer scope* terstruktur tanpa mencemari memori global.

4. Latihan Mandiri dan Matriks Uji (Nomor 7)

Pengujian dilakukan secara interaktif melalui Developer Tools (Console Browser) pada lingkungan Live Server.

| Jenis Kasus | Input / Kondisi | Tindakan | Prediksi / Harapan | Hasil Aktual & Analisis | Status / Bukti |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Kasus Normal (Nomor 3)** | `hitungLuasPersegi(5)` | Menjalankan fungsi murni dengan argumen `5` di Console. | Mengembalikan nilai `25` secara konsisten tanpa merubah variabel luar. | Fungsi bersifat deterministik dan bebas dari *side effects*. | Sesuai (`0ss`) |
| **Kasus Normal (Nomor 4)** | Array kegiatan dengan nilai kuota `[20, 0, 15]`. | Memproses `.filter(k => k.kuota > 0)` dan `.map(k => k.judul)`. | Filter menyaring data berkuota positif, map mengambil list `['HTML', 'CSS', 'JavaScript']`. | Metode array mengembalikan struktur data baru tanpa merusak array asli. | Sesuai (`ss`) |
| **Kasus Batas (Nomor 4)** | Array kegiatan dengan semua kuota bernilai `0`. | Memproses `.filter(k => k.kuota > 0)` pada data kuota habis. | Mengembalikan array kosong `[]`. | Fungsi filter menangani kondisi data kosong dengan aman. | Sesuai (`ss`) |
| **Kasus Gagal (Nomor 5)** | Mengakses variabel `pesanBlock` di luar blok `{}`. | Memanggil `console.log(pesanBlock)` dari luar *block scope*. | Memicu pesan kesalahan `ReferenceError`. | Browser menolak akses variabel lokal dari luar blok (`pesanBlock is not defined`). | Sesuai (`ss`) |
| **Integrasi Scope (Nomor 5)** | Memindahkan nilai dari dalam blok ke `let pesanAman` di luar. | Menjalankan variabel penampung *outer scope*. | Nilai lokal terbaca di luar blok tanpa memicu error. | *Scope* berhasil diperbaiki secara terstruktur tanpa membuat variabel global bebas. | Sesuai (`ss`) |
| **Integrasi System (Nomor 6)** | Impor fungsi `hitungTotal` dari `utils.js` ke `main.js`. | Menjalankan `hitungTotal(2, 10000)` via Live Server. | Mencetak angka `20000` di Console browser. | Fitur ES Modules berjalan lancar tanpa kendala aturan *CORS Policy*. | Sesuai (`ss`) |

5. Troubleshooting dan AI Use Statement (Nomor 8)

# A. Catatan Troubleshooting

1. *Masalah CORS Policy Saat Membuka File Modul:*
   - *Gejala:* Saat membuka `index.html` langsung dari file explorer (`file:///`), muncul error *Access to script at ... from origin 'null' has been blocked by CORS policy*.
   - *Pemeriksaan & Solusi:* Browser melarang *import/export* ES Modules pada protokol file lokal demi keamanan. Solusi dilakukan dengan menjalankan project menggunakan ekstensi **Live Server** di VS Code sehingga berjalan melalui protokol `http://127.0.0.1:5500/`.

2. *Masalah SyntaxError `Identifier has already been declared` / `ReferenceError`:*
   - *Gejala:* Terjadi *ReferenceError* saat pemanggilan fungsi karena variabel belum sempat didefinisikan ulang pada sesi Console yang sama.
   - *Pemeriksaan & Solusi:* Menggabungkan pendefinisian array data bersamaan dengan eksekusi `.map()` atau `.filter()` dalam satu *block execution*, atau melakukan *refresh* total halaman Console.

# B. AI Use Statement

- Alat AI yang Digunakan: Gemini (Google AI Assistant).
- *Tujuan Penggunaan:* Membantu memahami konsep *Pure Functions*, merancang eksperimen *Block Scope*, menguji penanganan ES Modules, serta menyusun struktur laporan `README.md` secara sistematis.
- **Bagian Bantuan AI:**
  * Penjelasan perbedaan *pure function* dan fungsi dengan efek samping (*side effects*).
  * Penyusunan simulasi penanganan *ReferenceError* dan teknik perbaikan *scope*.
  * Formatting dokumentasi laporan `README.md`.

1. Milestone (Pencapaian Utama)
- Penerapan Pure Functions (Nomor 3): Berhasil mengimplementasikan fungsi murni `hitungLuasPersegi` yang bersifat deterministik tanpa efek samping pada variabel luar.
- Eksplorasi Filter & Map Koleksi (Nomor 4): Berhasil memfilter kegiatan berkuota positif, menguji kondisi batas kuota nol yang mengembalikan `[]`, serta mengekstrak array judul menggunakan `.map()`.
- Analisis Scope & ReferenceError (Nomor 5): Berhasil mendemonstrasikan pengisolasian *block scope*, mendokumentasikan error `pesanBlock is not defined`, dan merapikan *scope* secara terstruktur tanpa mencemari global scope.
- Integrasi ES Modules & Live Server (Nomor 6): Berhasil memisahkan fungsi ke `utils.js`, mengimpor fungsi tersebut di `main.js`, dan mengeksekusi perhitungan `hitungTotal` melalui Live Server.

2. Bug Log (Catatan Kendala & Solusi)
- Kendala 1 (CORS Policy Restriction):
  - Penyebab: Membuka file HTML secara langsung via `file:///` yang ditolak oleh mekanisme keamanan ES Modules browser.
  - Solusi: Menjalankan server lokal menggunakan ekstensi Live Server VS Code (`http://127.0.0.1:5500`).
- Kendala 2 (Uncaught ReferenceError pada Console):
  - Penyebab: Eksekusi variabel yang belum diinisialisasi ulang dalam memori sesi Console browser.
  - Solusi: Menggabungkan inisialisasi data dan eksekusi fungsi dalam satu blok perintah.

3. Backlog (Rencana Pengembangan / Tugas Tertunda)
- Modularisasi Lanjutan: Mengembangkan lebih banyak fungsi *helper* matematika dan manipulasi string ke dalam file `utils.js`.
- Penanganan Asinkron (Async/Await): Mengintegrasikan pemanggilan data dari API eksternal (*Fetch API*) pakai ES Modules.
- Dynamic DOM Rendering: tampilkan hasil operasi `.map()` dan `.filter()` langsung ke dalam elemen HTML.

- Pure Function:
*Menguji fungsi murni hitung Luas Persegi(sisi) untuk memastikan sifat deterministik (pengujian didampingi AI).
*Input yang sama selalu menghasilkan output konsisten (25) tanpa menimbulkan efek samping pada variabel luar.

- Collection Management - Filter & Map:
*Pakai metode .filter() untuk menyaring kegiatan berdasarkan kuota tersedia (> 0).
*Menguji kasus batas (boundary testing) dengan data kosong atau seluruh kuota bernilai 0, yang secara tepat mengembalikan array kosong [].
*Pakai metode .map() untuk ekstrak dan gambil daftar judul kegiatan secara spesifik (['HTML', 'CSS', 'JavaScript']) tanpa merusak data asli.

- Destructuring & Scope Management:
*Menerapkan teknik destructuring untuk memecah properti objek pertama menjadi variabel lokal.
*Menguji isolasi block scope (let/const) secara sengaja mengakses variabel pesanBlock dari luar blok, yang memunculkan pesan error Uncaught ReferenceError: pesanBlock is not defined.
*Memperbaiki cakupan scope secara terstruktur dengan memindahkan nilai lokal ke penampung outer scope (pesanAman) tanpa mencemari global scope.

- ES Modules & Live Server:
*Memisahkan logika program ke dalam file terpisah *(utils.js dan main.js)*.
*Menguji impor dan eksekusi fungsi hitungTotal memakai server lokal (Live Server di VS Code) untuk menghindari hambatan keamanan CORS Policy pada browser.