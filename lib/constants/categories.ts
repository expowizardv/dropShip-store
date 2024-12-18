export const MAIN_CATEGORIES = [
  { name: "AIR JORDAN 1", href: "/air-jordan-1" },
  { name: "AIR JORDAN 2", href: "/air-jordan-2" },
  { name: "AIR JORDAN 3", href: "/air-jordan-3" },
  { name: "NIKE SB DUNK", href: "/nike-sb-dunk" },
  { name: "MODELOS BALENCIAGA", href: "/modelos-balenciaga" },
  { name: "OTROS", href: "/otros" },
  { name: "OFERTAS", href: "/ofertas" },
] as const;

export const CATEGORY_DETAILS = {
  "air-jordan-1": {
    title: "Air Jordan 1",
    description: "El icónico modelo que revolucionó el mundo del calzado deportivo",
  },
  "air-jordan-2": {
    title: "Air Jordan 2",
    description: "Elegancia y rendimiento en un diseño atemporal",
  },
  "air-jordan-3": {
    title: "Air Jordan 3",
    description: "Un clásico que marcó una era en el baloncesto",
  },
  "nike-sb-dunk": {
    title: "Nike SB Dunk",
    description: "El favorito de la cultura del skateboarding",
  },
  "modelos-balenciaga": {
    title: "Modelos Balenciaga",
    description: "La fusión perfecta entre lujo y streetwear",
  },
  "otros": {
    title: "Otros Modelos",
    description: "Descubre nuestra colección exclusiva de otros estilos únicos",
  },
  "ofertas": {
    title: "Ofertas Especiales",
    description: "Las mejores ofertas en calzado premium con descuentos exclusivos",
  },
} as const;