var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", AccountLogin);

function AccountLogin() {
  var accountDB = JSON.parse(localStorage.getItem("users"));
  var mail = document.getElementById("mail");
  var pwd = document.getElementById("pwd");
  var warning = document.getElementsByClassName("warning");
  var invalidText = document.getElementsByClassName("invalidText");
  var emailFlag = false;
  var pwdFlag = false;
  var Fname = "";
  var Lname = "";
  if (JSON.parse(localStorage.getItem("users")) != null) {
    for (let i = 0; i < accountDB.length; i++) {
      if (mail.value == accountDB[i].email) {
        emailFlag = true;
        if (pwd.value == accountDB[i].psw) {
          pwdFlag = true;
          Fname = accountDB[i].firstname;
          Lname = accountDB[i].lastname;
        }
        break;
      }
    }
  }

  if (emailFlag && pwdFlag) {
    let u = {
      firstname: Fname,
      lastname: Lname,
      email: mail.value,
      psw: pwd.value,
    };
    localStorage.setItem("gh", JSON.stringify(u));
    warning[0].innerHTML = "";
    warning[1].innerHTML = "";
    warning[0].previousElementSibling.classList.remove("invalidText");
    warning[1].previousElementSibling.classList.remove("invalidText");
    window.location.href = "../index.html";
  } else if (emailFlag == true && pwdFlag == false) {
    warning[0].previousElementSibling.classList.remove("invalidText");
    warning[1].previousElementSibling.classList.add("invalidText");
    warning[0].innerHTML = "";
    warning[1].innerHTML = "Invalid Password";
  } else if (!emailFlag && !pwdFlag) {
    warning[0].previousElementSibling.classList.add("invalidText");
    warning[1].previousElementSibling.classList.add("invalidText");
    warning[0].innerHTML = "Invalid Email Address";
    warning[1].innerHTML = "Invalid Password";
  }
}
