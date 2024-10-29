'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Hero: React.FC = () => {
  const images = [
    { src: "/images/InShot_20241024_003036344.jpg", alt: "Hero Image 2" },
    { src: "/images/InShot_20241024_003717802.jpg", alt: "Hero Image 3" },
    { src: "/images/InShot_20241024_003333488.jpg", alt: "Hero Image 4" },
    { src: "/images/InShot_20241024_004152296.jpg", alt: "Hero Image 5" },
    { src: "/images/InShot_20241024_004408391.jpg", alt: "Hero Image 6" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-secondary-200 rounded-t-md h-fit py-28 flex flex-col gap-32 font-vazir">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="text-tertiary-950 text-2xl leading-normal font-sahel">
              غزال نور پارسا تولید کننده انواع مبلمان شهری
              </h1>
            </div>
            <div className="flex mt-6 sm:mt-0 flex-col justify-between gap-6 sm:gap-0">
              <p className="text-tertiary-800">
                غزال نور پارسا با بیش از دو دهه تجربه درخشان در عرصه صنایع روشنایی و مبلمان شهری، همراه شما در تمام مراحل است. از ایده‌پردازی و طراحی اولیه گرفته تا تولید نهایی محصول، تیم متخصص ما با استفاده از دانش روز و تجهیزات پیشرفته، محصولاتی با کیفیت برتر تولید می‌کند. تعهد ما به نوآوری، کیفیت و رضایت مشتری، همراه با خدمات پس از فروش گسترده، غزال نور پارسا را به انتخابی مطمئن برای پروژه‌های شهری تبدیل کرده است.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <Image
                  className="rounded-md object-cover w-full h-auto"
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        {/* دکمه با Remix Icon */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/products" 
            className="group flex items-center gap-2 bg-primary-200 text-tertiary-950 hover:bg-tertiary-800 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="text-lg">مشاهده محصولات بیشتر</span>
            <i className="ri-arrow-right-line text-xl transform transition-transform duration-300 group-hover:translate-x-2 rtl:rotate-180"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;