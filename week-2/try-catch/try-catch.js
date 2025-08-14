const x = 11
try {
    if (x > 3 && x <5) {
        console.log("x = kecil");
    } else if (x > 7 && x < 10) {
        console.log("x = besar");
        
    }
} catch{
    console.log("x tidak terdeteksi");
    
}

console.log(x);
