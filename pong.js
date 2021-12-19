//váriavéis Bolinha
let xBolinha=100;
let yBolinha=200;
let diametro=22;

//Velocidade Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup (){
    createCanvas(600,400);
}

function draw(){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaBorda();
    mostraRaquete();
    movimentaRaquete();
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

//velocidade Raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;

function mostraRaquete(){
    Rect(xRaquete,yRaquete,raqueteAltura,raqueteComprimento);
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
    }

}