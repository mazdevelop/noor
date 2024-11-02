'use client';

import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product, Category } from '@/types';
import { categories, allCategory } from '@/data/categories';
import { products } from '@/data/products';
import { useResponsiveGrid } from '@/hooks/useResponsiveGrid';
import { EmptyCategoryMessage } from '../../../components/EmptyCategoryMessage';
import { ProductGridSkeleton } from '../../../components/ProductGrid';
import { generatePaginationNumbers } from '@/utils/pagination';

const ProductGrid = dynamic(() => import('../../../components/ProductGrid').then(mod => mod.ProductGrid), {
  loading: () => <ProductGridSkeleton />
});

const ProductsPage: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>(allCategory);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const router = useRouter();
  
  const itemsPerPage = useResponsiveGrid({ isGridView });

  const filteredProducts = currentCategory.id === 0 
    ? products 
    : products.filter(product => product.categoryId === currentCategory.id);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleProductClick = (product: Product) => {
    const category = categories.find(cat => cat.id === product.categoryId);
    const query = new URLSearchParams({
      image: product.image,
      categoryTitle: category?.title || '',
      categoryDescription: category?.description || ''
    }).toString();
    router.push(`/products/${product.id}?${query}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentPage(1);
              }}
              className={`flex items-center justify-start p-3 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:scale-105 
                ${currentCategory.id === category.id ? 'bg-primary-100 shadow-md' : 'bg-gray-50'}`}
            >
              {category.icon && (
                <div className={` relative  ${window.innerWidth <= 420 ? 'mr-0 w-5 h-5' : 'mr-2 w-8 h-8'}`}>
                  <Image 
                    src={category.icon} 
                    alt={category.name} 
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className={`font-medium text-gray-700 mr-2 truncate ${window.innerWidth <= 420 ? 'text-xs' : 'text-sm'}`}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Info */}
      <div className="text-center mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 font-sahel">{currentCategory.title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{currentCategory.description}</p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <i className={`ri-${isGridView ? 'list' : 'grid'}-line text-lg`}></i>
          <span>{isGridView ? 'نمایش لیستی' : 'نمایش شبکه‌ای'}</span>
        </button>
      </div>

      {/* Products Grid/List or Empty Message */}
      {filteredProducts.length > 0 ? (
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid
            products={currentProducts}
            isGridView={isGridView}
            onProductClick={handleProductClick}
          />
        </Suspense>
      ) : (
        <EmptyCategoryMessage 
          categoryName={currentCategory.name}
          onReset={() => setCurrentCategory(allCategory)}
        />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-2 py-1 rounded-lg bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400 hover:bg-gray-200 ${
              currentPage === 1
                ? 'sm:px-3 sm:py-2'
                : 'sm:px-3 sm:py-2'
            }`}
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>

          <div className="flex flex-wrap justify-center gap-1">
            {generatePaginationNumbers(currentPage, totalPages).map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                className={`px-2 py-1 rounded-lg min-w-[2.25rem] text-center ${
                  currentPage === page
                    ? 'bg-primary-500 text-white'
                    : typeof page === 'number'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-transparent cursor-default'
                } sm:px-3 sm:py-1 sm:min-w-[2.5rem]`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-2 py-1 rounded-lg bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400 hover:bg-gray-200 ${
              currentPage === totalPages
                ? 'sm:px-3 sm:py-2'
                : 'sm:px-3 sm:py-2'
            }`}
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;