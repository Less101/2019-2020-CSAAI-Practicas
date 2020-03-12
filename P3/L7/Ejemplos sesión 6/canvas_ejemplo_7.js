console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");


//-- Definir el tamaño de canvas
canvas.width = 200;
canvas.height = 100;

//-- Definir el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'red';
ctx.fillText("Texto sólido", 10, 30);

//-- Texto trazo
ctx.strokeStyle = 'black';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 5, 80);
