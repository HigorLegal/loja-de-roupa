//surgimento do menu mobile e animaçao do menu hamburguer
function clickmenu() {
  line1 = document.getElementById("line1");
  line2 = document.getElementById("line2");
  line3 = document.getElementById("line3");
  menu = document.getElementById("menu-mobile");
  if (menu.style.display == "flex") {
    menu.style.display = "none";
    line2.style.opacity = "1";
    line3.style.transform = "rotate(0deg) translate(0px, 0px)";
    line1.style.transform = "rotate(0deg) translate(0px, 0px)";
  } else {
    menu.style.display = "flex";
    line2.style.opacity = "0";
    line1.style.transform = "rotate(-45deg) translate(-4px, 4px)";
    line3.style.transform = "rotate(45deg) translate(-2.5px, -3.5px)";
  }
}
//cronometro
const dataFinal = new Date('2029-07-18 18:59:59').getTime();

const temporizador = setInterval(() => {
  const agora = new Date().getTime();
  const timer = dataFinal - agora;

  if (timer <= 0) {
    clearInterval(temporizador);
    document.getElementById('temporizador').innerHTML = 'Inaugurado';
  } else { //aqui abaixo foi pego de um vídeo do youtube
    const dias = Math.floor(timer / (1000 * 60 * 60 * 24));
    const horas = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((timer % (1000 * 60)) / 1000); //termino a copia aqui

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    document.getElementById('diass').textContent = dias;
    document.getElementById('horass').textContent = horas;
    document.getElementById('minutoss').textContent = minutos;
    document.getElementById('segundoss').textContent = segundos;
  }
}, 100);
 
//auto navegar pelos slides

let contador = 1;
document.getElementById("slide1").checked = true;

setInterval (function(){
  proximaimg()
}, 4000);

function proximaimg (){
  contador ++;
  if (contador > 3){
  contador = 1;}

  document.getElementById("slide"+contador).checked = true;
}
