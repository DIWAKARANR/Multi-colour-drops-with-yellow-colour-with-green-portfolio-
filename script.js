// Function to create animated drops
function createDrops() {
    const container = document.getElementById('background-animation');
    const colors = ['#ff00ff', '#00ff00', '#0000ff']; // Purple, Green, Blue

    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`; // Between 2-5s
        drop.style.animationDelay = `${Math.random() * 5}s`;
        drop.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(drop);
    }
}

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for down arrow
document.querySelector('.down-arrow').addEventListener('click', () => {
    scrollToSection('home');
});

// Event listeners for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});
window.addEventListener('load', createDrops);
