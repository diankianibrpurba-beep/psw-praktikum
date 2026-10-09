NAMA    :Dian Kiani Belinna Purba
NIM     :41426036
Prodi   :D4 TRPL

**Praktikum PSW I – Week 5 Sesi 2**

Starter Katalog
Pertama saya hubungkan file `style.css` ke `index.html`. Setelah itu saya reload halaman, hasilnya langsung berubah: background jadi keabu-abuan, font berganti ke Arial, dan tiga card muncul sesuai starter. Jadi bisa saya simpulkan starter sudah valid.

Navigasi Fleksibel – Catatan Pengamatan
- **Langkah uji**:
  1. Atur `.nav-list { display:flex; flex-wrap:wrap; }` → default row.
  2. Ubah `flex-direction: column;` → menu tersusun vertikal.
  3. Kembalikan ke row lalu kecilkan browser.

- **Hasil nyata**:
  - Saat row: item menu tersusun mendatar.
  - Saat column: item menu tersusun ke bawah sesuai sumbu utama.
  - Setelah kembali ke row dan browser diperkecil: item otomatis wrap ke baris baru.

- **Hasil yang diharapkan**:
  Item dapat wrap ketika ruang tidak cukup.

Card Fleksibel ()
Saya uji card hasilnya:
1. Card mucnul ke-4 nya
2. Ukuran 4 card sama dengan yang 3 card
3. Menyesuaikan ruang
4. Ukuran final card berbeda dari nilai basis karena dipengaruhi viewport dan max‑width.

Konten Panjang & Pengukuran
Saya tambahkan judul card panjang lalu coba zoom 200%. Hasilnya:

| Input/kondisi | Tindakan | Prediksi | Hasil aktual | Status/bukti |
|---------------|----------|----------|--------------|--------------|
| Kasus normal  | Tambah judul panjang | Teks wrap | Teks wrap dalam kotak | ✔ Screenshot |
| Kasus batas   | Zoom 200% | Teks tetap wrap | Teks wrap, card tetap kotak | ✔ Screenshot |
| Kasus gagal   | Hapus `overflow-wrap` | Teks meluber keluar | Teks meluber keluar kotak | ✔ Screenshot |

7. Latihan Mandiri dan Matriks Uji
 Instruksi
1. Saya ulangi contoh terarah tanpa melihat hasil teman.  
2. Saya tambahkan data panjang/invalid untuk uji.  
3. Saya tuliskan prediksi sebelum eksperimen.  
4. Saya perbaiki hasil gagal lalu retest.  
5. Saya minta teman memeriksa alasan teknis, bukan hanya tampilan.

Harapan Modul
| Kasus        | Harapan                        |
|--------------|--------------------------------|
| 360px        | Card wrap tanpa overflow       |
| Empat item   | Semua card tampil              |
| Judul panjang| Teks tidak keluar kotak        |
| Tab          | Link tetap dapat dicapai       |


| Input/kondisi   | Tindakan             | Prediksi                        | Hasil aktual                    | Status/bukti |
|-----------------|----------------------|---------------------------------|---------------------------------|--------------|
| Viewport 360px  | Resize browser kecil | Card wrap, tidak overflow        | Card wrap rapi, tidak overflow   | SS wrap |
| 4 card ditambah | Tambah 1 card baru   | Semua card tampil, flex menyesuaikan | Semua card tampil, flex menyesuaikan | SS 4 card |
| Judul panjang   | Isi judul sangat panjang | Teks tetap wrap, tidak keluar kotak | Teks wrap rapi dalam card       | SS judul panjang |
| Navigasi Tab    | Tekan Tab di menu    | Link bisa difokuskan (outline muncul) | Outline fokus muncul di link    | SS tab-nav |

Catatan teknis
- Setelah menambahkan `overflow-wrap: anywhere;`, teks panjang kembali wrap → retest berhasil.  
- Di layar 360px, card wrap otomatis tanpa overflow.  
- Navigasi tetap bisa dicapai Tab.  
- Pengukuran DevTools menunjukkan card final ~250px (basis 15rem) dan bisa melebar sampai ~560px (max‑width 35rem).

AI Use Statement
- README dan catatan uji saya rapikan dengan bantuan AI Copilot.  
- AI dipakai untuk format laporan, memabntu mengkaji modul.  
- Copilot bantu buatkan tabel pengujian dan saran uji.
- AI membantu mengarahkan langkah-langkah penugasan.

Sumber Aset
HTML Icon → https://cdn-icons-png.flaticon.com/512/2721/2721292.png

CSS Icon → https://cdn-icons-png.flaticon.com/512/732/732190.png

Audit Icon → https://cdn-icons-png.flaticon.com/512/1828/1828911.png 

HTML Icon Kegiatan → https://tse2.mm.bing.net/th/id/OIP.jqrxDUc6QcUvRkZ1PyYZtQHaHa

Bootcamp Icon → https://cdn-icons-png.flaticon.com/512/1055/1055687.png
- Font web yang dipakai: Arial.

Milestone / Backlog / Bug Log
- **Milestone**: Week 4 Sesi 3 selesai (navigasi fleksibel, card fleksibel, konten panjang & pengukuran).  
- **Backlog**: Integrasi backend form, validasi server‑side, uji aksesibilitas screen reader.  
- **Bug log**:  
  - Card terlalu sempit jika `flex-basis` dihapus.  
  - Judul panjang meluber jika `overflow-wrap` tidak aktif.  
  - Navigasi tidak wrap jika `flex-wrap` dihapus.

Cara Menjalankan
1. Pastikan semua file ada di folder project:
   - `index.html`
   - `css/style.css`
   - Folder `bukti/` untuk screenshot hasil uji
2. Buka file `index.html` langsung di browser (Chrome/Edge/Firefox).
   - Alternatif: gunakan **Live Server** di VS Code untuk auto‑reload.
3. Navigasi melalui menu untuk menguji fragment link.
4. Perkecil dan perbesar jendela browser untuk melihat efek Flexbox (wrap).
5. Gunakan DevTools (F12) untuk memeriksa ukuran card dan perilaku konten panjang.
