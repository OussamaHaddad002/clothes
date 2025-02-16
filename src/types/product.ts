export interface Color {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors: Color[];
  sizes: string[];
  inStock: boolean;
}