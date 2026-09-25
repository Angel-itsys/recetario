# Recetario

App web para guardar, buscar y organizar recetas. HTML, CSS y JavaScript sin frameworks; los datos viven en el navegador (`localStorage`).

Proyecto de práctica para aprender Linear: cada cambio sale de un issue del proyecto **Recetario** (equipo `WOR`) y se enlaza mediante el ID del issue en la rama y en el PR.

## Abrirla en local

`app.js` es un módulo ES, y los navegadores no cargan módulos desde `file://`. Sírvela con cualquier servidor estático, sin paso de build:

```sh
python3 -m http.server 8000
```

y abre http://localhost:8000.
