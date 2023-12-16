//user
export const formTodolist = `
  <td></td>
  <td class="button">
    <button class="button is-link is-outlined" type="button" onclick="doneTodo('#DONE#')">
      <span class="icon"><i class="mdi mdi-clock-check"></i></span>
    </button>
  </td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# + #TIME#</td>
  <td class="is-actions-cell">
    <div class="button">
      <a href="edit.html?_id=#IDEDIT#" class="button is-dark" data-todo-id="#IDHAPUS#" type="button">
        <span class="icon"><i class="mdi mdi-eye-circle"></i></span>
      </a>
      <button class="button is-dark is-outlined" type="button" onclick="deleteTodo('#DELETE#')">
        <span class="icon"><i class="mdi mdi-delete-circle"></i></span>
      </button>
    </div>
  </td>
`;

export const formTodolistDone = `
  <td></td>
  <td data-label="Status">#STATUS#</td>
  <td data-label="Clear">#CLEAR#</td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# + #TIME#</td>
`;

export const formProfile = `
  <a href="edit_user.html?_id=#IDEDIT#" class="control-icon" type="button">
    <span class="icon"><i class="mdi mdi-pencil-box-multiple-outline"></i></span>
  </a>
  <br>
  <label class="label">Username</label>
  <div class="control is-clearfix">
    <input type="text" value="#USERNAME#" class="input" id="username">
  </div>
  <br>
  <br>
  <label class="label">E-mail</label>
  <div class="control is-clearfix">
    <input type="text" value="#EMAIL#" class="input" id="email">
  </div>
`;

export const navbarUser = `
  <a class="navbar-link is-arrowless">
  <div class="is-user-avatar">
    <img src="../assets/img/todolist.png">
  </div>
  <div class="is-user-name">
    <span id="username">#USERNAME#</span>
  </div>
  <span class="icon"><i class="mdi mdi-chevron-down"></i></span>
  </a>
`;


//admin
export const formTodolistAdmin = `
  <td></td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# + #TIME#</td>
  <td data-label="TimeStamp">
    <div class="w-auto p-2">
      <p class="mb-1"><b>Created At:</b> #CREATEDAT#</p>
      <p class="mb-1"><b>Updated At:</b> #UPDATEDAT#</p>
    </div>
  </td>
  <td data-label="UID">#UID#</td>
`;

export const formUserAll = `
  <td></td>
  <td data-label="UID">#UID#</td>
  <td data-label="Email">#EMAIL#</td>
  <td data-label="Username">#USERNAME#</td>
  <td data-label="Role">#ROLE#</td>
`;