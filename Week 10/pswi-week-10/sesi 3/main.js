const form = document.querySelector("#form-peserta");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

// 1. Definisikan array peserta (bisa kosong atau ada data awal)
let peserta = [];
let berikutnya = 3;

// 2. Fungsi render untuk menampilkan data ke HTML
function render() {
  daftar.replaceChildren();
  for (const p of peserta) {
    const li = document.createElement("li");
    const nama = document.createElement("span");
    nama.textContent = p.nama;
    
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Hapus";
    btn.dataset.id = String(p.id);
    
    li.append(nama, " ", btn);
    daftar.append(li);
  }
}

// 4. Tambah Peserta (Sesuai modul)
form.addEventListener("submit", event => {
  event.preventDefault();
  const nama = String(new FormData(form).get("nama") ?? "").trim();
  if (!nama) { 
    pesan.textContent = "Nama harus diisi"; 
    return; 
  }
  peserta.push({ id: berikutnya++, nama });
  render(); 
  form.reset();
  pesan.textContent = `${peserta.length} peserta di memori`;
});

// Event delegation untuk tombol hapus
daftar.addEventListener("click", event => {
  const btn = event.target.closest("button[data-id]");
  if (!btn || !daftar.contains(btn)) return;
  peserta = peserta.filter(p => p.id !== Number(btn.dataset.id));
  render();
  pesan.textContent = peserta.length ? "Peserta dihapus" : "Belum ada peserta";
});

// Inisialisasi awal
render();
pesan.textContent = "Belum ada peserta";

