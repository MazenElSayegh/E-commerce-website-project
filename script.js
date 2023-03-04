document.addEventListener("scroll", (e) => {
  let navBar = document.querySelector("#navBarContainer");
  let scrollValue = window.scrollY;

  if (scrollValue > 360) {
    // navBar.style.backgroundColor = "#11aeef";
    navBar.style.backgroundColor = "#5ecced";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
}); // NavBar Scroll Handler
