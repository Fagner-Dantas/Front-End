document.addEventListener('DOMContentLoaded', function() {
    // 1. Navegação Suave para as Seções de Viagem
    // Cria um menu de navegação dinamicamente
    const body = document.body;
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const sections = [
        { id: 'home', text: 'Home' },
        { id: 'natal', text: 'Natal/RN' },
        { id: 'joao-pessoa', text: 'João Pessoa/PB' },
        { id: 'maceio', text: 'Maceió/AL' },
        { id: 'aracaju', text: 'Aracaju/SE' }
    ];

    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.textContent = section.text;
        a.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            document.getElementById(section.id).scrollIntoView({
                behavior: 'smooth' // Rolagem suave
            });
        });
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    body.insertBefore(nav, body.firstChild.nextSibling); // Insere o nav logo abaixo do <h1>

    // 2. O efeito de "Leia Mais/Leia Menos" foi removido.
    // Todos os parágrafos aparecerão por completo agora.

    // 3. Efeito de Fade-in para Imagens ao Carregar (opcional, se quiser manter)
    // Se você não quiser o fade-in, pode remover todo este bloco também.
    const images = document.querySelectorAll('.viagem-secao img');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(image => {
        // A linha 'image.classList.add('hidden');' foi removida para que as imagens apareçam por padrão.
        imageObserver.observe(image);
    });

    // 4. Exemplo de Alerta Simples
    const welcomeButton = document.createElement('button');
    welcomeButton.textContent = 'Clique para uma mensagem!';
    welcomeButton.classList.add('btn');
    welcomeButton.style.marginTop = '20px';
    const firstParagraph = document.querySelector('body > p'); 
    if (firstParagraph) {
        firstParagraph.parentNode.insertBefore(welcomeButton, firstParagraph.nextSibling);
    }
    
    welcomeButton.addEventListener('click', function() {
        alert('Bem-vindo ao Diário de Viagens do Fagner Dantas! Explore suas aventuras!');
    });
});