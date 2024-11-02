'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ElectrostaticCoating: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: "مقاومت بالا در برابر خوردگی، ضربه و خراش",
    },
    {
      id: 2,
      title: "پوشش یکنواخت و بدون نقص",
    },
    {
      id: 3,
      title: "دوست‌دار محیط زیست به دلیل عدم استفاده از حلال‌های شیمیایی",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "آماده‌سازی سطح",
      description:
        "قبل از شروع رنگ‌آمیزی، سطح فلزی باید به‌خوبی تمیز و آماده شود. این مرحله شامل حذف آلودگی‌ها، چربی‌ها، زنگ‌زدگی‌ها و هر گونه ناخالصی دیگری است که ممکن است روی سطح باشد . که از روش‌های شیمیایی مانند شستشو با محلول‌های قلیایی، فسفاته‌کاری یا سندبلاست استفاده می‌شود.",
    },
    {
      id: 2,
      title: "اعمال پودر رنگ الکترواستاتیک",
      description:
        "در این مرحله، رنگ به صورت پودر خشک به سطح فلزی پاشیده می‌شود. ذرات پودر رنگ به دلیل شارژ الکترواستاتیکی به سطح فلز می‌چسبند. این ویژگی باعث می‌شود که پوشش یکنواخت و بدون جریان‌افتادگی ایجاد شود.",
    },
    {
      id: 3,
      title: "پخت رنگ در کوره",
      description:
        "پس از اعمال پودر، قطعه وارد کوره می‌شود. در دمای بالا، ذرات پودر ذوب شده و به صورت یک پوشش یکدست و سخت روی سطح فلزی در می‌آیند. این مرحله حدود 15 تا 30 دقیقه طول می‌کشد، بسته به نوع رنگ و ضخامت لایه.",
    },
    {
      id: 4,
      title: "خنک‌سازی و بازرسی نهایی",
      description:
        "پس از پخت و خارج شدن قطعه از کوره، آن را به آرامی خنک می‌کنند. در نهایت، سطح رنگ‌شده برای اطمینان از کیفیت پوشش و نبود نقص‌های ظاهری بررسی می‌شود.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-sahel font-bold mb-4">
          رنگ‌آمیزی کوره‌ای الکترواستاتیک
        </h2>
        <p className="text-gray-600 mb-6">
          رنگ‌آمیزی کوره‌ای الکترواستاتیک یک فرآیند پیشرفته برای رنگ کردن سطوح
          فلزی است که در آن از رنگ‌های پودری الکترواستاتیک استفاده می‌شود. این
          روش برای رنگ‌آمیزی مبلمان شهری بسیار مناسب است چون ماندگاری و کیفیت
          بالایی را تضمین می‌کند.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {advantages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <i className="ri-checkbox-circle-line text-primary-500 text-3xl mx-4"></i>
              <h3 className="text-lg font-bold ">{item.title}</h3>
            </div>
          ))}
        </div>

        <Slider {...settings}>
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ElectrostaticCoating;