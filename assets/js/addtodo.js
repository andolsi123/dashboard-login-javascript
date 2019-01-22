////////////////addding to dosssss//////////////////

document.getElementById("addtodo").addEventListener("click", addingls);
function addingls() {
  var todo = document.getElementById("textar").value;
  var deadline = document.getElementById("indate").value;
  var myobejct = {
    id: localStorage.getItem("login"),
    idtodo: Date.now(),
    do: todo,
    dead: deadline
  };
  if (deadline && todo) {
    var tab = JSON.parse(localStorage.getItem("items")) || [];
    tab.push(myobejct);
    localStorage.setItem("items", JSON.stringify(tab));

    var create = "<tr>";
    create += "<td>" + myobejct.do + "</td>";
    create += "<td>" + myobejct.dead + "</td>";
    create +=
      "<td>" +
      '<button onclick="editTodoById(' +
      myobejct.idtodo +
      ')">Edit</button>' +
      '<button onclick="delTodoById(' +
      myobejct.idtodo +
      ')">Delete</button>' +
      "</td>";
    create += "</tr>";
    document.getElementById("tab").innerHTML += create;
  }
}
/////////////////aficher todooooooosssssssssss////////////
var local = JSON.parse(localStorage.getItem("items"));

var localuser = localStorage.getItem("login");

for (let i = 0; i < local.length; i++) {
  if (local[i].id === localuser) {
    var create = "<tr>";

    create += "<td>" + local[i].do + "</td>";
    create += "<td>" + local[i].dead + "</td>";
    create +=
      "<td>" +
      '<button onclick="editTodoById(' +
      local[i].idtodo +
      ')">Edit</button>' +
      " " +
      '<button onclick="delTodoById(' +
      local[i].idtodo +
      ')">Delete</button>' +
      "</td>";
    create += "</tr>";
    document.getElementById("tab").innerHTML += create;
  }
}