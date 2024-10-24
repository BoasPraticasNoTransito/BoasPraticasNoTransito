window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#ff9d00'; // Color changes when scroll
    } else {
        header.style.backgroundColor = 'transparent'; // Original color
    }
});

function highlightSearchTerms() {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');

    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        // Função recursiva para destacar termos nos nós de texto
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
                    
                    // Substitui o nó de texto por elementos com destaque
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

        // Começa a busca no body
        highlightText(document.body);
    }
}

// Chamar a função após o carregamento da página
document.addEventListener('DOMContentLoaded', highlightSearchTerms);