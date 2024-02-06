import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formProfile, modalHapus } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user";

const dataUser  = (value) => {
    const data = formProfile
    .replace("#USERNAME#", value.username)
    .replace("#EMAIL#", value.email)
    .replace("#IDEDIT#", value._id)

    addInner("profileUser", data);

    console.log(value);
}

const modalDel = (value) => {
    const data = modalHapus
    .replace("#HAPUS#", value.username);

    addInner("hapus", data);

    console.log(value);
}

const responseData = (result) => {
    console.log(result);
    if (result.status === true) {
        result.data.forEach(dataUser);
        result.data.forEach(modalDel);
    }
    hideLoading();
}

getWithToken(target_url, responseData);