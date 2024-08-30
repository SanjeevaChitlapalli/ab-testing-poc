document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Initialize Mojito
    Mojito.initialize({
        experimentId: 'your-experiment-id',
        onGroupSelected: (group) => {
            if (group === 'A') {
                renderTopNavbar(navbar);
            } else if (group === 'B') {
                renderVerticalNavbar(navbar);
            }
        }
    });

    function renderTopNavbar(navbar) {
        navbar.classList.add('navbar-top');
        navbar.innerHTML = `
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        `;
    }

    function renderVerticalNavbar(navbar) {
        navbar.classList.add('navbar-vertical');
        navbar.innerHTML = `
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        `;
    }
});
