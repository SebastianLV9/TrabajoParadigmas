let cursoActual = 0;
let nombreCursoActual = "";
let semanaActual = 0;

const materialesPorCurso = {
    1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    4: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    5: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const materialesDetalle = {
    "5-1-1": {
        titulo: "Introducción a Paradigmas de Programación",
        tipo: "Apuntes",
        tema: "Conceptos básicos, tipos de paradigmas",
        fecha: "Semana 1",
        autor: "Prof. Deisy",
        archivo: "introduccion-paradigmas.pdf"
    },
    "5-1-2": {
        titulo: "Laboratorio 1 - Resolución Completa",
        tipo: "Taller",
        tema: "Evaluación Peso Ideal",
        fecha: "Semana 1",
        autor: "Estudiante Espinoza",
        archivo: "laboratorio-1-resuelto.pdf"
    },
    "5-2-1": {
        titulo: "Introducción a C++",
        tipo: "Apuntes",
        tema: "Fundamentos de C++",
        fecha: "Semana 2",
        autor: "Prof. Deisy",
        archivo: "introduccion-cpp.pdf"
    },
    "4-1-1": {
        titulo: "Introducción a Bases de Datos",
        tipo: "Apuntes",
        tema: "Arquitectura Cliente - Servidor",
        fecha: "Semana 1",
        autor: "Prof. Ivan Perez",
        archivo: "arquitectura-cliente-servidor.pdf"
    },
    "4-1-2": {
        titulo: "Práctica 1 - Instalación de DB Browser",
        tipo: "Práctica",
        tema: "Arquitectura Cliente - Servidor",
        fecha: "Semana 1",
        autor: "Estudiante Layme",
        archivo: "practica-1.pdf"
    },
    "1-1-1": {
        titulo: "Integrales Indefinidas",
        tipo: "Apuntes",
        tema: "Derivadas y Antiderivadas",
        fecha: "Semana 1",
        autor: "Prof. Jhonatan",
        archivo: "integrales-indefinidas.pdf"
    }
};

function volverACursos() {
    document.getElementById("pantalla-cursos").className = "pantalla activa";
    document.getElementById("pantalla-semanas").className = "pantalla";
    document.getElementById("pantalla-materiales").className = "pantalla";
}

function irASemanas(cursoId, nombreCurso) {
    cursoActual = cursoId;
    nombreCursoActual = nombreCurso;

    document.getElementById("pantalla-cursos").className = "pantalla";
    document.getElementById("pantalla-semanas").className = "pantalla activa";

    document.getElementById("titulo-curso").textContent = nombreCurso;

    mostrarSemanas();
}

function mostrarSemanas() {
    const grid = document.getElementById("lista-semanas");
    grid.innerHTML = "";

    const materialesDisponibles = materialesPorCurso[cursoActual];

    for (let i = 1; i <= 16; i++) {
        const cantidadMateriales = materialesDisponibles[i - 1];  

        const icono = cantidadMateriales > 0 ? 
        '<img src="assets/images/check.png" class="icono-imagen" alt="Disponible">' :
        '<img src="assets/images/reloj.png" class="icono-imagen" alt="Pendiente">';

        const textoMateriales = cantidadMateriales > 0 ? 
            cantidadMateriales + " material" + (cantidadMateriales > 1 ? "es" : "") : 
            "Sin materiales";
        
        grid.innerHTML += `
            <div class="item-semana" onclick="irAMateriales(${i})">
                <div class="info-semana">
                    <h4>Semana ${i}</h4>
                </div>
                <div class="estado-semana">
                    <span class="badge-materiales">${textoMateriales}</span>
                    <span class="icono-estado">${icono}</span>
                </div>
            </div>
        `;
    }
}

function volverASemanas() {
    document.getElementById("pantalla-semanas").className = "pantalla activa";
    document.getElementById("pantalla-materiales").className = "pantalla";
}

function irAMateriales(semana) {
    semanaActual = semana;

    document.getElementById("pantalla-semanas").className = "pantalla";
    document.getElementById("pantalla-materiales").className = "pantalla activa";

    document.getElementById("titulo-semana").textContent = nombreCursoActual + " - Semana " + semana;

    mostrarMateriales(cursoActual, semana);
}

function mostrarMateriales(cursoId, semana) {
    const lista = document.getElementById("lista-materiales");
    lista.innerHTML = "";

    if (cursoId == 5 && semana == 1) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Introducción a Paradigmas de Programación</h4>
                <p><strong>Tema:</strong> Conceptos básicos, tipos de paradigmas</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Prof. Deisy</p>
                <button class="btn-descargar" onclick="verPDF('5-1-1')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('5-1-1')">⬇ Descargar</button>
            </div>
            <div class="material">
                <span class="tipo-material">Taller</span>
                <h4>Laboratorio 1 - Resolución Completa</h4>
                <p><strong>Tema:</strong> Evaluación Peso Ideal</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Estudiante Espinoza</p>
                <button class="btn-descargar" onclick="verPDF('5-1-2')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('5-1-2')"> Descargar</button>
            </div>
        `;
    } else if (cursoId == 5 && semana == 2) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Introducción a C++</h4>
                <p><strong>Tema:</strong> Fundamentos de C++</p>
                <p><strong>Fecha:</strong> Semana 2 | <strong>Subido por:</strong> Prof. Deisy</p>
                <button class="btn-descargar" onclick="verPDF('5-2-1')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('5-2-1')"> Descargar</button>
            </div>
        `;
    } else if (cursoId == 4 && semana == 1) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Introducción a Bases de Datos</h4>
                <p><strong>Tema:</strong> Arquitectura Cliente - Servidor</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Prof. Ivan Perez</p>
                <button class="btn-descargar" onclick="verPDF('4-1-1')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('4-1-1')"> Descargar</button>
            </div>
            <div class="material">
                <span class="tipo-material">Práctica</span>
                <h4>Práctica 1 - Instalación de DB Browser</h4>
                <p><strong>Tema:</strong> Arquitectura Cliente - Servidor</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Estudiante Layme</p>
                <button class="btn-descargar" onclick="verPDF('4-1-2')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('4-1-2')"> Descargar</button>
            </div>
        `;
    } else if (cursoId == 1 && semana == 1) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Integrales Indefinidas</h4>
                <p><strong>Tema:</strong> Derivadas y Antiderivadas</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Prof. Jhonatan</p>
                <button class="btn-descargar" onclick="verPDF('1-1-1')"> Ver</button>
                <button class="btn-descargar" onclick="descargar('1-1-1')"> Descargar</button>
            </div>
        `;
    } else {
        lista.innerHTML = `
            <p class="mensaje-vacio"> Aún no hay materiales para esta semana.<br>Los materiales se publican después de cada clase.</p>
        `;
    }
}

function verPDF(materialId) {
    const material = materialesDetalle[materialId];
    if (material) {
        localStorage.setItem('materialActual', JSON.stringify({
            id: materialId,
            ...material,
            curso: nombreCursoActual,
            semana: semanaActual
        }));
        window.open('visor-pdf.html', '_blank');
    }
}

function descargar(materialId) {
    const material = materialesDetalle[materialId];
    if (material) {
        alert(" Descargando: " + material.titulo + "\n\nArchivo: " + material.archivo);
    } else {
        alert(" Descargando material...");
    }
}

function abrirChatbox() {
    window.open('chatbox.html', 'Chatbox', 'width=400,height=600,resizable=yes,scrollbars=yes');
}