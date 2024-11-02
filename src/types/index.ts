export interface Product {
    id: number;
    image: string;
    categoryId: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    title: string;
    description: string;
    icon: string | null;
  }
  