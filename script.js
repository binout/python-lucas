function showHint(id) {
    const element = document.getElementById(id);
    const button = event.target;

    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        button.textContent = '🔼 Masquer l\'indice';
    } else {
        element.style.display = 'none';
        button.textContent = '💡 Afficher un indice';
    }
}

function showSolution(id) {
    const element = document.getElementById(id);
    const button = event.target;

    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        button.textContent = '🔼 Masquer la solution';
    } else {
        element.style.display = 'none';
        button.textContent = '✨ Afficher la solution';
    }
}
