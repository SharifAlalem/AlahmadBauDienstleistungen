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
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    
    // Add mobile menu button if needed
    const navbar = document.querySelector('.navbar');
    
    if (window.innerWidth <= 768) {
        // Mobile-specific functionality can be added here
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Add active class to current nav link
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage.split('/').pop()) {
            link.classList.add('active');
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    initMobileMenu();
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
