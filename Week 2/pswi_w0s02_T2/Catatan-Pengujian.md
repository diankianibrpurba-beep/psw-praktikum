Nama    : Dian Kiani Belinna Purba
NIM     : 41426036
Prodi   : TRPL

Catatan Pengujian:
Pengujian pada index.html
 1. Warning pertama muncul karena penempatan teks identitas diri belum dikelompokkan ke dalam seksi khusus, sehingga disarankan menggunakan landmark yang lebih modular agar kerapian struktur dokumen tetap terjaga.
 2. Error pertama terjadi karena dokumen kehilangan atribut bahasa pada elemen root html. Tanpa atribut bahasa ini, perangkat pembaca layar bagi tunanetra tidak bisa mengenali bahasa utama halaman web.
 3. Error kedua disebabkan oleh kerusakan sintaks pada tag pembuka h1 di bagian header. Kurangnya tanda penutup membuat mesin validator gagal membaca elemen judul tersebut.
 4. Error ketiga adalah dampak lanjutan dari error sebelumnya, di mana tag penutup h1 tidak memiliki pasangan pembuka yang valid akibat rusaknya baris kode di atasnya.
 5. Error keempat muncul pada bagian informasi nama mahasiswa karena tag paragraf pembuka tidak ditutup dengan benar menggunakan garis miring.
 6. Error kelima terjadi karena tag paragraf pada baris nomor induk mahasiswa juga dibiarkan menggantung tanpa penutup yang sesuai.
 7. Error keenam melibatkan tag paragraf pada informasi kelas yang terlewat penutupnya, sehingga memicu pelanggaran aturan hierarki blok dokumen.
 8. Error ketujuh diakibatkan oleh hilangnya tag penutup kontainer utama, yang membuat struktur elemen di bawahnya terlepas dari area semantik semestinya.
 9. Error kedelapan terjadi karena atribut alternatif pada gambar sengaja dihilangkan, padahal standar aksesibilitas web mewajibkan teks deskripsi gambar bagi pengguna disabilitas.
 10. Error kesembilan muncul akibat ketidaksesuaian nilai pada atribut dimensi gambar yang dibaca sebagai konflik oleh mesin validator.
 11. Error kesepuluh karena elemen keterangan gambar yang terputus dari kaitan kontainer utamanya akibat kerusakan struktur dokumen di bagian atas.
 12. Error kesebelas adalah akumulasi keseluruhan dokumen yang dinyatakan gagal memenuhi spesifikasi W3C karena banyaknya tag yang tidak tertutup rapi.
 
a. Catatan Sumber dan Lisensi Gambar
File Gambar: images/gambar.png
Sumber: Alamy (HTML5 CSS3 JS Icon Set)
Penggunaan: Untuk keperluan tugas praktikum Pengembangan Situs Web I (PWS I) IT Del.


b. Riwayat Git (git log --oneline)
- Menampilkan riwayat pengerjaan dan commit berkala dari awal hingga finalisasi file situs web.