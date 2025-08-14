// logika untuk kategru kelulusan siswa

const siswa = require('../data/siswa.js')

function kategoriKelulusan(i) {
        if (siswa[i].tahunLulus < 2019 ) {
        return 'Lulus Sebelum Covid'
        } else if (siswa[i].tahunLulus >= 2019 && siswa[i].tahunLulus <= 2021) {
        return 'Lulus Saat Covid'
        } else if ( siswa[i].tahunLulus > 2021) {
        return'Lulus Setelah Covid'
        }
}

module.exports = kategoriKelulusan;