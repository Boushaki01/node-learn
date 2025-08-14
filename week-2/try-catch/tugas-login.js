
// buat fungsi verifikasiLogin dengan parameter username dan password
function verifikasiLogin(username, password) {
    try {
        // cek kondisi 1, username harus admin dan password harus 12345
        if (username === "admin" && password === "12345") {
            console.log("Login Berhasil");
        }
        // cek kondisi 2, username harus string dan password harus string
        else if (typeof username === "string" && typeof password === "string"){
            // tampil error harus lah menggunakan throw new error, jangan console log di setiap kondisi else
            throw new Error("username dan password salah");
        } 
        // kondisi lainnya juga harus throw new error
        else{
            throw new Error("terjadi kesalahan: Username dan password harus berupa teks"); 
        }
    } 
    // throw error tampil di catch
    catch (error) {
        console.log(error.message);
        
    }
}

// checking
verifikasiLogin("admin", "12345")
verifikasiLogin("admin", "salah")
verifikasiLogin(123, true)