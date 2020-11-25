var imatges = ["url(./img/casa1.jpg)", "url(./img/casa2.jpg)", "url(./img/casa3.jpg)", "url(./img/casa4.jpg)", "url(./img/casa5.jpg)", "url(./img/casa6.jpg)", ]

var contador = 0;

document.getElementById("flechaIzquierda").addEventListener('click', () => {
    contador--;
    if (contador < 0) {
        contador = 5;
    }

    document.getElementById("properties").style.backgroundImage = imatges[contador];
});

document.getElementById("flechaDerecha").addEventListener('click', () => {

    contador++;
    if (contador > 5) {
        contador = 0;
    }

    document.getElementById("properties").style.backgroundImage = imatges[contador];

});


function changeImages() {
    document.getElementById("properties").style.backgroundImage = imatges[contador];
    if (contador < imatges.length - 1) {
        contador++;
    } else {
        contador = 0;
    }
    setTimeout("changeImages()", 4000);
}

changeImages();