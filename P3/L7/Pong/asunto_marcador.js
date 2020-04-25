if((counter_I || counter_D) == 10 ){
   estado = ESTADO.INIT;
   ctx.font = "40px Arial";
   ctx.fillStyle = "yellow";
   // se me acab de ocurri algo así..
   ctx.fillText(" YOU WON!" counter_D || counter_I , 30, 350);
   bola.draw();
}
