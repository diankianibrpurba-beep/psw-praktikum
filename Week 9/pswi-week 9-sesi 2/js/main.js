console.log("PSWI Week 9 Sesi 2: Berhasil terhubung dan dieksekusi tanpa SyntaxError!");

// Nomor 4: Konversi Data (String & Number)
const teks = "2";
console.log("--- Eksperimen Konversi Data ---");
console.log("Hasil teks + 1 :", teks + 1);                  // Menghasilkan "21" (concatenation)
console.log("Hasil Number(teks) + 1 :", Number(teks) + 1); // Menghasilkan 3 (penjumlahan matematis)
console.log("Tipe data awal (teks):", typeof teks);
console.log("Tipe data setelah Number():", typeof Number(teks));
console.log("Number('abc'):", Number("abc"));                   // Menghasilkan NaN
console.log("Number.isFinite(Number('abc')):", Number.isFinite(Number("abc"))); // Menghasilkan false

window.addEventListener("DOMContentLoaded", () => {
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