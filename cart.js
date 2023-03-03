// if(JSON.parse(localStorage.getItem("ProductDetails")) != null){
//     let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
//     console.log(checkEmail);

// }

// let addCartBtn = document.getElementById("addCartBtn");
// addCartBtn.addEventListener("click", cartDetails);

var addedToCart = document.getElementById("addedToCart");
var noProducts = document.getElementById("noProducts");
var addedProducts = document.getElementById("addedProducts");

function cartDetails() {
  if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
    let data = JSON.parse(localStorage.getItem("ProductDetails"));
    console.log(data);
    if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
      let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
      console.log(checkEmail);
      addedToCart.classList.remove("turnOff");
      addedToCart.classList.add("addedToCartOn");

      noProducts.classList.add("turnOff");
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

          console.log("flag");
          // omarid.setAttribute(data.img)
        }
      }
    }
  }
}
cartDetails();
