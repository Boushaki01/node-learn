//akses file yang ada di direktori yang sama
const fs = require('fs');

// membuka dan membaca file json
// otomatis membuka file json
const text = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(text);

console.log("Data awal dari file JSON: ", data);

// menambahkan data baru
// data.push({id: 4, nama: "Jeremy", umur: 28});
// data.pop()

// menyimpan data ke file json
fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');

console.log("Data berhasil ditambahkan ke file JSON.");
console.log("Isi Akhir");

// menampilkan nama saja
for (let i = 0; i < data.length; i++) {
    console.log((i+1) + ". " + data[i].nama);
}

