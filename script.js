// Simple JavaScript for enhanced user experience
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any internal links (if added in the future)
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

    // Add fade-in animation on scroll for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and features
    document.querySelectorAll('.info-card, .feature, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // Add hover effect for social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    });

    // Console message for developers
    console.log('%cCask & Pour Event Website', 'font-size: 20px; font-weight: bold; color: #8b4513;');
    console.log('%cBuilt for Cloudflare Pages deployment', 'font-size: 12px; color: #666;');
});
