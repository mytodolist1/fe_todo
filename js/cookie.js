import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

function logout() {
    deleteCookie("token");
    window.location.href = "login.html";
}

document.getElementById("logoutButton").addEventListener("click", logout);