//váriavéis Bolinha
let xBolinha=100;
let yBolinha=200;
let diametro=22;

//Velocidade Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup (){
    createCanvas(600,400);
    trilha.loop();
}

function draw(){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaBorda();
    mostraRaquete(xRaquete,yRaquete);
    mostraRaquete(xRaqueteOponente,yRaqueteOponente);
    movimentaRaquete();
    verificaColisaoRaquete();
    movimentaRaqueteOponente();
    verificaColisaoRaqueteOponente();

}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro) //desenha a bola
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha; // x e y movimento
    yBolinha += velocidadeYBolinha;
}

function verificaBorda(){
    if(xBolinha + raio >width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
    } //verifica se sta colidindo com as bordas
    if(yBolinha + raio >width || yBolinha - raio < 0){
       velocidadeYBolinha *= -1;
   }//verifica se sta colidindo com as bordas
}

//variaveis raquete
xRaquete = 5;
yRaquete = 150;
let colidir = false;

//velocidade Raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;

function mostraRaquete(x,y){
    rect(x,y,raqueteAltura,raqueteComprimento);
}

function movimentaRaquete(){
if(KeyIsDown(UP_ARROW)){
    yRaquete -= 10;
 }
if(KeyIsDown(DOWN_ARROW)){
    yRaquete += 10;
 }
}

function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha < raqueteAltura && yBolinha + raio> yRaquete){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }

}

//variaveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function movimentaRaqueteOponente(){
velocidadeYOponente = yBolinha - yRaqueteOponente-raqueteComprimento / 2 - 30;
yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente(){
    if(xBolinha - raio < xRaqueteOponente + raqueteComprimento && yBolinha < raqueteAltura && yBolinha + raio> yRaqueteOponente){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

//pontuação
let meusPontos = 0;
let pontosOponentes = 0;

function incluiPlacar(){
    textAlign(CENTER);
    stroke(255);
    textSize(16);
    fill(color(255,140,0));
    text(meusPontos, 170,26);
    text(pontosOponentes,140,26);
    rect(meusPontos,150,10,40,20);
    rect(pontosOponentes,150,10,40,20);


}

function marcaPonto(){
    if(xBolinha > 590){
        meusPontos += 1;
    }
    if(xBolinha < 10 ){
        pontosOponentes +=1;
    }
    ponto.play();
}

//sons jogos
let raquetada;
let ponto;
let trilha;

function preLoad(){
    trilha = loadSound("./Sons/trilha.mp3");
    ponto = loadSound("./Sons/ponto.mp3");
    raquetada = loadSound("./Sons/raquetada.mp3");
}

let chanceDeErrar = 0;

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()
  }

  function calculaChanceDeErrar() {
    if (pontosOponente >= meusPontos) {
      chanceDeErrar += 1
      if (chanceDeErrar >= 39){
      chanceDeErrar = 40
      }
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
      chanceDeErrar = 35
      }
    }
  }