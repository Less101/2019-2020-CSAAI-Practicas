console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");


//-- Definir el tamaño de canvas
canvas.width = 500;
canvas.height = 250;

//-- Definir el contexto del canvas
const ctx = canvas.getContext("2d");
//-- leer la imagen del documento html
//-- está deshabilitada
var pic  = document.getElementById('kraftwerk');

pic.onload = () => {
//-- insertar en la imagen en le canvas, una vez
//-- ya está cargada
ctx.drawImage(pic , 15, 18);

}
