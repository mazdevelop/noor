'use client';

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="container mx-auto max-w-6xl">
        {/* عنوان صفحه */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">تماس با ما</h1>

        {/* بخش اطلاعات تماس و فرم */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* اطلاعات تماس */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">اطلاعات تماس</h2>
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

            {/* دکمه‌های شبکه اجتماعی */}
            <div className="flex space-x-2 sm:space-x-4">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full text-xs sm:text-sm">فیسبوک</a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full text-xs sm:text-sm">توییتر</a>
              <a href="#" className="bg-red-500 text-white p-2 rounded-full text-xs sm:text-sm">یوتیوب</a>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">فرم تماس</h2>
            <form>
              <div className="mb-4">
                <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="name">نام</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base sm:text-lg font-medium mb-2" htmlFor="message">پیام</label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                  rows={5}
                  placeholder="پیام خود را وارد کنید"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>

        {/* نقشه */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">مکان ما</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1605618398935!2d-122.41941528469263!3d37.774929279759154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ec0d678d%3A0x3bafc1a5ae75b1b0!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1625027466216!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;