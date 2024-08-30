// A/B Test Group Assignment
function assignGroup() {
    return Math.random() < 0.5 ? 'A' : 'B';
}

const userGroup = assignGroup();
const navbar = document.getElementById('navbar');

// Modify the navbar based on user group
if (userGroup === 'B') {
    navbar.classList.remove('top-nav');
    navbar.classList.add('left-nav');
}

// Tracking function
function trackEvent(eventName) {
    console.log(`Event Tracked: ${eventName}`);
    // Send event to analytics server or Mojito here
}
