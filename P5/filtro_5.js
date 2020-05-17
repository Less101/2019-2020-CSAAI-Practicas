console.log("Ejecutando JS...")

//-- Obtener elentos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_R = document.getElementById('deslizador_1');


//-- Valor del deslizador
const range_value = document.getElementById('range_value');

//-- Función de retrollamada de Imagen cargada
//-- La imagen no se carga instantánemanete, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

//-- Función de retrollamada del deslizador
deslizador_R.oninput = () => {
  //-- Mostrar el nuevo valor del Deslizador
  range_value.innerHTML = deslizador_R.value;

//-- Situar la imagen original en el canvas
//-- No se ha hecho manipulaciones todavía
ctx.drawImage(img, 0,0);

//-- Obtener la imagen del canvas en Píxeles
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//-- Obtener el array con todos los píxeles
let data = imgData.data

//-- Obtener el umbral de rojo del deslizador
umbral = deslizador_R.value

//-- Brillo
brillo = (3 * r + 4 * g + b)/8

//-- Filtrar la imagen según el nuevo umbral
for (let i = 0; i < data.length; i+=4){
  if (data[i] > umbral)
    data[i] = umbral;
}

//-- Poner la imagen modificada en el canvas
ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");
