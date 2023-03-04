document.addEventListener("scroll", (e) => {
  let navBar = document.querySelector("#navBarContainer");
  let scrollValue = window.scrollY;

  if (scrollValue > 360) {
    // navBar.style.backgroundColor = "#11aeef";
    navBar.style.backgroundColor = "#05b0ee";
    
  } else {
    navBar.style.backgroundColor = "transparent";
    // navBar.classList.remove(".navbarChangeColor");
  }
}); // NavBar Scroll Handler
