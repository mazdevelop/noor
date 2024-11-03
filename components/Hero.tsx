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
import 'remixicon/fonts/remixicon.css';

gsap.registerPlugin(ScrollTrigger);

interface CustomArrowProps {
  onClick?: () => void;
  style?: React.CSSProperties;
}

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="!flex items-center justify-center  w-6 h-6 rounded-full bg-white shadow-lg absolute -left-0  top-1/2 -translate-y-1/2 z-10 hover:bg-primary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 lg:-left-8"
    onClick={onClick}
  >
    <i className="ri-arrow-left-s-line text-lg text-tertiary-950"></i>
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="!flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-lg absolute -right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-primary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 lg:-right-8"
    onClick={onClick}
  >
    <i className="ri-arrow-right-s-line text-lg text-tertiary-950"></i>
  </button>
);

const Hero: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const sliderRef = useRef<Slider>(null);

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "center custom-slider",
    pauseOnHover: true,
    swipeToSlide: true,
    appendDots: (dots: React.ReactNode) => (
      <div className="!bottom-4">
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-tertiary-300 hover:bg-tertiary-400 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors duration-200">
        <span className="sr-only">Slide</span>
      </button>
    ),
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
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
          dots: true,
          arrows: false,
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

      <div className="w-full px-4 sm:px-8 lg:px-16 relative">
        <style jsx global>{`
          .custom-slider {
            margin: 0 -8px;
          }
          .custom-slider .slick-slide {
            padding: 8px;
          }
          .custom-slider .slick-dots li.slick-active button {
            background-color: var(--primary-600);
          }
          @media (max-width: 640px) {
            .custom-slider {
              margin: 0 -4px;
            }
            .custom-slider .slick-slide {
              padding: 4px;
            }
          }
        `}</style>
        <div className="max-w-[1200px] mx-auto">
          <div className="slider-container">
            <Slider ref={sliderRef} {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="outline-none h-full">
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-gray-100">
                    <div className="aspect-w-4 aspect-h-3">
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
          className="group flex items-center gap-2 bg-primary-300 text-tertiary-950 hover:bg-tertiary-800 px-6 py-3 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <span className="text-base font-medium">نمایش کاتالوگ محصولات</span>
          <i className="ri-arrow-right-line text-lg transform transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;