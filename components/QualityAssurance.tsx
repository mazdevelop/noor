'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QualityAssurance: React.FC = () => {
  const warranties = [
    {
      id: 1,
      icon: "ri-paint-line",
      title: "۳ سال ضمانت رنگ",
      desc: "رنگ محصولات ما در برابر شرایط جوی، ماندگاری خود را حفظ می‌کند"
    },
    {
      id: 2,
      icon: "ri-building-4-line",
      title: "۵ سال ضمانت سازه",
      desc: "استحکام و دوام طولانی‌مدت حتی در شرایط سخت محیطی"
    },
    {
      id: 3,
      icon: "ri-customer-service-2-line",
      title: "۱۰ سال خدمات پس از فروش",
      desc: "پشتیبانی سریع و با کیفیت برای تعمیر و نگهداری محصولات"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true
  };

  return (
    <section className="py-6 bg-primary-300 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-2/3 bg-white/50 backdrop-blur p-4 rounded-xl">
            <h2 className="text-xl font-sahel font-bold mb-2">
              کیفیت تضمین‌شده به پشتوانه تجربه
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              ما به کیفیت محصولاتمان ایمان داریم و آن را با ضمانت‌های ویژه تضمین می‌کنیم
            </p>
            <div className="flex items-center mt-4">
              <i className="ri-shield-star-line text-2xl text-primary-600 ml-2"></i>
              <p className="text-gray-600 text-sm">
                در غزال نور پارسا، تجربه‌ای مطمئن از مبلمان شهری را با ضمانت‌های معتبر برای شما فراهم می‌کنیم
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 bg-white rounded-xl p-4">
            <Slider {...settings}>
              {warranties.map(item => (
                <div key={item.id} className="p-2">
                  <div className="flex items-center mb-2">
                    <i className={`${item.icon} text-2xl text-primary-600 ml-2`}></i>
                    <h3 className="text-base font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;