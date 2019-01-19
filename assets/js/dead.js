var local = JSON.parse(localStorage.getItem("items"));
var localuser = localStorage.getItem("login");
for (let i = 0; i < local.length; i++) {
  if (local[i].id === localuser && local[i].dead < Date()) {
    var div = document.createElement("div");
    div.style.minWidth = "100px";
    div.style.minHeight = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "to do:" + local[i].todo + "</br>" + "deadline:" + local[i].deadline;

    document.getElementById("mainblock").appendChild(div);
  }
}