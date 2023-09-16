let imagemDaEstrada;
let imagemCarro;
let imagemDoAtor;
let imagemCarroDois;
let imagemCarroTres;
let imagensCarros;

// Variáveis dos sons
let somTrilhaSonora;
let somPontos;
let somColidiu;

function preload() {
  imagemDaEstrada = loadImage("material/estrada.png");
  imagemDoAtor = loadImage("material/mario.png");
  imagemCarro = loadImage("material/carro-1.png");
  imagemCarroDois = loadImage("material/carro-2.png");
  imagemCarroTres = loadImage("material/carro-3.png");
  imagensCarros = [
    imagemCarro,
    imagemCarroDois,
    imagemCarroTres,
    imagemCarro,
    imagemCarroDois,
    imagemCarroTres,
  ];

  somColidiu = loadSound("material/sons/colidiu.mp3");
  somPontos = loadSound("material/sons/pontos.wav");
  somTrilhaSonora = loadSound("material/sons/trilha.mp3");
}
 