
document.getElementById('modoOscuro').onclick = function(){
    var texto = document.getElementsByClassName("contenido");
    var recuadro = document.getElementsByClassName("box");
    var datos = document.getElementsByClassName("importante");
    document.body.style.backgroundColor='rgb(39, 37, 37)';

  for (var i = 0; i < texto.length; i++) {
    texto[i].style.color = "white";
  }
  for (var j = 0; j < recuadro.length; j++) {
    recuadro[j].style.borderColor ='rgb(228, 200, 255)';
  }
  for (var k = 0; k < recuadro.length; k++) {
    datos[k].style.color ='white';
    datos[k].style.textDecorationColor='white';
    datos[k].style.textDecorationStyle='solid';
  }

}

function mostrarOcultar(x){
    var sub = document.getElementsByClassName("subtitulos");
    var recuadro = document.getElementsByClassName("box");
    if (x.style.display === "none") { 
        for (var j = 0; j < sub.length; j++) {
            sub[j].style.width ='100%';
          }
        x.style.display = "block"; 
      } else { 
        x.style.display = "none"; 
        for (var j = 0; j < sub.length; j++) {
            sub[j].style.width ='50%';
          }
      }
}

window.onscroll=() =>{
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
    }
}

const toTop = () => window.scrollTo({top:0,behavior:'smooth'});