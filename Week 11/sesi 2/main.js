document.addEventListener("DOMContentLoaded", () => {
  const tombolMuat = document.getElementById("muat");
  const elemenPesan = document.getElementById("pesan");
  const daftarContainer = document.getElementById("daftar");

  if (tombolMuat) {
    tombolMuat.addEventListener("click", async () => {
      // ⏱️ Inisialisasi AbortController dan Timer 5 detik sebelum try
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 1);

      tombolMuat.disabled = true;
      elemenPesan.textContent = "Memuat data kegiatan...";
      daftarContainer.replaceChildren(); // Mengosongkan daftar sebelumnya di awal proses

      try {
        // Menggunakan signal dari controller pada fetch
        const response = await fetch("data/kegiatan.json", { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Gagal memuat data (HTTP Status: ${response.status})`);
        }

        const data = await response.json();

        // memastikan data yang diterima berbentuk Array
        if (!Array.isArray(data)) {
          throw new Error("Data harus array");
        }

        // mengosongkan list pakai replaceChildren sebelum render data baru
        daftarContainer.replaceChildren();

        // Loop dan validasi setiap item data
        for (const k of data) {
          if (typeof k.judul !== "string") {
            throw new Error("Judul tidak sesuai");
          }
          const li = document.createElement("li");
          li.textContent = `${k.judul} - kuota ${k.kuota}`; 
          daftarContainer.append(li);
        }

        // Pesan Sukses / Kosong (Empty State)
        elemenPesan.textContent = data.length
          ? `${data.length} kegiatan dimuat`
          : "Belum ada kegiatan";

      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        
        // Membedakan AbortError dari error umum
        if (error.name === "AbortError") {
          elemenPesan.textContent = "Waktu habis: Proses memuat data terlalu lama (Timeout).";
        } else {
          elemenPesan.textContent = error.message;
        }
      } finally {
        // 🧹 Membersihkan timer dan mengaktifkan kembali tombol di finally
        clearTimeout(timer);
        tombolMuat.disabled = false;
      }
    });
  }

  // log gambar
  const images = document.querySelectorAll("img");
  images.forEach((img, index) => {
    if (img.complete) {
      console.log(`Gambar ke-${index + 1} aktif. currentSrc: ${img.currentSrc}`);
    } else {
      img.addEventListener("load", () => {
        console.log(`Gambar ke-${index + 1} aktif. currentSrc: ${img.currentSrc}`);
      });
    }
  });

  const button = document.getElementById("greeting-button");
  if (button) {
    button.addEventListener("click", () => {
      alert("👋 Selamat Belajar Prend Quu Mengenai Pengembangan Situs Web! Jangan lupa untuk selalu berlatih dan eksplorasi lebih lanjut. Semoga sukses dalam perjalanan belajar web nya, ya! 😊");
    });
  }
});