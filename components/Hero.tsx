'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings } from "react-slick";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const images = [
    { src: "/images/photo_2024-10-24_02-52-56.jpg", alt: "Hero Image 1" },
    { src: "/images/photo_2024-10-27_02-06-39.jpg", alt: "Hero Image 2" },
    { src: "/images/InShot_20241024_002531224.jpg", alt: "Hero Image 3" },
    { src: "/images/InShot_20241024_002821082.jpg", alt: "Hero Image 4" },
    { src: "/images/photo_2024-10-22_00-17-14.jpg", alt: "Hero Image 5" },
    { src: "/images/InShot_20241024_004408391.jpg", alt: "Hero Image 6" },
    { src: "/images/InShot_20241024_065407284.jpg", alt: "Hero Image 7" },
    { src: "/images/InShot_20241024_004616987.jpg", alt: "Hero Image 8" },
    { src: "/images/InShot_20241024_004801107.jpg", alt: "Hero Image 9" },
    { src: "/images/photo_2024-11-02_02-45-13.jpg", alt: "Hero Image 10" },
    { src: "/images/InShot_20241024_005222410.jpg", alt: "Hero Image 11" },
  ];

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.4,
        delay: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'progressive',
    centerMode: true,
    centerPadding: '40px',
    arrows: true,
    className: "center",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
          dots: false,
        }
      }
    ]
  };
  return (
      <section className="bg-secondary-200 rounded-t-md min-h-screen py-16 lg:py-24 flex flex-col gap-12 lg:gap-24 font-vazir overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div ref={headerRef} className="fade-in">
            <h1 className="text-tertiary-950 text-3xl lg:text-2xl leading-tight font-sahel mb-4">
              غزال نور پارسا
              <span className="block text-primary-600 mt-2 text-2xl lg:text-xl">
                تولید کننده انواع مبلمان شهری
              </span>
            </h1>
          </div>
          <div ref={textRef} className="flex flex-col justify-center">
            <p className="text-tertiary-800 text-base lg:text-lg leading-relaxed">
              غزال نور پارسا با بیش از دو دهه تجربه درخشان در عرصه صنایع روشنایی و مبلمان شهری، همراه شما در تمام مراحل است. از ایده‌پردازی و طراحی اولیه گرفته تا تولید نهایی محصول، تیم متخصص ما با استفاده از دانش روز و تجهیزات پیشرفته، محصولاتی با کیفیت برتر تولید می‌کند.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-2 sm:px-4 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="outline-none px-1 sm:px-2 h-full flex items-end"> {/* اضافه کردن flex و items-end */}
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-102 bg-gray-100 w-full">
                    <div className="aspect-w-4 aspect-h-3 flex items-end"> {/* اضافه کردن flex و items-end */}
                      <Image
                        className="object-contain w-full"
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link 
          href="/products" 
          ref={buttonRef}
          className="group flex items-center gap-2 bg-primary-300 text-tertiary-950 hover:bg-tertiary-800 px-6 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-102 shadow-md hover:shadow-lg"
        >
          <span className="text-base font-medium">نمایش کاتالوگ محصولات</span>
          <i className="ri-arrow-right-line text-lg transform transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;