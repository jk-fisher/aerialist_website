// $(window).scroll(){
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav responsive") {
//     x.className === "topnav";
// }

function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("nav-container").style.backgroundColor = "black";
  } else {
    document.getElementById("nav-container").style.backgroundColor = "transparent";
  }
}

//parallax scroll effect 

const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -0.5 + "px";
})