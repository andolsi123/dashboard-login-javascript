document.getElementById("clk").addEventListener("click", user);
function user() {
    var testName = document.getElementById("name").value;

    var testPassword = document.getElementById("password").value;

    var locals = JSON.parse(localStorage.getItem("users"));
    var logged = false;
    for (let i = 0; i < locals.length; i++) {
        if (locals[i].yourName === testName && locals[i].yourPassword === testPassword) {
            logged = true;
            break;
        }
    }
    if (logged) {
        window.location.href = "dashboard.html";
    }
    else {
        window.location.href = "indexx.html";
    }
}