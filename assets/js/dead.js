var local = JSON.parse(localStorage.getItem("items"));
var localuser = localStorage.getItem("login");
var date = new Date();
for (let i = 0; i < local.length; i++) {
  if (local[i].id === localuser) {
    var tododate = new Date(local[i].dead);
    if (
      parseInt(tododate.getFullYear()) > parseInt(date.getFullYear()) ||
      (parseInt(tododate.getFullYear()) === parseInt(date.getFullYear()) &&
        parseInt(tododate.getMonth()) > parseInt(date.getMonth())) ||
      (parseInt(tododate.getFullYear()) === parseInt(date.getFullYear()) &&
        parseInt(tododate.getMonth()) === parseInt(date.getMonth()) &&
        parseInt(tododate.getDay()) >= parseInt(date.getDay()))
    ) {
      var div = document.createElement("div");
      div.style.minWidth = "100px";
      div.style.minHeight = "100px";
      div.style.background = "red";
      div.style.color = "white";
      div.innerHTML =
        "to do: " + local[i].do + "</br>" + "deadline: " + local[i].dead;

      document.getElementById("mainblock").appendChild(div);
    }
  }
}