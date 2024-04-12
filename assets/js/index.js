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

/*

Transparentan header i footer, 
drugacije boje generalno,
slika neka kao pozadina,
video u sredini sa teksom pored (predpostavljam 2 razlicita diva sa flexom)
checkout stranica je jos potrebna
sekcija service (?) about, text i fotka 
3 diva sa buttonom ka checkoutu, servisi u njima
footer??? ne znam bajo
napravi git
uci js
uci react



*/