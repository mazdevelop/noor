'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { useRouter } from 'next/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { id: 1, name: 'پایه چراغ خیابانی', icon: '/icons/street-lamp.png' },
  { id: 2, name: 'پایه چراغ پارکی', icon: '/icons/park-lamp.png' },
  { id: 3, name: 'پایه چراغ چمنی', icon: '/icons/grass-lamp.png' },
  { id: 4, name: 'برج برق', icon: '/icons/power-tower.png' },
  { id: 5, name: 'برج پرچم', icon: '/icons/flag-tower.png' },
  { id: 6, name: 'پایه دوربین', icon: '/icons/camera-pole.png' },
  { id: 7, name: 'پایه گاواری', icon: '/icons/industrial-pole.png' },
  { id: 8, name: 'نیمکت', icon: '/icons/bench.png' },
  { id: 9, name: 'سطل زباله', icon: '/icons/trash-can.png' },
  { id: 10, name: 'المان های شهری', icon: null },
];

const products = [
  { id: 1, name: 'محصول ۱', image: '/images/IMG_6980.JPG', categoryId: 1 },
  { id: 2, name: 'محصول ۲', image: '/images/IMG_6980.JPG', categoryId: 1 },
  { id: 3, name: 'محصول ۳', image: '/images/IMG_6980.JPG', categoryId: 2 },
  { id: 4, name: 'محصول ۴', image: '/images/IMG_6980.JPG', categoryId: 2 },
  { id: 5, name: 'محصول ۵', image: '/images/IMG_6980.JPG', categoryId: 3 },
  { id: 6, name: 'محصول ۶', image: '/images/IMG_6980.JPG', categoryId: 3 },
  { id: 7, name: 'محصول ۷', image: '/images/IMG_6980.JPG', categoryId: 4 },
  { id: 8, name: 'محصول ۸', image: '/images/IMG_6980.JPG', categoryId: 4 },
];

const ProductSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = () => {
    router.push(`/products`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick()}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            {category.icon && (
              <Image 
                src={category.icon} 
                alt={category.name} 
                width={32} 
                height={32} 
                className="object-fill w-10 h-10 mx-1" 
              />
            )}
            <span className="text-xs text-gray-700 text-center block w-full">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-right">{product.name}</h3>
                  <p className="text-gray-600 text-sm text-right">
                    {categories.find(cat => cat.id === product.categoryId)?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;