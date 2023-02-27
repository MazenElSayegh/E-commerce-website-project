async function getAndShowProducts() {
  await fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then(showProducts);

  await fetch("https://dummyjson.com/products/category/laptops")
    .then((res) => res.json())
    .then(showProducts);

  await fetch("https://dummyjson.com/products/category/sunglasses")
    .then((res) => res.json())
    .then(showProducts);

  await fetch("https://dummyjson.com/products/category/mens-watches")
    .then((res) => res.json())
    .then(showProducts);
}

getAndShowProducts();

function showProducts(data) {
  let productsArray = data.products;
  let allProductsContainer = document.querySelector(".allProductsContainer");

  productsArray.forEach((product) => {
    let prodContainer = document.createElement("div");
    prodContainer.classList.add("productContainer");
    prodContainer.setAttribute("title", product.title);

    switch (productsArray[0].category) {
      case "smartphones":
        prodContainer.classList.add("mobileProd");
        sessionStorage.setItem("phonesArr", JSON.stringify(productsArray));
        break;

      case "laptops":
        prodContainer.classList.add("laptopProd");
        sessionStorage.setItem("lapArr", JSON.stringify(productsArray));
        break;

      case "sunglasses":
        prodContainer.classList.add("sunglassesProd");
        sessionStorage.setItem("glassesArr", JSON.stringify(productsArray));
        break;

      case "mens-watches":
        prodContainer.classList.add("watchProd");
        sessionStorage.setItem("watchesArr", JSON.stringify(productsArray));
        break;
    }

    prodContainer.innerHTML = `
      <div class="prodImgContainer">
        <img src="${product.thumbnail}" alt="${product.title}" class="productImg" />
      </div>

      <div class="prodDetails">
        <div class="brandName">${product.brand}</div>
        <div class="prodName">${product.title}</div>
        <div class="price_cartContainer">
          <div class="price">$${product.price}</div>
          <div class="cartIcon">&#128722;</div>
        </div>
      </div>
    </div>`;

    allProductsContainer.append(prodContainer);
  });
}

function filterProductHandler(e) {
  let prodContainer = document.querySelectorAll(".productContainer"),
    currActive = document.querySelector(".activeProduct");

  switch (e.target.innerText) {
    case "All":
      prodContainer.forEach((product) => (product.style.display = "block"));
      currActive.classList.remove("activeProduct");
      e.target.classList.add("activeProduct");
      break;

    case "Smartphones":
      prodContainer.forEach((product) => {
        product.classList.contains("mobileProd")
          ? (product.style.display = "block")
          : (product.style.display = "none");
      });
      currActive.classList.remove("activeProduct");
      e.target.classList.add("activeProduct");
      break;

    case "laptops":
      prodContainer.forEach((product) => {
        product.classList.contains("laptopProd")
          ? (product.style.display = "block")
          : (product.style.display = "none");
      });
      currActive.classList.remove("activeProduct");
      e.target.classList.add("activeProduct");
      break;

    case "Sunglasses":
      prodContainer.forEach((product) => {
        product.classList.contains("sunglassesProd")
          ? (product.style.display = "block")
          : (product.style.display = "none");
      });
      currActive.classList.remove("activeProduct");
      e.target.classList.add("activeProduct");
      break;

    case "Watches":
      prodContainer.forEach((product) => {
        product.classList.contains("watchProd")
          ? (product.style.display = "block")
          : (product.style.display = "none");
      });
      currActive.classList.remove("activeProduct");
      e.target.classList.add("activeProduct");
      break;
  }
}

document.addEventListener("click", filterProductHandler); //filterBtnsHandler
