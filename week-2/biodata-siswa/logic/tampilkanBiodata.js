// fungsi untuk menampilkan biodata siswa

const aplikasi = require('../config/aplikasi.js')
const siswa = require('../data/siswa.js')
const kategoriKelulusan = require('./logikaKategori.js')

function tampilkanBiodata() {
    for (let i = 0; i < siswa.length; i++) {
        console.log("=== BIODATA SISWA ===");
        console.log("Nama               : " + siswa[i].nama);
        console.log("Umur               : " + siswa[i].umur + " Tahun");
        console.log("Asal               : " + siswa[i].asal);
        console.log("Sekolah            : " + siswa[i].sekolah);
        console.log("Tahun Lulus        : " + siswa[i].tahunLulus);
        console.log("Kategori Kondisi   : " + kategoriKelulusan(i));
        console.log('');
    }
}

module.exports = tampilkanBiodata;