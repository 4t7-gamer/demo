const navbarLinks = document.querySelector('.navbar-links');

function updateNavbarLinksAppearance() {
    // Get the position of the navbar-links
    const navbarLinksRect = navbarLinks.getBoundingClientRect();

    // Get the element directly beneath the navbar-links
    const elementBehindNavbarLinks = document.elementFromPoint(
        navbarLinksRect.left + 1, // Slightly offset to avoid edge cases
        navbarLinksRect.top + 1
    );

    // Get the background color of the element behind navbar-links
    const backgroundColor = window.getComputedStyle(elementBehindNavbarLinks).backgroundColor;

    // Extract RGB values and calculate brightness
    const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
    const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

    // Toggle the "dark" class based on brightness
    if (brightness < 0.5) {
        navbarLinks.classList.add('dark');
    } else {
        navbarLinks.classList.remove('dark');
    }
}

// Run the function on page load and scroll
window.addEventListener('load', updateNavbarLinksAppearance);
window.addEventListener('scroll', updateNavbarLinksAppearance);