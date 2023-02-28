function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  var email = document.getElementById("email");
  if (email.value == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email.value) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
    }
  }
}

function disableSubmit() {
  let userName = document.getElementById("userName");
  let account = document.getElementById("account");
  document.getElementById("sub").disabled = true;
  document.getElementById("sub").style.opacity = 0.5;
  if (JSON.parse(localStorage.getItem("tempData")) != null) {
    var data = JSON.parse(localStorage.getItem("tempData"));
    account.classList.add("turnOff");
    userName.classList.remove("turnOff");
    userName.firstElementChild.classList.remove("dropdown-toggle");

    userName.firstElementChild.innerHTML += " " + data.firstname;
  }
}

function accountSignOut() {
  let userName = document.getElementById("userName");
  let account = document.getElementById("account");
  userName.classList.add("turnOff");
  account.classList.remove("turnOff");
  userName.firstElementChild.innerHTML = "Welcome";
  localStorage.removeItem("tempData");
}

function activateButton(element) {
  if (element.checked) {
    document.getElementById("sub").disabled = false;
    document.getElementById("sub").style.opacity = 1;
  } else {
    document.getElementById("sub").disabled = true;
    document.getElementById("sub").style.opacity = 0.3;
  }
}
