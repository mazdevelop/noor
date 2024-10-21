import React from 'react';
import Image from 'next/image';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // اطلاعات محصول (نمونه)
  const product = {
    id,
    name: `محصول ${id}`,
    description: `توضیحات مربوط به محصول ${id}`,
    image: '/images/IMG_6980.JPG',
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-right">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image src={product.image} alt={product.name} width={400} height={400} className="object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-right">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
