// --- Theme Toggle (Placeholder) ---
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// --- Mobile Menu Toggle ---
function toggleMenu() {
    console.log('[toggleMenu] Function called.');
    const menu = document.getElementById('navMenu');
    if (!menu) {
        console.error('[toggleMenu] Error: Could not find element with ID "navMenu".');
        return; // Stop if menu element doesn't exist
    }
    console.log('[toggleMenu] Found menu element:', menu);
    console.log('[toggleMenu] Menu classList BEFORE toggle:', menu.classList.toString());
    menu.classList.toggle('active');
    console.log('[toggleMenu] Menu classList AFTER toggle:', menu.classList.toString());
}

// --- Close Menu on Outside Click ---
document.addEventListener('click', function(event) {
    const menu = document.getElementById('navMenu');
    const menuButton = document.querySelector('.mobile-menu-btn'); // Need the button too

    // If menu or button doesn't exist, or menu isn't active, do nothing
    if (!menu || !menuButton || !menu.classList.contains('active')) {
        return;
    }

    // Check if the click was outside the menu AND outside the button
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
        console.log('[OutsideClick] Closing menu.');
        menu.classList.remove('active');
    }
});

// --- Quick Start Toggle & Scroll ---
function toggleQuickStart() {
    const quickStartContent = document.getElementById('quick-start-content');
    const heroSection = document.querySelector('.hero-section'); // Get the hero section
    quickStartContent.classList.toggle('active');
    heroSection.classList.toggle('hero-condensed'); // Toggle class on hero section

    // Scroll down only if the section was just opened
    if (quickStartContent.classList.contains('active')) {
        // Use setTimeout to allow the CSS transition for height/opacity to start
        setTimeout(() => {
            quickStartContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150); // Slightly increased delay
    }
}

// --- Code Block Copy Button ---
function copyCode(buttonElement, codeElementId) {
    const codeElement = document.getElementById(codeElementId);
    const codeToCopy = codeElement.innerText;
    const tooltip = buttonElement.querySelector('.copy-tooltip'); // Tooltip is inside the button

    // Check if code element and tooltip were found
    if (!codeElement || !tooltip) {
        console.error('[copyCode] Could not find code element or tooltip.');
        return;
    }

    navigator.clipboard.writeText(codeToCopy).then(() => {
        // Show tooltip
        tooltip.classList.add('visible');
        buttonElement.disabled = true;

        // Hide tooltip after a delay
        setTimeout(() => {
            tooltip.classList.remove('visible');
            buttonElement.disabled = false;
        }, 1500); // Tooltip visible for 1.5 seconds
    }).catch(err => {
        console.error('Failed to copy code: ', err);
        // Optional: Show an error tooltip or message
    });
}

// --- Shrinking Header on Scroll ---
const header = document.querySelector('header');
const scrollThreshold = 100; // Increased threshold

// Check if header exists before adding listener
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}
