NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 12 Sesi 2: Penyimpanan Data Lokal (`localStorage`), CRUD, dan Audit Kualitas Web (Lighthouse)**

## 1. Tujuan Praktikum

Bertujuan untuk membuat web pengelola daftar peserta yang bisa simpan data secara permanen di browser pakai **Web Storage (`localStorage`)**. Dari praktikum ini untuk mengimplementasikan operasi **CRUD lengkap** (*Create*, *Read*, *Update* dengan *edit inline*, dan *Delete*), menerapkan atasi kesalahan (*error handling*) untuk cegah kerusakan data, melakukan pengujian kasus batas (*edge cases*) dengan alat pengembang (*DevTools*), serta mengoptimalkan kualitas halaman web hingga mencapai skor **100/100** pada audit Lighthouse (Performance, Accessibility, Best Practices, dan SEO).

## 2. Backlog (Daftar Tugas Pengerjaan)

| ID | Task / Fitur yang Dikerjakan | Prioritas | Status |
| :--- | :--- | :--- | :--- |
| **BL-01** | Menyusun struktur antarmuka HTML (`index.html`) beserta elemen form, area pesan status, dan wadah daftar peserta. | Tinggi | **Done** |
| **BL-02** | Mengimplementasikan penyimpanan dan pembacaan data persisten menggunakan `localStorage` dengan kunci penyimpanan khusus (`KEY`). | Tinggi | **Done** |
| **BL-03** | Membangun fitur CRUD lengkap include tambah data, tampilan daftar dinamis, ubah data (*edit inline*), dan hapus data. | Tinggi | **Done** |
| **BL-04** | Menambahkan penanganan error (`try...catch`), pencegahan duplikasi ID, validasi input spasi kosong, serta fitur Reset data. | Tinggi | **Done** |
| **BL-05** | Melakukan pengujian regresi pakai *Debugger/Breakpoint* serta menguji kasus batas (input spasi dan array kosong). | Tinggi | **Done** |
| **BL-06** | Mengoptimalkan kontras warna CSS, tag metadata SEO, dan resource ikon agar seluruh kategori audit Lighthouse skor 100. | Tinggi | **Done** |
| **BL-07** | Menyusun daftar periksa (*checklist*) kesiapan *deployment*, dokumentasi `README.md`, dan pernyataan penggunaan AI. | Sedang | **Done** |

## 3. Milestone (Tahapan Pengembangan)

* 1 – Perancangan Struktur & Antarmuka: Membuat file terpisah (`index.html`, `style.css`, dan `main.js`) dengan struktur HTML semantik serta menghubungkan label dan input form secara tepat.
* 2 – Implementasi Penyimpanan Lokal (`localStorage`):Merancang fungsi untuk membaca data saat halaman pertama kali dibuka dan menyimpan kembali perubahan secara otomatis setiap kali data dimodifikasi.
* 3 – Pembangunan Fitur CRUD & Edit Inline: Mengembangkan alur tambah peserta baru, menampilkan daftar ke layar menggunakan manipulasi DOM yang aman (`textContent`), mengubah nama peserta langsung melalui form (*edit inline*), serta menghapus peserta tertentu berdasarkan ID.
* 4 – Pengamanan & Validasi Data: Menambahkan blok `try...catch` saat memproses data JSON dari `localStorage` agar aplikasi tidak berhenti mendadak jika data rusak, serta mencegah ID ganda setelah penghapusan data.
* 5 – Pengujian Regresi & Kasus Batas: Menguji jalannya program menggunakan *breakpoint* di browser DevTools, mengecek ketahanan form terhadap input spasi kosong, dan memastikan tampilan tetap rapi saat daftar peserta kosong.
* 6 – Optimasi Lighthouse 100 & Kesiapan Deployment: Memperbaiki rasio kontras tombol pada CSS, melengkapi tag `viewport` dan `description` pada HTML, mengatasi error 404 pada *favicon*, serta memverifikasi kesiapan file untuk publikasi (*deployment*).

# 4. Ringkasan Pelaksanaan Praktikum (Langkah 1 – 6)

- Langkah 1: Pengelolaan Data dengan `localStorage` dan Pencegahan Duplikasi ID
* Data peserta disimpan dalam bentuk array objek (`{ id, nama }`) yang diubah menjadi teks JSON menggunakan `JSON.stringify()` sebelum dimasukkan ke `localStorage.setItem()`.
* Saat halaman dimuat ulang, data diambil menggunakan `localStorage.getItem()` dan diubah kembali menjadi array dengan `JSON.parse()` di dalam blok `try...catch`.
* Untuk mencegah konflik ID ketika ada data yang dihapus lalu ditambah kembali, nilai ID berikutnya dihitung secara dinamis dari ID terbesar yang tersisa di dalam array (`Math.max(...) + 1`).

- Langkah 2: Implementasi CRUD Lengkap dan Edit Inline
* **Tambah Data (Create):** Ketika tombol **Tambah** ditekan, sistem membersihkan spasi berlebih di awal dan akhir teks dengan `.trim()`. Jika valid, data baru ditambahkan ke array, disimpan ke `localStorage`, dan ditampilkan ke layar.
* Tampil Data (Read): Daftar peserta dirender ulang secara bersih menggunakan `replaceChildren()`. Setiap nama peserta ditampilkan memakai `textContent` sehingga tag HTML apa pun yang diketik pengguna hanya terbaca sebagai teks biasa (aman dari celah keamanan XSS).
* Ubah Data (Update / Edit Inline): Menekan tombol **Edit** akan memindahkan nama peserta terpilih kembali ke kotak input form dan menyimpan ID-nya di variabel sementara (`editId`). Saat form disimpan kembali, nama lama diperbarui tanpa membuat baris data baru.
* Hapus Data (Delete): Menggunakan teknik *event delegation* pada elemen daftar (`<ul>`) untuk mendeteksi klik tombol **Hapus**, menyaring array dengan `.filter()` agar membuang data dengan ID yang sesuai, lalu memperbarui penyimpanan.

- Langkah 3: Pengujian Regresi dengan Debugger dan Kasus Batas
* **Pemeriksaan Nilai ID dan Array:** Memasang *breakpoint* pada baris kode penghapusan (`peserta = peserta.filter(...)`) melalui tab *Sources* di DevTools untuk memastikan nilai `id` yang dibaca bertipe angka (*Number*) dan isi array sesuai sebelum dan sesudah proses penyaringan.
* Uji Input Spasi Kosong: Memasukkan karakter spasi saja (`"   "`) ke kotak input. Validasi `.trim()` berhasil mendeteksi bahwa input kosong, menolak penyimpanan data, dan menampilkan pesan peringatan `"Nama harus diisi"`.
* Uji Array Kosong: Menghapus seluruh data peserta hingga daftar kosong (`peserta.length === 0`). Aplikasi tetap berjalan stabil tanpa error di konsol dan menampilkan keterangan status `"Belum ada peserta"`.

- Langkah 4 & 5: Audit Kualitas Web dan Perbaikan Skor Lighthouse (100/100)
* Perbaikan Accessibility (93 → 100): Audit awal menemukan peringatan kontras warna (*contrast ratio*) pada tombol **Edit** dan **Hapus**. Warna latar tombol pada `style.css` dipergelap (`#1E4620` dengan teks putih `#FFFFFF` dan tombol utama `#E6E66B` dengan teks `#111111`) sehingga memenuhi standar keterbacaan WCAG.
* Perbaikan SEO (90 → 100): Menambahkan tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` dan `<meta name="description" content="...">` di dalam bagian `<head>` pada `index.html`.
* Perbaikan Best Practices (96 → 100): Mengatasi catatan error `404 Not Found` pada permintaan otomatis `favicon.ico` di konsol browser dengan menambahkan `<link rel="icon" href="data:,">` pada `index.html`. Setelah seluruh perbaikan diterapkan, keempat kategori audit Lighthouse mencapai skor sempurna **100**.

- Langkah 6: Verifikasi Kesiapan Deployment
* Keamanan & Privasi: Memastikan tidak ada data pribadi, kata sandi, atau kunci rahasia yang tersimpan di dalam kode program.
* Pengecekan Struktur Berkas: Seluruh pemanggilan file (`style.css` dan `main.js`) menggunakan jalur relatif (*relative path*) dan penulisan nama file yang konsisten huruf besar/kecilnya (*case-sensitive*) agar kompatibel dengan server berbasis Linux.
* Pemisahan Storage Origin: Mendokumentasikan bahwa penyimpanan `localStorage` terikat pada asal domain (*origin*). Data yang tersimpan saat pengujian di server lokal (`localhost` / `127.0.0.1`) terpisah sepenuhnya dan tidak akan ikut terbawa apabila aplikasi diunggah ke server hosting publik (`https://`).

# 5. Matriks Uji

| Kasus / Kondisi | Input / Tindakan | Harapan (Prediksi) | Hasil Aktual & Analisis Teknis | Status / Bukti |
| :--- | :--- | :--- | :--- | :--- |
| **Uji CRUD Normal** | Menambah nama peserta baru, menekan tombol Edit untuk mengubah nama, lalu menekan tombol Hapus. | Data bertambah, dapat diperbarui tanpa menambah baris baru, dan terhapus dari daftar serta `localStorage`. | Seluruh operasi tambah, edit inline, dan hapus berjalan lancar. Perubahan langsung tersimpan di `localStorage` dan tetap ada saat halaman di-refresh. | **Berhasil** |
| **Uji Debugger (ID & Array)** | Memasang *breakpoint* pada fungsi `.filter()` di DevTools lalu menekan tombol Hapus pada salah satu peserta. | Eksekusi berhenti pada baris kode, nilai `id` terbaca sebagai angka yang sesuai, dan array terfilter dengan benar. | Panel *Scope* di DevTools menampilkan tipe data `id` berupa *Number* yang cocok dengan `dataset.id` tombol, dan array berhasil membuang item terpilih. | **Berhasil** |
| **Uji Nama Spasi Kosong** | Mengetik beberapa spasi (`"     "`) pada kotak input lalu menekan tombol Tambah. | Sistem menolak input, tidak menambah daftar baru, dan memunculkan pesan peringatan `"Nama harus diisi"`. | Fungsi `.trim()` mengubah spasi menjadi string kosong sehingga validasi menghentikan proses simpan dan menampilkan pesan error di elemen `#pesan`. | **Berhasil** |
| **Uji Array / Daftar Kosong** | Menghapus semua data peserta satu per satu hingga daftar bersih atau mereset data lokal. | Aplikasi tidak mengalami *error* di konsol dan menampilkan status bahwa daftar peserta masih kosong. | Elemen `<ul>` kosong dengan rapi, tab Console bersih dari error merah, dan teks status `"Belum ada peserta"` tampil dengan benar. | **Berhasil** |
| **Uji Audit Lighthouse** | Jalankan pemeriksaan Lighthouse pada tab DevTools setelah perbaikan HTML dan CSS. | Kategori Performance, Accessibility, Best Practices, dan SEO seluruhnya mendapat skor 100. | Keempat lingkaran indikator Lighthouse berwarna hijau dengan nilai **100** after fix kontras tombol, meta tag SEO, dan link favicon. | **Berhasil** |

# 6. Bug Log (Catatan Kendala & Perbaikan)

| No | Kendala / Bug yang Ditemukan | Penyebab Teknis | Solusi / Perbaikan yang Dilakukan | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Potensi duplikasi ID setelah penghapusan data** | Penghitung ID hanya bertambah satu dari jumlah panjang array, sehingga bisa bentrok jika data lama dihapus. | Menghitung ID baru berdasarkan nilai ID tertinggi yang ada di array menggunakan `Math.max(...peserta.map(p => p.id)) + 1`. | **Selesai** |
| 2 | **Skor Accessibility Lighthouse tertahan di angka 93** | Rasio kontras antara warna teks dan warna latar pada tombol Edit dan Hapus terlalu rendah (*low contrast*). | Mengubah warna latar tombol pada `style.css` menjadi warna yang lebih pekat dengan warna teks yang kontras sesuai standar WCAG. | **Selesai** |
| 3 | **Skor SEO Lighthouse hanya mencapai 90** | Dokumen HTML belum memiliki tag `meta description` dan pengaturan skala tampilan `meta viewport`. | Menambahkan tag `<meta name="viewport">` dan `<meta name="description">` di bagian `<head>` pada `index.html`. | **Selesai** |
| 4 | **Skor Best Practices bernilai 96 akibat error di Console** | Browser otomatis mencari file `favicon.ico` dan mencatat status error `404 Not Found` karena file tidak ditemukan. | Menambahkan tag `<link rel="icon" href="data:,">` di dalam `<head>` agar browser tidak memunculkan error 404. | **Selesai** |

# 7. Kesiapan Deployment & AI Use Statement

* **Catatan Kesiapan Deployment:** web telah diuji dari server lokal (*Live Server*) dengan jalur berkas relatif (*relative path*), penamaan file yang konsisten (*case-sensitive*), dan bebas dari data sensitif.`localStorage` memiliki *storage origin* yang terpisah antara lingkungan pengembangan lokal (`localhost`) dan lingkungan produksi (*hosting* online), hingga data pengujian lokal tidak akan otomatis muncul ketika web dipublikasikan ke domain baru.
* **AI Use Statement:** Dalam pengerjaan praktikum ini, asisten AI dipakai unruk sarana diskusi untuk memahami cara kerja *debugging* pakai *breakpoint*, merancang logika pencegahan duplikasi ID dan *edit inline* pada JavaScript, menganalisis penyebab peringatan pada audit Lighthouse (kontras warna CSS, tag meta SEO, dan error 404 *favicon*), serta membantu menyusun dokumentasi laporan `README.md` ini agar terstruktur dengan rapi.