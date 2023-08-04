// 1

function nomeCoelho() {
  img = document.getElementById('Q1-monic')
  nome = window.prompt('Monica está brava por chamarem o coelhinho dela pelo nome errado.\n Ajude cebolinha a falar o nome correto.').toLowerCase()

  if (nome == 'sansao' | nome == 'sansão') {
    img.src = 'static/img/Monic_certo.gif'
    alert('Parabens! Você salvou cebolinha!')
  } else {
    img.src = 'static/img/Monic_errado.gif'
    alert('Nome errado. Cebolinha ficou em uma situação dificil!')
  }
}


// 2

function colorir(cor) {
  document.body.style.backgroundColor = cor
}


// 3 

function calcular() {
  A = parseFloat(document.getElementById('valorA').value)
  B = parseFloat(document.getElementById('valorB').value)
  op = document.getElementById('op').value

  if (isNaN(A + B)) {
    resultado = 'Insira valores numéricos em A e B'
  } else {
    if (op == 'soma') {
      resultado = A + B
    } else if (op == 'sub') {
      resultado = A - B
    } else if (op == 'mult') {
      resultado = A * B
    } else if (op == 'div') {
      resultado = A / B
    }
  }

  document.getElementById('resultado').textContent = resultado
}


// 4

function exibirForma() {
  nome = document.getElementById('forma').value.toLowerCase()
  img = document.getElementById('forma-img')
  
  if (nome == 'circulo' | nome == 'círculo') {
    img.src = 'static/img/circle.png'
  } else if (nome == 'triangulo' | nome == 'triângulo') {
    img.src = 'static/img/triangulo.png'
  } else if (nome == 'quadrado') {
    console.log(img.src)
    if (img.src == 'https://atividade-3-tipos-de-dados-decisao-e-repeticao-joelgil1.psi2023.repl.co/static/img/quadrado.jpg') {
      img.src = 'static/img/quadrado2.jpeg'
    } else {
      img.src = 'static/img/quadrado.jpg'
    }    
  } else {
    img.src = 'static/img/int.png'
  }
}


// 5

function abrirGaleria() {
  flores = ['alba', 'blue', 'girassol', 'habenaria-radiata', 'jade-azul', 'margarida', 'muguet', 'red-dahlia-flower', 'strelitzia', 'taraxacum-officinale']
  
  galeria = document.getElementById('galeria')

  for (flor of flores) {
    console.log(flor)

    flor_img = document.createElement('img')
    flor_img.src = `static/img/flor/${flor}.jpg`
    flor_img.className = 'flor'
    
    flor_img.addEventListener("click", focar)
    
    galeria.appendChild(flor_img)
  }
}

function focar(evento) {
  flor = evento.target
  Fh = flor.height
  Fh_base = 200

  if (Fh % Fh_base == 0 & Fh < 800) {
    Fh_novo = `${Fh + Fh_base}px`
  } else {
    Fh_novo = `${Fh_base}px`
  }

  flor.style.height = Fh_novo
}