'use client';
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero: React.FC = () => {
  const images = [
    { src: "/images/IMG_6980.JPG", alt: "Hero Image 2" },
    { src: "/images/IMG_7214.JPG", alt: "Hero Image 3" },
    { src: "/images/IMG_3203.JPG", alt: "Hero Image 4" },
    { src: "/images/IMG_3204.JPG", alt: "Hero Image 5" },
    { src: "/images/IMG_4277.JPG", alt: "Hero Image 6" },
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
    <section className="bg-secondary-50 rounded-md h-fit py-48 flex flex-col gap-32">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <h1 className="text-tertiary-950 text-2xl leading-normal">
              بهبود فضاهای عمومی شهری
            </h1>
          </div>
          <div className="flex mt-6 sm:mt-0 flex-col justify-between gap-6 sm:gap-0">
            <p className="text-tertiary-800">
              مبلمان شهری یا "Urban Furniture" به مجموعه‌ای از تجهیزات و وسایلی گفته می‌شود که در فضاهای عمومی شهری مورد استفاده قرار می‌گیرند. این تجهیزات نه تنها به بهبود ظاهر و زیبایی محیط شهری کمک می‌کنند، بلکه راحتی و عملکرد بهتری را نیز برای شهروندان فراهم می‌سازند. از جمله مهم‌ترین اجزای مبلمان شهری می‌توان به نیمکت‌ها، سطل‌های زباله، ایستگاه‌های اتوبوس، تابلوهای راهنمایی، برج‌های نوری و پایه‌های چراغ‌های خیابانی اشاره کرد.
            </p>
            <Link href="/blog">
              <button className="mt-2 py-4 px-5 bg-primary-100 rounded-full hover:bg-primary-400 duration-300">
                بیشتر بخوانید
              </button>
            </Link>
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
    </section>
  );
};

export default Hero;