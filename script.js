
var typed = new Typed('#typed-text', {
    strings: ['Dev Python', 'GenAI Developer', 'Data Analyst'],
    typeSpeed: 50,
    backSpeed: 50,
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