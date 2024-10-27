export interface Product {
    id: number;
    image: string;
    categoryId: number;
}

export interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedProduct: Product;
    onPrevious: () => void;
    onNext: () => void;
}
export interface ProductCardProps {
    product: Product;
    onClick: () => void;
    className?: string; // اضافه کردن className به عنوان prop اختیاری
  }

export interface CategoryButtonProps {
    category: { id: number; name: string; icon: string | null };
    isSelected: boolean;
    onClick: () => void;
}

export interface Category {
    id: number;
    name: string;
    icon: string | null;
  }
  
export interface Product {
    id: number;
    image: string;
    categoryId: number;
  }
  