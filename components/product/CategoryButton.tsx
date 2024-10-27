import React from 'react';
import Image from 'next/image';
import { CategoryButtonProps } from './types';


const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`w-20 h-16 md:w-32 md:h-20 flex items-center justify-center rounded-lg transition-colors border ${
        isSelected ? 'bg-primary-300 text-secondary-900 border-secondary-900' : 'bg-white text-gray-600 border-gray-200'
      } hover:bg-primary-100`}
    >
      {category.icon && (
        <Image
          src={category.icon}
          alt={category.name}
          width={10} // آیکن کوچک‌تر
          height={10}
          className="mb-1 mx-1 w-6 h-6 object-contain"
        />
      )}
      <span className="text-xs font-medium">{category.name}</span> {/* متن کوچک‌تر */}
    </button>
  );
  
  export default CategoryButton;