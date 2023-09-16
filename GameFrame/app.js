function setup() {
  createCanvas(500, 400);
  somTrilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisaoAtor();
  mostraPontos();
  marcaPontos();
}

console.log("Testando");
