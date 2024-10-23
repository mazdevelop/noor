import React from 'react';
import Image from "next/image";

const GalvanizeProcess: React.FC = () => {
  const benefits = [
    {
      title: "محافظت فوق‌العاده در برابر خوردگی",
      items: [
        "ایجاد سد فیزیکی در برابر عوامل خورنده محیطی",
        "محافظت کاتدی حتی در صورت آسیب سطحی",
        "مقاومت بالا در برابر سایش و ضربه",
        "عملکرد مطلوب در شرایط آب و هوایی مختلف"
      ]
    },
    {
      title: "دوام و چسبندگی استثنایی",
      items: [
        "پیوند متالورژیکی قوی با فلز پایه",
        "مقاومت در برابر جداشدگی و پوسته شدن",
        "پوشش یکنواخت در تمام سطوح",
        "حفظ خواص محافظتی حتی پس از آسیب‌های جزئی"
      ]
    },
    {
      title: "صرفه اقتصادی در نگهداری",
      items: [
        "حذف نیاز به رنگ‌آمیزی دوره‌ای",
        "کاهش هزینه‌های تعمیر و نگهداری",
        "افزایش طول عمر سازه",
        "بازگشت سرمایه مناسب در درازمدت"
      ]
    }
  ];

  const applications = [
    "نیمکت‌ها و صندلی‌های پارکی",
    "سطل‌های زباله و مخازن پسماند",
    "نرده‌ها و حفاظ‌های ایمنی",
    "پایه چراغ‌های روشنایی",
    "پایه‌های دوربین مداربسته",
    "سازه‌های بازی کودکان",
    "ایستگاه‌های اتوبوس",
    "تابلوهای راهنمایی و تبلیغاتی"
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-tertiary-950 font-sahel mb-6">
              معرفی فرآیند گالوانیزه گرم
            </h1>
            <p className="text-tertiary-700 leading-relaxed">
              گالوانیزه گرم یکی از موثرترین روش‌های محافظت از سازه‌های فلزی است که در صنعت مبلمان شهری کاربرد گسترده‌ای دارد. در این فرآیند، قطعات فلزی در حمام روی مذاب با دمای حدود ۴۵۰ درجه سانتی‌گراد غوطه‌ور می‌شوند. این عملیات باعث ایجاد پیوند متالورژیکی قوی بین فلز پایه و لایه محافظ روی می‌شود.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={`/images/galvanize-${num}.jpg`}
                  width={300}
                  height={200}
                  alt={`نمونه گالوانیزه ${num}`}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-tertiary-950 font-sahel mb-8">
            مزایای کلیدی گالوانیزه گرم
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-tertiary-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="text-tertiary-600 flex items-center">
                      <span className="text-primary-500 ml-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl md:text-2xl font-bold text-tertiary-950 font-sahel mb-6">
            کاربردهای اصلی در مبلمان شهری
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors">
                <span className="text-tertiary-700">{app}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalvanizeProcess;