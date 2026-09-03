/* Datos del portal: años de la carrera y sus materias.
   Cada materia tiene estado "app" (con app propia, con url) o "pronto"
   (todavía sin app). Para agregar un año o materia nueva, sumar acá. */
window.PORTAL = window.PORTAL || { anios: [] };
window.PORTAL.anios = [
  {
    id: "3ro",
    numero: "3º",
    titulo: "Tercer año",
    materias: [
      { nombre: "Cuentas Nacionales", estado: "pronto" },
      { nombre: "Finanzas Públicas", estado: "app", url: "https://finanzas-publicas-estudio.onrender.com", desc: "Teoría por unidad, prácticos y parciales" },
      { nombre: "Historia Económica", estado: "app", url: "https://historia-economica-estudio.onrender.com", desc: "Cuaderno de estudio por unidades" },
      { nombre: "Inferencia Estadística", estado: "pronto" },
      { nombre: "Inferencia Estadística (LE)", estado: "app", url: "https://inferencia-estadistica-estudio.onrender.com", desc: "Teoría del 1º parcial con fórmulas y banco de preguntas" },
      { nombre: "Marketing", estado: "pronto" },
      { nombre: "Matemática Financiera", estado: "pronto" },
      { nombre: "Microeconomía Avanzada", estado: "pronto" },
      { nombre: "Sistema Administrativo", estado: "pronto" }
    ]
  },
  {
    id: "4to",
    numero: "4º",
    titulo: "Cuarto año",
    materias: [
      { nombre: "Administración de Operaciones", estado: "pronto" },
      { nombre: "Administración del Talento Humano", estado: "pronto" },
      { nombre: "Administración Financiera", estado: "pronto" },
      { nombre: "Administración Tributaria", estado: "pronto" },
      { nombre: "Econometría", estado: "pronto" },
      { nombre: "Economía Internacional", estado: "pronto" },
      { nombre: "Historia del Pensamiento Económico", estado: "app", url: "https://historia-pensamiento-economico-estudio.onrender.com", desc: "App de estudio del 2º parcial" },
      { nombre: "Investigación de Mercado", estado: "pronto" },
      { nombre: "Sociología Económica", estado: "app", url: "https://sociologia-economica-estudio.onrender.com", desc: "App de estudio, Unidades 3 a 6" },
      { nombre: "Toma de Decisiones", estado: "pronto" }
    ]
  }
];
