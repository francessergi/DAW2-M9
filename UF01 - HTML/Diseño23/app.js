const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav: Fa que aparegui la barra lateral
        nav.classList.toggle('nav-active');

        //Animate links: Fa que apareguin els enllaços
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger animation: fa que l'amburguesa roti
        burger.classList.toggle('toggle');

    });
}

navSlide();

var imatges = ["url(./img/casa1.jpg)", "url(./img/casa2.jpg)", "url(./img/casa3.jpg)", "url(./img/casa4.jpg)", "url(./img/casa5.jpg)", "url(./img/casa6.jpg)", ]

var contador = 4;

document.getElementById("flechaIzquierda").addEventListener('click', () => {
    contador--;
    if (contador == 0)
        contador = 6;
    document.getElementById("properties").style.backgroundImage = imatges[contador];
});

document.getElementById("flechaDerecha").addEventListener('click', () => {
    contador++;
    if (contador == 7)
        contador = 1;
    document.getElementById("properties").style.backgroundImage = imatges[contador];
});