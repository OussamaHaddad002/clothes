export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  colors: {
    name: string;
    hex: string;
    image?: string;
  }[];
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A timeless white t-shirt made from premium cotton. Perfect for any casual occasion.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format" },
      { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format" },
      { name: "Gray", hex: "#808080", image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=500&auto=format" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with a perfect stretch for maximum comfort.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format",
    category: "Pants",
    sizes: ["28", "30", "32", "34"],
    colors: [
      { name: "Blue", hex: "#0000FF", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format" },
      { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format" }
    ],
    inStock: true
  },
  {
    id: "3",
    name: "Casual Hoodie",
    description: "Comfortable and stylish hoodie perfect for those chilly evenings.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Gray", hex: "#808080", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format" },
      { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Summer Dress",
    description: "Light and breezy summer dress perfect for warm days.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Floral", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format" },
      { name: "Blue", hex: "#0000FF", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "5",
    name: "Leather Jacket",
    description: "Classic leather jacket that never goes out of style.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format",
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format" },
      { name: "Brown", hex: "#8B4513", image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format" }
    ],
    inStock: true
  }
];