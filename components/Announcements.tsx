'use client';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Announcements: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // بررسی سایز صفحه و تشخیص موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // اجرای اولیه
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const announcements = [
    {
      id: 1,
      icon: "ri-door-open-line",
      text: "از کارخانه ما بازدید کنید - درهای ما همیشه به روی شما باز است"
    },
    {
      id: 2,
      icon: "ri-calendar-check-line",
      text: "بدون نیاز به هماهنگی قبلی از خط تولید ما دیدن کنید"
    },
    {
      id: 3,
      icon: "ri-user-smile-line",
      text: "ما مشتاقانه منتظر دیدار شما هستیم"
    }
  ];

  const announcementSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: !isMobile,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    rtl: true,
    cssEase: "linear",
  };

  return (
    <div className="bg-primary-300 rounded-lg shadow-md text-secondary-700 py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <Slider {...announcementSettings}>
          {announcements.map(({ id, icon, text }) => (
            <div 
              key={id} 
              className="text-center flex items-center justify-center px-2 py-1 transition-all duration-300 hover:bg-primary-400 rounded-md"
            >
              <i className={`${icon} ml-3 text-xl text-secondary-600`}></i>
              <span className="font-sahel text-sm md:text-lg leading-relaxed">
                {text}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Announcements;