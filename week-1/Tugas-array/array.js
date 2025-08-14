// let angka = [10,20,30]

// angka.forEach(function(nilai, index) {
//     console.log("Index ke-" + index + " :" + nilai);
// });

let tes = [
    {
        nama: "Budi",
        umur: 25
    },
    {
        nama: "Siti",
        umur: 30
    },
    {
        nama: "Andi",
        umur: 28
    }
]

console.log("============== For Each ==============");


tes.forEach(function(nilai, index, a) {
    console.log("Data ke-" + index + ":");
    console.log("Nama: " + nilai.nama);
    console.log("Umur: " + nilai.umur);
    console.log("Array: " + a[index].umur);
    console.log("-------------------------");
});

console.log("============== MAP ==============");

tes.map(function(nilai, index) {
    return console.log("Nama: " + nilai.nama + ", Umur: " + nilai.umur);
    
})


console.log("============== Filter ==============");

tes.filter ((nilai) => {
    if (nilai.umur > 27) {
        console.log("Nama: " + nilai.nama + ", Umur: " + nilai.umur);
    }
})

let anjay = [1,2,4,5]
anjay.splice(2,0,3)
console.log(anjay);

console.log("============== Sort ==============");
anjay.sort(function(a, b) {
    return b - a
});

console.log(anjay);
