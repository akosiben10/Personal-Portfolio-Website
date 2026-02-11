/* ======================================
   THEME TOGGLE FUNCTIONALITY
   ====================================== */

// Get the theme toggle button and HTML element
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update theme
    htmlElement.setAttribute('data-theme', newTheme);

    // Save preference
    localStorage.setItem('theme', newTheme);

    // Update icon
    updateThemeIcon(newTheme);
});

// Function to update theme toggle icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

/* ======================================
   MOBILE MENU FUNCTIONALITY
   ====================================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/* ======================================
   SMOOTH SCROLL ACTIVE NAV LINK
   ====================================== */

window.addEventListener('scroll', () => {
    let current = '';

    // Get all sections
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ======================================
   ANIMATIONS ON SCROLL
   ====================================== */

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

/* ======================================
   HELPER FUNCTION: UPDATE YOUR INFO
   ====================================== */

/*
   HOW TO UPDATE YOUR PORTFOLIO:
   
   1. PERSONAL INFORMATION:
      Replace "Your Full Name" with your name (search in index.html)
      Replace "Your Name - Full Stack Developer" with your title (in <title> tag)
      Replace "YN" with your initials in the logo
   
   2. HERO SECTION:
      - Change the greeting, name, and title
      - Update the description with your own
      - Update the CTA button if needed
   
   3. ABOUT SECTION:
      - Write your about content replacing the brackets
      - Update the tech list with technologies you know
      - Optional: Replace the placeholder image with your actual photo
        (Add an <img> tag inside the .about-image div if you have a photo)
   
   4. EXPERIENCE SECTION:
      - For each job, update:
        * Job Title
        * Company Name (and link to company website)
        * Date range and location
        * Description and achievements
        * Technologies used
      - Add or remove experience items as needed (copy the whole .experience-item div)
   
   5. PROJECTS SECTION:
      - For each project, update:
        * Project title
        * Description
        * Technologies used
        * Links to live demo and GitHub repo
      - Replace placeholder images with actual screenshots
        (Replace the image-placeholder div with an <img> tag)
   
   6. SKILLS SECTION:
      - Update skill categories and items
      - Reorganize categories as needed
      - This is just an example structure
   
   7. EDUCATION SECTION:
      - Update with your degree information
      - Add your GPA (optional)
      - List relevant coursework
      - Add or remove education items as needed
   
   8. CONTACT SECTION:
      - Update email (change the mailto: link)
      - Update phone number (change the tel: link)
      - Update social media links (GitHub, LinkedIn, Twitter, CodePen)
   
   9. COLORS AND STYLING:
      - Colors are defined in CSS variables in style.css
      - Dark theme colors can be customized in the :root selector
      - Change fonts in the --font-sans and --font-mono variables
      - Dark/Light mode toggle is handled automatically
   
   10. DEPLOYING YOUR PORTFOLIO:
      - You can deploy this free using GitHub Pages
      - Or use services like Netlify, Vercel, or Firebase Hosting
      - Simply upload index.html, style.css, and script.js
      
   Need help? Common edits:
   - Changing colors: Look for color variables in style.css
   - Adding more projects: Copy a .project-card div and edit the content
   - Changing fonts: Modify the --font-sans and --font-mono in style.css
   - Adjusting spacing: Look for --spacing-* variables in style.css
*/

console.log('Portfolio loaded! Start customizing by editing index.html, style.css, and script.js');

/* ======================================
   OPTIONAL: FORM SUBMISSION (if you add a contact form)
   ====================================== */

// Example: If you add a contact form, use this to handle submissions
// const contactForm = document.getElementById('contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         // Handle form submission
//         // You can use services like FormSubmit, Formspree, or a backend API
//     });
// }

/* ======================================
   TYPING ANIMATION FOR HERO (TWO LINES)
====================================== */
const typingMainEl = document.getElementById('typing-main-text');
const typingMainCursor = document.querySelector('#typing-main-text + .typing-cursor');
const typingTextEl = document.getElementById('typing-text');
const typingTextCursor = document.querySelector('#typing-text + .typing-cursor');

const HERO_TEXT = 'Code. Create. Improve. Repeat.';

// Initialize Typed.js for typewriter effect with looping
function initTyped() {
    if (typeof Typed === 'undefined') return;

    // Typewriter animation with backspacing and loop
    new Typed('#typing-text', {
        strings: ['Code', 'Create', 'Improve', 'Repeat'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
        startDelay: 500,
        showCursor: true,
        cursorChar: '|'
    });
}

// If Typed is already loaded, init immediately; otherwise wait for load
if (typeof Typed !== 'undefined') initTyped();
else window.addEventListener('load', initTyped);

/* ======================================
   CONTACT FORM: CHARACTER COUNT & SUBMIT
   ====================================== */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const messageEl = document.getElementById('message');
    const helpEl = document.getElementById('message-help');
    const MIN_CHARS = 30;

    function updateHelp() {
        if (!messageEl || !helpEl) return;
        const len = messageEl.value.trim().length;
        const remaining = Math.max(0, MIN_CHARS - len);
        if (remaining > 0) {
            helpEl.textContent = `${remaining} more characters are required!`;
        } else {
            helpEl.textContent = 'Ready to send';
        }
    }

    if (messageEl) {
        updateHelp();
        messageEl.addEventListener('input', updateHelp);
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('full-name');
        const email = document.getElementById('email');
        const message = messageEl;

        // basic validation
        if (!name.value.trim()) { name.focus(); return; }
        if (!email.value.trim()) { email.focus(); return; }
        if (message.value.trim().length < MIN_CHARS) { message.focus(); return; }

        // Here you would integrate with a backend or 3rd-party form service.
        // For now just show a simple success state.
        const submitBtn = contactForm.querySelector('.submit-button');
        if (submitBtn) {
            submitBtn.textContent = 'Sent!';
            submitBtn.disabled = true;
        }

        // clear form after short delay
        setTimeout(() => {
            contactForm.reset();
            updateHelp();
            if (submitBtn) {
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }
        }, 1400);
    });
}
