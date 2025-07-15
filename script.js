let creditos = 0;
const aprobados = new Set();

const ramos = [
  { id: 1, nombre: "Física I", creditos: 5, abre: [2], semestre: 1 },
  { id: 2, nombre: "Física II", creditos: 5, requiere: [1], abre: [13], semestre: 2 },
  { id: 3, nombre: "Álgebra I", creditos: 5, abre: [4], semestre: 1 },
  { id: 4, nombre: "Álgebra II", creditos: 5, requiere: [3], abre: [7,8,25], semestre: 2 },
  { id: 5, nombre: "Cálculo I", creditos: 5, abre: [6], semestre: 1 },
  { id: 6, nombre: "Cálculo II", creditos: 5, requiere: [5], abre: [7,8,13,25], semestre: 2 },
  { id: 7, nombre: "Cálculo III", creditos: 5, requiere: [4,6], abre: [19,20,21], semestre: 3 },
  { id: 8, nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 4, requiere: [4,6], abre: [20,22,21], semestre: 3 },
  { id: 9, nombre: "Estadística y Probabilidades", creditos: 4, requiere: [4,6], abre: [28,29], semestre: 3 },
  { id: 10, nombre: "Herramientas Computacionales en Ingeniería Civil", creditos: 4, abre: [14], semestre: 2 },
  { id: 11, nombre: "Introducción a la Ingeniería Civil", creditos: 2, abre: [12], semestre: 1 },
  { id: 12, nombre: "Introducción a la Innovación en Ingeniería", creditos: 2, requiere: [11], abre: [], semestre: 2 },
  { id: 13, nombre: "Mecánica", creditos: 4, requiere: [2,6], abre: [18,21], semestre: 3 },
  { id: 14, nombre: "Dibujo en Ingeniería Civil", creditos: 2, requiere: [10], abre: [17], semestre: 2 },
  { id: 15, nombre: "Programación", creditos: 3, requiere: [1,2,3,4,5,6,10,11,12], abre: [19], semestre: 3 },
  { id: 16, nombre: "Ingeniería de la Construcción", creditos: 3, creditos_min: 34, abre: [22], semestre: 3 },
  { id: 17, nombre: "Geomática", creditos: 3, creditos_min: 42, abre: [30], semestre: 4 },
  { id: 18, nombre: "Estática", creditos: 3, requiere: [13], abre: [29,20], semestre: 4 },
  { id: 19, nombre: "Cálculo Numérico", creditos: 4, requiere: [7,15], abre: [31,32,33], semestre: 4 },
  { id: 20, nombre: "Demanda en Obras de Infraestructura", creditos: 2, requiere: [9,18], abre: [34], semestre: 5 },
  { id: 21, nombre: "Mecánica de sólidos", creditos: 4, requiere: [8,18], abre: [35,36], semestre: 5 },
  { id: 22, nombre: "Proyecto de Construcción Sustentable", creditos: 2, requiere: [16], abre: [], semestre: 4 },
  { id: 23, nombre: "Inglés Comunicativo 1 Nivel Principiante", creditos: 3, abre: [24], semestre: 3 },
  { id: 24, nombre: "Inglés Comunicativo 2 Nivel Elemental", creditos: 3, requiere: [23], abre: [25], semestre: 4 },
  { id: 25, nombre: "Inglés Comunicativo 3 Nivel Básico", creditos: 3, requiere: [24], abre: [26], semestre: 5 },
  { id: 26, nombre: "Inglés Comunicativo 4 Nivel Básico Alto", creditos: 3, requiere: [25], abre: [], semestre: 6 },
  { id: 27, nombre: "Economía", creditos: 4, creditos_min: 50, abre: [30], semestre: 5 },
  { id: 28, nombre: "Optimización en Ingeniería Civil", creditos: 3, creditos_min: 90, abre: [30], semestre: 5 },
  { id: 29, nombre: "Materiales de la Construcción", creditos: 3, requiere: [9], abre: [37], semestre: 5 },
  { id: 30, nombre: "Sistemas de Transporte", creditos: 3, requiere: [27,28], abre: [38], semestre: 6 },
  { id: 31, nombre: "Demanda en Obras de Infraestructura", creditos: 2, requiere: [20], abre: [39], semestre: 5 },
  { id: 32, nombre: "Práctica laboral", creditos: 2, abre: [], semestre: 5 },
  { id: 33, nombre: "Gestión de Empresas", creditos: 3, creditos_min: 80, abre: [], semestre: 6 },
  { id: 34, nombre: "Análisis Estructural", creditos: 3, requiere: [21,28], abre: [40,41], semestre: 6 },
  { id: 35, nombre: "Geotecnia", creditos: 3, requiere: [21,27], abre: [42,43], semestre: 6 },
  { id: 36, nombre: "Hidráulica", creditos: 3, requiere: [29], abre: [44,45], semestre: 6 },
  { id: 37, nombre: "Ingeniería del Hormigón", creditos: 3, requiere: [29], abre: [46], semestre: 6 },
  { id: 38, nombre: "Proyecto de Ingeniería Civil", creditos: 2, abre: [41], semestre: 6 },
  { id: 39, nombre: "Hormigón armado", creditos: 3, requiere: [34,37], abre: [47], semestre: 6 },
  { id: 40, nombre: "Ingeniería de Suelos", creditos: 3, requiere: [35], abre: [48], semestre: 7 },
  { id: 41, nombre: "Hidrología para Ingenieros", creditos: 3, requiere: [36], abre: [38], semestre: 7 },
  { id: 42, nombre: "Proyecto de Ingeniería Básica", creditos: 3, requiere: [34,38], abre: [49], semestre: 6 },
  { id: 43, nombre: "Innovación", creditos: 3, creditos_min: 100, abre: [50], semestre: 7 },
  { id: 44, nombre: "Infraestructura de Transporte", creditos: 3, requiere: [30], abre: [38], semestre: 8 },
  { id: 45, nombre: "Ingeniería Antisísmica", creditos: 3, abre: [38], semestre: 8 },
  { id: 46, nombre: "Fundaciones", creditos: 3, requiere: [40], abre: [38], semestre: 8 },
  { id: 47, nombre: "Ingeniería Ambiental", creditos: 3, creditos_min: 120, abre: [51], semestre: 8 },
  { id: 48, nombre: "Proyecto de Ingeniería de Detalle", creditos: 3, requiere: [42], abre: [38], semestre: 8 },
  { id: 49, nombre: "Complementaria 1", creditos: 2, abre: [], semestre: 8 },
  { id: 50, nombre: "Complementaria 2", creditos: 2, abre: [], semestre: 8 },
  { id: 51, nombre: "Proyecto de Ingeniería Civil I", creditos: 1, requiere: [48], abre: [52], semestre: 9 },
  { id: 52, nombre: "Proyecto de Ingeniería Civil II", creditos: 1, requiere: [51], abre: [], semestre: 9 },
  { id: 53, nombre: "Electivo 1", creditos: 5, abre: [], semestre: 9 },
  { id: 54, nombre: "Electivo 2", creditos: 5, abre: [], semestre: 9 },
  { id: 55, nombre: "Electivo 3", creditos: 5, abre: [], semestre: 9 },
  { id: 56, nombre: "Complementaria 3", creditos: 2, abre: [], semestre: 9 },
  { id: 57, nombre: "Complementaria 4", creditos: 2, abre: [], semestre: 9 },
  { id: 58, nombre: "Práctica Pre Profesional", creditos: 5, abre: [59], semestre: 9 },
  { id: 59, nombre: "Práctica Pre Profesional II", creditos: 4, requiere: [58], abre: [], semestre: 10 },
  { id: 60, nombre: "Formulación y evaluación de proyectos", creditos: 4, creditos_min: 120, abre: [], semestre: 10 },
  { id: 61, nombre: "Electivo 4", creditos: 3, abre: [], semestre: 10 },
  { id: 62, nombre: "Electivo 5", creditos: 4, abre: [], semestre: 10 },
  { id: 63, nombre: "Complementaria 5", creditos: 3, abre: [], semestre: 10 },
  { id: 64, nombre: "Complementaria 6", creditos: 3, abre: [], semestre: 10 },
  { id: 65, nombre: "Memoria de Título", creditos: 20, abre: [], semestre: 11 }
];

function crearRamos() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const semestresMap = new Map();
  ramos.forEach(ramo => {
    if (!semestresMap.has(ramo.semestre)) semestresMap.set(ramo.semestre, []);
    semestresMap.get(ramo.semestre).push(ramo);
  });

  semestresMap.forEach((ramosSemestre, semestre) => {
    const seccion = document.createElement("section");
    seccion.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    seccion.appendChild(titulo);

    const gridRamos = document.createElement("div");
    gridRamos.className = "gridRamos";

    ramosSemestre.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = `div-${ramo.id}`;

      const nombre = document.createElement("h3");
      nombre.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

      const boton = document.createElement("button");
      boton.textContent = "Se aprueba el ramo";
      boton.id = `btn-${ramo.id}`;
      boton.disabled = true;

      boton.addEventListener("click", () => aprobarRamo(ramo.id));

      div.appendChild(nombre);
      div.appendChild(boton);
      gridRamos.appendChild(div);
    });

    seccion.appendChild(gridRamos);
    contenedor.appendChild(seccion);
  });

  verificarDesbloqueos();
}

function aprobarRamo(id) {
  if (aprobados.has(id)) return;

  const ramo = ramos.find(r => r.id === id);
  aprobados.add(id);
  creditos += ramo.creditos;

  const boton = document.getElementById(`btn-${id}`);
  if (boton) boton.disabled = true;

  const div = document.getElementById(`div-${id}`);
  if (div) div.style.backgroundColor = "#ffcccc";

  document.getElementById("contador").textContent = creditos;

  verificarDesbloqueos();
}

function verificarDesbloqueos() {
  ramos.forEach(ramo => {
    const boton = document.getElementById(`btn-${ramo.id}`);
    if (!boton || aprobados.has(ramo.id)) return;

    let cumpleCursos = true;
    let cumpleCreditos = true;

    if (ramo.requiere) {
      cumpleCursos = ramo.requiere.every(req => aprobados.has(req));
    }

    if (ramo.creditos_min !== undefined) {
      cumpleCreditos = creditos >= ramo.creditos_min;
    }

    if (cumpleCursos && cumpleCreditos) {
      boton.disabled = false;
    }
  });
}

crearRamos();
