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
        'Jpg/clay-banks-KBqnxve73BE-unsplash22393600.jpg',
        'Jpg/evans-dims-dyKl1WZDJ6M-unsplash24001600.jpg',
        'Jpg/richard-haas-nGK4eApCxjM-unsplash24001800.jpg',
        'Jpg/zoshua-colah-J3chXHpKer0-unsplash24001600.jpg'
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