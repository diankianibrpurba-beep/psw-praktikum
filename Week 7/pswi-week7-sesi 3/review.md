NAMA    : Dian Kiani Belinna Purba
NIM     : 41426036
PRODI   : D4 TRPL

# 1. Perintah Git Diff, Tujuan, dan Cara Uji
- **Perintah Git Diff:** `git diff main...fitur-petunjuk`
- **Tujuan Pengujian:** Memastikan penambahan teks petunjuk form (`.form-hint`) pada branch `fitur-petunjuk` sudah akurat, mudah dibaca, dan siap digabungkan ke branch `main`.
- **Cara Uji:** Memeriksa baris perubahan kode via terminal/VS Code, menguji tampilan visual di browser, serta menguji responsivitas pada layar kecil.

# 2. Catatan dan Komentar Code Review (2 Komentar Konkret) Dari Chelsea Manurung:
- Komentar 1 (Aksesibilitas & Kontras Teks):
  > *"Warna teks petunjuk format form (`<small class="form-hint">`) di bawah input kurang kontras dengan latar belakang dan terlalu tipis, sehingga agak susah dibaca di layar."*
  * **Tindakan Perbaikan:** Menambahkan aturan styling CSS khusus untuk kelas `.form-hint` dengan warna yang lebih gelap dan kontras agar memenuhi standar aksesibilitas.

- Komentar 2 (Layout & Spacing UI):
  > *"Jarak vertikal (*spacing*) antara teks petunjuk format dengan kotak input di bawahnya terlalu mepet, dan perlu dipastikan aman menggunakan properti *wrapping* agar tidak meluber di layar kecil (320px)."*
  * **Tindakan Perbaikan:** Menambahkan properti *margin-top* dan `overflow-wrap: anywhere;` pada CSS `.form-hint` agar jarak antar elemen lebih longgar, rapi, dan responsif.
  
  # Komentar Untuk Github dan Git

  1. Komentar 1 (tampilan dan susunan Github):
  Secara keseluruhan, struktur folder mingguan dari Week 1 hingga Week 7 sudah tersusun rapi dan riwayat commit terbarunya sangat rapi. Namun, terdapat beberapa file arsip kompresi (pswi.zip, pswi_d4trpl_w01s02_...zip) serta pointer submodule psw1-minggu-01 yang masih tersisa di direktori utama (root). Hal ini membuat direktori utama terlihat kurang bersih.
  **Tindakan Perbaikan:** 
  - Hapus file .zip yang tidak lagi digunakan dari repository lokal atau pindahkan ke folder arsip khusus agar root repository tetap bersih.
  - Buat file .gitignore di root repository dan tambahkan aturan *.zip agar file kompresi tidak sengaja ter-track lagi ke GitHub di kemudian hari.

1. Komentar 2 (redudansi folder):
  Terdapat duplikasi/redundansi struktur folder di halaman utama repository, yaitu folder TUGAS PSW/Week 1 dan folder Week 1 secara berdampingan. Hal ini berpotensi membingungkan pembaca atau penilai dalam mencari sumber file utama untuk modul Week 1.
  **Tindakan Perbaikan:** 
  - Lakukan konsolidasi dengan memindahkan seluruh isi dari TUGAS PSW/Week 1 ke dalam folder utama Week 1/.
  - Hapus folder TUGAS PSW/ yang sudah kosong pakai perintah git rm -r "TUGAS PSW" di terminal, lalu buat commit baru untuk memperbarui struktur repository.

# 3. Riwayat Penyesuaian Git, Konflik, dan Commit Revisi
- **Alur Git & Konflik:** Seluruh fitur penambahan teks petunjuk dikerjakan pada branch terpisah (`fitur-petunjuk`). Saat proses *merge* ke branch utama (`main`), dilakukan pengecekan manual pada file CSS untuk memastikan tidak ada duplikasi selector atau aturan *cascade* yang saling menimpa (*override*).
- **Commit Revisi:** Setelah perbaikan dari kedua komentar di atas diterapkan pada branch fitur, perubahan disimpan dengan perintah commit: `git commit -m "refactor: perbaiki kontras warna dan spacing form-hint berdasarkan review"` lalu digabungkan ke `main`.


# 4. Kesimpulan Verifikasi
- Berdasarkan hasil perbaikan dari masukan reviewer dan pengujian lokal:
  * Teks petunjuk format form kini lebih mudah diakses dan dibaca oleh pengguna.
  * Struktur branch Git bersih dan berhasil disatukan ke branch `main`.
  * Seluruh dokumentasi review siap digunakan untuk penilaian walkthrough UTS.