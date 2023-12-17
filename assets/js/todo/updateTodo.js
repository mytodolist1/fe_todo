import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putData } from "../temp/component.js";

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    console.log("todoID:", _id);

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateTodo?_id=" + _id;

    // const deadlineInput = document.getElementById('deadline');
    // const deadlineDate = new Date(deadlineInput.value);
    // const formattedDeadline = deadlineDate.toLocaleDateString('id-ID');

    const data = {
        "title": getValue("title"),
        "description": getValue("description"),
        // "deadline": formattedDeadline,
        "deadline": getValue("deadline"),
        "time" : getValue("time"),
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
