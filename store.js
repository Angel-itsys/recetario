// Persistencia de recetas en localStorage.
//
// Forma de una receta:
// {
//   id: string,                  // UUID generado al crear
//   titulo: string,
//   ingredientes: [{ cantidad: number | null, unidad: string, nombre: string }],
//   pasos: string[],
//   minutos: number,
//   raciones: number,
//   creadaEn: string,            // ISO 8601 en UTC, p. ej. "2026-09-26T03:20:56.452Z"
// }

const CLAVE = "recetario:recetas:v1";

function leer() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE));
    return Array.isArray(datos) ? datos : [];
  } catch {
    // JSON corrupto o localStorage no disponible: arrancamos con la lista vacía.
    return [];
  }
}

function escribir(recetas) {
  localStorage.setItem(CLAVE, JSON.stringify(recetas));
}

export function listar() {
  return leer();
}

export function obtener(id) {
  return leer().find((receta) => receta.id === id) ?? null;
}

// Crea la receta si no tiene id; si ya existe, la reemplaza conservando su id y creadaEn.
export function guardar(receta) {
  const recetas = leer();
  const indice = receta.id ? recetas.findIndex((r) => r.id === receta.id) : -1;

  if (indice === -1) {
    const nueva = { ...receta, id: crypto.randomUUID(), creadaEn: new Date().toISOString() };
    escribir([...recetas, nueva]);
    return nueva;
  }

  const actualizada = { ...receta, id: recetas[indice].id, creadaEn: recetas[indice].creadaEn };
  recetas[indice] = actualizada;
  escribir(recetas);
  return actualizada;
}

export function borrar(id) {
  const recetas = leer();
  const restantes = recetas.filter((receta) => receta.id !== id);
  if (restantes.length === recetas.length) return false;
  escribir(restantes);
  return true;
}
