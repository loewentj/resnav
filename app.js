const hamburger = document.querySelector(".hamburger");
const test = document.querySelector(".brand")

const navSide = document.querySelector(".nav-side");

hamburger.addEventListener("click", () =>{
    navSide.classList.toggle("open");
});



var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll("#showcase .carosel .mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

