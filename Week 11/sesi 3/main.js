document.addEventListener("DOMContentLoaded", () => {
  const tombol = document.querySelector("#muat");
  const pesan = document.querySelector("#pesan");
  const daftar = document.querySelector("#daftar");

  // 1. Fitur Sesi 3: Load kegiatan dengan Loading & Finally
  if (tombol) {
    tombol.addEventListener("click", async () => {
      tombol.disabled = true;
      pesan.textContent = "Memuat data kegiatan...";
      
      // ✅ INSTRUKSI: Kosongkan daftar di awal proses (sebelum fetch) 
      // agar data lama tidak dianggap sebagai data terbaru
      daftar.replaceChildren();

      try {
        const response = await fetch("data/kegiatan.json");
        if (!response.ok) {
          throw new Error(`Gagal memuat data (HTTP Status: ${response.status})`);
        }
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Data harus array");
        }

        // ✅ INSTRUKSI: Kosongkan sekali lagi tepat sebelum proses render data baru
        daftar.replaceChildren();
        
        for (const k of data) {
          if (typeof k.judul !== "string") {
            throw new Error("Judul tidak sesuai");
          }
          const li = document.createElement("li");
          li.textContent = `${k.judul} - kuota ${k.kuota}`;
          daftar.append(li);
        }

        pesan.textContent = data.length
          ? `${data.length} kegiatan dimuat`
          : "Belum ada kegiatan";

      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        pesan.textContent = error.message;
      } finally {
        tombol.disabled = false;
      }
    });
  }

  // 2. Log Gambar tetap utuh
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

  // 3. Tombol Greetings tetap utuh (TIDAK DIHILANGKAN)
  const button = document.getElementById("greeting-button");
  if (button) {
    button.addEventListener("click", () => {
      alert("👋 Selamat Belajar Prend Quu Mengenai Pengembangan Situs Web! Jangan lupa untuk selalu berlatih dan eksplorasi lebih lanjut. Semoga sukses dalam perjalanan belajar web nya, ya! 😊");
    });
  }
});