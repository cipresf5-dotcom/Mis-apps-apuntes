# mis-apps

Repositorio único donde vivo publicando mis apps de estudio/uso personal. Cada
app tiene su propia carpeta y su propio servicio en `render.yaml`, todas
desplegadas desde este mismo repositorio en Render.

## Apps

| Carpeta | Qué es | URL (una vez publicada) |
|---|---|---|
| [`finanzas-publicas/`](finanzas-publicas/) | App de estudio de Finanzas Públicas (UNNE, 3er año) | `https://finanzas-publicas-estudio.onrender.com` |

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
