import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: { id: number; image: string };
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div className="p-2">
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <Image src={product.image} alt="Product" width={250} height={250} className="w-full h-48 object-cover rounded-lg" />
    </div>
  </div>
);

export default ProductCard;
