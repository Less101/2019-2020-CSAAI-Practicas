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

//-- pintar todos los objetos en el canvas
function draw(){
  // --- Dibujar la bola
  bola.draw();

  //-- Dibujar las raquetas Izquierda y Derecha
  raqI.draw();
  raqD.draw();


//--------- Dibujar la red
ctx.beginPath();

//-- Estilo de la linea: discontinua
//-- Trazos de 10 pixeles, y 10 de separacion
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
ctx.fillText("0", 200, 80);
ctx.fillText("1", 340, 80);
}

//--- Bucle principal de la animación
function animacion()
{
  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar  la raqueta con la velocidad actual
    raqI.update();
    raqD.update();
  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia el signo de la velocidad, para
  //-- que "rebote" y vaya en el sentido opuesto
  if(bola.x >= canvas.width ) {
    //-- Hay colisión. Cambiar el signo de la bola
    //-- colisión en las paredes verticales
    bola.vx = bola.vx * -1;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
  }else if (bola.x <= 0.0) {
    bola.vx = bola.vx * -1;
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
  }
  // colisión en las paredes horizontales

  if(bola.y >= canvas.height) {
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if (bola.y <= 0.0) {
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
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
    }else if (bola.x >= raqD.x && bola.x <=(raqD.x+ raqD.width) &&
       bola.y >= raqD.y && bola.y <=(raqD.y+ raqD.height)) {
    bola.vx = bola.vx * -1;
  //-- reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
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
}

//-- Inicializa la bola: A su posición Inicial
const bola = new Bola(ctx);

//-- Cambiar las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta Derecha
raqD.x_ini = 540;
raqI.y_ini = 300;
raqD.init();

//-- Arrancar la animacion
setInterval(()=> {
  animacion();
}, 16);

//-- Retrollamadas de las teclas
window.onkeydown = (e) => {

  switch (e.key) {

  // control de la raqueta Izquierda
    case "a":
      raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;

    // Tecla ESPACIO: saque
    case " ":
      bola.init();

      //-- Darle velocidad
        bola.vx =  bola.vx_ini;
        bola.vy =  bola.vy_ini;
    default:
  }
}
window.onkeyup = (e) =>{
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta izquierda
    raqI.v = 0;
  }else if(e.key == "l" || e.key == "p")
   //-- Quitar velocidad de la raqueta derecha
   raqD.v = 0;{

   }
}

//-- Obtener el boton de dar un "paso"
//const sacar = document.getElementById("sacar");
//const reset = document.getElementById("reset");
//--const paso_2 = document.getElementById("paso_2");

//-- Boton de saque:
//-- Dar a la bola una velocidad inicial
//-- También restablecemos la posición inicial
//sacar.onclick = () => {
  // Asignación de nueva velocidad de la bola

//  bola_vx = 3;
//  console.log("¡Saque!");
//}

//reset.onclick = () => {
  // Asignación de nueva velocidad de la bola
//  bola_x = 50;

//  console.log("¡Saque!");
//}
