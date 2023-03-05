var onDeliveryBtn = document.querySelector("#onDeliveryMethod");
var creditBtn = document.querySelector("#creditMethod");
var radioBtn = document.querySelectorAll('input[name="paymentMethod"]');
creditBtn.addEventListener("click", () => {
  if (creditBtn.checked) {
    document.querySelector(".creditContainer").style.display = "contents";
    //document.querySelector(".onDeliveryContainer").style.display="none";
  }
});
onDeliveryBtn.addEventListener("click", () => {
  if (onDeliveryBtn.checked) {
    document.querySelector(".creditContainer").style.display = "none";
    //document.querySelector(".onDeliveryContainer").style.display="contents";
  }
});
/*var addedToCart = document.getElementById("addedToCart");
var noProducts = document.getElementById("noProducts");*/
var addedProducts = document.querySelector(".prods");

function checkoutDetails() {
  if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
    let data = JSON.parse(localStorage.getItem("ProductDetails"));
    // console.log(data);
    if (JSON.parse(localStorage.getItem("ProductDetails")) != null) {
      let checkEmail = JSON.parse(localStorage.getItem("tempData")).email;
      // console.log(checkEmail);
      addedProducts.innerHTML = "";
      var totalPrice = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == checkEmail) {
          /*addedToCart.classList.remove("turnOff");
          addedToCart.classList.add("addedToCartOn");
          noProducts.classList.add("turnOff");*/
          totalPrice += data[i].price * data[i].quantity;
          addedProducts.innerHTML += `
                <div id="cartItemContainer">
                        <div class="prodImg">
                        <img id="itemImage" src="${data[i].img}"></div>
                        <div class="prodName">
                        <span id="itemName">${data[i].title}</span></div>
                        <div class="priceData">
                        <span id="itemPrice">Price: ${data[i].price}</span>
                        <span id="itemQuantity">Quantity: ${
                          data[i].quantity
                        }</span>
                        <span id="itemTP">Total Price: ${
                          data[i].quantity * data[i].price
                        }</span></div>

                 </div>
                
                `;
          document.getElementById(
            "subTotal"
          ).innerHTML = `SubTotal&nbsp;:&nbsp;${totalPrice.toFixed(2)}`;
          document.getElementById("tax").innerHTML = `Tax&nbsp;:&nbsp;${(
            totalPrice * 0.14
          ).toFixed(2)}`;
          document.getElementById(
            "shipment"
          ).innerHTML = `Shipment&nbsp;:&nbsp;${(totalPrice * 0.11).toFixed(
            2
          )}`;
          document.getElementById(
            "totalFinal"
          ).innerHTML = `Total&nbsp;:&nbsp;${(totalPrice * 1.24).toFixed(2)}`;

          parseFloat((3.14159).toFixed(2));
        }
      }
    }
  }
}

let bodyedit =document.querySelector("#bodyEdit");
let checkoutForm = document.querySelector("#checkoutForm");
let countryInp = document.querySelector("#countryInp");
let cityInp = document.querySelector("#cityInp");
let streetInp = document.querySelector("#streetInp");
let postalCodeInp = document.querySelector("#postalCodeInp");
let nameInp = document.querySelector("#nameInp");
let numInp = document.querySelector("#numInp");
let cvvInp = document.querySelector("#cvvInp");
let exInp = document.querySelector("#exInp");





checkoutForm.addEventListener("submit",proceedCheck);

function proceedCheck(e){
  e.preventDefault();

  // console.log("inside funvtion");
  if(onDeliveryBtn.checked ){
    if(countryInp.value == "" || cityInp.value == "" || streetInp.value == "" || postalCodeInp.value == "" ){
      bodyedit.innerHTML="please enter full data";
      bodyedit.classList="alert alert-danger"
      setTimeout(function(){
        //$("#bodyEdit").hide();
        $(".fade").fadeOut();
    }, 
    3000)
      // console.log("inside emptu");
    }else{
      bodyedit.classList="alert alert-success"  
      bodyedit.innerHTML="Order Placed"
      setTimeout(function(){
        //$("#bodyEdit").hide();
        $(".fade").fadeOut();
    }, 
    3000)
    }

  } else if ( creditBtn.checked){
    let regex1 = /^1?(\d{16})/;
    let regex2 = /^1?(\d{3})/;
    // console.log("inside credit");
      if(nameInp.value == "" || numInp.value== "" || cvvInp.value== "" || exInp.value == ""){
        // console.log("inside empty credit");
        bodyedit.innerHTML="please enter credit card data ";
        bodyedit.classList="alert alert-danger"
        setTimeout(function(){
          //$("#bodyEdit").hide();
          $(".fade").fadeOut();
      }, 
      3000)
      }
      else if (regex1.test(numInp.value)==false || regex2.test(cvvInp.value)==false ){
        // console.log("inside wrong credit");
        bodyedit.innerHTML="please enter correct card and cvv number ";
        bodyedit.classList="alert alert-danger"
        setTimeout(function(){
          //$("#bodyEdit").hide();
          $(".fade").fadeOut();
      }, 
      3000)
    
    }else {
      bodyedit.classList="alert alert-success"  
      bodyedit.innerHTML="order placed"
      setTimeout(function(){
        //$("#bodyEdit").hide();
        $(".fade").fadeOut();
    }, 
    3000)
        // console.log("inside else");
    }
      
  }else if(creditBtn.checked != true && onDeliveryBtn.checked != true){
    bodyedit.classList="alert alert-danger"  
    bodyedit.innerHTML="choose a payment method"
    setTimeout(function(){
      //$("#bodyEdit").hide();
      $(".fade").fadeOut();
  }, 
  3000)
  }
  

  

}