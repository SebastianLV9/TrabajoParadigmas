function abrirChatbox() {
    window.open('chatbox.html', 'Chatbox', 'width=400,height=600,resizable=yes,scrollbars=yes');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            enviarFormulario();
        });
    }
    
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validarCampo(this);
        });
    });
});

function validarCampo(campo) {
    if (campo.hasAttribute('required') && campo.value.trim() === '') {
        campo.style.borderColor = '#ff4444';
        return false;
    } else {
        campo.style.borderColor = '#ddd';
        return true;
    }
}

function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const campos = [
        document.getElementById('nombre'),
        document.getElementById('email'),
        document.getElementById('asunto'),
        document.getElementById('mensaje')
    ];
    
    let todosValidos = true;
    campos.forEach(campo => {
        if (!validarCampo(campo)) {
            todosValidos = false;
        }
    });
    
    if (!todosValidos) {
        alert(' Por favor completa todos los campos requeridos.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(' Por favor ingresa un email válido.');
        document.getElementById('email').style.borderColor = '#ff4444';
        return;
    }
    
    console.log('Datos del formulario:', {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje,
        fecha: new Date().toISOString()
    });
    
    document.getElementById('mensaje-exito').style.display = 'block';
    document.getElementById('form-contacto').style.display = 'none';
    
    guardarMensaje({
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje,
        fecha: new Date().toISOString()
    });
    
    setTimeout(() => {
        document.getElementById('form-contacto').reset();
        document.getElementById('mensaje-exito').style.display = 'none';
        document.getElementById('form-contacto').style.display = 'block';
    }, 3000);
}

function guardarMensaje(datos) {
    let mensajes = JSON.parse(localStorage.getItem('mensajesContacto') || '[]');
    
    mensajes.push(datos);
    
    localStorage.setItem('mensajesContacto', JSON.stringify(mensajes));
    
    console.log('Mensaje guardado exitosamente');
}