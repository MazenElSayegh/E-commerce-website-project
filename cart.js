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

cartIcon.addEventListener("click", cartDetails);
cartIcon.addEventListener("click", switchTurnOff);

function cartDetails() {
  if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
    let data = JSON.parse(localStorage.getItem("ProductDetails"));
    console.log(data);
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
    if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
      let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
      console.log(checkEmail);
      addedToCart.classList.remove("turnOff");
      addedToCart.classList.add("addedToCartOn");

      noProducts.classList.add("turnOff");
      addedProducts.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == checkEmail) {
          addedProducts.innerHTML += `
                <div id="cartItemContainer">

                        <img id="itemImage" src="${data[i].img}">
                        <span id="itemName">Name: ${data[i].title}</span>
                        <span id="itemPrice">Price: ${data[i].price}</span>
                        <span id="itemQuantity">Quantity: ${
                          data[i].quantity
                        }</span>
                        <span id="itemTP">Total Price: ${
                          data[i].quantity * data[i].price
                        }</span>

                 </div>
                
                `;
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
