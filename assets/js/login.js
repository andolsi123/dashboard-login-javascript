document.getElementById("clk").addEventListener("click", user);

document.getElementById("signin").addEventListener("click",sign);

function sign(){
    window.location.href = "../mini project html css js/index.html";
}

function user() {
    var testName = document.getElementById("name").value;

    var testPassword = document.getElementById("password").value;

    var locals = JSON.parse(localStorage.getItem("users"));
    var logged = false;
    for (let i = 0; i < locals.length; i++) {
        if (locals[i].yourName === testName && locals[i].yourPassword === testPassword) {
            localStorage.setItem("login",JSON.stringify(locals[i].yourId));
            logged = true;
            break;
        }
    }
    if (logged) {
        window.location.href = "../mini project html css js/dashboard.html";
    }
    else {
       alert("you dont have an account");
    }
}