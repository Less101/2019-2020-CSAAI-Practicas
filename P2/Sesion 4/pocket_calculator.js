console.log("Ejecutando JS...");

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Crear un array con todos los elementos
//-- de la clase operacion
operacion = document.getElementsByClassName("operacion")

for (i=0; i<operacion.length; i++) {
  operacion[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Crear un array con todos los elementos
//-- de la clase f_auxiliar
f_auxiliar = document.getElementsByClassName("f_auxiliar")

for (i=0; i<f_auxiliar.length; i++) {
  f_auxiliar[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}
//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  }else if (estado == ESTADO.OPERATION) {
    display.innerHTML = num;
    estado = ESTADO.OP2_INIT;
  }else{
    display.innerHTML = num;
    estado = ESTADO.OP2;
  }
}

function operation(oper)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.OP1) {
    display.innerHTML = oper;
    oper = ESTADO.OPERATION;
  }
}

 function resultado(num)
 {
   if (estado == ESTADO.OP2) {
     igual.onclick = () => {
     display.innerHTML = eval(display.innerHTML);
     estado = ESTADO.INIT;
     }
   }
}

reset.onclick = () => {
  display.innerHTML = "";
}
