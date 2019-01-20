////////////////addding to dosssss//////////////////

document.getElementById("addtodo").addEventListener("click", addingls);
function addingls() {
  var todo = document.getElementById("textar").value;
  var deadline = document.getElementById("indate").value;
  var myobejct = {
    id: localStorage.getItem("login"),
    do: todo,
    dead: new Date(deadline)
  }
  if(deadline && todo){
  var tab = JSON.parse(localStorage.getItem("items")) || [];
  tab.push(myobejct);
  localStorage.setItem("items",JSON.stringify(tab));
  
  var div = document.createElement("div");
  div.style.minWidth = "100px";
  div.style.minHeight = "100px";
  div.style.background = "red";
  div.style.color = "white";
  div.innerHTML = "to do: "+todo+"</br>"+"deadline: "+ deadline;

  document.getElementById("mainblock").appendChild(div);
  }
}