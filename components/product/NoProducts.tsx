import React from 'react';

const NoProducts: React.FC<{ categoryName: string }> = ({ categoryName }) => (
  <div className="w-full p-8 text-center">
    <div className="bg-gray-100 rounded-lg p-8">
      <i className="ri-inbox-line text-4xl text-gray-400 mb-4"></i>
      <h3 className="text-xl font-medium text-gray-700 mb-2">محصولی موجود نیست</h3>
      <p className="text-gray-500">
        در حال حاضر محصولی در دسته‌بندی "{categoryName}" موجود نیست.
        <br />
        به زودی محصولات جدید اضافه خواهند شد.
      </p>
    </div>
  </div>
);

export default NoProducts;
