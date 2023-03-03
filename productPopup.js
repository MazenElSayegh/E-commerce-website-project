function getRightArray(element) {
  if (element.classList.contains("mobileProd")) return "phonesArr";
  if (element.classList.contains("laptopProd")) return "lapArr";
  if (element.classList.contains("sunglassesProd")) return "glassesArr";
  if (element.classList.contains("watchProd")) return "watchesArr";
}

function productPopupHandler(e) {
  const target = e.target.closest(".productContainer");
  if (target != null) {
    const productArr = JSON.parse(
        sessionStorage.getItem(getRightArray(target))
      ),
      productTitle = target.querySelector(".prodName").innerText,
      productPopup = document.querySelector(".productPopSection");

    for (i = 0; i < productArr.length; i++) {
      if (productTitle == productArr[i].title) {
        var productObj = productArr[i];
        break;
      }
    }

    let prodImg = productObj.thumbnail,
      prodTitle = productObj.title,
      prodBrand = productObj.brand,
      prodDesc = productObj.description,
      prodRating = Math.floor(productObj.rating),
      prodDiscount = productObj.discountPercentage,
      prodPrice = productObj.price,
      ratingElements = document.querySelectorAll(".prodRating i");
    let p = {
      img: prodImg,
      title: prodTitle,
      price: prodPrice,
    };
    localStorage.setItem("t", JSON.stringify(p));
    productPopup.querySelector("img").src = prodImg;
    productPopup.querySelector(".prodTitle").innerText = prodTitle;
    productPopup.querySelector(".prodBrand").innerText = prodBrand;
    productPopup.querySelector(".prodDesc").innerText = prodDesc;
    productPopup.querySelector(".discount").innerText = `-${prodDiscount}%`;
    productPopup.querySelector(".price").innerText = `$${prodPrice}`;

    ratingElements.forEach((elem) => {
      elem.classList.remove("fa-solid");
    });

    for (i = 0; i < prodRating; i++) {
      ratingElements[i].classList.add("fa-solid");
    }

    productPopup.style.visibility = "visible";
  }
}

function hideProductPopup(e) {
  productPopup = document.querySelector(".productPopSection");
  if (
    (!e.target.closest(".productPopContainer") ||
      (e.target.classList.contains("exitProdPop")) &&
    productPopup.style.visibility == "visible") ||
	(e.target.classList.contains("prodOrderBtn"))
  ) {
    productPopup.style.visibility = "hidden";
  }
}

document.addEventListener("click", hideProductPopup);
document.addEventListener("click", productPopupHandler);

if (JSON.parse(localStorage.getItem("tempData")) != null) {
  var dataprod = JSON.parse(localStorage.getItem("tempData")).email;
}

let addCartBtn = document.getElementById("addCartBtn");
addCartBtn.addEventListener("click", accountCart);
function accountCart() {
  let userName = document.getElementById("userName");
  let account = document.getElementById("account");
  let popupAccount = document.getElementById("popupAccount");
  let prodOrderCount = document.getElementsByClassName("prodOrderCount");
  if (JSON.parse(localStorage.getItem("t")) != null) {
    var d = JSON.parse(localStorage.getItem("t"));

    if (account.classList.contains("turnOff")) {
      let producet_records = new Array();

      producet_records = JSON.parse(localStorage.getItem("ProductDetails"))
        ? JSON.parse(localStorage.getItem("ProductDetails"))
        : [];
      producet_records.push({
        email: dataprod,
        img: d.img,
        title: d.title,
        price: d.price,
        quantity: prodOrderCount[0].value,
      });

      localStorage.setItem("ProductDetails", JSON.stringify(producet_records));
      
      
      alert("product added");
    } else if (userName.classList.contains("turnOff")) {
      popupAccount.style.visibility = "visible";
    }
  }
}


