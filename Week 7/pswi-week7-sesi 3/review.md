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


# 3. Riwayat Penyesuaian Git, Konflik, dan Commit Revisi
- **Alur Git & Konflik:** Seluruh fitur penambahan teks petunjuk dikerjakan pada branch terpisah (`fitur-petunjuk`). Saat proses *merge* ke branch utama (`main`), dilakukan pengecekan manual pada file CSS untuk memastikan tidak ada duplikasi selector atau aturan *cascade* yang saling menimpa (*override*).
- **Commit Revisi:** Setelah perbaikan dari kedua komentar di atas diterapkan pada branch fitur, perubahan disimpan dengan perintah commit: `git commit -m "refactor: perbaiki kontras warna dan spacing form-hint berdasarkan review"` lalu digabungkan ke `main`.


# 4. Kesimpulan Verifikasi
- Berdasarkan hasil perbaikan dari masukan reviewer dan pengujian lokal:
  * Teks petunjuk format form kini lebih mudah diakses dan dibaca oleh pengguna.
  * Struktur branch Git bersih dan berhasil disatukan ke branch `main`.
  * Seluruh dokumentasi review siap digunakan untuk penilaian walkthrough UTS.