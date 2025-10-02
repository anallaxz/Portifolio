document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da navegação que começam com '#'

    // --- LÓGICA DE SCROLL SUAVE ---

    // Seleciona todos os links de navegação que começam com '#'
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

    // --- LÓGICA DO MODO NOTURNO ---

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Adiciona o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Salva a preferência do usuário no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Aplica o tema quando a página é carregada
    applyTheme();
});