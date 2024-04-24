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
let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            document.querySelector(".header").classList.remove("visible");
        } 
        else {
            document.querySelector(".header").classList.add("visible");
        }
    
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
    
window.addEventListener("scroll", function() {
    let headerVisible = document.querySelector(".header").classList.contains("visible");
    let navScroll = document.querySelector(".navMenu");
    
    if (!headerVisible) {
        navScroll.style.top = "0px";
    } 
    else {
        navScroll.style.top = "70px";
        }
    }, false);
    
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
            });
        }
    });
});
