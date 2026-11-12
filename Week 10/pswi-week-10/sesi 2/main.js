const daftar = document.querySelector("#daftar");
const pesan = document.querySelector("#pesan");

let peserta = [
  { id: 1, nama: "Rina" },
  { id: 2, nama: "Budi" }
];

function render() {
  daftar.replaceChildren();
  
  // Menampilkan pesan jika array peserta kosong, jika ada isi maka kosongkan teks pesan
  pesan.textContent = peserta.length ? "" : "Belum ada peserta";

  for (const p of peserta) {
    const li = document.createElement("li");
    li.textContent = p.nama;
    daftar.append(li);
  }
}

render();