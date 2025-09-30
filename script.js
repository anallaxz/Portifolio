document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da navegação que começam com '#'
    const links = document.querySelectorAll('a[href^="#"]');

    // Itera sobre os links e adiciona o evento de clique
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do clique

            // Obtém o ID da seção de destino (ex: #projetos)
            const targetId = this.getAttribute('href');
            
            // Encontra o elemento de destino
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola suavemente até a seção de destino
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // -50 para compensar o header fixo (se houver)
                    behavior: 'smooth'
                });
            }
        });
    });
});