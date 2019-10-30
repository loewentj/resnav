const hamburger = document.querySelector(".hamburger");
const test = document.querySelector(".brand")

const navSide = document.querySelector(".nav-side");

hamburger.addEventListener("click", () =>{
    navSide.classList.toggle("open");
});

