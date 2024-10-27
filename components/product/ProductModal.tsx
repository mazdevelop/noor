import React from 'react';
import Image from 'next/image';
import { ProductModalProps } from './types';

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, selectedProduct, onPrevious, onNext }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-full h-full md:h-auto md:max-w-4xl md:mx-4 relative flex flex-col">
        {/* Header - Only visible on mobile */}
        <div className="flex justify-between items-center p-4 border-b md:hidden">
          <h2 className="text-lg font-semibold">مشاهده محصول</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Close button - Only visible on desktop */}
        <button
          onClick={onClose}
          className="hidden md:block absolute top-4 right-4 z-10 p-2 bg-gray-100/90 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {/* Main content */}
        <div className="flex-1 relative overflow-hidden">
          <Image
            src={selectedProduct.image}
            alt="Product image"
            width={1200}
            height={800}
            className="w-full h-full md:h-[600px] object-contain"
          />

          {/* Navigation buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="p-3  bg-gray-100/90 hover:bg-gray-200 rounded-full shadow-lg text-gray-600 transition-colors pointer-events-auto"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
              
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-3 bg-gray-100/90 hover:bg-gray-200 rounded-full shadow-lg text-gray-600 transition-colors pointer-events-auto"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;