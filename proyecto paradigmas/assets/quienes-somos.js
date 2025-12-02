function abrirChatbox() {
    window.open('chatbox.html', 'Chatbox', 'width=400,height=600,resizable=yes,scrollbars=yes');
}

document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.seccion-sobre');
    
    secciones.forEach((seccion, index) => {
        setTimeout(() => {
            seccion.style.opacity = '0';
            seccion.style.transform = 'translateY(20px)';
            seccion.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                seccion.style.opacity = '1';
                seccion.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
    
});

