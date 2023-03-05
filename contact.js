
let message=document.getElementById("message");
let bodyedit =document.querySelector("#bodyEdit");
let email = document.querySelector("#email");
let contactForm = document.querySelector("#contactForm")
function printError(emailErr, hintMsg) {
  document.getElementById(emailErr).innerHTML = hintMsg;
}
contactForm.addEventListener("submit",textCheck);
function textCheck(e){
  e.preventDefault();
  let regex = /^\S+@\S+\.\S+$/;
  console.log("inside funvtion");
  if(email.value == "" ){
      bodyedit.innerHTML="Please enter email";
      bodyedit.classList="alert alert-danger"
      // console.log("inside emptu");
  }  
  else if (regex.test(email.value) === false) {
    bodyedit.classList="alert alert-danger"
    bodyedit.innerHTML="Please enter a valid email"
    // console.log("inside invalid");
  }
  else if(message.value==""){
    bodyedit.innerHTML="Please enter a message";
    bodyedit.classList="alert alert-danger";
  }  
  else {
    bodyedit.classList="alert alert-success"  
    bodyedit.innerHTML="We recieved your message"
      // console.log("inside else");
  }
}
// function validateForm() {
  
//   var email = document.getElementById("email");
//   if (email.value == "") {
//     printError("emailErr", "Please enter your email address");
//   } else {
//     // Regular expression for basic email validation
//     var regex = /^\S+@\S+\.\S+$/;
//     if (regex.test(email.value) === false) {
//       printError("emailErr", "Please enter a valid email address");
//     } else {
//       printError("emailErr", "");
//     }
//   }
// }

// $(".fade").fadeOut();
//     setTimeout(function(){
//       $("#bodyEdit").hide();
      
//   }, 
//   2000)

function disableSubmit() {
  let userName = document.getElementById("userName");
  let account = document.getElementById("account");
  var noProducts = document.getElementById("noProducts");
  let addedToCart = document.getElementById("addedToCart");

  // if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
  //   let productsData = JSON.parse(localStorage.getItem("ProductDetails"));
  //   let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
  //   let flag=0;
  //   for (let i = 0; i < productsData.length; i++) {
  //     if (data[i].email == checkEmail) {
  // addedToCart.classList.remove("turnOff");
  // addedToCart.classList.add("addedToCartOn");
  // noProducts.classList.add("turnOff");
  // flag=1;
  // break;
  //     }
  //   }
  //   if(flag==0){
  //     addedToCart.classList.add("turnOff");
  //     noProducts.classList.remove("turnOff");
  //     addedToCart.classList.remove("addedToCartOn");
  //   }
  // }

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
  let addedProducts = document.getElementById("addedProducts");
  let addedToCart = document.getElementById("addedToCart");
  userName.classList.add("turnOff");
  account.classList.remove("turnOff");
  userName.firstElementChild.innerHTML = "Welcome";
  localStorage.removeItem("tempData");
  addedProducts.innerHTML = "";
  addedToCart.classList.add("turnOff");
  noProducts.classList.remove("turnOff");
  addedToCart.classList.remove("addedToCartOn");
  location.reload();
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
