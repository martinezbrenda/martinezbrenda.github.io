
document.getElementById('modoOscuro').onclick = function(){
    var texto = document.getElementsByClassName("contenido");
    var recuadro = document.getElementsByClassName("box");
    var datos = document.getElementsByClassName("importante");
    document.body.style.backgroundImage= "url('fondo_negro3.jpg')";
    
  for (var i = 0; i < texto.length; i++) {
    texto[i].style.color = "white";
  }

for (var j = 0; j < recuadro.length; j++) {
 recuadro[j].style.backgroundImage = "url('fondo_box_negro.jpg')";
 }

  for (var k = 0; k < datos.length; k++) {
    datos[k].style.color ="white";
    datos[k].style.textDecorationColor="white";//color del subrayado
    datos[k].style.textDecorationStyle="solid";//tipo de subrayado
  }
}

function mostrarOcultar(x){
    var sub = document.getElementsByClassName("subtitulos");
    var box = document.getElementsByClassName("box");
    if (x.style.display === "none") { 
        for (var j = 0; j < sub.length; j++) {
            sub[j].style.width ='100%';
          }
        x.style.display = "block"; 
      } else { 
        for (var j = 0; j < sub.length; j++) {
          box[j].style.display ='none';
        }
    
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

var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

var buttonPosition = scrollTop + windowHeight;

if (scrollTop >= (documentHeight - windowHeight)) {
  var button = document.getElementById('arriba');
  button.style.position = 'fixed';
  button.style.bottom = '0';
  button.style.left = '50%';
  button.style.transform = 'translate(-50%, 0)';
  button.style.display = 'block';
} else {
  var button = document.getElementById('arriba');
  button.style.display = 'none';
}