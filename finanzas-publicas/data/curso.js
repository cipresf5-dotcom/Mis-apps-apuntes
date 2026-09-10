/* Estructura global del curso. Cada archivo u01.js ... u11.js
   agrega su unidad a window.CURSO.unidades */
window.CURSO = window.CURSO || { unidades: [] };

/* Fecha y hora de la última actualización publicada.
   El script sync-finanzas-publicas.ps1 reescribe esta línea en cada deploy. */
window.CURSO.actualizado = "10/09/2026 20:21";
