var bruna = window.document.getElementById("cardBruna")
var leonardo = window.document.getElementById("cardLeonardo")
var samantha = window.document.getElementById("cardSamantha")
var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function rolarParaDireita(){
bruna.style = "display: none"
samantha.style = "display: flex"
setaDireita.style = "display: none"
setaEsquerda.style = "display: flex"
}

function rolarParaEsquerda(){
bruna.style = "display: flex"
samantha.style = "display: none"
setaDireita.style = "display: flex"
setaEsquerda.style = "display: none"
}