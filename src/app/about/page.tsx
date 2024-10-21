'use client';

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">ارتباط با ما</h1>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-xl font-bold mb-3 sm:mb-4">اطلاعات تماس</h2>
          <p className="text-base sm:text-lg mb-3 sm:mb-4">برای هرگونه سوال یا درخواست می‌توانید از طریق اطلاعات زیر با ما تماس بگیرید:</p>
          
          <ul className="mb-4 text-sm sm:text-base">
            <li className="mb-2">
              <span className="font-bold">آدرس:</span> تهران، خیابان نمونه، پلاک 12
            </li>
            <li className="mb-2">
              <span className="font-bold">ایمیل:</span> example@example.com
            </li>
            <li className="mb-2">
              <span className="font-bold">تلفن:</span> 021-12345678
            </li>
          </ul>

          <div className="flex space-x-2 sm:space-x-4">
            <a href="#" className="bg-primary-600 text-white p-2 rounded-full text-xs sm:text-sm">فیسبوک</a>
            <a href="#" className="bg-primary-600 text-white p-2 rounded-full text-xs sm:text-sm">توییتر</a>
            <a href="#" className="bg-primary-600 text-white p-2 rounded-full text-xs sm:text-sm">یوتیوب</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;