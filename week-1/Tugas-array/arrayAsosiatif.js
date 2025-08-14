let orang = [
    {
        nama: "Rose",
        tinggi: 178
    },
    {
        nama: "Magnolia",
        tinggi: 153
    },
    {
        nama: "Daisy",
        tinggi: 165
    },
    {
        nama: "Jasmine",
        tinggi: 161
    },
    {
        nama: "Violet",
        tinggi: 159
    }
]

console.log("============== No. 1 ==============");


for (let i = 0; i < orang.length; i++) {
    console.log("Nama: " + orang[i].nama + ", Tinggi: " + orang[i].tinggi);
}

console.log("============== No. 2 ==============");
orang.sort((a, b)=> a.nama.localeCompare(b.nama))
for (let i = 0; i < orang.length; i++) {
    console.log("Nama: " + orang[i].nama + ", Tinggi: " + orang[i].tinggi);
}

console.log("============== No. 3 ==============");

let buah = []
buah.push("Apel","Mangga","Jeruk","Semangka","Pisang","Anggur","Nanas");
buah.sort()
for (let i = 0; i < buah.length; i++) {
    console.log((i+1) + ". " + buah[i]);  
}


console.log("============== No. 4 ==============");
// modal belanja
let modal = 1200000

// daftar belanja
let belanjaan = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000},
]

// perulangan untuk menampilkan daftar belanja
// dan menghitung total harga
let totalHarga = 0;
for (let i = 0; i < belanjaan.length; i++) {
    console.log((i+1) + ". "+ belanjaan[i].nama + " - Rp. " + belanjaan[i].harga.toLocaleString('id-ID'));
    totalHarga += belanjaan[i].harga;
}

// menampilkan total belanja
console.log("Total belanja: Rp. " + totalHarga.toLocaleString('id-ID'));


// menghitung diskon berdasarkan total belanja
let diskon = 0
if (totalHarga < 250000) {
    diskon = 0
} else if (totalHarga >= 250000 && totalHarga <= 499999) {
    diskon = 5
}  else if (totalHarga >= 500000 && totalHarga <= 799999) {
    diskon = 10
} else if (totalHarga >= 800000) {
    diskon = 15
}

// harga setelah diskon
hargasetelahDiskon = totalHarga - (totalHarga * diskon / 100);

// menampilkan diskon dan total setelah diskon
console.log("Diskon: " + diskon + "%");
console.log("Total setelah diskon: Rp. " + hargasetelahDiskon.toLocaleString('id-ID'));

// menampilkan pembayaran dan kembalian
console.log("Pembayaran: Rp. " + modal.toLocaleString('id-ID'));
console.log("Kembalian: Rp. " + (modal - diskon).toLocaleString('id-ID'));
















console.log("============== No. 5 ==============");

daftarBelanja = []
daftarBelanja.push("Beras","Minyak", "Gula")
daftarBelanja.push("Buah","Sayur","Telur")


daftarBelanja.splice(daftarBelanja.indexOf("Minyak"), 1)
daftarBelanja.sort()
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log((i+1) + ". " + daftarBelanja[i]);
}