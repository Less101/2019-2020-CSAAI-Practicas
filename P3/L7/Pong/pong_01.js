console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");


//-- Obtener los sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_tanto = new Audio("pong-tanto.mp3");
const sonido_derrota = new Audio("what.mp3");
const sonido_partida = new Audio("fondo.mp3");
var counter_I = 0;
var counter_D = 0;

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
  WIN: 3,
}

//-- variable de estado
//-- Arrancamos desde el estado inicial

let estado = ESTADO.INIT


//-- pintar todos los objetos en el canvas
function draw(){
  // --- Dibujar la bola
  //-- Sólo en el estado de jugando
  //-- Dibujar el texto de comenzar

  if (estado == ESTADO.JUGANDO){
     bola.draw();
  }else if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("¡Start pendejo!", 30, 350);
    bola.draw();
    console.log("hagan juego");
  }else  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("¡Saca pendejo!", 30, 350);
    bola.draw();
  } else if(estado == ESTADO.WIN) {
      if (counter_I == 5 || counter_D == 5) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "green";
        ctx.fillText(" You won, Dude!", 30, 350);
    }
  }


  //-- Dibujar las raquetas Izquierda y Derecha
  raqI.draw();
  raqD.draw();

//--------- Dibujar la red
ctx.beginPath();

//-- Estilo de la linea: discontinua
//-- Trazos de 10 pixeles, y 10 de separación
ctx.setLineDash([10,10]);
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
//-- Punto superior de la linea. Su coordenada x está en la mitad
//-- del canvas
ctx.moveTo(canvas.width/2, 0);

//-- Dibujar hasta el punto inferior
ctx.lineTo(canvas.width/2, canvas.height);
ctx.stroke();

//-- Dibujar el marcador
ctx.font = "100px Arial";
ctx.fillStyle = "white";
// -- qué dibujo, x,y
//------ Dibujar el tanteo
ctx.font = "100px Arial";
ctx.fillStyle = "white";
ctx.fillText(counter_I, 200, 80);
ctx.fillText(counter_D, 340, 80);

}
//--- Bucle principal de la animación
function animacion() {
  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar  la raqueta con la velocidad actual
    raqI.update();
    raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia el signo de la velocidad, para
  //-- que "rebote" y vaya en el sentido opuesto


  if (bola.x >= canvas.width ) {
    //-- Hay colisión. Cambiar el signo de la bola
    //-- colisión en las paredes verticales
     bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
   } else if (bola.x <= 0.0) {
     bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();

    //return;
    // colisión en las paredes horizontales
  }else if (bola.y >= canvas.height) {
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  } else if (bola.y <= 0.0) {
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  // Gestionar Estados de juego
  // por separado
  if (bola.x <= 0.0) {
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("¡¡¡Tanto!!!");
    counter_D++;
    sonido_tanto.play();
    console.log(counter_I);
    if (counter_D == 5) {
      //-- cambia estado
      estado = ESTADO.WIN;
      sonido_partida.currentTime = 0;
      sonido_partida.pause();
      sonido_derrota.currentTime = 0;
      sonido_derrota.play();
    }
  }
  // Gestionar Estados de juego
  // por separado
  if (bola.x >= canvas.width) {
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("¡¡¡Tanto!!!");
    counter_I++;
    sonido_tanto.play();
    console.log(counter_D);
    if (counter_I == 5) {
      //-- cambia estado
      estado = ESTADO.WIN;
      sonido_partida.currentTime = 0;
      sonido_partida.pause();
      sonido_derrota.currentTime = 0;
      sonido_derrota.play();
    }
  }

  //--valores positivos aumentan la velocidad (izqda- derecha)
  //-- valores negativos aumentan la velocidad (derecha- izqda)

  //-- Colisión con las raquetas izquierda y derecha
    if (bola.x >= raqI.x && bola.x <=(raqI.x+ raqI.width) &&
        bola.y >= raqI.y && bola.y <=(raqI.y+ raqI.height)) {
     bola.vx = bola.vx * -1;
  //-- reproducir sonido
       sonido_raqueta.currentTime = 0;
       sonido_raqueta.play();
    } else if (bola.x >= raqD.x && bola.x <=(raqD.x+ raqD.width) &&
       bola.y >= raqD.y && bola.y <=(raqD.y+ raqD.height)) {
    bola.vx = bola.vx * -1;
    //-- reproducir sonido

         sonido_raqueta.currentTime = 0;
         sonido_raqueta.play();
   }

        if (estado == ESTADO.JUGANDO) {
          sonido_partida.currenTime = 0;
          sonido_partida.play();
        }

    //-- Actualizar coordenada x de la bola, en funcion de
    //-- su velocidad
    bola.update()

  //-- Borrar el canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

  //-- Mostrar actividad en la consola
  //-- así comprobamos que está vivo
  console.log("Alive!");




//--- Arrancar la animación
 window.requestAnimationFrame(animacion);
}


//-- Inicializa la bola: A su posición Inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta Derecha
raqD.x_ini = 540;
raqI.y_ini = 300;
raqD.init();

//-- Arrancar la animacion
animacion();
//-- Arrancar la animacion
//setInterval(()=> {
 //animacion();
//}, 16);

//-- Retrollamadas de las teclas
window.onkeydown = (e) => {

  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {

  // control de la raqueta Izquierda
    case "a":
      raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;

  // control de la raqueta derecha
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;

    // Tecla s: saque
    case "s":
      bola.init();

    //-- El saque solo funciona en el estado de SAQUE
    if (estado == ESTADO.SAQUE) {
      //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

      //-- Llevar bola a su posicion incicial
        bola.init();

      //-- Darle velocidad
        bola.vx =  bola.vx_ini;
        bola.vy =  bola.vy_ini;
      //-- Cambiar  al estado de Jugando
        estado = ESTADO.JUGANDO;
         return false;
   }



      //-- Alguien ha ganado

    default:
  }
}
window.onkeyup = (e) =>{
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta izquierda
    raqI.v = 0;
  }

  if(e.key == "l" || e.key == "p"){
   //-- Quitar velocidad de la raqueta derecha
   raqD.v = 0;
   }
}


//-- Botón de arranque
const start = document.getElementById("start");
start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("¡Saque!");
  canvas.focus();
}

//-- Botón de stop
const stop = document.getElementById("stop");
stop.onclick = () => {
  //-- Volver al estado inicial
  estado =ESTADO.INIT;
  counter_I = 0;
  counter_D = 0;
  bola.init();
  sonido_partida.pause();
  start.disabled = false;

}
