
// funcion para reiniciar juego en pagina Game - boton nuevo juego. 
function restartGame() {
    window.location.reload();
}

//funcion para ir al index.

function goToIndex() {
    window.location.href = "index.html";
}

//funcion para remplazar palabra elegida random por renglones.

function palabraElegida() {

    const palabraElegida = sessionStorage.getItem("palabraElegida");
    let cantidaDeLetras = palabraElegida.length;
    let letra = ""
    for (i = 0; i < cantidaDeLetras; i++) {
        letra += `<span id="${i}" class="guion"> _ </span>`;
    }
    document.getElementById("guiones").innerHTML = letra;
    let pantalla = document.querySelector("canvas");
    let pincel = pantalla.getContext("2d");
    dibujarsuelo(pincel);
}

//Detectar tecla presionada y hacerla mayuscula. 

document.addEventListener("keydown", teclaPresionada);
let errores = 0;

function teclaPresionada(event) {
    const teclaPresionada = event.key.toUpperCase()
    const palabraElegida = sessionStorage.getItem("palabraElegida");
    let letrasSeparadas = palabraElegida.split('');
    const letraAcertada = document.getElementById("guiones");
    const letraErrada = document.getElementById("errado");
    let pantalla = document.querySelector("canvas");
    let pincel = pantalla.getContext("2d");

    // solo se lee de la A-Z. 
    const pattern = new RegExp ('^[A-Z]+$', 'i');

    if(pattern.test(teclaPresionada)){
        console.log("entro");

    // Condicional de errores y aciertos.
    
    if (!palabraElegida.includes(teclaPresionada)) {
        if (errores < 7) {
            errores += 1;
            switch (errores) {
                case 1:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarhorca(pincel);
                    break;
                case 2:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarcabeza(pincel);
                    break;
                case 3:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujartronco(pincel);
                    break;
                case 4:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarbrzizq(pincel);
                    break;
                case 5:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarbrzder(pincel);
                    break;
                case 6:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarlegder(pincel);
                    break;
                case 7:
                    letraErrada.innerHTML += teclaPresionada;
                    dibujarlegizq(pincel);
                    break;
            }
        }
        else {
            document.getElementById("perdiste").style.display = "inline-block";
        }
    }
    else {
        for (contador = 0; contador < letrasSeparadas.length; contador++) {
            let spanGuion = document.getElementById(`${contador}`);
            if (teclaPresionada == letrasSeparadas[contador]) {
                spanGuion.innerHTML = teclaPresionada;
                spanGuion.classList.remove("guion");
            }
        }
        let guion = document.getElementsByClassName("guion");
        if (guion.length == 0) {
        document.getElementById("ganaste").style.display = "inline-block";
    
        }
    }
}
}
//Secciones de dibujar horca

var lienzo = document.querySelector("#dibujoahorcado");

function dibujarsuelo(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(5, 490);
    pincel.lineTo(445, 490);
    pincel.stroke();

}

function dibujarhorca(pincel) {

    pincel.strokeStyle = "#0A3871";
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

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(345, 145, 45, 0, 2 * Math.PI);
    pincel.stroke();
}

function dibujartronco(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(345, 350);
    pincel.stroke();
}

function dibujarbrzizq(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(295, 280);
    pincel.stroke();
}

function dibujarbrzder(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(345, 195);
    pincel.lineTo(395, 280);
    pincel.stroke();
}

function dibujarlegizq(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(345, 338);
    pincel.lineTo(305, 450);
    pincel.stroke();
}

function dibujarlegder(pincel) {

    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(345, 338);
    pincel.lineTo(385, 450);
    pincel.stroke();
}