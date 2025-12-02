function abrirChatbox() {
    window.open('chatbox.html', 'Chatbox', 'width=400,height=600,resizable=yes,scrollbars=yes');
}

document.addEventListener('DOMContentLoaded', function() {
    const objetivos = document.querySelectorAll('.objetivo-item');
    
    objetivos.forEach((objetivo, index) => {
        objetivo.style.opacity = '0';
        objetivo.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            objetivo.style.transition = 'all 0.5s ease';
            objetivo.style.opacity = '1';
            objetivo.style.transform = 'scale(1)';
        }, index * 200);
    });
    
    objetivos.forEach(objetivo => {
        objetivo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        objetivo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
});
