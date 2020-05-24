console.log("Ejecutando JS...")

//-- Obtener elentos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador_R = document.getElementById('R');
const deslizador_G = document.getElementById('G');
const deslizador_B = document.getElementById('B');

//-- Valor del deslizador
const value_R = document.getElementById('value_R');
const value_G = document.getElementById('value_G');
const range_B = document.getElementById('value_B');


//-- Botonera
const RGB = document.getElementById('RGB');
const BW = document.getElementById('BW');
const INV = document.getElementById('INV');


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
  ctx.drawImage(img, 0, 0);

  console.log("Imagen lista...");
};
RGB.onclick = () => {
  console.log("Aplicando filtro RGB");
  // Control deslizador R
    //-- Función de retrollamada del deslizador
    deslizador_R.oninput = () => {
      //-- Mostrar el nuevo valor del Deslizador
    value_R.innerHTML = deslizador_R.value

    //-- Situar la imagen original en el canvas
    //-- No se ha hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en Píxeles
    let imgDataRed = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgDataRed.data

    //-- Obtener el umbral de rojo del deslizador
    umbral = deslizador_R.value

        //-- Filtrar la imagen según el nuevo umbral
        for (var i = 0; i < data.length; i+=4) {
          if (data[i] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgDataRed, 0, 0);
    }

    deslizador_G.oninput = () => {
      //-- Mostrar el nuevo valor del Deslizador
    value_G.innerHTML = deslizador_G.value

    //-- Situar la imagen original en el canvas
    //-- No se ha hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en Píxeles
    let imgDataGreen = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgDataGreen.data

    //-- Obtener el umbral de rojo del deslizador
    umbral = deslizador_G.value

        //-- Filtrar la imagen según el nuevo umbral
        for (var i = 0; i < data.length; i+=4) {
          if (data[i+1] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgDataGreen, 0, 0);
    }

    deslizador_B.oninput = () => {
      //-- Mostrar el nuevo valor del Deslizador
    value_B.innerHTML = deslizador_B.value

    //-- Situar la imagen original en el canvas
    //-- No se ha hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en Píxeles
    let imgDataBlue = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgDataBlue.data

    //-- Obtener el umbral de rojo del deslizador
    umbral = deslizador_B.value

        //-- Filtrar la imagen según el nuevo umbral
        for (var i = 0; i < data.length; i+=4) {
          if (data[i+2] > umbral)
            data[i] = umbral;
        }

        //-- Poner la imagen modificada en el canvas
        ctx.putImageData(imgDataBlue, 0, 0);
    }
}
BW.onclick = () => {
  console.log("Aplicando filtro de grises");
  let imgDataGrey = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgDataGrey.data;
  //-- Filtrar la imagen según el nuevo umbral
  for (var i = 0; i < data.length; i+=4) {
    let r = data[i];
    let g = data[i+1];
    let b = data[i+2];
    let brillo = (3*r + 4*g + b)/8;
    data[i] = data[i+1] = data[i+2] = brillo
    }

ctx.putImageData(imgDataGrey, 0, 0);
console.log("filtro de grises aplicado");
 }


INV.onclick = () => {
  console.log("Aplicando filtro inversor");
  let imgDataInv = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = imgDataInv.data;

  for (var i = 0; i < data.length; i+=4 ) {
      let r = data[ i ];
      let g = data[ i + 1 ];
      let b = data[ i + 2 ];
      let inv = (255 - r + 255 - g + 255 - b);
      data[ i ] = data[ i + 1 ] = data[ i + 2 ] = inv;
      }

ctx.putImageData(imgDataInv, 0, 0 );
console.log("filtro inversor aplicado");
 }

console.log("Fin...");
