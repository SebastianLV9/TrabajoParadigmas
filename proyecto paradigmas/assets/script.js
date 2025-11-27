let cursoActual = 0;
let nombreCursoActual = "";
let semanaActual = 0;

const materialesPorCurso = {
    1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Cálculo Integral
    2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Electrónica Digital
    3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Procesos de Innovación
    4: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Bases de Datos I
    5: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Paradigmas de Programación
    6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // Estructuras Discretas I
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

        const textoMateriales = cantidadMateriales > 0 ? cantidadMateriales + " material" + (cantidadMateriales > 1 ? "es" : "") : "Sin materiales";
        
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
                <button class="btn-descargar" onclick="descargar('Introducción a Paradigmas')">Descargar PDF</button>
            </div>
            <div class="material">
                <span class="tipo-material">Taller</span>
                <h4>Laboratorio 1 - Resolución Completa</h4>
                <p><strong>Tema:</strong> Evaluación Peso Ideal</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Estudiante Espinoza</p>
                <button class="btn-descargar" onclick="descargar('Laboratorio 1 Resuelto')">Descargar PDF</button>
            </div>
        `;
    } else if (cursoId == 5 && semana == 2) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Introducción a C ++</h4>
                <p><strong>Tema:</strong> Fundamentos de C++</p>
                <p><strong>Fecha:</strong> Semana 2 | <strong>Subido por:</strong> Prof. Deisy</p>
                <button class="btn-descargar" onclick="descargar('POO Apuntes')">Descargar PDF</button>
            </div>
        `;
    }
    
    else if (cursoId == 4 && semana == 1) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Introducción a Bases de Datos</h4>
                <p><strong>Tema:</strong> Arquitectura Cliente - Servidor </p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Prof. Ivan Perez</p>
                <button class="btn-descargar" onclick="descargar('Arquitectura Cliente - Servidor')">Descargar PDF</button>
            </div>
            <div class="material">
                <span class="tipo-material">Práctica</span>
                <h4>Práctica 1 - Instalación de DB Browser</h4>
                <p><strong>Tema:</strong> Arquitectura Cliente - Servidor</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Estudiante Layme</p>
                <button class="btn-descargar" onclick="descargar('Práctica 1')">Descargar PDF</button>
            </div>
        `;
    }
    
    else if (cursoId == 1 && semana == 1) {
        lista.innerHTML = `
            <h3> Materiales Disponibles</h3>
            <div class="material">
                <span class="tipo-material">Apuntes</span>
                <h4>Integrales Indefinidas</h4>
                <p><strong>Tema:</strong> Derivadas y Antiderivadas</p>
                <p><strong>Fecha:</strong> Semana 1 | <strong>Subido por:</strong> Prof. Jhonatan</p>
                <button class="btn-descargar" onclick="descargar('Integrales Indefinidas')">Descargar PDF</button>
            </div>
        `;
    }
    
    else if (cursoId == 2) {
        lista.innerHTML = `
            <p class="mensaje-vacio"> Aún no hay materiales para esta semana.<br>Los materiales se publican después de cada clase.</p>
        `;
    }
    else {
        lista.innerHTML = `
            <p class="mensaje-vacio"> Aún no hay materiales para esta semana.<br>Los materiales se publican después de cada clase.</p>
        `;
    }
}

function descargar(titulo) {
    alert(" Descargando: " + titulo + "\n\n");
}