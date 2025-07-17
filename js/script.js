document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav');
    
    if (menuMobile) {
        menuMobile.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuMobile.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuMobile.classList.remove('active');
                }
            }
        });
    });
    
    // Formulário de WhatsApp
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter os valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (!nome || !email || !telefone || !assunto || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Número de WhatsApp (substitua pelo número real)
            const whatsappNumber = '5511999999999'; // Formato: código do país + DDD + número
            
            // Criar a mensagem formatada
            let whatsappMessage = `*Contato via Site - Advocacia Excelência*\n\n`;
            whatsappMessage += `*Nome:* ${nome}\n`;
            whatsappMessage += `*E-mail:* ${email}\n`;
            whatsappMessage += `*Telefone:* ${telefone}\n`;
            whatsappMessage += `*Assunto:* ${assunto}\n\n`;
            whatsappMessage += `*Mensagem:*\n${mensagem}`;
            
            // Codificar a mensagem para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Criar o link do WhatsApp
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir o WhatsApp em uma nova janela
            window.open(whatsappLink, '_blank');
            
            // Limpar o formulário
            whatsappForm.reset();
        });
    }
    
    // Animação ao rolar a página
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('revealed');
            }
        });
    }
    
    // Adicionar classe 'revealed' ao carregar a página
    window.addEventListener('load', revealOnScroll);
    
    // Adicionar classe 'revealed' ao rolar a página
    window.addEventListener('scroll', revealOnScroll);
});