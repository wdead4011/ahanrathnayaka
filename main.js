// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Cursor Effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Links hover effect
const links = document.querySelectorAll('a, button, .btn, .service-card, .portfolio-item, .blog-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input').value;
        console.log('Newsletter subscription:', email);
        
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Ripple effect for buttons
const buttons = document.querySelectorAll('.btn, .service-card, .portfolio-item, .blog-card');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        // Position the ripple
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Add ripple to button
        this.appendChild(ripple);
        
        // Remove ripple after animation completes
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Load portfolio items dynamically
const portfolioGrid = document.querySelector('.portfolio-grid');
if (portfolioGrid) {
    const portfolioData = [
        {
            title: "කොරියානු ඉතිහාසය පිළිබඳ අධ්‍යයනය",
            category: "history",
            image: "image-asset.jpg",
            description: "ජොසොන් රාජවංශ සමයේ සමාජය හා සංස්කෘතිය පිළිබඳ ගවේෂණාත්මක පර්යේෂණය."
        },
        {
            title: "හංගුල් භාෂා ව්‍යාකරණය",
            category: "language",
            image: "images/portfolio2.jpg",
            description: "කොරියානු භාෂාවේ ව්‍යාකරණ ගොඩනැගීම සහ විකාසනය පිළිබඳ අධ්‍යයනය."
        },
        {
            title: "සංස්කෘතික ගවේෂණ",
            category: "culture",
            image: "images/portfolio3.jpg",
            description: "කොරියානු සහ ශ්‍රී ලාංකික සංස්කෘතික සමානකම් සහ වෙනස්කම් පිළිබඳ අධ්‍යයනය."
        },
        {
            title: "ඓතිහාසික ලේඛන පරිවර්තන",
            category: "history",
            image: "images/portfolio4.jpg",
            description: "පැරණි කොරියානු ඓතිහාසික ලේඛන සිංහලට පරිවර්තනය කිරීම."
        },
        {
            title: "කොරියානු භාෂා පාඨමාලා",
            category: "language",
            image: "images/portfolio5.jpg",
            description: "සිංහල භාෂාව කතා කරන අය සඳහා කොරියානු භාෂා පාඨමාලා වැඩසටහන."
        },
        {
            title: "සංස්කෘතික උළෙල",
            category: "culture",
            image: "images/portfolio6.jpg",
            description: "කොරියානු සංස්කෘතික උළෙල සංවිධානය කිරීම සහ සහභාගී වීම."
        },
        {
            title: "පර්යේෂණ පත්‍රිකා",
            category: "publications",
            image: "images/portfolio7.jpg",
            description: "කොරියානු ඉතිහාසය සහ සංස්කෘතිය පිළිබඳ පර්යේෂණ පත්‍රිකා ප්‍රකාශයට පත් කිරීම."
        },
        {
            title: "TOPIK සූදානම් වීම",
            category: "language",
            image: "images/portfolio8.jpg",
            description: "කොරියානු භාෂා ප්‍රවීණතා පරීක්ෂණය සඳහා සූදානම් වීමේ මාර්ගෝපදේශන."
        }
    ];

    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="#" class="btn secondary">තවත් කියවන්න</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Load blog posts dynamically
const blogGrid = document.querySelector('.blog-grid');
if (blogGrid) {
    const blogData = [
        {
            title: "කොරියානු ඉතිහාසයේ ගැඹුරු ගවේෂණය",
            date: "2023-06-15",
            category: "ඉතිහාසය",
            image: "images/blog1.jpg",
            excerpt: "කොරියානු ඉතිහාසයේ වැදගත්ම ඓතිහාසික අවස්ථා සහ ඒවායේ බලපෑම් පිළිබඳ විශ්ලේෂණාත්මක ලිපිය."
        },
        {
            title: "හංගුල්: ලෝකයේ විද්යාත්මකම අක්ෂර මාලාව",
            date: "2023-05-22",
            category: "භාෂාව",
            image: "images/blog2.jpg",
            excerpt: "කොරියානු අක්ෂර මාලාවේ ඓතිහාසික පසුබිම සහ එහි විශේෂතා පිළිබඳ ගවේෂණය."
        },
        {
            title: "කොරියානු-ශ්‍රී ලාංකික සංස්කෘතික සබඳතා",
            date: "2023-04-10",
            category: "සංස්කෘතිය",
            image: "images/blog3.jpg",
            excerpt: "කොරියාව සහ ශ්‍රී ලංකාව අතර ඓතිහාසික සහ සංස්කෘතික සබඳතා පිළිබඳ අධ්‍යයනය."
        }
    ];

    blogData.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card fade-in-up';
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-img">
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more-btn">තවත් කියවන්න <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Initialize animations after content is loaded
window.addEventListener('load', function() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
    });
    
    // Trigger animations
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});