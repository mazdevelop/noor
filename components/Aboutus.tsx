import React from 'react';
import Image from "next/image";
const previewProducts = [
  { id: 1, image: '/images/InShot_20241024_065407284.jpg' },
  { id: 2, image: '/images/InShot_20241024_004801107.jpg' },
  { id: 3, image: '/images/photo_2024-10-24_02-52-56.jpg' },
  { id: 4, image: '/images/InShot_20241024_004408391.jpg' }
];
const AboutUs: React.FC = () => {
  return (
    <div className="bg-secondary-200 p-4 md:p-8">
      <div className="flex flex-col md:flex-row">
        {/* Images Section */}
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-2 md:gap-4">
          {previewProducts.map((product) => (
            <div key={product.id} className="rounded-lg overflow-hidden">
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={`Image ${product.id}`}
                className="object-contain w-52 h-52 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pr-8">
          <h2 className="text-lg md:text-xl font-semibold text-tertiary-950 mb-4 font-sahel">تولید کننده برتر مبلمان شهری</h2>
          <p className="text-tertiary-600 leading-loose mb-6">در کارخانه غزال نور پارسا ما با اشتیاق و تعهد و سال‌ها تجربه در صنعت تولید مبلمان شهری، تخصصی عمیق در طراحی و ساخت انواع محصولات از جمله پایه چراغ‌های مدرن، برج‌های پرچم با استحکام بالا، برج‌های برق مقاوم، پایه دوربین های شهری ، نیمکت‌های شیک و راحت، سطل‌های زباله با طراحی بهینه، و سایر المان‌های فلزی تزئینی داریم.</p>

          <h3 className="text-md md:text-lg font-semibold text-tertiary-950 mb-3 font-sahel">مزیت‌های محصولات ما:</h3>
          <ul className="text-tertiary-600 leading-loose list-disc pr-6 space-y-2">
            <li>
              <span className="font-semibold">کیفیت برتر:</span> استفاده از مواد اولیه باکیفیت و مقاوم در تمامی محصولات، که تضمین می‌کند مبلمان شهری ما در برابر شرایط مختلف جوی و استفاده طولانی‌مدت دوام می اورد.
            </li>
            <li>
              <span className="font-semibold">طراحی خلاقانه:</span> ما به جزئیات اهمیت می‌دهیم و طراحی محصولات ما به گونه‌ای است که علاوه بر کارایی بالا، زیبایی بصری فضاهای شهری را نیز ارتقاء می‌دهد.
            </li>
            <li>
              <span className="font-semibold">راهکارهای سفارشی:</span> ما می‌توانیم محصولات را بر اساس نیازهای خاص هر پروژه به صورت اختصاصی طراحی و تولید کنیم تا با محیط و خواسته‌های مشتریان به‌خوبی هماهنگ شود.
            </li>
            <li>
              <span className="font-semibold">تأثیر مثبت بر جامعه:</span> با تولید مبلمان شهری باکیفیت، ما به بهبود تجربه زندگی شهروندان و افزایش رفاه عمومی کمک می‌کنیم.
            </li>
          </ul>
        </div>
      </div>    
    </div>
  );
};

export default AboutUs;