const palabras = ['manantial','agua','tierra','casa','rodilla','tortuga','hamburguesa','pan','tortuga','alura']

function iniciarNuevoJuego(){
    let palabra = palabras[Math.floor((Math.random() * palabras.length))].toUpperCase();
    palabra = palabra.split('');
    document.getElementById("buttonIniciarJuego").style.display = "none";
    document.getElementById("buttonAgregarNuevaPalabra").style.display = "none";
    alert(palabra);
}

function agregarNuevaPalabra(){
    let nuevaPalabra = document.getElementById("inputNuevaPalabra").value.toUpperCase();
    palabras.push('nuevaPalabra');
}




