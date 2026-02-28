'use strict'

const imagem = [
    {'legenda': 'O 1º melhor anime do mundo',   'url': './img/img1.jpg'},
    {'legenda': 'O 2º melhor anime do mundo',   'url': './img/img2.jpg'},
    {'legenda': 'O 3º melhor anime do mundo',   'url': './img/img3.jpg'},
    {'legenda': 'O 4º melhor anime do mundo',   'url': './img/img4.jpg'},
    {'legenda': 'O 5º melhor anime do mundo',   'url': './img/img5.jpg'},
    {'legenda': 'O 6º melhor anime do mundo',   'url': './img/img6.jpg'},

    ]

function criarImagem (imagem) {
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    const novaFigure = document.createElement('figure')
    const legenda = document.createElement('figcaption')

    img.src = imagem.url
    galeria.appendChild(novaFigure)
    novaFigure.appendChild(img)
    novaFigure.appendChild(legenda)

    legenda.textContent = imagem.legenda
}

function carregarImagem() {
    imagem.forEach(criarImagem)
}

carregarImagem()