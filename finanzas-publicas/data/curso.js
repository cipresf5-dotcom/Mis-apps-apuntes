/* Estructura global del curso. Cada archivo u01.js ... u11.js
   agrega su unidad a window.CURSO.unidades */
window.CURSO = window.CURSO || { unidades: [] };

/* Fecha y hora de la Ãºltima actualizaciÃ³n publicada.
   El script sync-finanzas-publicas.ps1 reescribe esta lÃ­nea en cada deploy. */
window.CURSO.actualizado = "10/09/2026 14:51";
