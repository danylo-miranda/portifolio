// Exemplo: Adicionar um efeito de rolagem suave ao clicar nos links da navegação
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click',   
 (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior:   
 'smooth' });
  });
});