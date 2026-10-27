function hitungNilai() {
    const matkul = document.getElementById('namaMatkul').value;
    const tugas = parseFloat(document.getElementById('nilaiTugas').value);
    const uts = parseFloat(document.getElementById('nilaiUTS').value);
    const uas = parseFloat(document.getElementById('nilaiUAS').value);

    if (!matkul || isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        alert("Harap isi semua kolom nilai dan nama mata kuliah!");
        return;
    }

    // Hitung bobot nilai
    const nilaiAkhir = (tugas * 0.3) + (uts * 0.35) + (uas * 0.35);

    // Tentukan Grade
    let grade = 'E';
    if (nilaiAkhir >= 80) grade = 'A';
    else if (nilaiAkhir >= 70) grade = 'B';
    else if (nilaiAkhir >= 60) grade = 'C';
    else if (nilaiAkhir >= 50) grade = 'D';

    // Tampilkan Hasil di DOM
    document.getElementById('txtMatkul').textContent = matkul;
    document.getElementById('txtNilaiAngka').textContent = nilaiAkhir.toFixed(1);
    document.getElementById('txtGrade').textContent = grade;

    document.getElementById('hasilBox').style.display = 'block';
}