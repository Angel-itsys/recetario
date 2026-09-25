// Punto de entrada. Cada vista (listado, detalle, formulario) se pinta dentro de <main id="app">.
const app = document.getElementById("app");

function render() {
  app.replaceChildren();
}

render();
