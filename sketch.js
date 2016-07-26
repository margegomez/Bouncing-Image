//2016_07_25
//funciona con p5.js
//elipse que rebota contra las paredes


//declaración de variables globales para lograr movimiento
var posX;
var posY;
var step;
var direction;

//declaramos variables globales de cómo dibujar el círculo
var diametro;
var factorCrash;

//variable para contener una imagen
var img;

//preload () corre antes de setup ()
//sirve para cargar archivos externos
function preload() {
  img = loadImage("images/toc.jpg");
}

//setup() es una función que
function setup() {

  //creamos lienzo a tamaño completo
  //createCanvas (dimHor , dimVer);
  createCanvas(windowWidth, windowHeight);

  //definir las condiciones iniciales de la elipse;
  setupEllipse();

  //hace que la posición de las imágenes esté definida por el centro, no por la esquina
  imageMode(CENTER);
}


function draw() {

  //pintamos el fondo
  //background(color);
  background(200, 50, 50);

  drawEllipse();
  moveEllipse();
  crashEllipse();
  invertDirectionEllipse()
}

//función para definir condiciones iniciales de la elipse
function setupEllipse() {

  //asignarles valores iniciales. esto debe ir después de crear el lienzo, para que se sepa el ancho del lienzo
  step = 10;
  direction = 1;
  diametro = 100;
  posX = diametro / 2;
  posY = height / 2;
  factorCrash = 1;
}

//1 dibujar
function drawEllipse() {
  //dibujamos una elipse
  //ellipse(posX, posY, width, height);
  //ellipse(posX, posY, factorCrash * diametro, diametro);
  image(img, posX, posY, factorCrash * diametro, diametro);
}

//2 mover
//mover la elipse
//(aumentar posX en 1, para que se mueva hacia la derecha) aumentar posX + step
function moveEllipse() {
  posX = posX + direction * step;
}

//3 achatar
function crashEllipse() {
  //3 achatar
  //detectar cuando pega en el borde
  //hacer que se detenga y que se achate
  //si choca contra el borde derecho
  if (posX > width - diametro / 2) {
    //el factorCarsh es un porcentaje de achatamiento
    //simula que la pelota se estrella contra el borde y se achata
    //depende de la posición actual de la elipse, su diámetro y el ancho del lienzo
    factorCrash = (width - posX) / (diametro / 2);
  }

  //si choca contra el borde izquierdo
  else if (posX < diametro / 2) {
    factorCrash = posX / (diametro / 2);
  }

  //si no está chocando
  else {
    factorCrash = 1;
  }

}

//4 cambiar de dirección 
function invertDirectionEllipse() {
  //detectar dónde esta la elipse 
  //para cambiar la dirección de movimiento 
  //hacer que rebote en los bordes
  //hacer que cambie de color al rebotar
  if (posX > width || posX < 0) {
    direction = direction * -1;
    fill(random(10), random(150), random(150))
  }

}