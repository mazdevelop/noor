'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define interfaces
interface Product {
  id: number;
  image: string;
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: string | null; // Updated to allow null values
}

// Define the "all" category
const allCategory: Category = {
  id: 0,
  name: 'همه محصولات',
  title: 'نمایش تمام محصولات',
  description: 'مشاهده تمامی محصولات موجود در تمام دسته‌بندی‌ها',
  icon: '/icons/all-products.png'
};

// Categories with complete descriptions
const categories: Category[] = [
  allCategory,
  {
    id: 1,
    name: 'پایه چراغ خیابانی',
    title: 'پایه چراغ روشنایی معابر و خیابان‌ها',
    description: 'پایه‌های چراغ استاندارد برای روشنایی خیابان‌ها، بزرگراه‌ها و معابر شهری، با ارتفاع‌های مختلف و قابلیت نصب انواع چراغ LED و متال هالید، مقاوم در برابر شرایط جوی مختلف',
    icon: '/icons/street-lamp.png'
  },
  {
  id: 2,
  name: 'پایه چراغ پارکی',
  title: 'پایه چراغ ویژه پارک‌ها و فضاهای تفریحی',
  description: 'پایه‌های چراغ دکوراتیو و زیبا مخصوص پارک‌ها، فضاهای سبز و تفریحی، با طراحی‌های متنوع کلاسیک و مدرن، مجهز به سیستم روشنایی کم‌مصرف و سازگار با محیط زیست',
  icon: '/icons/park-lamp.png'
  },
  {
  id: 3,
  name: 'پایه چراغ چمنی',
  title: 'پایه چراغ مخصوص محوطه‌های سبز و باغ‌ها',
  description: 'چراغ‌های کوتاه و مناسب برای نصب در فضاهای چمنی، باغچه‌ها و محوطه‌های سبز، با قابلیت نورپردازی زیبا و مقاوم در برابر رطوبت، مجهز به سیستم ضد آب IP65',
  icon: '/icons/grass-lamp.png'
  },
  {
  id: 4,
  name: 'برج برق',
  title: 'برج‌های انتقال و توزیع نیروی برق',
  description: 'برج‌های فلزی استاندارد برای انتقال و توزیع نیروی برق، طراحی شده طبق استانداردهای ملی و بین‌المللی، مقاوم در برابر بارهای مکانیکی و شرایط جوی مختلف، با قابلیت نصب در ارتفاع‌های مختلف',
  icon: '/icons/power-tower.png'
  },
  {
  id: 5,
  name: 'برج پرچم',
  title: 'برج‌های ویژه نصب پرچم‌های بزرگ و تشریفاتی',
  description: 'برج‌های بلند و مستحکم برای نصب پرچم‌های بزرگ در میادین و اماکن مهم شهری، مجهز به سیستم بالابر اتوماتیک، با قابلیت نورپردازی ویژه و مقاوم در برابر وزش باد شدید',
  icon: '/icons/flag-tower.png'
  },
  {
  id: 6,
  name: 'پایه دوربین',
  title: 'پایه‌های نصب دوربین‌های مداربسته و نظارتی',
  description: 'پایه‌های مخصوص نصب دوربین‌های مداربسته و نظارتی، با قابلیت تنظیم ارتفاع و زاویه، مجهز به سیستم محافظت از کابل‌ها و تجهیزات الکترونیکی، مناسب برای نصب در فضاهای داخلی و خارجی',
  icon: '/icons/camera-pole.png'
  },
  {
  id: 7,
  name: 'پایه گاواری',
  title: 'پایه‌های صنعتی چندمنظوره',
  description: 'پایه‌های صنعتی مستحکم برای کاربردهای ویژه و سنگین، مناسب برای نصب تجهیزات مختلف صنعتی، با مقاومت بالا در برابر فشار و ضربه، قابل سفارشی‌سازی براساس نیاز مشتری',
  icon: '/icons/industrial-pole.png'
  },
  {
  id: 8,
  name: 'نیمکت',
  title: 'نیمکت‌های شهری و پارکی با طراحی مدرن',
  description: 'نیمکت‌های با دوام و زیبا برای استفاده در پارک‌ها، خیابان‌ها و فضاهای عمومی، ساخته شده از مواد مقاوم در برابر شرایط جوی، با طراحی ارگونومیک برای راحتی بیشتر، قابل نصب به صورت ثابت یا متحرک',
  icon: '/icons/bench.png'
  },
  {
  id: 9,
  name: 'سطل زباله',
  title: 'سطل‌های زباله شهری با قابلیت تفکیک پسماند',
  description: 'سطل‌های زباله بهداشتی و مقاوم برای استفاده در فضاهای شهری و پارک‌ها، مجهز به سیستم تفکیک زباله، با پوشش ضد زنگ و قابل شستشو، طراحی شده برای سهولت در تخلیه و نگهداری',
  icon: '/icons/trash-can.png'
  },
  {
    id: 10,
    name: 'المان‌های شهری',
    title: 'المان‌های دکوراتیو و هنری شهری',
    description: 'المان‌های هنری و دکوراتیو برای زیباسازی فضای شهری، طراحی شده با الهام از هنر و فرهنگ ایرانی، ساخته شده از مواد با دوام و مقاوم در برابر شرایط محیطی، قابل سفارشی‌سازی براساس هویت بصری شهر',
    icon: null // Now this is valid because we updated the type
  }
];

// Sample products for display (single declaration)
const allProducts: Product[] = [
  { id: 1, image: '/images/InShot_20241024_002206453.jpg', categoryId: 8 },
  { id: 2, image: '/images/InShot_20241024_002244501.jpg', categoryId: 8 },
  { id: 3, image: '/images/InShot_20241024_002531224.jpg', categoryId: 2 },
  { id: 4, image: '/images/InShot_20241024_002601027.jpg', categoryId: 2 },
  { id: 5, image: '/images/InShot_20241024_002736730.jpg', categoryId: 1 },
  { id: 6, image: '/images/InShot_20241024_002821082.jpg', categoryId: 1 },
  { id: 7, image: '/images/InShot_20241024_002851041.jpg', categoryId: 2 },
  { id: 8, image: '/images/InShot_20241024_002929933.jpg', categoryId: 3 },
  { id: 9, image: '/images/InShot_20241024_003004535.jpg', categoryId: 8 },
  { id: 10, image: '/images/InShot_20241024_003036344.jpg', categoryId: 2 },
  { id: 11, image: '/images/InShot_20241024_003110581.jpg', categoryId: 8 },
  { id: 12, image: '/images/InShot_20241024_003139893.jpg', categoryId: 2 },
  { id: 13, image: '/images/InShot_20241024_003234757.jpg', categoryId: 2 },
  { id: 14, image: '/images/InShot_20241024_003333488.jpg', categoryId: 9 },
  { id: 15, image: '/images/InShot_20241024_003407869.jpg', categoryId: 2 },
  { id: 16, image: '/images/InShot_20241024_003521311.jpg', categoryId: 9 },
  { id: 17, image: '/images/InShot_20241024_003558252.jpg', categoryId: 8 },
  { id: 18, image: '/images/InShot_20241024_003639476.jpg', categoryId: 3 },
  { id: 19, image: '/images/InShot_20241024_003717802.jpg', categoryId: 9 },
  { id: 20, image: '/images/InShot_20241024_003801788.jpg', categoryId: 8 },
  { id: 21, image: '/images/InShot_20241024_003937810.jpg', categoryId: 8 },
  { id: 22, image: '/images/InShot_20241024_004021062.jpg', categoryId: 9 },
  { id: 23, image: '/images/InShot_20241024_004152296.jpg', categoryId: 2 },
  { id: 24, image: '/images/InShot_20241024_004328197.jpg', categoryId: 10 },
  { id: 25, image: '/images/InShot_20241024_004408391.jpg', categoryId: 9 },
  { id: 26, image: '/images/InShot_20241024_004536865.jpg', categoryId: 9 },
  { id: 27, image: '/images/InShot_20241024_004616987.jpg', categoryId: 8 },
  { id: 28, image: '/images/InShot_20241024_004657825.jpg', categoryId: 8 },
  { id: 29, image: '/images/InShot_20241024_004801107.jpg', categoryId: 8 },
  { id: 30, image: '/images/InShot_20241024_004844222.jpg', categoryId: 2 },
  { id: 31, image: '/images/InShot_20241024_004940453.jpg', categoryId: 8 },
  { id: 32, image: '/images/InShot_20241024_005029390.jpg', categoryId: 2 },
  { id: 33, image: '/images/InShot_20241024_005222410.jpg', categoryId: 10 },
  { id: 34, image: '/images/InShot_20241024_005324812.jpg', categoryId: 9 },
  { id: 35, image: '/images/InShot_20241024_005411775.jpg', categoryId: 2 },
  { id: 36, image: '/images/InShot_20241024_005457416.jpg', categoryId: 2 },
  { id: 37, image: '/images/InShot_20241024_005610756.jpg', categoryId: 9 },
  { id: 38, image: '/images/InShot_20241024_005656654.jpg', categoryId: 3 },
  { id: 39, image: '/images/InShot_20241024_005815558.jpg', categoryId: 8 },
  { id: 40, image: '/images/InShot_20241024_005930511.jpg', categoryId: 2 },
  { id: 41, image: '/images/InShot_20241024_065133096.jpg', categoryId: 2 },
  { id: 42, image: '/images/InShot_20241024_065222507.jpg', categoryId: 2 },
  { id: 43, image: '/images/InShot_20241024_065309933.jpg', categoryId: 8 },
  { id: 44, image: '/images/InShot_20241024_065407284.jpg', categoryId: 1 },
  { id: 45, image: '/images/photo_2024-10-23_03-46-16.jpg', categoryId: 9 },
  { id: 46, image: '/images/photo_2024-10-23_03-46-20.jpg', categoryId: 8 },
  { id: 47, image: '/images/photo_2024-10-22_00-17-14.jpg', categoryId: 4 },
  { id: 48, image: '/images/photo_2024-10-23_12-12-49.jpg', categoryId: 4 },
  { id: 49, image: '/images/photo_2024-10-23_12-13-08.jpg', categoryId: 4 },
  { id: 50, image: '/images/photo_2024-10-24_00-29-04.jpg', categoryId: 9 },
  { id: 51, image: '/images/photo_2024-10-24_00-29-41.jpg', categoryId: 6 },
  { id: 52, image: '/images/photo_2024-10-22_00-17-08.jpg', categoryId: 10 },
  { id: 53, image: '/images/photo_2024-10-22_00-17-09.jpg', categoryId: 10 },
  { id: 54, image: '/images/photo_2024-10-22_00-17-12.jpg', categoryId: 10 },
  { id: 55, image: '/images/photo_2024-10-23_03-45-40-ink.jpg', categoryId: 8 },
  { id: 56, image: '/images/photo_2024-10-24_00-29-48.jpg', categoryId: 2 },
  { id: 57, image: '/images/photo_2024-10-24_00-30-06.jpg', categoryId: 4 },
  { id: 58, image: '/images/photo_2024-10-24_00-30-23.jpg', categoryId: 5 },
  { id: 59, image: '/images/photo_2024-10-24_00-31-41.jpg', categoryId: 3 },
  { id: 60, image: '/images/photo_2024-10-24_02-52-56.jpg', categoryId: 5 },
  { id: 62, image: '/images/photo_2024-10-27_01-52-03.jpg', categoryId: 4 },
  { id: 63, image: '/images/photo_2024-10-27_01-54-03.jpg', categoryId: 10 },
  { id: 64, image: '/images/photo_2024-10-27_01-57-41.jpg', categoryId: 2 },
  { id: 65, image: '/images/photo_2024-10-27_01-58-58.jpg', categoryId: 2 },
  { id: 66, image: '/images/photo_2024-10-27_01-59-31.jpg', categoryId: 2 },
  { id: 67, image: '/images/photo_2024-10-27_01-59-55.jpg', categoryId: 3 },
  { id: 68, image: '/images/photo_2024-10-27_02-00-47.jpg', categoryId: 1 },
  { id: 69, image: '/images/photo_2024-10-27_02-04-25.jpg', categoryId: 1 },
  { id: 70, image: '/images/photo_2024-10-27_02-04-42.jpg', categoryId: 1 },
  { id: 71, image: '/images/photo_2024-10-27_02-04-46.jpg', categoryId: 1 },
  { id: 72, image: '/images/photo_2024-10-27_02-42-57.jpg', categoryId: 1 },
  { id: 73, image: '/images/photo_2024-10-27_02-04-58.jpg', categoryId: 8 },
  { id: 74, image: '/images/photo_2024-10-27_02-05-18.jpg', categoryId: 8 },
  { id: 75, image: '/images/photo_2024-10-27_02-05-41.jpg', categoryId: 8 },
  { id: 76, image: '/images/photo_2024-10-27_02-05-48.jpg', categoryId: 8 },
  { id: 77, image: '/images/photo_2024-10-27_02-06-02.jpg', categoryId: 2 },
  { id: 78, image: '/images/photo_2024-10-27_02-06-12.jpg', categoryId: 1 },
  { id: 79, image: '/images/photo_2024-10-27_02-06-21.jpg', categoryId: 2 },
  { id: 80, image: '/images/photo_2024-10-27_02-06-28.jpg', categoryId: 1 },
  { id: 81, image: '/images/photo_2024-10-27_02-06-39.jpg', categoryId: 3 },
];


const ITEMS_PER_PAGE = 12;

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState(allCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // Filter products based on category
  const filteredProducts = currentCategory.id === 0 
    ? allProducts 
    : allProducts.filter(product => product.categoryId === currentCategory.id);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Get current page products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleProductClick = (product: Product) => {
    const category = categories.find(cat => cat.id === product.categoryId);
    const query = new URLSearchParams({
      image: product.image,
      categoryTitle: category?.title || '',
      categoryDescription: category?.description || ''
    }).toString();
    router.push(`/products/${product.id}?${query}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categories display */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentPage(1);
            }}
            className={`flex items-center justify-start p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
              currentCategory.id === category.id ? 'bg-blue-100' : ''
            }`}
          >
            {category.icon && (
              <Image 
                src={category.icon} 
                alt={category.name} 
                width={32} 
                height={32} 
                className="object-fill w-8 h-8"
              />
            )}
            <span className="text-sm text-gray-700 mr-2">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Category description display */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 font-sahel">{currentCategory.title}</h2>
        <p className="text-gray-600">{currentCategory.description}</p>
      </div>

      {/* Products display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-tertiary-200 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300" 
            onClick={() => handleProductClick(product)}
          >
            <div>
              <Image 
                src={product.image} 
                alt="محصول" 
                width={200} 
                height={200} 
                className="object-cover rounded-lg w-full h-48"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
          >
            قبلی
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page 
                    ? 'bg-primary-300 text-white' 
                    : 'bg-primary-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;