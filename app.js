import { listar, guardar } from "./store.js";
import { RECETAS_DE_EJEMPLO } from "./ejemplos.js";

// Punto de entrada. Cada vista (listado, detalle, formulario) se pinta dentro de <main id="app">.
const app = document.getElementById("app");

// Crea un elemento con atributos e hijos. Los textos van siempre como nodos de texto, nunca como HTML.
function el(etiqueta, atributos = {}, ...hijos) {
  const nodo = document.createElement(etiqueta);
  for (const [nombre, valor] of Object.entries(atributos)) {
    if (nombre.startsWith("on")) nodo.addEventListener(nombre.slice(2), valor);
    else nodo.setAttribute(nombre, valor);
  }
  nodo.append(...hijos);
  return nodo;
}

function plural(n, singular, pluralTexto) {
  return `${n} ${n === 1 ? singular : pluralTexto}`;
}

function tarjeta(receta) {
  return el(
    "li",
    {},
    el(
      "article",
      { class: "tarjeta" },
      el("h2", { class: "tarjeta__titulo" }, el("a", { href: `#/receta/${receta.id}` }, receta.titulo)),
      el(
        "p",
        { class: "tarjeta__meta" },
        `${receta.minutos} min · ${plural(receta.raciones, "ración", "raciones")}`,
      ),
    ),
  );
}

function vistaVacia() {
  return el(
    "section",
    { class: "vacio" },
    el("h2", {}, "Todavía no hay recetas"),
    el("p", {}, "Guarda tu primera receta para tenerla siempre a mano."),
    el(
      "div",
      { class: "vacio__acciones" },
      el("a", { class: "boton boton--principal", href: "#/nueva" }, "Crear la primera receta"),
      el(
        "button",
        {
          class: "boton",
          type: "button",
          onclick: () => {
            RECETAS_DE_EJEMPLO.forEach(guardar);
            render();
          },
        },
        "Cargar recetas de ejemplo",
      ),
    ),
  );
}

function vistaListado() {
  // store añade las recetas nuevas al final. Invertimos antes de ordenar para que, si dos
  // recetas tienen la misma creadaEn (guardadas en el mismo milisegundo), gane la última guardada.
  const recetas = [...listar()].reverse().sort((a, b) => b.creadaEn.localeCompare(a.creadaEn));
  if (recetas.length === 0) return vistaVacia();

  return el(
    "section",
    {},
    el(
      "div",
      { class: "listado__cabecera" },
      el("h2", {}, plural(recetas.length, "receta", "recetas")),
      el("a", { class: "boton boton--principal", href: "#/nueva" }, "Nueva receta"),
    ),
    el("ul", { class: "listado" }, ...recetas.map(tarjeta)),
  );
}

// Vistas que llegan en otros issues del MVP.
function vistaPendiente(texto) {
  return el(
    "section",
    { class: "vacio" },
    el("h2", {}, "Próximamente"),
    el("p", {}, texto),
    el("a", { class: "boton", href: "#/" }, "Volver al listado"),
  );
}

function render() {
  const ruta = location.hash;
  let vista;
  if (ruta === "#/nueva") vista = vistaPendiente("El formulario para crear recetas está en camino.");
  else if (ruta.startsWith("#/receta/")) vista = vistaPendiente("La vista de detalle está en camino.");
  else vista = vistaListado();
  app.replaceChildren(vista);
}

window.addEventListener("hashchange", render);
render();
