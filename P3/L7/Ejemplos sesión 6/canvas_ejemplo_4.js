console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");


//-- Definir el tamaño de canvas
canvas.width = 200;
canvas.height = 100;

//-- Definir el contexto del canvas
const ctx = canvas.getContext("2d");

// -- Definir un rectángulo de dimensiones 100*50
// -- cuya esquina superior izquierda está en (5,5)
ctx.rect(5,5, 100, 50);

// -- Dibujar
ctx.fillStyle = 'red';

// -- Cambiar el tamaño de la linea del trazo
ctx.lineWidth = 4;

//-- Rellenar
ctx.fill();

//-- Dibujar el trazo
ctx.stroke()
