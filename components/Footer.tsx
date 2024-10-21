import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-primary-600 text-white shadow-md mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between mt-8 text-center text-white">
            <div>
              <p>شماره تماس:  ۰۹۱۲۵۰۰۰۹۷۹</p>
              <p>آدرس: تهران، کهریزک، جاده واوان، میدان عشقی ، خیابان یادگار امام ، پلاک ۲۴</p>
            </div>
            <div>
              <p>ساعات کاری: روز های کاری ساعت ۸ تا ۱۷ به غیر از ایام تعطیل</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white text-center py-2">
          <div className="p-6 text-center">
          &nbsp;طراحی و توسعه توسط&nbsp;  
              <Link href="https://themazlife.ir/" >
                محسن علی زاده
              </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;