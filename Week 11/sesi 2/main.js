document.addEventListener("DOMContentLoaded", () => {
  const tombolMuat = document.getElementById("muat");
  const elemenPesan = document.getElementById("pesan");
  const daftarContainer = document.getElementById("daftar");

  if (tombolMuat) {
    tombolMuat.addEventListener("click", async () => {
      elemenPesan.textContent = "Memuat data kegiatan...";
      daftarContainer.replaceChildren();

      try {
        const response = await fetch("data/kegiatan.json");

        if (!response.ok) {
          throw new Error(`Gagal memuat data (HTTP Status: ${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Data harus array");
        }

        daftarContainer.replaceChildren();

        for (const k of data) {
          if (typeof k.judul !== "string") {
            throw new Error("Judul tidak sesuai");
          }
          const li = document.createElement("li");
          li.textContent = k.judul;
          daftarContainer.append(li);
        }

        elemenPesan.textContent = "";
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        elemenPesan.textContent = error.message;
      }
    });
  }

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