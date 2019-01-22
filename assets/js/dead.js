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
      var create = "<tr>";

      create += "<td>" + local[i].do + "</td>";
      create += "<td>" + local[i].dead + "</td>";
      
      create += "</tr>";
      document.getElementById("tab").innerHTML += create;
    }
    }
  }