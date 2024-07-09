let header = document.querySelector("header");
let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

//header scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

//swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});