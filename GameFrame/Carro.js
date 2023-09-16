let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [3, 3.5, 2, 4.2, 3, 2.5];
let larguraCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(imagensCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -50;
}
