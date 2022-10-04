const palabras = ['manantial','agua','tierra','casa','rodilla','tortuga','hamburguesa','pan','tortuga','alura']

//funcion para sortear nueva palabra e iniciar juego.

function iniciarNuevoJuego(){
    let palabra = palabras[Math.floor((Math.random() * palabras.length))].toUpperCase();
    palabra = palabra.split('');
    document.getElementById("buttonIniciarJuego").style.display = "none";
    document.getElementById("buttonAgregarNuevaPalabra").style.display = "none";
}

//funcion para agregar nueva palabra al array de palabras.

function agregarNuevaPalabra(){
    let nuevaPalabra = document.getElementById("inputNuevaPalabra").value.toUpperCase();
    palabras.push(nuevaPalabra);
    window.location.href="game.html";
}

// funcion para reiniciar juego en pagina Game - boton nuevo juego. 
function restartGame(){
    window.location.reload();
}

//funcion para ir a pagina agregar palabra.

function goToNuevaPalabra(){
    window.location.href="nuevaPalabra.html";
}

//funcion para ir al index.

function goToIndex(){
    window.location.href="index.html";
}







