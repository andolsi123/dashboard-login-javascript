////// sign out ///////////////

document.getElementById("deconnect").addEventListener("click", signout);

function signout() {
  localStorage.setItem("login","");
  window.location.href = "../mini project html css js/login.html";
}

///////////////////deadline///////////////
document.getElementById("deadline").addEventListener("click",dead);

function dead(){
    window.location.href = "../mini project html css js/dead.html";
}
/////////////////////////history//////////////////////
document.getElementById("history").addEventListener("click",his);

function his() {
    window.location.href = "../mini project html css js/history.html";
}