console.log("PSWI W06S03 Loaded Successfully.");

// Menguji dan mencatat kandidat gambar aktif (currentSrc) di Console untuk verifikasi srcset
window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach((img, index) => {
    img.addEventListener("load", () => {
      console.log(`Gambar ke-${index + 1} aktif. currentSrc: ${img.currentSrc}`);
    });
  });

  const button = document.getElementById("greeting-button");
  if (button) {
    button.addEventListener("click", () => {
      alert("👋Selamat Belajar Prend Quu Mengenai Pengembangan Situs Web I! Jangan lupa untuk selalu berlatih dan eksplorasi lebih lanjut. Semoga sukses dalam perjalanan belajar web nya, ya!😊");
    });
  }
});