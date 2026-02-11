function somar(){
    let numero1 = Number(document.getElementById("n1").value)
    let numero2 = Number(document.getElementById("n2").value)

    let resposta = document.querySelector('#resposta')

    let soma = numero1 + numero2

    resposta.inner = soma
}

function trocarimagem(){

    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3ZFXjWPBrxjFSgWGN1aO7-_q-2hDl8tgAg&s')
}

function voltarimagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src',"Captura de tela 2026-01-28 084959.png")
}