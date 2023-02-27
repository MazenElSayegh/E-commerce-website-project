var btn = document.getElementById("signUpBtn");
var panel = document.getElementById("panel");
btn.addEventListener("click", createAccount);
function createAccount() {
  checkPattern();
}

function checkPattern() {
  let Fname = document.getElementById("Fname");
  let Lname = document.getElementById("Lname");
  let mail = document.getElementById("mail");
  let pwd = document.getElementById("pwd");
  let warning = document.getElementsByClassName("warning");
  let storage = document.getElementById("storage");
  let check = isExistEmail(mail);
  let pattern = /\w+@\w+\.\w+/g;
  let pattern2 = /\w{8,}/g;
  let pattern3 = /\s/;
  let count = 0;
  for (let i = 0; i < warning.length; i++) {
    if (i == 0 && (Fname.value == "" || Fname.value.length > 20)) {
      warning[i].innerHTML =
        "First name must be between 1 and 20 characters long";

      warning[i].previousElementSibling.classList.add("invalidText");
    } else if (i == 1 && (Lname.value == "" || Lname.value.length > 20)) {
      warning[i].innerHTML =
        "Last name must be between 1 and 20 characters long";
      warning[i].previousElementSibling.classList.add("invalidText");
    } else if (
      i == 2 &&
      (!pattern.test(mail.value) ||
        mail.value == "" ||
        pattern3.test(mail.value) ||
        check)
    ) {
      warning[i].innerHTML =
        "Email Address must not be empty,Valid,and not existing in DB";
      warning[i].previousElementSibling.classList.add("invalidText");
    } else if (i == 3 && (!pattern2.test(pwd.value) || pwd.value == "")) {
      warning[i].innerHTML = "Invalid Password";
      warning[i].previousElementSibling.classList.add("invalidText");
    } else {
      warning[i].innerHTML = "";
      warning[i].previousElementSibling.classList.remove("invalidText");
      count++;
    }
  }
  if (count == 4) {
    let user_records = new Array();
    let user = {
      firstname: Fname.value,
      lastname: Lname.value,
      email: mail.value,
      psw: pwd.value,
    };
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    user_records.push({
      firstname: Fname.value,
      lastname: Lname.value,
      email: mail.value,
      psw: pwd.value,
    });
    localStorage.setItem("users", JSON.stringify(user_records));

    localStorage.setItem("tempData", JSON.stringify(user));
    window.location.href = "../index.html";
  }

  function isExistEmail(mail) {
    var emailFlag = false;
    if (JSON.parse(localStorage.getItem("users")) != null) {
      var accountDB = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < accountDB.length; i++) {
        if (mail.value == accountDB[i].email) {
          emailFlag = true;
        }
      }
    }
    return emailFlag;
  }
}

function pwdRule() {
  panel.style.maxHeight = panel.scrollHeight + "px";
  panel.style.visibility = "visible";
}
