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
      { nombre: "Historia Económica", estado: "pronto" },
      { nombre: "Inferencia Estadística", estado: "pronto" },
      { nombre: "Inferencia Estadística (LE)", estado: "pronto" },
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
      { nombre: "Historia del Pensamiento Económico", estado: "pronto" },
      { nombre: "Investigación de Mercado", estado: "pronto" },
      { nombre: "Sociología Económica", estado: "pronto" },
      { nombre: "Toma de Decisiones", estado: "pronto" }
    ]
  }
];
