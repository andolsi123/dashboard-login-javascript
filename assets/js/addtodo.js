////////////////addding to dosssss//////////////////

document.getElementById("addtodo").addEventListener("click", addingls);

function addingls() {
  var todo = prompt("add to do to your list");
  var deadline = prompt("enter your deadline");
  var obejct = {
    id: localStorage.getItem("login"),
    do: todo,
    dead: new Date(deadline)
  };
  var tab = JSON.parse(localStorage.getItem("items")) || [];
  tab.push(Object);
  localStorage.setItem("items", JSON.stringify(tab));

  var div = document.createElement("div");
  div.style.minWidth = "100px";
  div.style.minHeight = "100px";
  div.style.background = "red";
  div.style.color = "white";
  div.innerHTML = "to do:"+todo+"</br>"+"deadline:"+deadline;

  document.getElementById("main").appendChild(div);
}