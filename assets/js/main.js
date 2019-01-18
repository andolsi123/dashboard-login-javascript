document.getElementById("btn").addEventListener("click", locals);

function upper(input) {
  var upper = input.toLowerCase();
  if (input != upper) {
    return true;
  } else {
    return false;
  }
}

function sch(input) {
  var format = /^[!@#$% ^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  if (input.match(format) != "") {
    return true;
  } else {
    return false;
  }
}

function nan(input) {
  var resultat = false;

  for (i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      resultat = true;
    }
  }
  return resultat;
}

function passvalider() {
  var input = document.getElementById("password").value;

  var resultat = 0;

  if (input.length >= 8) {
    if (nan(input)) {
      resultat++;
    }
    if (sch(input)) {
      resultat++;
    }
    if (upper(input)) {
      resultat++;
    }

    if (resultat === 3) {
      document.getElementById("result").innerHTML += "password fort valider";
      console.log("password fort valider");
    }
    if (resultat === 2) {
      document.getElementById("result").innerHTML += "password moyenne valider";
      console.log("password moyenne valider");
    }
    if (resultat === 1 || resultat === 0) {
      document.getElementById("result").innerHTML += "password faible valider";
      console.log("password faible valider");
    }
  } else {
    console.log("password non valider");
    document.getElementById("result").innerHTML +=
      "password non valide needs more than 8 chars";
    document.getElementById("pass").style.textDecoration = "underline";
    document.getElementById("password").style.backgroundColor = "red";
  }
  return document.getElementById("password").value;
}

function namevalider() {
  if (document.getElementById("text").value.indexOf(" ") === -1) {
    console.log("name valider");
  } else {
    console.log("name non valider so much space");
    document.getElementById("result").innerHTML +=
      "name non valider so much space";
    document.getElementById("namee").style.textDecoration = "underline";
    document.getElementById("text").style.backgroundColor = "red";
  }
  return document.getElementById("text").value;
}

function agecal() {
  var age = document.getElementById("age").value;

  var date = new Date();

  var date2 = new Date(age);

  var day = date2.getDay();
  var month = date2.getMonth();
  var year = date2.getFullYear();

  var yourAge = date.getFullYear() - year;

  if (parseInt(month) > parseInt(date.getMonth())) {
    yourAge -= 1;
  }
  if (
    parseInt(month) === parseInt(date.getMonth()) &&
    parseInt(day) > parseInt(date.getDay())
  ) {
    yourAge -= 1;
  }
  if (yourAge < 18) {
    console.log("underage");
    document.getElementById("result").innerHTML += "you're underage";
    document.getElementById("agee").style.textDecoration = "underline";
    document.getElementById("age").style.backgroundColor = "red";
  }
  if (yourAge >= 18) {
    console.log("age passed");
  }
  return yourAge;
}
function locals() {
  var myObject = {
    yourId: Date.now(),
    yourName: namevalider(),
    yourPassword: passvalider(),
    yourAge: agecal()
  };
  var tab = JSON.parse(localStorage.getItem("users")) || [];

  tab.push(myObject);

  localStorage.setItem("users", JSON.stringify(tab));
}