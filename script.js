// Simulating A/B test group assignment
const isGroupA = Math.random() < 0.5;

// Function to create the navbar
function createNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <ul>
            <li><a href="#" onclick="loadPage('home')">Home</a></li>
            <li><a href="#" onclick="loadPage('about')">About</a></li>
            <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
        </ul>
    `;
    if (isGroupA) {
        navbar.className = 'top-nav';
        document.body.classList.remove('side-nav-body');
    } else {
        navbar.className = 'side-nav';
        document.body.classList.add('side-nav-body');
    }
}

// Function to load page content
function loadPage(page) {
    const content = document.getElementById('page-content');
    switch(page) {
        case 'home':
            content.innerHTML = '<h2>Home Page</h2><p>Welcome to our home page.</p>';
            break;
        case 'about':
            content.innerHTML = '<h2>About Us</h2><p>Learn more about our company.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h2>Contact Us</h2><p>Get in touch with us.</p>';
            break;
    }
    trackPageView(page);
}

// Function to track CTA clicks
function trackCTA(ctaId) {
    console.log(`CTA clicked: ${ctaId}`);
    // Here you would typically send this data to your analytics service
}

// Function to track page views
function trackPageView(page) {
    console.log(`Page viewed: ${page}`);
    // Here you would typically send this data to your analytics service
}

// Initialize the page
createNavbar();
loadPage('home');