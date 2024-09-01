// Function to create the navbar
function createNavbar(test) {
    const navbar = document.getElementById('navbar');
    // Apply the navbar style based on the active recipe
    if (test.recipeId === '0') {
        // Control group - top navbar
        navbar.className = 'top-nav';
        document.body.classList.remove('side-nav-body');
    } else if (test.recipeId === '1') {
        // Treatment group - side navbar
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
    Mojito.trackEvent('CTA Click', { ctaId: ctaId });
}

// Function to track page views
function trackPageView(page) {
    console.log(`Page viewed: ${page}`);
    Mojito.trackEvent('Page View', { page: page });
}
