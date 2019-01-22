var local = JSON.parse(localStorage.getItem("items"));

function editTodoById(id) {
  for (let index = 0; index < local.length; index++) {
    if (local[index].idtodo === id) {
      var newTodo = document.getElementById("textar").value;
      var newDeadline = document.getElementById("indate").value;
      if (newTodo && newDeadline) {
        local[index].do = newTodo;
        local[index].dead = newDeadline;
        localStorage.setItem("items", JSON.stringify(local));
        window.location.href = "../mini project html css js/dashboard.html";
      }
    }
  }
}

function delTodoById(id) {
  for (let index = 0; index < local.length; index++) {
    if (local[index].idtodo === id) {
      local.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(local));
      window.location.href = "../mini project html css js/dashboard.html";
    }
  }
}