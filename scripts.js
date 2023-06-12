var header = document.querySelector("header")
var navbar = document.getElementById("menu")

window.addEventListener("scroll", shrinkNav)

//Função para encolher ou expandir barra superior de navegação quando rolar tela
function shrinkNav() {
    if (window.scrollY > 0) {
        navbar.style.fontSize = "12px"
        header.style.height = "50px"
    } else { // deixará valor padrão conforme CSS
        navbar.style.fontSize = "20px"
        header.style.height = "100px"
    }
}