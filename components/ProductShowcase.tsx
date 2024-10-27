'use client'
import React, { useState, useMemo, useEffect } from 'react';
import CategoryButton from './product/CategoryButton';
import ProductCard from './product/ProductCard';
import ProductModal from './product/ProductModal';
import NoProducts from './product/NoProducts';
import Slider from 'react-slick';
import { Product, Category } from './product/types';

const categories: Category[] = [
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

const products: Product[] = [
  { id: 2, image: '/images/photo_2024-10-27_02-04-42.jpg', categoryId: 1 },
  { id: 3, image: '/images/InShot_20241024_005656654.jpg', categoryId: 3 },
  { id: 4, image: '/images/InShot_20241024_002851041.jpg', categoryId: 2 },
  { id: 5, image: '/images/photo_2024-10-23_12-12-49.jpg', categoryId: 4 },
  { id: 6, image: '/images/photo_2024-10-24_00-30-23.jpg', categoryId: 5 },
  { id: 7, image: '/images/photo_2024-10-24_00-29-41.jpg', categoryId: 6 },
  { id: 8, image: '/images/InShot_20241024_002821082.jpg', categoryId: 1 },
  { id: 9, image: '/images/InShot_20241024_003004535.jpg', categoryId: 8 },
  { id: 10, image: '/images/InShot_20241024_004536865.jpg', categoryId: 9 },
  { id: 11, image: '/images/InShot_20241024_005222410.jpg', categoryId: 10 },
];

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const filteredProducts = useMemo(() => {
    return selectedCategory === null
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);
  }, [selectedCategory]);

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: filteredProducts.length > 4,
      speed: 500,
      slidesToShow: Math.min(4, filteredProducts.length),
      slidesToScroll: 1,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(3, filteredProducts.length),
            infinite: filteredProducts.length > 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(2, filteredProducts.length),
            infinite: filteredProducts.length > 2,
          },
        },
      ],
    }),
    [filteredProducts.length]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleModalPrevious = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProducts.length - 1;
    setSelectedProduct(filteredProducts[prevIndex]);
  };

  const handleModalNext = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = currentIndex < filteredProducts.length - 1 ? currentIndex + 1 : 0;
    setSelectedProduct(filteredProducts[nextIndex]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-9 gap-4 mb-8">
        <CategoryButton
          category={{ id: 0, name: 'همه', icon: '/icons/all-products.png' }}
          isSelected={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <NoProducts categoryName={categories.find((cat) => cat.id === selectedCategory)?.name || 'محصول'} />
      ) : (
        <>
          {selectedCategory === null ? (
            <div className={`${filteredProducts.length === 1 ? 'w-1/4 mx-auto' : 'w-full'}`}>
              <Slider {...sliderSettings}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                ))}
              </Slider>
            </div>
          ) : (
            <div
              className={`${
                filteredProducts.length === 1
                  ? 'grid grid-cols-1'
                  : 'grid grid-cols-2'
              } gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
              ))}
            </div>
          )}
        </>
      )}

      {selectedProduct && (
        <ProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedProduct={selectedProduct}
          onPrevious={handleModalPrevious}
          onNext={handleModalNext}
        />
      )}
    </div>
  );
};

export default ProductShowcase;
