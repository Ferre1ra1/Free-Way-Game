// Códigos do ator

let yAtor = 366;
let xAtor = 85;
let alturaAtor = 25;
let larguraAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, alturaAtor, larguraAtor);
  //console.log(yAtor);
  /* 
   posição x: 100
   posição y: 366
   altura: 30
   largura: 30
   */
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (podeMovimentar()) {
      yAtor += 3;
    }
  }
}

function verificaColisaoAtor() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      larguraCarro,
      alturaCarro,
      xAtor,
      yAtor,
      10
    );
    if (colisao) {
      colidiu();
      somColidiu.play();
      if (perdePontos()) {
        meusPontos -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function mostraPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 28);
}

function marcaPontos() {
  if (yAtor < 12) {
    meusPontos += 1;
    yAtor = 366;
    somPontos.play();
  }
}

function perdePontos() {
  return meusPontos > 0;
}

function podeMovimentar() {
  return yAtor < 366;
}
