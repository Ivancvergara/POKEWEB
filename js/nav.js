window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back-menu").addEventListener("click", ocultar_menu)

nav = document.getElementById("nav");
background_menu = document.getElementById("back-menu")

function mostrar_menu(){
    nav.style.left = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.left = "-500px"
    background_menu.style.display = "none"
}