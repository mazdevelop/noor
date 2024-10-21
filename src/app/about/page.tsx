'use client';

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-tertiary-200 rounded-md p-4 md:p-6">
      <div className="container mx-auto">
        {/* عنوان صفحه */}
        <h1 className="text-xl font-semibold text-center mb-6 md:mb-8">تماس با ما</h1>

        {/* بخش اطلاعات تماس و نقشه */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* اطلاعات تماس */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">اطلاعات تماس</h2>
            <p className="text-base md:text-lg mb-4">برای هرگونه سوال یا درخواست می‌توانید از طریق اطلاعات زیر با ما تماس بگیرید:</p>
            
            <ul className="mb-4">
              <li className="mb-2">
                <span className="font-semibold">آدرس:</span>تهران، کهریزک، جاده واوان، میدان عشقی ، خیابان یادگار امام ، پلاک ۲۴
              </li>
              <li className="mb-2">
                <span className="font-semibold">ایمیل:</span> example@example.com
              </li>
              <li className="mb-2">
                <span className="font-semibold">تلفن:</span> ۰۹۱۲۵۰۰۰۹۷۹
              </li>
            </ul>

            {/* دکمه‌های شبکه اجتماعی */}
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full text-sm md:text-base">فیسبوک</a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full text-sm md:text-base">توییتر</a>
              <a href="#" className="bg-red-500 text-white p-2 rounded-full text-sm md:text-base">یوتیوب</a>
            </div>
          </div>

          {/* نقشه */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">موقعیت جغرافیایی:</h2>
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
    </div>
  );
};

export default Contact;