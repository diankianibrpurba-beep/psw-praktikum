const form = document.querySelector("#form-peserta");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");
const namaInput = document.querySelector("#nama");

// Definisikan key untuk Web Storage
const KEY = "pswi.peserta.v1";

// 1. Definisikan array peserta & state edit
let peserta = [];
let berikutnya = 1; 
let editId = null; // Menyimpan ID peserta yang sedang diedit

// Fungsi simpan ke localStorage
function simpan() {
  localStorage.setItem(KEY, JSON.stringify(peserta));
}

// 2. Fungsi render untuk menampilkan data ke HTML (dengan Tombol Edit & Hapus)
function render() {
  daftar.replaceChildren();
  for (const p of peserta) {
    const li = document.createElement("li");
    const nama = document.createElement("span");
    nama.textContent = p.nama;
    li.append(nama, " ");
    
    // Tombol Edit
    const btnEdit = document.createElement("button");
    btnEdit.type = "button";
    btnEdit.textContent = "Edit";
    btnEdit.dataset.id = String(p.id);
    btnEdit.dataset.aksi = "edit";
    
    // Tombol Hapus
    const btnHapus = document.createElement("button");
    btnHapus.type = "button";
    btnHapus.textContent = "Hapus";
    btnHapus.dataset.id = String(p.id);
    btnHapus.dataset.aksi = "hapus";
    
    li.append(btnEdit, " ", btnHapus);
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
    
    // Sesuaikan nilai berikutnya agar ID baru tidak duplikat
    if (peserta.length > 0) {
      berikutnya = Math.max(...peserta.map(p => p.id)) + 1;
    }
  }
} catch (error) {
  peserta = [];
  pesan.textContent = "Data lokal bermasalah. Periksa/reset key latihan.";
}

// 4. Tambah atau Update Peserta (Submit Form)
form.addEventListener("submit", event => {
  event.preventDefault();
  const nama = String(new FormData(form).get("nama") ?? "").trim();
  if (!nama) { 
    pesan.textContent = "Nama harus diisi"; 
    return; 
  }
  
  if (editId === null) {
    // Tambah data baru
    peserta.push({ id: berikutnya++, nama });
    pesan.textContent = `${peserta.length} peserta di memori`;
  } else {
    // Perbarui data yang sedang diedit
    peserta = peserta.map(p => p.id === editId ? { ...p, nama } : p);
    editId = null;
    pesan.textContent = "Data berhasil diperbarui";
  }
  
  simpan(); 
  render(); 
  form.reset();
  namaInput.focus();
});

// Event delegation untuk tombol Edit dan Hapus
daftar.addEventListener("click", event => {
  const btn = event.target.closest("button[data-id]");
  if (!btn || !daftar.contains(btn)) return;
  
  const id = Number(btn.dataset.id);
  const aksi = btn.dataset.aksi;
  
  if (aksi === "edit") {
    const p = peserta.find(p => p.id === id);
    if (!p) return;
    editId = id;
    namaInput.value = p.nama;
    namaInput.focus();
    pesan.textContent = `Mode edit untuk peserta ID ${id}`;
  } else {
    // Aksi Hapus
    peserta = peserta.filter(p => p.id !== id);
    if (editId === id) {
      editId = null;
      form.reset();
    }
    simpan(); 
    render();
    pesan.textContent = peserta.length ? "Peserta dihapus & storage diperbarui" : "Belum ada peserta";
  }
});

// Inisialisasi awal
render();
if (peserta.length === 0 && pesan.textContent === "") {
  pesan.textContent = "Belum ada peserta";
}