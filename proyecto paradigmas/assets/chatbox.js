let historialMensajes = [];
const respuestasBot = {
    "¿cómo funciona la plataforma?": 
        "UPCH Study es muy fácil de usar:<br><br>1️. Selecciona tu curso<br>2️. Elige la semana<br>3️. Descarga o visualiza los materiales<br><br>¡Así de simple!",

    "¿cómo puedo compartir materiales?":
        "Para compartir tus materiales:<br><br>• Envíanos un email a sebastian.layme@upch.pe<br>• Contáctanos por WhatsApp<br>• Usa el formulario de contacto<br><br>¡Agradecemos tu colaboración!",

    "¿qué cursos están disponibles?":
        "Actualmente tenemos materiales de:<br><br>• Cálculo Integral<br>• Bases de Datos I<br>• Paradigmas de Programación<br>• Electrónica Digital<br>• Procesos de Innovación<br>• Estructuras Discretas I<br><br>¡Y seguimos creciendo!",

    "contactar con soporte":
        "Puedes contactarnos por:<br><br>Email: upchstudy@cayetano.edu.pe<br>WhatsApp: +51 971 974 011<br>Formulario: sección Contacto<br><br>¡Respondemos en 24-48 horas!",

    "default":
        "Entiendo tu consulta.<br><br>• Usa las opciones rápidas<br>• Visita la sección de Contacto<br>• Explora la plataforma<br><br>¿En qué más puedo ayudarte?"
};

document.addEventListener('DOMContentLoaded', () => {
    cargarHistorial();
    console.log("Chatbox UPCH Study iniciado");
});

function enviarConEnter(event) {
    if (event.key === 'Enter') enviarMensaje();
}

function enviarMensaje() {
    const input = document.getElementById("input-mensaje");
    const texto = input.value.trim();
    if (!texto) return;

    agregarMensajeUsuario(texto);
    input.value = "";

    mostrarEscribiendo();

    setTimeout(() => {
        quitarEscribiendo();
        responderMensaje(texto);
    }, calcularTiempoRespuesta());
}

function enviarOpcion(texto) {
    ocultarOpcionesRapidas();
    agregarMensajeUsuario(texto);
    mostrarEscribiendo();

    setTimeout(() => {
        quitarEscribiendo();
        responderMensaje(texto);
    }, calcularTiempoRespuesta());
}


function agregarMensajeUsuario(texto) {
    crearBurbujaMensaje(texto, "usuario");
    guardarEnHistorial("usuario", texto);
}

function agregarMensajeBot(texto) {
    crearBurbujaMensaje(texto, "bot");
    guardarEnHistorial("bot", texto);
}

function crearBurbujaMensaje(texto, tipo) {
    const area = document.getElementById("area-mensajes");
    const hora = obtenerHoraActual();

    const div = document.createElement("div");
    div.className = `mensaje-${tipo}`;
    div.innerHTML = estructuraHTMLMensaje(texto, hora, tipo);

    area.appendChild(div);
    scrollToBottom();
}

function estructuraHTMLMensaje(texto, hora, tipo) {
    return (tipo === "usuario")
        ? `
        <div class="contenido-mensaje">
            <p>${texto}</p>
            <span class="hora-mensaje">${hora}</span>
        </div>
        <div class="avatar-mensaje"></div>
      `
        : `
        <div class="avatar-mensaje"></div>
        <div class="contenido-mensaje">
            <p>${texto.replace(/\n/g, "<br>")}</p>
            <span class="hora-mensaje">${hora}</span>
        </div>
      `;
}

function mostrarEscribiendo() {
    const area = document.getElementById("area-mensajes");

    const div = document.createElement("div");
    div.id = "escribiendo";
    div.className = "mensaje-bot escribiendo";
    div.innerHTML = `
        <div class="avatar-mensaje"></div>
        <div class="contenido-mensaje">
            <p>escribiendo...</p>
        </div>
    `;

    area.appendChild(div);
    scrollToBottom();
}

function quitarEscribiendo() {
    const e = document.getElementById("escribiendo");
    if (e) e.remove();
}


function responderMensaje(mensajeUsuario) {
    const mensajeLower = mensajeUsuario.toLowerCase();

    const claveDetectada = Object.keys(respuestasBot)
        .find(clave => mensajeLower.includes(clave));

    let respuesta = respuestasBot[claveDetectada] || respuestasBot.default;

    if (mensajeLower.includes("hola")) {
        respuesta = "¡Hola! Bienvenido a UPCH Study. ¿En qué puedo ayudarte hoy?";
    }
    if (mensajeLower.includes("gracias")) {
        respuesta = "¡De nada! Estoy aquí para ayudarte. ¿Necesitas algo más?";
    }
    if (mensajeLower.includes("adiós") || mensajeLower.includes("chau")) {
        respuesta = "¡Hasta pronto! Que tengas un excelente día.";
    }
    if (mensajeLower.includes("pdf") || mensajeLower.includes("descargar")) {
        respuesta = "Para descargar PDFs:<br><br>1. Ve a tu curso<br>2. Selecciona la semana<br>3. Haz clic en 'Ver' o 'Descargar'";
    }

    agregarMensajeBot(respuesta);
}

function ocultarOpcionesRapidas() {
    const opciones = document.querySelector(".opciones-rapidas");
    if (opciones) opciones.style.display = "none";
}

function scrollToBottom() {
    const area = document.getElementById("area-mensajes");
    area.scrollTop = area.scrollHeight;
}

function obtenerHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function calcularTiempoRespuesta() {
    return 1000 + Math.random() * 800;
}

function guardarEnHistorial(tipo, texto) {
    historialMensajes.push({
        tipo,
        texto,
        hora: obtenerHoraActual()
    });
}

function guardarHistorial() {
    localStorage.setItem("chatHistorial", JSON.stringify(historialMensajes));
}

function cargarHistorial() {
    const data = localStorage.getItem("chatHistorial");
    historialMensajes = data ? JSON.parse(data) : [];
}

function cerrarChatbox() {
    guardarHistorial();
    window.close();
}
