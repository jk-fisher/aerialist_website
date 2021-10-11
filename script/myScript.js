const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener("click", () =>{
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  })
});

//parallax scroll effect 

const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -0.5 + "px";
})