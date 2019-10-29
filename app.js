const hamburger = document.querySelector("#nav-wrap #nav-bar #toggle-img");

const navLinks = document.querySelector(".nav-side");

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
});