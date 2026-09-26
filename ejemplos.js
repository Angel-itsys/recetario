// Recetas para probar la app sin tener que escribirlas a mano.
export const RECETAS_DE_EJEMPLO = [
  {
    titulo: "Gazpacho andaluz",
    ingredientes: [
      { cantidad: 1, unidad: "kg", nombre: "tomate maduro" },
      { cantidad: 1, unidad: "ud", nombre: "pimiento verde" },
      { cantidad: 0.5, unidad: "ud", nombre: "pepino" },
      { cantidad: 1, unidad: "diente", nombre: "ajo" },
      { cantidad: 50, unidad: "ml", nombre: "aceite de oliva" },
      { cantidad: null, unidad: "", nombre: "sal al gusto" },
    ],
    pasos: ["Trocear las verduras.", "Triturar todo con el aceite y la sal.", "Colar y enfriar al menos 1 hora."],
    minutos: 15,
    raciones: 4,
  },
  {
    titulo: "Tortilla de patatas",
    ingredientes: [
      { cantidad: 600, unidad: "g", nombre: "patata" },
      { cantidad: 6, unidad: "ud", nombre: "huevo" },
      { cantidad: 1, unidad: "ud", nombre: "cebolla" },
      { cantidad: 200, unidad: "ml", nombre: "aceite de oliva" },
    ],
    pasos: ["Pochar la patata y la cebolla en el aceite.", "Mezclar con el huevo batido.", "Cuajar por ambos lados."],
    minutos: 40,
    raciones: 4,
  },
  {
    titulo: "Tortitas de avena",
    ingredientes: [
      { cantidad: 100, unidad: "g", nombre: "copos de avena" },
      { cantidad: 1, unidad: "ud", nombre: "plátano" },
      { cantidad: 2, unidad: "ud", nombre: "huevo" },
    ],
    pasos: ["Triturar todo.", "Hacer las tortitas en una sartén antiadherente."],
    minutos: 20,
    raciones: 1,
  },
];
