'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Announcements: React.FC = () => {
  const announcements = [
    "🏭 از کارخانه ما بازدید کنید - درهای ما همیشه به روی شما باز است",
    "✨ بدون نیاز به هماهنگی قبلی از خط تولید ما دیدن کنید",
    "🤝 ما مشتاقانه منتظر دیدار شما هستیم",
  ];

  const announcementSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="bg-primary-300 rounded-md text-secondary-700 py-3 overflow-hidden">
      <div className="container mx-auto">
        <Slider {...announcementSettings}>
          {announcements.map((text, index) => (
            <div key={index} className="text-center flex items-center justify-center px-4">
              <i className="ri-door-open-line ml-2 text-lg"></i>
              <span className="font-bold font-sahel text-xl">{text}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Announcements;