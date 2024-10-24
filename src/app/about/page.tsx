'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-primary-50/30 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-sahel text-2xl text-tertiary-900 text-center mb-8">
          تماس با ما
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* اطلاعات تماس */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-sahel text-xl text-tertiary-800 mb-6">راه‌های ارتباطی</h2>
            
            <div className="space-y-4 text-secondary-700">
              <p className="flex items-start gap-2">
                <span className="font-medium min-w-20">آدرس:</span>
                <span>تهران، کهریزک، جاده واوان، میدان عشقی، خیابان یادگار امام، پلاک ۲۴</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium min-w-20">ایمیل:</span>
                <span>example@example.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium min-w-20">تلفن:</span>
                <span className="dir-ltr">۰۹۱۲۵۰۰۰۹۷۹</span>
              </p>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm transition">اینستاگرام</a>
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm transition">تلگرام</a>
            </div>
          </div>

          {/* نقشه */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-sahel text-xl text-tertiary-800 mb-6">موقعیت مکانی</h2>
            <div 
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <iframe
                src="https://maps.google.com/maps?q=35.502402,51.320481&ll=35.502402,51.320481&z=16&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: `grayscale(${isHovered ? '0' : '100%'})`,
                  transition: 'filter 0.5s ease-in-out'
                }}
                className="w-full h-full"
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