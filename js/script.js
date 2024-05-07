// Hamburger Menu
const navLinks = document.getElementById("navLinks")

    const showMenu = () => {
        navLinks.style.right = "0"
    }
    const hideMenu = () => {
        navLinks.style.right = "-250px"
    }
    

// Index
if (window.location.pathname === '/index.html') {
    window.location.replace('/')
}


// Scrollování
$(document).ready(() => {

    // Scroll to sections
    const scrollToSection = (sectionClass) => {
        $("html, body").animate({scrollTop: $(sectionClass).offset().top}, 1200)
    }

    $(".jq--scroll-omne").click(() => scrollToSection(".jq--omne"))
    $(".jq--scroll-dovednosti").click(() => scrollToSection(".jq--dovednosti"))
    $(".jq--scroll-projekty").click(() => scrollToSection(".jq--projekty"))
    $(".jq--scroll-kontakt").click(() => scrollToSection(".jq--kontakt"))

    // Mobilní navigace
    $(".jq--nav-icon").click(() => {
        $(".nav-background").slideToggle()
        $(".mobile-nav-back").fadeToggle()
        $("nav ul").fadeToggle()
    })
})