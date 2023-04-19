function jumpscare() {
  enterFullscreen();
  var foto = document.getElementById('foto')
  var audio = new Audio('media/screamer.mp4');
  audio.volume = 1.0;
  audio.loop = true;
  audio.play();
  foto.style.height = '800px'
  foto.style.width = '100%'
  var boton = document.getElementById('boton')
  boton.style.backgroundColor = boton.style.backgroundColor == 'grey' ? 'red' : 'grey'

}

function enterFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

enterFullscreen();
