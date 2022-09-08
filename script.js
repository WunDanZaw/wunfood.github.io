let navbar = document.querySelector("#menu-icon");
let menu = document.querySelector(".navbar");

navbar.addEventListener("click", function () {
    menu.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};