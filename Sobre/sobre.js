// BPNT ABOUT JS

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
    searchBar.style.color = '#ff4800'; // Changes text color
    searchBar.style.textShadow = '0.032rem 0.032rem 0.065rem #000'; // Text shadow
  
    setTimeout(function() {
        searchBar.style.color = ''; // Original color after 0.3s
        searchBar.style.textShadow = ''; // Removes text shadow after 0.3s
    }, 300);
});

// When user presses enter on the search bar

document.getElementById('search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var searchButton = document.getElementById('search-icon');
        searchButton.style.color = '#ff4800'; // Changes color of the icon
        searchButton.style.textShadow = '0.032rem 0.032rem 0.065rem #000'; // Icon's shadow
      
        setTimeout(function() {
            searchButton.style.color = ''; // Original color after 0.3s
            searchButton.style.textShadow = ''; // Removes the icon's shadow after 0.3s
        }, 300);
    }
});

// Search

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-bar').onsubmit = performSearch;
    document.getElementById('close-results').onclick = closeResults;
});

async function fetchPageContent(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
}

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

async function performSearch(event) {
    event.preventDefault();
    const resultsContainer = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = ''; // Clear previous content

    const query = document.getElementById('search-text').value; // Captures the original text
    const normalizedQuery = normalizeString(query); // Normalizes the text for comparison

    const pages = [
        { url: '../index.html', name: 'Início' },
        { url: 'sobre.html', name: 'Sobre' },
        { url: '../Contato/contato.html', name: 'Contato' },
        { url: '../Blog/blog.html', name: 'Blog' }
    ];

    const results = [];

    for (const { url, name } of pages) {
        try {
            const content = await fetchPageContent(url);
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const bodyText = doc.body.innerText;

            const normalizedBodyText = normalizeString(bodyText);
            if (normalizedBodyText.includes(normalizedQuery)) {
                const startIndex = normalizedBodyText.indexOf(normalizedQuery);
                const endIndex = Math.min(startIndex + normalizedQuery.length + 200, bodyText.length);
                const excerpt = bodyText.slice(Math.max(0, startIndex - 20), endIndex);
                
                // Highlight the query in the quote, preserving accents

                const highlightedExcerpt = excerpt.replace(new RegExp(`(${query})`, 'gi'), (match) => `<mark>${match}</mark>`);
                
                results.push({ page: name, url, content: highlightedExcerpt });
            }
        } catch (error) {
            console.error('Error fetching page:', error);
        }
    }

    displayResults(results, query);
    document.getElementById('search-text').value = ''; // Clear the input field
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');
    
    if (!resultsContainer) {
        console.error('Results container not found');
        return;
    }

    resultsContent.innerHTML = '';

    if (results.length === 0) {
        resultsContent.innerHTML = `<p>Nenhum resultado encontrado para "<strong>${query}</strong>".</p>`;
    } else {
        results.forEach(result => {
            const searchParam = encodeURIComponent(query); // Add the search parameter
            resultsContent.innerHTML += `
                <div>
                    <h3><a href="${result.url}?search=${searchParam}" target="_blank">${result.page}</a></h3>
                    <p>${result.content}...</p>
                </div>
            `;
        });
    }

    resultsContainer.style.display = 'block'; // Show results
    setTimeout(() => {
        resultsContainer.classList.remove('hidden');
    }, 10); // Delay to ensure the transition works
}

function closeResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.classList.add('hidden');
    setTimeout(() => {
        resultsContainer.style.display = 'none';
    }, 300);
}

// When menu icon is clicked

document.getElementById('icon2').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.transition = 'right 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    menu.style.right = '0';
});

// When menu close icon is clicked

document.getElementById('menu-close-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.transition = 'right 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    menu.style.right = '-100%';
});

// When user presses enter on the menu search bar

document.getElementById('menu-search-text').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var menuSearchButton = document.getElementById('menu-search-btn');
        menuSearchButton.style.backgroundColor = '#ff4800'; // Changes the button color

        setTimeout(function() {
            menuSearchButton.style.backgroundColor = ''; // Original color after 0.3s
        }, 300);
    }
});

// Menu Search

document.getElementById('menu-search-bar').onsubmit = async function(event) {
    event.preventDefault();
    const query = document.getElementById('menu-search-text').value;

    const resultsContainer = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = ''; // Cleans the previous content

    const normalizedQuery = normalizeString(query);

    const pages = [
        { url: '../index.html', name: 'Início' },
        { url: 'sobre.html', name: 'Sobre' },
        { url: '../Contato/contato.html', name: 'Contate-nos' },
        { url: '../Blog/blog.html', name: 'Nosso Blog' }
    ];

    const results = [];

    for (const { url, name } of pages) {
        try {
            const content = await fetchPageContent(url);
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const bodyText = doc.body.innerText;

            const normalizedBodyText = normalizeString(bodyText);
            if (normalizedBodyText.includes(normalizedQuery)) {
                const startIndex = normalizedBodyText.indexOf(normalizedQuery);
                const endIndex = Math.min(startIndex + normalizedQuery.length + 200, bodyText.length);
                const excerpt = bodyText.slice(Math.max(0, startIndex - 20), endIndex);
                
                // Highlights the search in the content
                
                const highlightedExcerpt = excerpt.replace(new RegExp(`(${query})`, 'gi'), (match) => `<mark>${match}</mark>`);
                
                results.push({ page: name, url, content: highlightedExcerpt });
            }
        } catch (error) {
            console.error('Error fetching page:', error);
        }
    }

    displayResults(results, query);
    document.getElementById('menu-search-text').value = ''; // Cleans the field
};

// Highlight on the page

function highlightSearchTerms() {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');

    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        // Recursive function to highlight terms in text nodes

        function highlightText(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                const parent = node.parentNode;
                const text = node.nodeValue;
                const match = regex.exec(text);
                
                if (match) {
                    const mark = document.createElement('mark');
                    mark.textContent = match[0];
                    const afterMatch = text.slice(match.index + match[0].length);
                    const beforeMatch = text.slice(0, match.index);
                    
                    // Replace the text node with highlighted elements
                    parent.insertBefore(document.createTextNode(beforeMatch), node);
                    parent.insertBefore(mark, node);
                    parent.insertBefore(document.createTextNode(afterMatch), node);
                    parent.removeChild(node);
                }
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    highlightText(node.childNodes[i]);
                }
            }
        }

        // Body search

        highlightText(document.body);
    }
}

// Calls the function after the page loades

document.addEventListener('DOMContentLoaded', highlightSearchTerms);

// Images of the home page

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        '../Jpg/Sobre/abigail-keenan-RaVcslj475Y-unsplash.jpg',
        '../Jpg/Sobre/ashley-knedler-KvD36NRFjl4-unsplash.jpg',
        '../Jpg/Sobre/karsten-wurth-rafblRbne3o-unsplash.jpg',
        '../Jpg/Sobre/laith-abdulkareem-tkKfNtNLiWs-unsplash.jpg',
        '../Jpg/Sobre/mark-basarab-z8ct_Q3oCqM-unsplash.jpg',
        '../Jpg/Sobre/nicki-eliza-schinow-mg3nB1l2KdM-unsplash.jpg',
        '../Jpg/Sobre/piotr-chrobot-6oUsyeYXgTg-unsplash.jpg',
        '../Jpg/Sobre/thaddaeus-lim-RBthQZJd_vU-unsplash.jpg',
        '../Jpg/Sobre/tom-barrett-uiKqLsjusB0-unsplash.jpg'
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

// Contents animation

document.addEventListener('DOMContentLoaded', function () {
    const fadeIns = document.querySelectorAll('.content1, .content2, .content3, .content4, .content5');

    function checkFadeIn() {
        fadeIns.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();
});

document.addEventListener("DOMContentLoaded", () => {
    const parallaxContent = document.querySelector(".parallax-content");
    const container = document.querySelector(".parallax-container");
    const items = Array.from(parallaxContent.children);

    // Calcula a largura de cada item (incluindo margens)
    const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);

    // Duplica os itens antes e depois para continuidade
    const clonesBefore = [];
    const clonesAfter = [];

    items.forEach((item) => {
        const cloneBefore = item.cloneNode(true);
        const cloneAfter = item.cloneNode(true);
        clonesBefore.push(cloneBefore);
        clonesAfter.push(cloneAfter);
    });

    // Adiciona os clones no DOM
    clonesBefore.forEach((clone) => parallaxContent.insertBefore(clone, parallaxContent.firstChild));
    clonesAfter.forEach((clone) => parallaxContent.appendChild(clone));

    // Define a largura total do parallax-content
    const totalItems = items.length + clonesBefore.length + clonesAfter.length;
    const totalWidth = totalItems * itemWidth;
    parallaxContent.style.width = `${totalWidth}px`;

    // Ajusta a posição inicial do parallax-content para dar continuidade
    parallaxContent.style.transform = `translateX(-${clonesBefore.length * itemWidth * 2}px)`;
});
