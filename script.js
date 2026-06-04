document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggling Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
    
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
        
        // Morph hamburger lines (optional visual feedback)
        const lineTop = document.getElementById('line-top');
        const lineMid = document.getElementById('line-mid');
        const lineBot = document.getElementById('line-bot');
        
        if (mobileMenu.classList.contains('open')) {
            lineTop.setAttribute('y1', '6');
            lineTop.setAttribute('y2', '18');
            lineTop.setAttribute('x1', '6');
            lineTop.setAttribute('x2', '18');
            
            lineBot.setAttribute('y1', '18');
            lineBot.setAttribute('y2', '6');
            lineBot.setAttribute('x1', '6');
            lineBot.setAttribute('x2', '18');
            
            lineMid.style.opacity = '0';
        } else {
            lineTop.setAttribute('y1', '6');
            lineTop.setAttribute('y2', '6');
            lineTop.setAttribute('x1', '3');
            lineTop.setAttribute('x2', '21');
            
            lineBot.setAttribute('y1', '18');
            lineBot.setAttribute('y2', '18');
            lineBot.setAttribute('x1', '3');
            lineBot.setAttribute('x2', '21');
            
            lineMid.style.opacity = '1';
        }
    }
    
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    // Print Resume Event Listeners
    const printButtons = [
        document.getElementById('print-resume'),
        document.getElementById('mobile-print-resume'),
        document.getElementById('btn-print-hero')
    ];
    
    printButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                window.print();
            });
        }
    });
    
    // Quick validation and response for Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Standard form submission is intercepted in HTML inline onsubmit,
            // but we can add secondary checks or effects here if needed.
        });
    }
});
