console.log("Ejecutando JS...");

display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")


let digitos = document.getElementsByClassName("cddigito")
for (i= 0, i<digitos.length; i++) {
digitos[i].onclick = (ev)=>
{ digito(ev.target);
}  
}

function digito(boton)
{
  if (display.innerHTML== "0") {
      display.innerHTML = boton.value;
    } else {
     display.innerHTML += boton.value;
    }
  }


// -- Insertar digito 1 función de retrollamada
boton1.onclick = (ev) => {
  digito(ev.target);
}

//-- Insertar digito 2
boton2.onclick = (ev) => {
    digito(ev.target);

}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += boton+.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
