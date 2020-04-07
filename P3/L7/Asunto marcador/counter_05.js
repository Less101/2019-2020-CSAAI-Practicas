console.log(" Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasrlo como parámetro o asignárselo
//-- a otro objeto
const gui ={
  display: document.getElementById("display"),
  boton_inc: document.getElementById("Incremento"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value){
    this.valor += value;
    gui.display.innerHTML = this.valor;
  }
}

//--- Incrementar el contador automáticamente
//--- cada segundo (1000ms)
setInterval (()=>{
  counter.inc(1);
}, 1000);

//------------Acciones:
//-- Incrementar Contador
gui.boton_inc.onclick = () => {
  counter.inc(1);
}
