import React from 'react';
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row">
        {/* Images Section */}
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-2 md:gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_7614.JPG"
                width={100}
                height={100}
                alt={`Image ${num}`}
                className="object-cover w-40 h-30 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pr-8">
          <h1 className="text-xl md:text-2xl font-semibold text-orange-500 mb-4">ما در غزال نور پارسا چه کار می‌کنیم؟</h1>
          <p className="text-gray-600 leading-loose">
            لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ و با استفاده از طراحان گرافیک است. 
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآرایچنان که لازم است...
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-200 mt-8 p-4 md:p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {['ساعات کاری: روزهای کاری ساعت ۹ تا ۲۱', 'آدرس: تهران، میدان انقلاب، پلاک ۴', 'تلفن: 09123456789'].map((info, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-orange-500 ml-2 text-white p-2 md:p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h3M3 14h3M9 6h6m0 0h3m-3 0h3M9 6v12m6-12v12" />
                </svg>
              </div>
              <div className="ml-2 md:ml-4">
                <p className="text-xs md:text-sm text-gray-600">{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;