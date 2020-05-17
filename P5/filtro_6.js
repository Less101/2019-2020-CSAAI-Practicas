console.log("Ejecutando JS...")

//-- Obtener elentos del DOM
const canvas = document.getElementById('canvas');
const img_1 = document.getElementById('imagesrc_1');
const img_2 = document.getElementById('imagesrc_2');
const ctx = canvas.getContext('2d');

//-- Obtener los botones
const play = document.getElementById("play");
const stop = document.getElementById("stop");

//-- Acceso al deslizador
const deslizador_R = document.getElementById('deslizador_1');
const deslizador_G= document.getElementById('deslizador_2');
const deslizador_B = document.getElementById('deslizador_3');


//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de Imagen cargada
//-- La imagen no se carga instantánemanete, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img_1.onload = function () {


  img_1.width=300;  //-- Tamaño de la pantalla de video
  img_1.height=200;

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img_1.width;
  canvas.height = img_1.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(img_1, 0,0);

  console.log("Imagen lista...");
};

img_2.onload = function () {


  img_2.width=300;  //-- Tamaño de la pantalla de video
  img_2.height=200;

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img_2.width;
  canvas.height = img_2.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(img_2, 20, 20);

  console.log("Imagen lista...");
};
//-- Función de retrollamada del deslizador
deslizador_R.oninput = () => {
  //-- Mostrar el nuevo valor del Deslizador
  range_value.innerHTML = deslizador_R.value;

//-- Situar la imagen original en el canvas
//-- No se ha hecho manipulaciones todavía
//ctx.drawImage(img_1, 0,0);

//-- Obtener la imagen del canvas en Píxeles
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//-- Obtener el array con todos los píxeles
let data = imgData.data

//-- Obtener el umbral de rojo del deslizador
umbral = deslizador_R.value

//-- Filtrar la imagen según el nuevo umbral
for (let i = 0; i < data.length; i+=4){
  if (data[i] > umbral)
    data[i] = umbral;
}

//-- Poner la imagen modificada en el canvas
ctx.putImageData(imgData, 0, 0);
}

deslizador_G.oninput = () => {
  //-- Mostrar el nuevo valor del Deslizador
  range_value.innerHTML = deslizador_G.value;

//-- Situar la imagen original en el canvas
//-- No se ha hecho manipulaciones todavía
//ctx.drawImage(img_1, 0,0);

//-- Obtener la imagen del canvas en Píxeles
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//-- Obtener el array con todos los píxeles
let data = imgData.data

//-- Obtener el umbral de rojo del deslizador
umbral = deslizador_G.value

//-- Filtrar la imagen según el nuevo umbral
for (let i = 1; i < data.length; i+=4){
  if (data[i] > umbral)
    data[i] = umbral;
}

//-- Poner la imagen modificada en el canvas
ctx.putImageData(imgData, 0, 0);
}


deslizador_B.oninput = () => {
  //-- Mostrar el nuevo valor del Deslizador
  range_value.innerHTML = deslizador_R.value;

//-- Situar la imagen original en el canvas
//-- No se ha hecho manipulaciones todavía
//ctx.drawImage(img_1, 0,0);

//-- Obtener la imagen del canvas en Píxeles
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//-- Obtener el array con todos los píxeles
let data = imgData.data

//-- Obtener el umbral de rojo del deslizador
umbral = deslizador_B.value

//-- Filtrar la imagen según el nuevo umbral
for (let i = 2; i < data.length; i+=4){
  if (data[i] > umbral)
    data[i] = umbral;
}

//-- Poner la imagen modificada en el canvas
ctx.putImageData(imgData, 0, 0);
}


console.log("Fin...");
