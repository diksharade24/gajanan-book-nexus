export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  stock: number;
  sellerId: string;
  sellerName: string;
  description: string;
  imageUrl: string;
  rating?: number;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'seller';
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}
