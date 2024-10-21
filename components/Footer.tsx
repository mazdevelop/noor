import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-primary-600 text-white shadow-md mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between mt-8 text-center text-white">
            <div>
              <p>شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹ - ۰۹۱۲۳۴۵۶۷۸۹</p>
              <p>آدرس: تهران، میدان انقلاب، کوچه سوم، پلاک ۴</p>
            </div>
            <div>
              <p>ساعات کاری: روز های کاری ساعت ۹ تا ۲۱</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white text-center py-2">
          <p>کلیه حقوق متعلق به آسترا می باشد.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;