'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  // نمونه محصولات
  const products = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `محصول ${index + 1}`,
    image: '/images/IMG_6980.JPG',
  }));

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  // ۰۹۱۲۳۴۵۶۷۸۹
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">محصولات</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <Link href={`/products/${product.id}`}>
              <div>
                <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover rounded-lg" />
                <h3 className="text-lg font-bold mt-2 text-right">{product.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {pageNumbers.map(number => (
          <button 
            key={number} 
            onClick={() => handlePageChange(number)} 
            className={`px-3 py-1 mx-1 border rounded ${currentPage === number ? 'bg-primary-500 text-white' : 'bg-gray-200'}`}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
