// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    gsap.from('.hero-content .subtitle', {
        duration: 1,
        x: -50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content .title', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content .description', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1.1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1.4,
        ease: 'power3.out'
    });
    
    gsap.from('.image-container', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.shape-1', {
        duration: 1,
        x: -50,
        y: -50,
        opacity: 0,
        delay: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.shape-2', {
        duration: 1,
        x: 50,
        y: 50,
        opacity: 0,
        delay: 1.2,
        ease: 'power3.out'
    });
    
    gsap.from('.shape-3', {
        duration: 1,
        x: 30,
        y: -30,
        opacity: 0,
        delay: 1.4,
        ease: 'power3.out'
    });
    
    // Scroll animations for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        const sectionSubtitle = section.querySelector('.section-subtitle');
        const divider = section.querySelector('.divider');
        
        if (sectionTitle) {
            gsap.from(sectionTitle, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }
        
        if (sectionSubtitle) {
            gsap.from(sectionSubtitle, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });
        }
        
        if (divider) {
            gsap.from(divider, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                scaleX: 0,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out'
            });
        }
    });
    
    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Portfolio items animation
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Blog cards animation
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.blog-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Contact form animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Footer animation
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Text animation effects
const animateText = function() {
    const textElements = document.querySelectorAll('[data-text-animation]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i] === ' ' ? '&nbsp;' : text[i];
            const span = document.createElement('span');
            span.innerHTML = char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`;
            element.appendChild(span);
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
};

window.addEventListener('load', animateText);