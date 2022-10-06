
// funcion para reiniciar juego en pagina Game - boton nuevo juego. 
function restartGame(){
    window.location.reload();
}

//funcion para ir al index.

function goToIndex(){
    window.location.href="index.html";
}

//funcion para remplazar palabra elegida random por renglones.

function palabraElegida(){
    const palabraElegida = sessionStorage.getItem("palabraElegida");
    let cantidaDeLetras = palabraElegida.length;
    let letra = ""
    for(i = 0; i < cantidaDeLetras; i++){
       letra+="_ ";
       console.log(letra);
    }
    document.getElementById("guiones").innerHTML=letra;
    
}


//Detectar tecla presionada

document.addEventListener("keydown", teclaPresionada)

function teclaPresionada(event){
    const teclaPresionada = event.key.toUpperCase();
    console.log(teclaPresionada);
}

//Secciones de dibujar horca

var lienzo = document.querySelector("#dibujoahorcado");


function dibujarsuelo(pincel) {

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(5, 490);
    pincel.lineTo(445, 490);
    pincel.stroke();

}

function dibujarhorca(pincel) {

    pincel.beginPath();
    pincel.moveTo(100, 10);
    pincel.lineTo(100, 490);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(100, 15);
    pincel.lineTo(350, 15);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(345, 15);
    pincel.lineTo(345, 100);
    pincel.stroke();

}

function dibujarcabeza(pincel) {
    pincel.beginPath();
    pincel.arc(345, 145, 45, 0, 2 * Math.PI);
    pincel.stroke();
}

function dibujartronco(pincel) {
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(345, 350);
    pincel.stroke();
}

function dibujarbrzizq(pincel) {
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(295, 280);
    pincel.stroke();
}

function dibujarbrzder(pincel) {
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(395, 280);
    pincel.stroke();
}

function dibujarlegizq(pincel) {
    pincel.beginPath();
    pincel.moveTo(345, 338);
    pincel.lineTo(305, 450);
    pincel.stroke();
}

function dibujarlegder(pincel) {
    pincel.beginPath();
    pincel.moveTo(345, 338);
    pincel.lineTo(385, 450);
    pincel.stroke();
}

function dibujarOjos(pincel) {
    pincel.beginPath();
    pincel.moveTo(330 - 9, 135 - 9);
    pincel.lineTo(330 + 9, 135 + 9);

    pincel.moveTo(330 + 9, 135 - 9);
    pincel.lineTo(330 - 9, 135 + 9);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(360 - 9, 135 - 9);
    pincel.lineTo(360 + 9, 135 + 9);

    pincel.moveTo(360 + 9, 135 - 9);
    pincel.lineTo(360 - 9, 135 + 9);
    pincel.stroke();
}
