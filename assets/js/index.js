// burger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".navlink").forEach(n => 
    n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

//  Header
var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            document.querySelector(".header").classList.remove("visible");
        } 
        else {
            document.querySelector(".header").classList.add("visible");
        }
    
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
    
window.addEventListener("scroll", function() {
    var headerVisible = document.querySelector(".header").classList.contains("visible");
    var navScroll = document.querySelector(".navMenu");
    
    if (!headerVisible) {
        navScroll.style.top = "0px";
    } 
    else {
        navScroll.style.top = "70px";
        }
    }, false);
    