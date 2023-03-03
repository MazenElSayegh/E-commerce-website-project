document.addEventListener("scroll", (e) => {
  let navBar = document.querySelector("#navBarContainer");
  let scrollValue = window.scrollY;

  if (scrollValue > 310) {
    navBar.style.backgroundColor = "#11aeef";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
}); // NavBar Scroll Handler
