// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main__header");
var main__body = document.getElementById("main__body");
var dark__section = document.getElementById("dark__section");

// Get the offset position of the navbar
var dark = 350;
var light = 1200;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= light) {
    navbar.classList.remove("sticky_header");
    main__body.classList.remove("dark__body");
    navbar.classList.add("all_transations");

    

  } else if(window.pageYOffset >= dark){
    navbar.classList.add("sticky_header");
    main__body.classList.add("dark__body");

  } else {
    navbar.classList.remove("sticky_header");
    main__body.classList.remove("dark__body");
    navbar.classList.add("all_transations");

  }
}