console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo

const video0 = document.getElementById("video0");
video0.width=400; //-- pantalla grande
video0.height=200;


const video1 = document.getElementById("video1");
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

const video2 = document.getElementById("video2");
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

const video3 = document.getElementById("video3");
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;


//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png"
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png"
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png"

//-- Obtener los botones
const play1 = document.getElementById("selector1")
const play2 = document.getElementById("selector2")
const play3 = document.getElementById("selector3")


//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Click_1!");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video0.src = video1.src;
  video1.play();
  video0.play();
}
play2.onclick = () => {
  console.log("Click_2!");
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video0.src = video2.src;
  video2.play();
  video0.play();
}
play3.onclick = () =>{
  console.log("Click_3!");
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
  video0.src = video3.src;
  video3.play();
  video0.play();
}

//-- Funcion de retrollamada del boton de parar
//stop.onclick = () => {
//  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video0.src=null;
