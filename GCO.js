const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-4-line"
    );
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",

});

ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay: 250,

});

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 500,

});

ScrollReveal().reveal(".header_content p ",{
    ...scrollRevealOption,
    delay: 750,

});

ScrollReveal().reveal(".header_btn",{
    ...scrollRevealOption,
    delay: 900,

});

ScrollReveal().reveal(".header_socials li",{
    ...scrollRevealOption,
    delay: 1250,
    interval: 300,

});

// Services Page

ScrollReveal().reveal(".header_services_info",{
    ...scrollRevealOption,
    origin: "right",

});

ScrollReveal().reveal(".header_image_services img",{
    ...scrollRevealOption,
    delay: 250,
});

ScrollReveal().reveal(".header_services_btn",{
    ...scrollRevealOption,
    delay: 500,

});
