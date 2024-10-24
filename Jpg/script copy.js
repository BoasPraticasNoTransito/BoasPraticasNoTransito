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
        'Jpg/abigail-keenan-RaVcslj475Y-unsplash.jpg',
        'Jpg/alex-block-YaEfT8nJbDM-unsplash.jpg',
        'Jpg/alex-kim-d52i7z91qaQ-unsplash.jpg',
        'Jpg/amos-gwa-IrGYJPF0JS0-unsplash.jpg',
        'Jpg/anthony-reungere-s6xt1mwF_iU-unsplash.jpg',
        'Jpg/ashley-knedler-KvD36NRFjl4-unsplash.jpg',
        'Jpg/bartosz-kwitkowski-h1noLtBn1D8-unsplash.jpg',
        'Jpg/benjamin-punzalan-uMez7bFB2JQ-unsplash.jpg',
        'Jpg/clay-banks-KBqnxve73BE-unsplash22393600.jpg',
        'Jpg/damiano-baschiera-d4feocYfzAM-unsplash.jpg',
        'Jpg/ed-259-xcrI6CPkkJs-unsplash.jpg',
        'Jpg/evans-dims-dyKl1WZDJ6M-unsplash24001600.jpg',
        'Jpg/florian-wehde-8bjnP3yhNTg-unsplash.jpg',
        'Jpg/ilnur-kalimullin-CB0Qrf8ib4I-unsplash.jpg',
        'Jpg/jesse-bowser-c0I4ahyGIkA-unsplash.jpg',
        'Jpg/jms-kFHz9Xh3PPU-unsplash.jpg',
        'Jpg/jonny-auh-z99iWocuDt0-unsplash.jpg',
        'Jpg/milada-vigerova-pQMM63GE7fo-unsplash.jpg',
        'Jpg/mitchell-kmetz-d7Qn3lHTn24-unsplash.jpg',
        'Jpg/nick-herasimenka-npeuPtxkfyk-unsplash.jpg',
        'Jpg/nicki-eliza-schinow-mg3nB1l2KdM-unsplash.jpg',
        'Jpg/patrick-fore-74TufExdP3Y-unsplash.jpg',
        'Jpg/peggy-sue-zinn-pomI1itWE_0-unsplash.jpg',
        'Jpg/piotr-chrobot-6oUsyeYXgTg-unsplash.jpg',
        'Jpg/richard-haas-nGK4eApCxjM-unsplash24001800.jpg',
        'Jpg/tom-barrett-uiKqLsjusB0-unsplash.jpg',
        'Jpg/vista-wei-OiERUvVrioU-unsplash.jpg',
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