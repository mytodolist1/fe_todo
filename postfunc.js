import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist";
    let tokenkey = "token";
    let tokenvalue = "d4f1c80e75682f5cc33895fb3ccfe6e5165fea6df42d463eb7144e34db2d3ef0";
    let datajson = {
        "username": getValue("username"),
        "password": getValue("password"),
    };
    postWithToken(target_url, tokenkey, tokenvalue, datajson, responseData);
}

// document.getElementById("loginButton").addEventListener("submit", PostSignUp);

function responseData(result) {
    console.log("Respons dari server:", result);

    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);

    if (result.message == "Selamat Datang") {
        window.location.href = "dashboard.html";
        alert("Berhasil Masuk " + result.message);
    } else if (result.message == "Password Salah") {
        alert("Gagal Masuk " + result.message);
    } else {
        alert("Gagal Masuk " + "password atau username salah")
        window.location.href = "404.html";
        console.log(result.message);
    }
}

// function setSecureCookieWithExpireHour(cname, cvalue, exhour) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
    
//     // Atur atribut-atribut cookie dalam cookieOptions
//     const cookieOptions = [
//         cname + "=" + cvalue,
//         expires,
//         "path=/", // Cookie tersedia di seluruh situs
//         "Secure", // Hanya akan dikirim melalui koneksi HTTPS yang aman
//         "HttpOnly", // Tidak dapat diakses oleh JavaScript
//         "SameSite=Strict" // Hanya akan dikirim dalam permintaan jika domain sumber permintaan sama dengan domain halaman
//     ];
    
//     // Gabungkan semua atribut cookie dalam satu string dengan separator "; "
//     document.cookie = cookieOptions.join("; ");
// }

// // Contoh penggunaan fungsi
// setSecureCookieWithExpireHour("id", "a3fWa", 1); // Cookie akan kedaluwarsa dalam 1 jam


// function setCookieWithExpireHour(cname, cvalue, exhour) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + "secure; HttpOnly; samesite=Strict";
//     // Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; SameSite=Strict
// }

// function responseData(result) {
//     setInner("pesan", result.message);
//     setCookieWithExpireHour("token", result.token, 2);
//     alert("Berhasil Masuk")
//     window.location.href = "dashboard.html";
// }