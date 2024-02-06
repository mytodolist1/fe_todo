import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "../temp/table.js";
import { setReminder } from "../temp/reminder.js";
import { getWithToken } from "../temp/component.js";
import { searchTodo } from "./search.js";
import { hideLoading } from "../complement/loading.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

const btnInsert = document.getElementById('allTaskButton');
btnInsert.classList.remove('is-outlined');

const inputSearch = document.getElementById('searchInput');
const btnSearch = document.getElementById('searchButton');

const dataTodo  = (value) => {
    // console.log("value: ", value);
    const data = formTodolist
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CATEGORY#", value.tags.category)
    .replace("#FILE#", value.file)
    .replace("#FILE1#", value.file)
    .replace("#DONE#", value._id)
    .replace("#IDEDIT#", value._id)
    .replace("#DELETE#", value._id)
    .replace("#IDHAPUS#", value._id);

    addInner("tableTodolist", data);

    console.log(value);

    setReminder(value.deadline, value.time, value.title, value.user.phonenumber, value.user.username);
}

const responseData = (result) => {
    // console.log("result: ", result);
    if (result.status === true) {
        result.data.forEach(dataTodo);

        btnSearch.addEventListener('click', (event) => {
            event.preventDefault();
            searchTodo(result.data, inputSearch);
        });
    }
    hideLoading();
}

getWithToken(target_url, responseData);