// Menu hamburguer
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Gerenciamento de Cookies
function initializeAnalytics() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (cookiesAccepted === 'all') {
        // Inicializa o Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KFVBB2GZE2');
    }
}

// Typed.js com palavras-chave otimizadas
const typed = new Typed('#typed-text', {
    strings: [
        'Analista de Dados',
        'Especialista em E-commerce',
        'Business Intelligence',
        'Otimização SEO',
        'Gestão de Dados'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navegação suave
document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            
            const targetHref = link.getAttribute("href");

            if (targetHref === "index.html" || targetHref === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                history.pushState(null, "", "index.html");
            } else {
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                    history.pushState(null, "", `#${targetId}`);
                }
            }
        });
    });

    // Inicializa o Analytics após verificar os cookies
    initializeAnalytics();
});

// Função para rastrear eventos com verificação de consentimento
function trackEvent(eventName, eventParams = {}) {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (cookiesAccepted === 'all') {
        const sanitizedParams = {};
        for (const [key, value] of Object.entries(eventParams)) {
            sanitizedParams[key] = String(value).replace(/[<>]/g, '');
        }
        gtag('event', eventName, sanitizedParams);
    }
}