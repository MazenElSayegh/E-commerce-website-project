// if(JSON.parse(localStorage.getItem("ProductDetails")) != null){
//     let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
//     console.log(checkEmail);

// }

// let addCartBtn = document.getElementById("addCartBtn");
// addCartBtn.addEventListener("click", cartDetails);

var addedToCart = document.getElementById("addedToCart");
var noProducts = document.getElementById("noProducts");
var addedProducts = document.getElementById("addedProducts");
var cartIcon = document.getElementById("cartIconID");
var exampleModal = document.getElementById("exampleModal");
var submitFormModal = document.getElementById("submitFormModal");

cartIcon.addEventListener("click", cartDetails);
// cartIcon.addEventListener("click", switchTurnOff);
document.addEventListener("click", productDelete);
document.addEventListener("click", addQuntity);
document.addEventListener("click", removeQuntity);
function cartDetails() {
  if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
    let data = JSON.parse(localStorage.getItem("ProductDetails"));
    console.log(data);

    if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
      let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
      console.log(checkEmail);
      addedProducts.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == checkEmail) {
          addedToCart.classList.remove("turnOff");
          addedToCart.classList.add("addedToCartOn");
          noProducts.classList.add("turnOff");
          addedProducts.innerHTML += `
                <div id="cartItemContainer">

                        <img id="itemImage" src="${data[i].img}">
                        <span id="itemName">${data[i].title}</span>
                        <span id="itemPrice">Price: ${data[i].price}$</span>
                        <div id="quantityData"><button type="button" class="plus" >+</button> <input type="text" disabled class="itemQuantity" value = "${
                          data[i].quantity
                        }"  > <button type="button" class="minus" >-</button></div>
                        <span id="itemTP">Total Price: ${
                          data[i].quantity * data[i].price
                        }$</span>
                        <button type="button" class ="pRemove" >Delete Item</button> 
                        <hr id="line">

                 </div>
                
                `;
        }
      }
    }
  }
}
function productDelete(e) {
  // e.preventDefault();
  let tar = e.target;

  if (e.target.classList.contains("pRemove")) {
    let inptxt = tar.parentElement;
    let x = tar.parentElement.firstElementChild;
    let y = x.getAttribute("src");
    if (JSON.parse(localStorage.getItem("tempData")) != null) {
      let tmpData = JSON.parse(localStorage.getItem("tempData"));
      if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
        let data = JSON.parse(localStorage.getItem("ProductDetails"));
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
          // console.log(data[i].img);
          if (data[i].img == y && data[i].email == tmpData.email) {
            data.splice(i, 1);
            flag = 1;
            console.log("hi");
            break;
          }
        }
        if (flag == 1) {
          localStorage.setItem("ProductDetails", JSON.stringify(data));
        }
        inptxt.remove();
        // exampleModal.style.display = "none";
        // submitFormModal.style.display = "none";
        // var submitFormModal = document.getElementById("submitFormModal");
      }
      let flag2 = 0;
      let data2 = JSON.parse(localStorage.getItem("ProductDetails"));
      for (let i = 0; i < data2.length; i++) {
        if (data2[i].email == tmpData.email) {
          flag2 = 1;
        }
      }
      if (flag2 == 0) {
        addedToCart.classList.add("turnOff");
        noProducts.classList.remove("turnOff");
      }
    }
  }
}

function addQuntity(e) {
  let tar = e.target;
  if (e.target.classList.contains("plus")) {
    let nextElement = Number(tar.nextElementSibling.value);
    let img = tar.parentElement.parentElement.firstElementChild;
    let imgSrc = img.getAttribute("src");
    nextElement++;
    tar.nextElementSibling.value = nextElement;
    // tar.parentElement.nextElementSibling.innerHTML=Number(tar.nextElementSibling.value)* tar.parentElement.previousElementSibling.
    if (JSON.parse(localStorage.getItem("tempData")) != null) {
      let tmpData = JSON.parse(localStorage.getItem("tempData"));
      if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
        let data = JSON.parse(localStorage.getItem("ProductDetails"));
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].img == imgSrc && data[i].email == tmpData.email) {
            data[i].quantity = tar.nextElementSibling.value;
            tar.parentElement.nextElementSibling.innerHTML =
              "Total Price: " +
              tar.nextElementSibling.value * data[i].price +
              "$";
            flag = 1;
            break;
          }
        }
        if (flag == 1) {
          localStorage.setItem("ProductDetails", JSON.stringify(data));
        }
      }
    }
  }
}
function removeQuntity(e) {
  let tar = e.target;
  if (e.target.classList.contains("minus")) {
    let nextElement = Number(tar.previousElementSibling.value);
    let img = tar.parentElement.parentElement.firstElementChild;
    let imgSrc = img.getAttribute("src");
    nextElement--;
    if (nextElement <= 1) {
      nextElement = 1;
    }
    tar.previousElementSibling.value = nextElement;
    if (JSON.parse(localStorage.getItem("tempData")) != null) {
      let tmpData = JSON.parse(localStorage.getItem("tempData"));
      if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
        let data = JSON.parse(localStorage.getItem("ProductDetails"));
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].img == imgSrc && data[i].email == tmpData.email) {
            data[i].quantity = tar.previousElementSibling.value;
            tar.parentElement.nextElementSibling.innerHTML =
              "Total Price: " +
              tar.previousElementSibling.value * data[i].price +
              "$";
            flag = 1;
            break;
          }
        }
        if (flag == 1) {
          localStorage.setItem("ProductDetails", JSON.stringify(data));
        }
      }
    }
  }
}
// cartDetails();

// function switchTurnOff() {
//   let addedToCart = document.getElementById("addedToCart");
//   let noProducts = document.getElementById("noProducts");
//   let data = JSON.parse(localStorage.getItem("ProductDetails"));
//   let flag=0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].email == checkEmail) {
//       flag=1;
//     }
//   }
//   if(flag==0)
//   addedToCart.classList.add("turnOff");
//   noProducts.classList.remove("turnOff");
//   addedToCart.classList.remove("addedToCartOn");
// }

// let flag = 0;
// for (let i = 0; i < data.length; i++) {
//   if (data[i].email == checkEmail) {
//     addedToCart.classList.remove("turnOff");
//     addedToCart.classList.add("addedToCartOn");
//     noProducts.classList.add("turnOff");
//     flag = 1;
//     break;
//   }
// }
// if (flag == 0) {
//   addedToCart.classList.add("turnOff");
//   noProducts.classList.remove("turnOff");
//   addedToCart.classList.remove("addedToCartOn");
// } else {}
