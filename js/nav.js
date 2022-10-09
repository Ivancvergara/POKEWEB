window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

const nav = document.getElementById('nav')
const bg_menu = document.getElementById("back-menu")

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById('nav').classList.add('show');
    document.getElementById('back-menu').classList.add('back-menu');
}

bg_menu.addEventListener('click',e => {
  if(e.target.id === 'back-menu'){
    nav.classList.remove('show');
    bg_menu.classList.remove('back-menu');
  }
})

// document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

// nav = document.getElementById("nav");
// background_menu = document.getElementById("back-menu")
// btn_menu = document.getElementById("btn_menu")

// function mostrar_menu(){
//     nav.style.left = "0px";
//     background_menu.style.display = "block";
//     btn_menu.id = "cerrar_menu"
// }

// document.getElementsByClassName("cerar_menu").addEventListener("click", ocultar_menu);

// function ocultar_menu(){
//     nav.style.left = "-200px"
//     background_menu.style.display = "none"
//     document.getElementById("cerrar_menu").id = "btn_menu"
// }