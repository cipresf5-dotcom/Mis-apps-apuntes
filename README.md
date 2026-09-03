# mis-apps

Repositorio único donde vivo publicando mis apps de estudio/uso personal. Cada
app tiene su propia carpeta y su propio servicio en `render.yaml`, todas
desplegadas desde este mismo repositorio en Render.

## Apps

| Carpeta | Qué es | URL (una vez publicada) |
|---|---|---|
| [`portal/`](portal/) | Portal de inicio: elegís el año y ves sus materias | `https://mis-apuntes-portal.onrender.com` |
| [`finanzas-publicas/`](finanzas-publicas/) | Finanzas Públicas (3er año) | `https://finanzas-publicas-estudio.onrender.com` |
| [`inferencia-estadistica/`](inferencia-estadistica/) | Inferencia Estadística LE, 1º parcial (3er año) | `https://inferencia-estadistica-estudio.onrender.com` |
| [`historia-pensamiento-economico/`](historia-pensamiento-economico/) | Historia del Pensamiento Económico, 2º parcial (4to año) | `https://historia-pensamiento-economico-estudio.onrender.com` |
| [`sociologia-economica/`](sociologia-economica/) | Sociología Económica, Unidades 3–6 (4to año) | `https://sociologia-economica-estudio.onrender.com` |

El portal linkea a cada app publicada; las materias sin app propia aparecen
como «Próximamente». Para conectar una materia nueva: crear su carpeta acá,
sumarla a `render.yaml`, y agregar su entrada (`estado: "app"`, `url: "..."`)
en `portal/data/anios.js`.

## Cómo se actualiza el contenido

El contenido de `finanzas-publicas/` es una **copia sincronizada** de la app
de escritorio real, que sigue viviendo en
`Escritorio\3ro\Finanzas Publicas\App Finanzas Publicas\` (de ahí sale el
acceso directo y la versión celular). Para publicar cambios:

1. Se edita el contenido en la carpeta de escritorio, como siempre.
2. Se corre `scripts\sync-finanzas-publicas.ps1`, que copia los archivos
   actualizados a `finanzas-publicas\` y hace `git commit`.
3. `git push` sube el cambio a GitHub → Render redespliega solo.

## Agregar una app nueva

1. Crear su carpeta acá adentro (ej. `otra-app/`).
2. Sumar un bloque de servicio en `render.yaml` con su `rootDir`.
3. En Render, resincronizar el Blueprint (o crear el Static Site apuntando a
   esa carpeta).
