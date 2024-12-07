var setadireita = window.document.getElementById("setadireita");
var setaesquerda = window.document.getElementById("setaesquerda");
var Bruna = window.document.getElementById("Bruna");
var Leonardo = window.document.getElementById("Leonardo");

function DeslizarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top = 50px"
}

function DeslizarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top =50px"
    setaesquerda.style = "display:none"
}