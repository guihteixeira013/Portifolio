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

//PARA PÁGINA "PROJETOS"
//Função para abrir ou fechar descrição do projeto

//1 selecionando todos os elementos do DOM que tem a classe "accordion" e inicializando variável para o Loop
var acc = document.getElementsByClassName("accordion")
var i

//2 Iteração para passar por todas as classes "accordion", quando houver clique no accordion da vez, uma função será chamada: Esta função irá adicionar ou remover a classe "active" do elemento da vez. 
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        // encontrar o próxim irmão com a classe "panel"
        var panel = this.nextElementSibling

        //verificar se o panel está visíveltech
        if (panel.style.display === "block") {
            panel.style.display = "none"    //ocultar o painel
        } else {
            panel.style.display = "block"   //exibir o painel
        }
    })
}