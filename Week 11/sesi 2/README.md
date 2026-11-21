NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 11 Sesi 2: JSON Lokal, Promise, dan Fetch**

## 1. Tujuan Praktikum

Praktikum Sesi 11 ini berfokus pada implementasi pengambilan data asinkron dari server lokal pakai **Fetch API** dan sintaks **`async/await`** di JavaScript. Selain itu, modul ini fokus mengarahkan *defensive programming* melalui validasi tipe data (memastikan format berupa array) serta perlindungan keamanan DOM pakai properti `textContent` untuk mcegah celah kerentanan *Cross-Site Scripting (XSS)*.

## 2. Backlog (Daftar Tugas Pengerjaan)

| ID | Task / Fitur yang Dikerjakan | Prioritas | Status |
| :--- | :--- | :--- | :--- |
| **BL-01** | Menyiapkan struktur dasar HTML (`#muat`, `#pesan`, `#daftar`) dan file data `kegiatan.json`. | Tinggi | **Done** |
| **BL-02** | Mengimplementasikan `fetch()` dengan `async/await` serta penanganan error HTTP (`!response.ok`). | Tinggi | **Done** |
| **BL-03** | Mengintegrasikan kode baru dengan fitur praktikum sebelumnya (log gambar & tombol sapaan). | Sedang | **Done** |
| **BL-04** | Menambahkan validasi tipe data `Array.isArray()` dan sanitasi teks menggunakan `textContent`. | Tinggi | **Done** |
| **BL-05** | Melakukan pengujian mandiri (JSON valid, 404, object, markup) dan menyusun matriks uji. | Tinggi | **Done** |

## 3. Milestone (Tahapan Pengembangan)

* Inisialisasi Antarmuka: bangun struktur HTML dengan elemen tombol muat (`#muat`), penampung status pesan (`#pesan`), dan kontainer daftar kegiatan (`#daftar`).

* Integrasi Fetch & Async/Await: Mengimplementasikan fungsi `fetch("data/kegiatan.json")` di dalam blok `try...catch` dengan pemeriksaan status HTTP (`!response.ok`).

* Integrasi Fitur Lama: gabungkan script baru dengan fitur dari praktikum sebelumnya (log gambar aktif dan tombol sapaan) dalam satu *event listener* `DOMContentLoaded`.

* Validasi & Render Data: tambahkan fungsi validasi `Array.isArray()` dan perulangan `for...of` untuk menyaring format data yang tidak sesuai sebelum dirender ke DOM pakai `textContent`.

* Pengujian dan Matriks Uji: Melakukan verifikasi kasus normal, penanganan error 404, validasi bentuk objek, hingga uji string ber-markup HTML.

# 4. Ringkasan Pelaksanaan Praktikum (Langkah 3 – 7)

# Langkah 3: Implementasi Fetch API dengan `async/await` & Penanganan Error

* pakai `await fetch("data/kegiatan.json")` untuk mengambil data secara asinkron tanpa me-reload halaman.

* periksa properti `!response.ok` untuk menangkap kode status HTTP yang gagal (seperti 404) dan melemparkannya ke blok `catch`.

* Menampilkan indikator status memuat (*"Memuat data kegiatan..."*) pada elemen `#pesan` selama proses pengambilan data berlangsung.

# Langkah 4: Pemeriksaan Network dan Console (Uji Normal & Simulasi Error 404)

* Uji Kondisi Normal: Saat tombol **"Muat kegiatan"** diklik, tab *Network* mencatat permintaan ke `kegiatan.json` berhasil dengan status **200 OK**, dan daftar kegiatan langsung dirender.

* Uji Tes Error 404 Path pada fungsi `fetch` diubah sementara menjadi `"data/hilang.json"`. Tab *Network* menampilkan status **404 Not Found** berwarna merah, tab *Console* mencatat log error dari blok `catch`, dan antarmuka menampilkan pesan gagal memuat data. Setelah pengujian selesai, path dikembalikan ke `"data/kegiatan.json"`.

# Langkah 5: Integrasi Fitur Lama dengan Kode Baru

Memastikan script baru berjalan berdampingan tanpa masalah di dalam satu event `DOMContentLoaded` bersama fitur-fitur lama:

* Log Gambar Aktif* Memeriksa seluruh elemen `<img>` dan mencetak URL sumber aktifnya (`currentSrc`) ke konsol.

* Tombol Sapaan (`#greeting-button`): Menampilkan kotak dialog `alert()` sambutan belajar saat diklik.

# Langkah 6: Validasi Struktur Data dan Keamanan Render DOM

* Validasi Tipe Array (`Array.isArray(data)`): Memastikan data yang diterima itu *Array* (`[...]`). Jika file JSON diubah menjadi objek tunggal (`{...}`), sistem langsung buat error *"Data harus array"*.

* **Validasi Properti & Pembersihan DOM:** Menggunakan `daftarContainer.replaceChildren()` untuk mengosongkan daftar lama, lalu melakukan iterasi `for...of` sambil memastikan `typeof k.judul === "string"`.

* **Penggunaan `textContent`:** Data judul dimasukkan ke elemen `<li>` menggunakan `li.textContent = k.judul`. Properti ini memperlakukan seluruh isi string sebagai teks asli (*plain text*), sehingga tag HTML (seperti `<b>`) tidak diproses browser dan efektif mencegah serangan *Cross-Site Scripting (XSS)*.

# 5. Langkah 7: Matriks Uji

| Kasus / Kondisi | Input / Tindakan | Harapan (Prediksi) | Hasil Aktual & Analisis Teknis | Status / Bukti | 
| ----- | ----- | ----- | ----- | ----- | 
| **Kasus Normal (JSON Valid)** | File `kegiatan.json` berisi array dua kegiatan valid. Tombol "Muat kegiatan" diklik. | Data berhasil ditarik dan dirender sebagai list ke bawah tanpa error. | Data muncul rapi di elemen `<ul>`. Tab Network menunjukkan status **200 OK**. Sesuai harapan karena struktur JSON dan endpoint valid. | **Berhasil** *(Screenshot 1)* | 
| **Kasus Batas (Error 404)** | Path `fetch` diubah menjadi `"data/hilang.json"`, lalu tombol diklik. | Muncul pesan error yang jelas dan aplikasi tidak berhenti mendadak. | Blok `catch` menangkap error dari `!response.ok`, menampilkan pesan kesalahan pada `#pesan`, dan log 404 tercatat di Console/Network. | **Berhasil** *(Screenshot 2)* | 
| **Kasus Gagal (Bentuk Object)** | Isi `kegiatan.json` diubah menjadi objek tunggal `{}` (bukan array `[]`), lalu tombol diklik. | Sistem menolak data dan memunculkan pesan validasi array. | Validasi `!Array.isArray(data)` memicu `throw new Error("Data harus array")` dan menampilkannya di layar sehingga aplikasi tidak *crash*. | **Berhasil** *(Screenshot 3)* | 
| **Kasus Batas (Judul Markup)** | String judul di JSON diberi tag HTML (contoh: `<b>Pelatihan Web</b>`), lalu tombol diklik. | Tag HTML tidak dirender sebagai elemen cetak tebal, melainkan tampil sebagai teks literal. | Karakter `<b>` dan `</b>` tercetak apa adanya di halaman web karena properti `textContent` mengabaikan parsing markup HTML (aman dari XSS). | **Berhasil** *(Screenshot 4)* | 

# 6. Bug Log (Catatan Kendala & Perbaikan)

| No | Kendala / Bug yang Ditemukan | Penyebab Teknis | Solusi / Perbaikan yang Dilakukan | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| 1 | **Fetch gagal menganggap 404 sebagai error** | Secara default, `fetch()` hanya melempar error ke `catch` jika jaringan terputus, bukan saat server mengembalikan status HTTP 404. | Menambahkan pengecekan manual `if (!response.ok)` sebelum melakukan parsing `.json()`. | **Selesai** | 
| 2 | **Aplikasi crash saat data JSON berbentuk Object** | Perulangan `for...of` gagal dijalankan jika struktur JSON berubah dari array `[...]` menjadi objek tunggal `{...}`. | Menambahkan validasi `if (!Array.isArray(data))` sebelum iterasi untuk menolak format data yang salah secara aman. | **Selesai** | 
| 3 | **Daftar kegiatan menumpuk saat tombol diklik ulang** | Elemen `<li>` baru terus ditambahkan (`append`) tanpa menghapus elemen daftar yang sudah ada sebelumnya. | Memanggil `daftarContainer.replaceChildren()` sebelum merender ulang daftar kegiatan baru. | **Selesai** | 
| 4 | **Potensi kerentanan injeksi HTML (XSS)** | Penggunaan `innerHTML` berisiko mengeksekusi tag HTML atau skrip berbahaya jika disisipkan di dalam string JSON. | Mengganti metode penyisipan teks menjadi `li.textContent` agar seluruh string dirender sebagai teks literal. | **Selesai** | 