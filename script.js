// BPNT HOME PAGE JS

// Header background color when scrolling

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#ff9d00'; // Color changes when scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Original color
    }
});

// When search button is clicked

document.getElementById('search-btn').addEventListener('click', function() {
    var searchBar = document.getElementById('search-text');
    searchBar.style.color = '#ff0000'; // Changes text color
    searchBar.style.textShadow = '0.5px 0.5px 1px #000'; // Text shadow
  
    setTimeout(function() {
        searchBar.style.color = ''; // Original color after 0.3s
        searchBar.style.textShadow = ''; // Removes text shadow after 0.3s
    }, 300);
});

// When user presses enter

document.getElementById('search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var searchButton = document.getElementById('search-icon');
        searchButton.style.color = '#ff0000'; // Changes color of the icon
        searchButton.style.textShadow = '0.5px 0.5px 1px #000'; // Icon's shadow
      
        setTimeout(function() {
            searchButton.style.color = ''; // Original color after 0.3s
            searchButton.style.textShadow = ''; // Removes the icon's shadow after 0.3s
        }, 300);
    }
});  

// Images of the home page

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

    // Creates a new image to check when the background image has loaded
    const img = new Image();
    img.src = randomImage;
    img.onload = function() {
        section.classList.add('loaded');
    };
});