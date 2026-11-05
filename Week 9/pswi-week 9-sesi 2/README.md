AMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 9 Sesi 2: Konversi Data, Validasi Input, dan Pengelolaan Koleksi Data JavaScript**

# 1. Tujuan Praktikum

- Memahami alur pengikatan file skrip JavaScript (`main.js`) pada dokumen HTML menggunakan atribut `defer` serta verifikasi eksekusi via browser Console.
- Menerapkan fungsi konversi data secara eksplisit (`Number()`, `Boolean()`) serta pengujian tipe data menggunakan operator `typeof` dan `Number.isFinite()`.
- Mengimplementasikan logika percabangan kondisi (`if-else`) untuk validasi aturan bisnis serta pengujian nilai batas (*boundary testing*).
- Mengelola koleksi data berbasis array dan iterasi perulangan (*looping*) secara aman tanpa ada *infinite loop*.
- Menyusun matriks pengujian sistematis, catatan *troubleshooting*, serta transparansi pemakaian AI (*AI Use Statement*).

# 2. Struktur Proyek & Integrasi File

Struktur folder dan file pada modul `psw-week9-sesi2` ini adalah sebagai berikut:
psw-week9-sesi2/
├── README.md
├── index.html
├── js/
│   └── main.js
└── bukti/
    ├── 01_koneksi_console.png
    ├── 02_konversi_data.png
    ├── 03_validasi_tiket_normal.png
    ├── 04_validasi_tiket_batas_bawah.png
    ├── 05_validasi_tiket_batas_atas.png
    ├── 06_validasi_tiket_invalid.png
    ├── 07_loop_tiga_item.png
    ├── 08_loop_array_kosong.png
    ├── 09_loop_tambah_item.png
    ├── 10_latihan_mandiri_sistem.png
    └── 11_git_commit_final.png

# 3. Workflow & Eksekusi Perintah Git

Berikut adalah urutan perintah Git yang telah dijalankan di terminal VS Code selama pengembangan dan pengujian program:

1. Memeriksa Status dan Mengatur Branch Utama:
   bash
   git status
   git checkout -b main

2. Menambahkan Perubahan Kode Script dan Laporan:
   Memperbarui logika pada `js/main.js` untuk nomor 3 sampai dengan nomor 7 serta melengkapi dokumentasi pada `README.md`.

3. Melakukan Staging File:
   bash
   git add js/main.js README.md bukti/

4. Commit Perubahan Fitur Logika JavaScript:
   bash
   git commit -m "feat(w09s02): implementasi logika konversi data, validasi tiket, loop koleksi, dan matriks uji"

5. Pemeriksaan Riwayat Commit:
   bash
   git log --oneline -n 5

# Keputusan yang diambil:

- *Pengikatan Script Semantik:* Menggunakan atribut `<script src="js/main.js" defer></script>` di dalam tag `<head>` HTML agar skrip dieksekusi setelah seluruh elemen DOM selesai dimuat.
- *Deklarasi Variabel Aman:* Menggunakan `let` dan `const` pada skrip permanen `main.js`, serta mengisolasi variabel di Console menggunakan *block scope* `{}` untuk mencegah error deklarasi ulang (`Identifier has already been declared`).
- Validasi Input Ketat: Menggabungkan fungsi `Number.isInteger()` dan pemeriksaan rentang angka (`jumlah < 1 || jumlah > 5`) untuk memfilter input tidak sah seperti pecahan desimal dan string non-numerik (`NaN`).

# 4. Latihan Mandiri dan Matriks Uji (Nomor 7)

Pengujian dilakukan secara interaktif melalui Developer Tools (Console Browser) pada lingkungan Live Server.

| Jenis Kasus | Input / Kondisi | Tindakan | Prediksi / Harapan | Hasil Aktual & Analisis | Status / Bukti |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Kasus Normal (Nomor 3 & 4)** | String numerik `"2"` ditambah angka `1`. | Menjalankan `teks + 1` dan `Number(teks) + 1` di Console. | `"2" + 1` menghasilkan `"21"`, sedangkan `Number("2") + 1` menghasilkan `3`. | Konversi eksplisit mengubah string jadi number sehingga operasi aritmatika berjalan valid. | Sesuai (`ss`, `ss`) |
| **Kasus Normal (Nomor 5)** | Pemesanan tiket jumlah `3` dan `5` (Batas Atas Sah). | Memproses fungsi `validasiTiket("3")` dan `validasiTiket("5")`. | Sistem menghitung total harga (contoh: `3` $\times$ `10000` = `30000`). | Program meloloskan input karena berada dalam batas sah $1 \le x \le 5$. | Sesuai (`ss`, `ss`) |
| **Kasus Batas (Boundary - Nomor 5)** | Input angka `0` (Batas Bawah Invalid) dan `6` (Batas Atas Invalid). | Memproses fungsi `validasiTiket("0")` dan `validasiTiket("6")`. | Sistem menolak input dan mencetak pesan `"Jumlah tidak valid"`. | Percabangan `if` berhasil mengecek batasan minimum/maksimum secara akurat. | Sesuai (`ss`) |
| **Kasus Gagal (Nomor 4 & 5)** | Input berupa desimal `"1.5"`, string huruf `"abc"`, dan string kosong `""`. | Memproses konversi `Number("abc")` dan validasi input invalid. | `Number("abc")` menghasilkan `NaN`. Validasi tiket mencetak `"Jumlah tidak valid"`. | `Number.isFinite(NaN)` bernilai `false` dan `Number.isInteger(1.5)` bernilai `false`, sehingga input invalid berhasil dicegat. | Sesuai (`ss`) |
| **Iterasi Koleksi (Nomor 6)** | Array 3 item `["Reguler", "VIP", "VVIP"]`, array kosong `[]`, dan array bertambah (`.push()`). | Menjalankan perulangan `for` pada masing-masing kondisi array. | Array 3 dan 4 item mencetak seluruh isi. Array kosong tidak memicu perulangan. | Iterasi dinamis menyesuaikan atribut `.length` tanpa memicu *infinite loop*. | Sesuai (`ss`, `ss`, `ss`) |
| **Integrasi Sistem (Nomor 7)** | Koleksi input campuran `["2", "4", "abc", "6", "3"]`. | Menjalankan perulangan pemrosesan transaksi tiket dan diskon otomatis. | Input valid dihitung harganya (input `4` dapat diskon 10%), input invalid ditolak. | Program berhasil memisahkan data sah dan error dalam satu alur iterasi koleksi. | Sesuai (`ss`) |

# 5. Troubleshooting dan AI Use Statement (Nomor 8)

# A. Catatan Troubleshooting

1. *Masalah SyntaxError `Identifier has already been declared` pada Console:*
   - *Gejala:* Saat menguji potongan kode berulang kali di Console browser, muncul error `Uncaught SyntaxError: Identifier 'teks' has already been declared`.
   - *Pemeriksaan & Solusi:* Console menyimpan variabel bertipe `const`/`let` dalam memori sesi. Solusi dilakukan dengan memuat ulang halaman (*refresh* `Ctrl+R`), menghapus variabel `let`/`const` saat pengujian cepat, atau membungkus blok kode uji menggunakan kurung kurawal `{ ... }` untuk mengisolasi cakupan (*scope*).

2. **Perilaku Konversi String Kosong (`""`):**
   - *Gejala:* Input string kosong `""` saat dikonversi dengan `Number("")` menghasilkan angka `0`.
   - *Pemeriksaan & Solusi:* Dalam validasi tiket, angka `0` dicegat oleh kondisi `jumlah < 1`, sehingga string kosong secara otomatis dikategorikan sebagai input tidak valid sesuai aturan bisnis.

# B. AI Use Statement

- Alat AI yang Digunakan: Gemini (Google AI Assistant).
- *Tujuan Penggunaan:* Membantu memahami konsep pengecekan `NaN`, merancang skenario pengujian batas (*boundary testing*), serta menyusun struktur laporan matriks uji secara sistematis.
- **Bagian Bantuan AI:**
  * Penjelasan perbedaan perilaku konversi string numerik vs string teks di JavaScript.
  * Penyusunan simulasi perulangan array dan penanganan kondisi batas untuk mencegah *infinite loop*.
  * Formating dokumentasi laporan `README.md`.

1. Milestone (Pencapaian Utama)
- Inisialisasi & Persiapan (Nomor 3): Berhasil menautkan file main.js dan style.css ke index.html, mengonfigurasi Git repository, serta memverifikasi keluaran teks dasar pada Console browser melalui Live Server.
- Eksplorasi Konversi Data (Nomor 4): Berhasil menguji konversi tipe data string ke angka menggunakan Number(), menganalisis perbedaan operator + (concatenation vs penjumlahan), serta menerapkan validasi Number.isFinite() dan pengecekan string kosong.
- Penerapan Validasi Aturan Tiket (Nomor 5): Berhasil mengimplementasikan percabangan if-else untuk menyaring input jumlah tiket dengan boundary testing (uji batas normal 1–5, angka 0, angka 6, desimal 1.5, hingga string "abc").
- Pengelolaan Koleksi Data & Looping (Nomor 6 & 7): Berhasil membuat perulangan array untuk uji tiga item, penanganan array kosong, penambahan item dinamis menggunakan .push(), serta menyelesaikan studi kasus latihan mandiri dengan perhitungan diskon otomatis.
2. Bug Log (Catatan Kendala & Solusi)
Kendala 1 (Identifier has already been declared):
- Penyebab: Penggunaan kata kunci let atau const dengan nama variabel yang sama berulang kali di dalam sesi Console browser yang sama (block scope restriction).
- Solusi: Melakukan refresh total halaman (Ctrl + R) atau menggunakan ekspresi langsung tanpa deklarasi variabel saat menguji di Console.
- Kendala 2 (Handling Input Kosong & NaN):
- Penyebab: Nilai string kosong ("") jika dikonversi dengan Number("") menghasilkan angka 0, yang berpotensi meloloskan validasi batas bawah jika tidak dicek secara spesifik.
- Solusi: Menambahkan fungsi validasi logika !Number.isInteger() dan pengecekan rentang jumlah < 1 untuk menangkap input kosong maupun desimal.
3. Backlog (Rencana Pengembangan / Tugas Tertunda)
- Implementasi Antarmuka Pengguna (UI): Menghubungkan logika JavaScript pada file main.js agar langsung terikat dengan elemen <form> dan <input> di halaman HTML secara real-time (bukan hanya dicetak di Console).
- Fitur Penanganan Error Visual (DOM Manipulation): Menambahkan elemen teks peringatan merah (error message span) di bawah form input ketika pengguna salah memasukkan jumlah tiket atau huruf abal-abal, alih-alih hanya menampilkan console.log.
- Penyempurnaan Unit Testing: Menambahkan skrip pengujian otomatis (automated testing) sederhana menggunakan fungsi kustom untuk memastikan semua skenario boundary test berjalan tanpa harus menguji manual satu per satu.