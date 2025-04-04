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

document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            
            // Identificar o destino do link
            const targetHref = link.getAttribute("href");

            if (targetHref === "index.html" || targetHref === "#") {
                // Scroll para o topo da página
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // Atualiza o hash na URL
                history.pushState(null, "", "index.html");
            } else {
                // Scroll suave para a seção
                const targetId = targetHref.substring(1); // Remove o "#"
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth", // Suaviza o movimento
                        block: "start"     // Rola até o topo da seção
                    });

                    // Atualiza o hash na URL
                    history.pushState(null, "", `#${targetId}`);
                }
            }
        });
    });
});