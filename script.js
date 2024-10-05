window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#ff9d00'; // Color changes when scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Original color
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'Jpg/Inicio/benjamin-punzalan-uMez7bFB2JQ-unsplash.jpg',
        'Jpg/Inicio/clay-banks-KBqnxve73BE-unsplash.jpg',
        'Jpg/Inicio/ed-259-xcrI6CPkkJs-unsplash.jpg',
        'Jpg/Inicio/evans-dims-dyKl1WZDJ6M-unsplash.jpg',
        'Jpg/Inicio/florian-wehde-8bjnP3yhNTg-unsplash.jpg',
        'Jpg/Inicio/ilnur-kalimullin-CB0Qrf8ib4I-unsplash.jpg',
        'Jpg/Inicio/jesse-bowser-c0I4ahyGIkA-unsplash.jpg',
        'Jpg/Inicio/peggy-sue-zinn-pomI1itWE_0-unsplash.jpg',
        'Jpg/Inicio/richard-haas-nGK4eApCxjM-unsplash.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const section = document.querySelector('.section');
    section.style.backgroundImage = `url(${randomImage})`;

    // Cria uma nova imagem para verificar quando a imagem de background estiver carregada
    const img = new Image();
    img.src = randomImage;
    img.onload = function() {
        section.classList.add('loaded');
    };
});