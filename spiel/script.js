document.addEventListener('DOMContentLoaded', function () {
    const backgroundWrap = document.getElementById('background-wrap');
    const numDots = 150; // Anzahl der Punkte

    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Zufällige Größe
        const size = Math.random() * 3 + 1; // Größe zwischen 1px und 4px
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Zufällige Position
        dot.style.top = `${Math.random() * 2000}px`; // Starten auf einer großen Höhe
        dot.style.left = `${Math.random() * 100}%`;

        // Zufällige Animationsdauer für unterschiedliche Geschwindigkeiten
        const duration = Math.random() * 40 + 20; // Dauer zwischen 20s und 60s
        dot.style.animationDuration = `${duration}s`;
        
        // Zufällige Animationsverzögerung
        const delay = Math.random() * 10;
        dot.style.animationDelay = `${delay}s`;

        backgroundWrap.appendChild(dot);
    }
});