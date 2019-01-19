document.getElementById("btn").addEventListener("click", locals);

//document.getElementById("age").valueAsDate = new Date();

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
      document.getElementById("result").innerHTML = "password fort valider";
      console.log("password fort valider");
    }
    if (resultat === 2) {
      document.getElementById("result").innerHTML = "password moyenne valider";
      console.log("password moyenne valider");
    }
    if (resultat === 1 || resultat === 0) {
      document.getElementById("result").innerHTML = "password faible valider";
      console.log("password faible valider");
    }
    if (document.getElementById("passwordconform").value === input) {
      return document.getElementById("password").value;
    }
    if (document.getElementById("passwordconform").value != input) {
      document.getElementById("result").innerHTML = "red means repeat";
      document.getElementById("result").style.textAlign = "center";
      document.getElementById("result").style.color = "#34495e";
      document.getElementById("passconf").style.textDecoration = "underline";
      document.getElementById("passwordconform").style.backgroundColor =
        "#e74c3c";
    }
  } else {
    console.log("password non valider");
    document.getElementById("result").innerHTML = "red means repeat";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "#34495e";
    document.getElementById("pass").style.textDecoration = "underline";
    document.getElementById("password").style.backgroundColor = "#e74c3c";
  }
}

function namevalider() {
  if (
    document.getElementById("text").value.indexOf(" ") === -1 &&
    document.getElementById("text").value != ""
  ) {
    console.log("name valider");
  } else {
    console.log("name non valider so much space");
    document.getElementById("result").innerHTML = "red means repeat";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "#34495e";
    document.getElementById("namee").style.textDecoration = "underline";
    document.getElementById("text").style.backgroundColor = "#e74c3c";
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
    document.getElementById("result").innerHTML = "red means repeat";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "#34495e";
    document.getElementById("agee").style.textDecoration = "underline";
    document.getElementById("age").style.backgroundColor = "#e74c3c";
  }
  if (yourAge >= 18) {
    console.log("age passed");
    return yourAge;
  }
}

function maile() {
  var mail = document.getElementById("emailn").value;
  var n = mail.indexOf("@");
  if (n != -1) {
    if (mail.indexOf(".", n) != -1) {
      return mail;
    }
  } else {
    document.getElementById("result").innerHTML = "red means repeat";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "#34495e";
    document.getElementById("maill").style.textDecoration = "underline";
    document.getElementById("emailn").style.backgroundColor = "#e74c3c";
  }
}

function locals() {
  var myObject = {
    yourId: Date.now(),
    yourName: namevalider(),
    yourPassword: passvalider(),
    yourAge: agecal(),
    yourEmail: maile()
  }
  if (myObject.yourEmail && myObject.yourName && myObject.yourPassword && myObject.yourAge) {
    var tab = JSON.parse(localStorage.getItem("users")) || [];

    tab.push(myObject);

    localStorage.setItem("users", JSON.stringify(tab));

    window.location.href ="../mini project html css js/login.html";
  }
}