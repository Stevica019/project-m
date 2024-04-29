//      Loader      //
window.addEventListener("load", ()=>{

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () =>{
            document.body.removeChild(loader);
        })
    }, 2000);
});



// burger  //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
try{
    hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
}
catch(error){
    console.error(error);
}

document.querySelectorAll(".navlink").forEach(n => 
    n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

//  Header  //
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


// Checkout //
const buttons = document.querySelectorAll(".buttons");

function checkoutFunction(){

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            let contentId = button.id.replace("button", "elTitles");
            let textId = button.id.replace("button", "elPrices");

            let content = document.getElementById(contentId).innerText;
            let textSwap = document.getElementById(textId).innerText;


            switch(button.id){
                case "button1":
                    window.location.href = "checkout.html?content=" + encodeURIComponent(content) + 
                    "&textSwap=" + encodeURIComponent(textSwap);
                    console.log("Button 1");

                break;
            case "button2":
                window.location.href = "checkout.html?content=" + encodeURIComponent(content) + 
                "&textSwap=" + encodeURIComponent(textSwap);
                    console.log("Button 2");
                break;
            case "button3":
                window.location.href = "checkout.html?content=" + encodeURIComponent(content) + 
                "&textSwap=" + encodeURIComponent(textSwap);
                    console.log("Button 3");
                break;
                
            default: 
                console.log("Watafak?!");
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", function() {

    let queryParams = new URLSearchParams(window.location.search);
    let content = queryParams.get("content");
    let textSwap = queryParams.get("textSwap");


    if (content && textSwap) {
        document.getElementById("span-text").innerText = content;
        
        let updatedTextSwap = document.querySelectorAll(".checkoutPrices");
        updatedTextSwap.forEach(function(element, index) {
            element.innerText = textSwap;
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
const inputs = document.querySelectorAll("input");
const completePurchase = document.getElementById('completePurchase');

function checkInputsValidity() {
    let isValid = true;
    inputs.forEach( (input) => {
        if (!input.validity.valid) {
            isValid = false;
        }
    });
    return isValid;
}


function toggleButton() {
    if (checkInputsValidity()) {
        completePurchase.classList.remove("disabled");
        completePurchase.classList.add("enabled");

    } else {
        completePurchase.classList.remove("enabled");
        completePurchase.classList.add("disabled");
    }
}

inputs.forEach(function(input) {
    input.addEventListener("input", toggleButton);
});
});