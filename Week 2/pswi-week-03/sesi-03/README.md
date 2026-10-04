NAMA  : Dian Kiani Belinna Purba
NIM   : 41426036
PRODI : D4 TRPL(2)
# PSWI Week 3 Sesi 3: Formulir dan Pengujian

# Tujuan
- Membuat formulir pendaftaran kegiatan dengan memakai kontrol lengkap.
- Menambahkan style fokus keyboard agar semua kontrol bisa diakses dengan Tab/Shift+Tab.
- Menguji aturan validasi form di browser (wajib isi, jenis input, batas nilai, langkah, pola).
- Membuat audit aksesibilitas dasar (label, alt gambar, urutan fokus).
- Tabel uji sebagai bukti pengujian.
# Langkah Menjalankan
1. Buka folder proyek di VS Code.
2. Jalankan `index.html` di browser (misalnya pakai Live Server).
3. Navigasi form dengan keyboard:
   - Tab/Shift+Tab untuk berpindah kontrol.
   - Panah > radio/select.
   - Spasi > checkbox.
   - Enter > submit.
4. Isi form sesuai kasus uji di matriks uji.
5. Memperhatikan pesan error bawaan browser dan catat hasil nyata.

# Tabel Uji

| Kasus Uji          | Input            | Harapan                                    | Hasil Nyata         | Status |
|--------------------|------------------|--------------------------------------------|---------------------|--------|
| Email kosong       | ""               | Ditolak (required)                         | Ditolak             | Lulus  |
| Email salah        | abc              | Ditolak (format email)                     | Ditolak             | Lulus  |
| Email valid        | contoh@del.ac.id | Diterima jika lainnya valid                | Diterima            | Lulus  |
| Jumlah tiket 0     | 0                | Ditolak (min=1)                            | Ditolak             | Lulus  |
| Jumlah tiket 1.5   | 1.5              | Ditolak (step=1, harus bilangan bulat)     | Ditolak             | Lulus  |
| Jumlah tiket 6     | 6                | Ditolak (max=5)                            | Ditolak             | Lulus  |
| Kode peserta 12345 | 12345            | Ditolak (kurang digit, harus 6 angka)      | Ditolak             | Lulus  |
| Kode peserta 001234| 001234           | Diterima                                   | Diterima            | Lulus  |
| Kode peserta abc123| abc123           | Ditolak (harus angka semua)                | Ditolak             | Lulus  |
| Keyboard fokus     | Navigasi Tab     | Semua kontrol bisa dicapai, urutan logis   | Semua tercapai      | Lulus  |

# Jawaban Pengamatan
- **Validasi client-side** bekerja sesuai harapan: required, type, min/max, step, dan pattern menolak input yang salah.
- Saat `required` dihapus sementara, form bisa dikirim walau kosong → menampilkankkan validasi client bisa diubah.
- Setelah `required` dikembalikan, form kembali normal.
- **Server tetap perlu validasi** karena user bisa memodifikasi HTML/DevTools. Validasi server memastikan data benar sebelum diproses.
- **Navigasi keyboard**: semua kontrol bisa diraih dengan Tab/Shift+Tab, urutan logis, fokus terlihat jelas dengan outline biru.
- **Label**: semua label terhubung dengan `for` dan `id`, sehingga klik label memindahkan fokus ke input.
- **Radio/select/checkbox**: bisa dioperasikan dengan panah dan spasi sesuai arahan modul.
- **Gambar**: alt sudah sesuai tujuan (informasi lokasi kegiatan), figcaption memberi keterangan tambahan.

# Bukti
- Screenshot validasi sebelum–sesudah.
- Screenshot navigasi keyboard.
- Screenshot commit git.

# AI Use Statement
Memakai AI untuk membantu menjelaskan konsep validasi, aksesibilitas, dan membantu membuat tabel pengujian serta implementasi saya.
