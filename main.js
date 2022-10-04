const palabras = ['manantial','agua','tierra','casa','rodilla','tortuga','hamburguesa','pan','tortuga','alura']

function iniciarNuevoJuego(){
    let palabra = palabras[Math.floor((Math.random() * palabras.length))].toUpperCase();
    selectedWord = palabra.split('');
    alert(palabra)
}

