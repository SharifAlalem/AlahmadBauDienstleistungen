// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Allow FormSpree to handle the submission
        // This is just for logging/tracking purposes
        console.log('Form submitted to FormSpree');
    });
}

// Mobile menu toggle functionality (if needed for mobile nav)
let mobileMenuInitialized = false;
function initMobileMenu() {
    if (mobileMenuInitialized) {
        return;
    }
    mobileMenuInitialized = true;

    const navbar = document.querySelector('.navbar');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!navbar || !mobileNavToggle) {
        return;
    }

    mobileNavToggle.addEventListener('click', function() {
        const isOpen = navbar.classList.toggle('nav-open');
        this.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('nav-open');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to matching link
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    setActiveNavLink();
});

// Handle window resize
window.addEventListener('resize', function() {
    const navbar = document.querySelector('.navbar');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (navbar && window.innerWidth > 768) {
        navbar.classList.remove('nav-open');
        if (mobileNavToggle) {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all service cards and review cards
document.querySelectorAll('.service-card, .review-card, .feature').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
