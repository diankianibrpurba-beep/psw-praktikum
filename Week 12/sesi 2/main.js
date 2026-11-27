const form = document.querySelector("#form-peserta");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

// Definisikan key untuk Web Storage
const KEY = "pswi.peserta.v1";

// 1. Definisikan array peserta
let peserta = [];
let berikutnya = 1; 

// Fungsi simpan ke localStorage
function simpan() {
  localStorage.setItem(KEY, JSON.stringify(peserta));
}

// 2. Fungsi render untuk tampilkan data ke HTML
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

try {
  const raw = localStorage.getItem(KEY);
  if (raw !== null) {
    const data = JSON.parse(raw);
    
    if (!Array.isArray(data) || !data.every(p => Number.isInteger(p.id) && p.id > 0 && typeof p.nama === "string")) {
      throw new Error("Data peserta tidak sesuai");
    }
    peserta = data;
    
    // Sesuaikan nilai berikutnya agar ID baru tak duplikat
    if (peserta.length > 0) {
      berikutnya = Math.max(...peserta.map(p => p.id)) + 1;
    }
  }
} catch (error) {
  peserta = [];
  pesan.textContent = "Data lokal bermasalah. Periksa/reset key latihan.";
}

function ubahNama(id, namaBaru) {
  const bersih = namaBaru.trim();
  if (!bersih) return false;
  
  // Perbarui nama peserta yang punya ID yang cocok
  peserta = peserta.map(p => p.id === id ? { ...p, nama: bersih } : p);
  
  simpan();
  render();
  return true;
}

// 4. Tambah Peserta
form.addEventListener("submit", event => {
  event.preventDefault();
  const nama = String(new FormData(form).get("nama") ?? "").trim();
  if (!nama) { 
    pesan.textContent = "Nama harus diisi"; 
    return; 
  }
  peserta.push({ id: berikutnya++, nama });
  
  simpan(); 
  render(); 
  form.reset();
  pesan.textContent = `${peserta.length} peserta di memori`;
});

// Event delegation untuk tombol hapus
daftar.addEventListener("click", event => {
  const btn = event.target.closest("button[data-id]");
  if (!btn || !daftar.contains(btn)) return;
  
  peserta = peserta.filter(p => p.id !== Number(btn.dataset.id));
  
  simpan(); 
  render();
  pesan.textContent = peserta.length ? "Peserta dihapus & storage diperbarui" : "Belum ada peserta";
});

// Inisialisasi awal
render();
if (peserta.length === 0 && pesan.textContent === "") {
  pesan.textContent = "Belum ada peserta";
}