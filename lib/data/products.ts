export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG",
    price: 179.99,
    description: "El clásico que nunca pasa de moda",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
    category: "air-jordan-1",
    isNew: true,
    tags: ["basketball", "retro", "high-top"]
  },
  {
    id: 2,
    name: "Air Jordan 2 Retro",
    price: 189.99,
    description: "Elegancia y estilo en cada paso",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b",
    category: "air-jordan-2",
    tags: ["basketball", "retro"]
  },
  {
    id: 3,
    name: "Air Jordan 3 Black Cement",
    price: 199.99,
    description: "Un ícono del streetwear",
    image: "https://images.unsplash.com/photo-1602033693387-3531914e2c83",
    category: "air-jordan-3",
    tags: ["basketball", "street"]
  },
  {
    id: 4,
    name: "Nike SB Dunk Low Pro",
    price: 149.99,
    description: "Diseñado para el skateboarding",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    category: "nike-sb-dunk",
    tags: ["skateboarding", "street"]
  },
  {
    id: 5,
    name: "Balenciaga Triple S",
    price: 975.00,
    description: "La revolución del calzado de lujo",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    category: "modelos-balenciaga",
    tags: ["luxury", "designer"]
  },
  {
    id: 6,
    name: "Air Jordan 1 Chicago",
    price: 169.99,
    originalPrice: 199.99,
    description: "El colorway más icónico",
    image: "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d",
    category: "air-jordan-1",
    isOnSale: true,
    tags: ["basketball", "retro", "classic"]
  },
  {
    id: 7,
    name: "Nike SB Dunk High",
    price: 129.99,
    description: "Máximo rendimiento para skateboarding",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
    category: "nike-sb-dunk",
    tags: ["skateboarding", "high-top"]
  },
  {
    id: 8,
    name: "Balenciaga Speed Trainer",
    price: 825.00,
    description: "La fusión perfecta entre comodidad y lujo",
    image: "https://images.unsplash.com/photo-1590673846749-e2fb8631f805",
    category: "modelos-balenciaga",
    tags: ["luxury", "designer", "comfort"]
  },
  {
    id: 9,
    name: "Air Jordan 2 Alternate",
    price: 159.99,
    originalPrice: 189.99,
    description: "Un clásico reinventado",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
    category: "air-jordan-2",
    isOnSale: true,
    tags: ["basketball", "retro"]
  },
  {
    id: 10,
    name: "Air Jordan 3 White Cement",
    price: 189.99,
    description: "El favorito de los coleccionistas",
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5",
    category: "air-jordan-3",
    isNew: true,
    tags: ["basketball", "retro", "classic"]
  }
];