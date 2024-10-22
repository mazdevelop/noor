'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const products = [
    { id: 1, name: 'محصول ۱', image: '/images/IMG_6980.JPG' },
    { id: 2, name: 'محصول ۲', image: '/images/IMG_6980.JPG' },
    { id: 3, name: 'محصول ۳', image: '/images/IMG_6980.JPG' },
    { id: 4, name: 'محصول ۴', image: '/images/IMG_6980.JPG' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    }
  };

  return (
    <div className="relative mt-6 flex">
      {/* Vertical text section */}
      <div className="hidden lg:flex w-12 rounded-md bg-[url('/images/Frame-24-1.jpg')] bg-cover bg-center bg-no-repeat items-center justify-center">
        <p className="text-white text-2xl font-bold whitespace-nowrap transform -rotate-90">محصولات</p>
      </div>
      
      {/* Product slider section */}
      <div className="flex-grow relative bg-primary-300 rounded-lg p-4 overflow-hidden">
        <div className={`flex ${isMobile ? 'flex-nowrap' : 'flex-wrap'} transition-transform duration-300 ease-in-out`} 
             style={isMobile ? { transform: `translateX(${currentIndex * 100}%)` } : {}}>
          {products.map((product) => (
            <div key={product.id} className={`${isMobile ? 'flex-shrink-0 w-full' : 'w-full sm:w-1/2 lg:w-1/4'} p-2`}>
              <div className="bg-white rounded-lg shadow-md">
                <div className="relative">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-40 object-cover rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-2 text-right">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isMobile && (
          <>
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">&lt;</button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">&gt;</button>
          </>
        )}
        <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
          <span className="font-bold">{products.length} محصول</span>
        </div>
        <button className="absolute bottom-4 left-4 bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          مشاهده محصول
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;