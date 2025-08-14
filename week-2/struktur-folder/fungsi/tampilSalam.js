/**
 * Fungsi untuk menampilkan salam
 * Author : Instruktur TIK
 * Version : 1.0.0
 * Date : 12-8-2025
 */

function tampilkanSalam(){
    // Menyimpan pesan salam
    const pesan = 'Halo! Selamat datang di dunia Node.js';

    // Menampilkan pesan ke terminal
    console.log(pesan);
}

// mengekspor fungsi agar bisa digunakan di file lain
module.exports = tampilkanSalam;