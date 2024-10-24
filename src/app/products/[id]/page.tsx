'use client';
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const image = searchParams.get('image') ?? '/path/to/default-image.jpg';
  const categoryTitle = searchParams.get('categoryTitle') ?? 'دسته‌بندی ناشناخته';
  const categoryDescription = searchParams.get('categoryDescription') ?? 'توضیحات موجود نیست';

  const handleBack = () => {
    router.push('/products');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleBack}
        className="bg-primary-300 hover:bg-primary-400 text-secondary-900 font-bold py-2 px-4 rounded mb-4 rtl"
      >
        برگشت به محصولات
      </button>

      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-start">
        {/* نمایش تصویر محصول */}
        <div className="w-full md:w-1/2 p-4">
          {image && (
            <Image
              src={image}
              alt="محصول"
              width={400}
              height={400}
              className="object-cover rounded-lg w-full h-auto"
            />
          )}
        </div>

        {/* نمایش اطلاعات محصول */}
        <div className="w-full md:w-1/2 p-4">
          <p className="text-gray-600 mt-2 text-right">
            دسته‌بندی: {categoryTitle}
          </p>
          <p className="text-gray-600 mt-2 text-justify">{categoryDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
