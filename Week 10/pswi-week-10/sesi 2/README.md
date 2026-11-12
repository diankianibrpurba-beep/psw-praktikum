NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : D4 TRPL

**PSW Week 10 Sesi 2: Selection, Elemen, dan Render DOM**

# 1. Tujuan Praktikum
1. Memahami pemakaian selektor DOM (`document.querySelector`) dan penanganan elemen yang tidak ditemukan (`null`).
2. Membedakan pembuatan elemen dinamis menggunakan `textContent` (teks murni) dengan *HTML parsing*.
3. Menerapkan pola *state-based rendering* menggunakan array dan mencegah duplikasi elemen dengan `replaceChildren()`.
4. Mengimplementasikan penanganan keadaan kosong.

# 2. Matriks Uji & Hasil Eksperimen (Nomor 3 – 6)

| No | Tahapan / Eksperimen | Langkah / Perintah Pengujian | Hasil Aktual yang Diamati | Status |
| :--- | :--- | :--- | :--- | :--- |
| **3a** | **Starter DOM (Selector Benar)** | Menjalankan `document.querySelector("h1")` dan `document.querySelector("#daftar")` pada `main.js`. | Console menampilkan elemen HTML `<h1>Daftar Peserta</h1>` dan `<ul id="daftar"></ul>` secara utuh. | **Berhasil** |
| **3b** | **Starter DOM (Selector Salah)** | Menguji selector fiktif `document.querySelector("#salah")` pada `main.js`. | Console menampilkan nilai `null` karena elemen dengan ID `#salah` tidak tersedia pada struktur dokumen HTML. | **Berhasil** |
| **4** | **Teks dan Elemen Baru** | Membuat elemen `<li>` dengan `document.createElement("li")` dan mengisinya dengan `li.textContent = "<b>Rina</b>"`. | Layar menampilkan string literal `<b>Rina</b>` (bukan huruf tebal). Pada tab *Elements*, tag tersimpan sebagai `&lt;b&gt;Rina&lt;/b&gt;`. | **Berhasil** |
| **5a** | **State & Render (Uji Duplikasi)** | Memanggil fungsi `render()` dua kali berturut-turut melalui Console (`render(); render();`). | Item daftar di layar tetap berjumlah 2 (**Rina** dan **Budi**), tidak terjadi penggandaan elemen karena `daftar.replaceChildren()`. | **Berhasil** |
| **5b** | **State & Render (Uji State Kosong)** | Mengosongkan array state dari Console dengan perintah `peserta = []; render();`. | Seluruh item `<li>` pada halaman web langsung terhapus/kosong ikuti state data terbaru. | **Berhasil** |
| **6** | **Keadaan Kosong (Empty State)** | Menguji kondisi `peserta = []; render();` setelah menambahkan logika kondisional pada elemen `#pesan` dan styling di `style.css`. | Muncul teks peringatan *"Belum ada peserta"* berwarna merah miring di bawah judul secara otomatis saat data kosong. | **Berhasil** |

# 3. Analisis Pengamatan & Dugaan Sementara

1. **Pengamatan Selektor DOM & Nilai `null`:**
   * *Dugaan Sementara / Analisis:* Sebelum dipraktikkan, saya mengira jika elemen yang dicari dari `querySelector` tidak ditemukan di dalam HTML, browser akan memberi error yang menghentikan skrip. Namun hasil praktikum membuktikan bahwa browser justru mengembalikan nilai `null`, sehingga penting bagi saya melakukan pengecekan kondisional agar tidak terjadi *TypeError* saat memanipulasi elemen.
2. **Pengamatan Penggunaan `textContent` vs HTML Parsing:**
   * *Dugaan Sementara / Analisis:* Sebelumnya perkiraan string yang mengandung tag HTML (`<b>`) akan langsung otomatis dicetak tebal oleh browser. Namun setelah diuji, terbukti bahwa `textContent` memperlakukan seluruh isi string secara mentah (*plain text*), yang berfungsi menjaga keamanan aplikasi dari potensi celah keamanan injeksi skrip berbahaya (XSS).
3. **Pengamatan Pola *State-Based Rendering* & Pencegahan Duplikasi:**
   * *Dugaan Sementara / Analisis:* Sempat diduga bahwa pemanggilan fungsi render berulang kali akan menumpuk elemen lama dengan elemen baru secara terus-menerus. Oleh pemakaian metode pembersihan kontainer seperti `replaceChildren()`, elemen lama dibersihkan terlebih dahulu sebelum digambar ulang, hingga duplikasi data berhasil dicegah sepenuhnya.
4. **Pengamatan Penanganan *Empty State*:**
   * *Dugaan Sementara / Analisis:* Tampilan antarmuka web akan terlihat kaku atau kosong tanpa informasi jika data di memori habis. Dengan buat logika kondisional berdasar panjang data (`length`).

# 4. Troubleshooting & Catatan Kendala

* **Error `Uncaught SyntaxError: Identifier '...' has already been declared`:**
  * **Penyebab:** Variabel tipe `const` atau `let` yang sudah dideklarasikan di dalam file `main.js` diketik ulang langsung di tab Console browser pada sesi halaman yang sama.
  * **Solusi:** Hindari deklarasi ulang variabel yang sudah ada di file skrip utama saat melakukan pengujian di Console; cukup panggil fungsi (seperti `render()`) atau ubah nilai variabel `let` secara langsung (`peserta = []`).
* **Peringatan `Refused to apply style ... MIME type ('text/html')`:**
  * **Penyebab:** Jalur (*path*) atau nama file pada tag `<link rel="stylesheet" href="style.css">` tak sesuai dengan nama/lokasi file CSS sebenarnya di folder proyek, hingga Live Server mengembalikan halaman fallback HTML.
  * **Solusi:** Memastikan file `style.css` berada di direktori yang sama dengan `index.html` serta penulisan nama file pada atribut `href` sudah pas sama.

 1. Milestone: pengembangan proyek ini dibagi ke dalam beberapa tahapan penting secara bertahap. Pada tahap awal, fokus diletakkan pada inisialisasi struktur dasar proyek yang mencakup berkas HTML, penataan gaya CSS, serta konfigurasi awal Git version control. Memasuki tahap berikutnya, implementasi diperluas ke dalam manipulasi DOM, di mana selektor elemen diuji, pola state-based rendering diterapkan pakai array, pencegahan duplikasi elemen diatasi melalui metode pembersihan kontainer, serta penanganan kondisi empty state diintegrasikan secara dinamis.  
2. Backlog & Rencana: Perancangan struktur dasar layout web, penerapan logika render berbasis array, pengaktifan fitur pesan peringatan empty state, penambahan formulir input beserta mekanisme validasinya, hingga integrasi tombol hapus dinamis menggunakan mekanisme Event Delegation.Backlog Selanjutnya: Direncanakan penambahan fitur penyimpanan data lokal menggunakan localStorage serta pengambilan data secara asinkron menggunakan Fetch API pada modul praktikum berikutnya.
3. Bug Log & Catatan Kendala: Kendala Deklarasi Variabel: Sempat terjadi SyntaxError akibat mendeklarasikan ulang variabel konstan atau let secara langsung di tab konsol peramban, yang diatasi dengan menghindari penulisan ulang deklarasi dan cukup memanggil fungsi atau memperbarui variabel secara langsung.   Kendala Peringatan MIME Type: Terjadi kesalahan jalur direktori pada lembar gaya CSS, yang langsung diselesaikan dengan memastikan kesesuaian nama dan lokasi berkas di dalam folder proyek.   Kendala Sifat Memori Data: Data aplikasi sempat terhapus saat halaman dimuat ulang, yang dipahami sebagai karakteristik penyimpanan memori sementara (volatile runtime memory) sebelum diintegrasikan dengan penyimpanan tetap.

# AI Use Statement
Dalam pengerjaan dan penyusunan dokumentasi praktikum ini, saya pakai (Gemini) sebagai alat bantu diskusi konsep dan diagnosis teknis. Penggunaan AI ditujukan untuk membantu memahami konsep Document Object Model (DOM), menganalisis penyebab error sintaksis maupun peringatan MIME type saat pengujian, serta menyusun kerangka dokumentasi laporan secara terstruktur. Seluruh saran kode, logika rendering, serta solusi penanganan error yang diberikan oleh AI diuji melalui server lokal dan DevTools browser, serta diverifikasi melalui matriks uji untuk memastikan seluruh fungsi berjalan sesuai ketentuan di modul.