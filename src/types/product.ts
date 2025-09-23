export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'men' | 'women' | 'kids' | 'other';
  stock: {
    [size: string]: number;
  };
  description: string;
}

export interface CartItem extends Product {
  size: string;
  quantity: number;
}