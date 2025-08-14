// Aritmatika
console.log("aritmatika");
let a = 150;
let b = 40;

console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Modulus:", a % b);

// Assignment
console.log("assignment");
let x = 35;

x += 5; // x = x + 5
console.log("x += 5:", x);
x -= 2 // x = x - 2
console.log("x -= 2", x);
x *= 3; // x = x * 3
console.log("x *= 3:", x);
x /= 2; // x = x / 2
console.log("x /= 2:", x);

// Perbandingan
console.log("perbandingan");
let c = 10;
let d = "10";

console.log("c == d:", c == d); // true, karena nilai sama
console.log("c === d:", c === d); // false, karena tipe data berbeda
console.log("c != d:", c != d); // false, karena nilai sama
console.log("c !== d:", c !== d); // true, karena tipe data berbeda
console.log("c > 5:", c > d); // false
console.log("c <=10:", c < d); // true

// Kondisional
console.log("kondisional");

let umur = 20;
let punyaKTP = true;

console.log("Boleh buat Sim:", (umur >= 17 && punyaKTP) ? "Boleh" : "Tidak Boleh");
console.log("Remaja atau dewasa:", (umur >= 13 ||umur >= 19) ? "Remaja" : "Dewasa");
console.log("Bukan anak-anak?", !(umur < 13) ? "Bukan Anak-anak" : "Anak-anak");




