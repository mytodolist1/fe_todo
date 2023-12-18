import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putData } from "../temp/component.js";
import { format12Hours, formatDate } from "../temp/timestamp.js";

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    console.log("todoID:", _id);

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateTodo?_id=" + _id;

    const data = {
        "title": getValue("title"),
        "description": getValue("description"),
        "deadline": formatDate(getValue("deadline")),
        "time": format12Hours(getValue("time")),
        // "deadline": convertFormatDateToSlash(getValue("deadline")),
        // "time": convertToFormat12Hours(getValue("time")),
        // "deadline": getValue("deadline"),
        // "time" : getValue("time"),
        "category": getValue("category"),
    };
    
    putData(target_url, data, responseData);

    console.log("Data:", data);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list_kegiatan.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: result.message,
        });
    }
}

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateTodo);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateTodo();
  });
