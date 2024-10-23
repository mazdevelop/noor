'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define interfaces
interface Product {
  id: number;
  name: string;
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
  { id: 1, name: 'محصول ۱', image: '/images/IMG_2881.jpg', categoryId: 7 },
  { id: 2, name: 'محصول ۲', image: '/images/IMG_2890.jpg', categoryId: 3 },
  { id: 3, name: 'محصول ۳', image: '/images/IMG_3150.jpg', categoryId: 5 },
  { id: 4, name: 'محصول ۴', image: '/images/IMG_3203.JPG', categoryId: 2 },
  { id: 5, name: 'محصول ۵', image: '/images/IMG_3204.JPG', categoryId: 8 },
  { id: 6, name: 'محصول ۶', image: '/images/IMG_3633.jpg', categoryId: 4 },
  { id: 7, name: 'محصول ۷', image: '/images/IMG_3690.jpg', categoryId: 1 },
  { id: 8, name: 'محصول ۸', image: '/images/IMG_3862.jpg', categoryId: 9 },
  { id: 9, name: 'محصول ۹', image: '/images/IMG_4277.jpg', categoryId: 6 },
  { id: 10, name: 'محصول ۱۰', image: '/images/IMG_4282.jpg', categoryId: 10 },
  { id: 11, name: 'محصول ۱۱', image: '/images/IMG_4284.JPG', categoryId: 3 },
  { id: 12, name: 'محصول ۱۲', image: '/images/IMG_5032.jpg', categoryId: 7 },
  { id: 13, name: 'محصول ۱۳', image: '/images/IMG_5054.jpg', categoryId: 5 },
  { id: 14, name: 'محصول ۱۴', image: '/images/IMG_5057.jpg', categoryId: 2 },
  { id: 15, name: 'محصول ۱۵', image: '/images/IMG_5920.jpg', categoryId: 8 },
  { id: 16, name: 'محصول ۱۶', image: '/images/IMG_6116.jpg', categoryId: 1 },
  { id: 17, name: 'محصول ۱۷', image: '/images/IMG_6163.jpg', categoryId: 4 },
  { id: 18, name: 'محصول ۱۸', image: '/images/IMG_6216.jpg', categoryId: 9 },
  { id: 19, name: 'محصول ۱۹', image: '/images/IMG_6238.jpg', categoryId: 6 },
  { id: 20, name: 'محصول ۲۰', image: '/images/IMG_6246.jpg', categoryId: 3 },
  { id: 21, name: 'محصول ۲۱', image: '/images/IMG_6252.jpg', categoryId: 7 },
  { id: 22, name: 'محصول ۲۲', image: '/images/IMG_6278.jpg', categoryId: 5 },
  { id: 23, name: 'محصول ۲۳', image: '/images/IMG_6288.jpg', categoryId: 10 },
  { id: 24, name: 'محصول ۲۴', image: '/images/IMG_6301.jpg', categoryId: 2 },
  { id: 25, name: 'محصول ۲۵', image: '/images/IMG_6304.jpg', categoryId: 8 },
  { id: 26, name: 'محصول ۲۶', image: '/images/IMG_6323.jpg', categoryId: 1 },
  { id: 27, name: 'محصول ۲۷', image: '/images/IMG_6344.jpg', categoryId: 4 },
  { id: 28, name: 'محصول ۲۸', image: '/images/IMG_6515.jpg', categoryId: 9 },
  { id: 29, name: 'محصول ۲۹', image: '/images/IMG_6838.jpg', categoryId: 6 },
  { id: 30, name: 'محصول ۳۰', image: '/images/IMG_6891.jpg', categoryId: 3 },
  { id: 31, name: 'محصول ۳۱', image: '/images/IMG_6905.jpg', categoryId: 7 },
  { id: 32, name: 'محصول ۳۲', image: '/images/IMG_7119.jpg', categoryId: 5 },
  { id: 33, name: 'محصول ۳۳', image: '/images/IMG_7214.JPG', categoryId: 2 },
  { id: 34, name: 'محصول ۳۴', image: '/images/IMG_7335.jpg', categoryId: 8 },
  { id: 35, name: 'محصول ۳۵', image: '/images/IMG_7361.jpg', categoryId: 1 },
  { id: 36, name: 'محصول ۳۶', image: '/images/IMG_7487.jpg', categoryId: 4 },
  { id: 37, name: 'محصول ۳۷', image: '/images/IMG_7496.jpg', categoryId: 9 },
  { id: 38, name: 'محصول ۳۸', image: '/images/IMG_7500.jpg', categoryId: 6 },
  { id: 39, name: 'محصول ۳۹', image: '/images/IMG_7634.jpg', categoryId: 3 },
  { id: 40, name: 'محصول ۴۰', image: '/images/IMG_7708.jpg', categoryId: 7 },
  { id: 41, name: 'محصول ۴۱', image: '/images/IMG_7823.jpg', categoryId: 5 },
  { id: 42, name: 'محصول ۴۲', image: '/images/IMG_7833.jpg', categoryId: 10 },
  { id: 43, name: 'محصول ۴۳', image: '/images/IMG_7872.jpg', categoryId: 2 },
  { id: 44, name: 'محصول ۴۴', image: '/images/IMG_8240.jpg', categoryId: 8 },
  { id: 45, name: 'محصول ۴۵', image: '/images/photo_2024-10-23_03-44-33.jpg', categoryId: 1 },
  { id: 46, name: 'محصول ۴۶', image: '/images/photo_2024-10-23_03-44-48.jpg', categoryId: 4 },
  { id: 47, name: 'محصول ۴۷', image: '/images/photo_2024-10-23_03-44-52.jpg', categoryId: 9 },
  { id: 48, name: 'محصول ۴۸', image: '/images/photo_2024-10-23_03-44-56.jpg', categoryId: 6 },
  { id: 49, name: 'محصول ۴۹', image: '/images/photo_2024-10-23_03-45-03.jpg', categoryId: 3 },
  { id: 50, name: 'محصول ۵۰', image: '/images/photo_2024-10-23_03-45-09.jpg', categoryId: 7 },
  { id: 51, name: 'محصول ۵۱', image: '/images/photo_2024-10-23_03-45-13.jpg', categoryId: 5 },
  { id: 52, name: 'محصول ۵۲', image: '/images/photo_2024-10-23_03-45-21.jpg', categoryId: 2 },
  { id: 53, name: 'محصول ۵۳', image: '/images/photo_2024-10-23_03-45-36.jpg', categoryId: 8 },
  { id: 54, name: 'محصول ۵۴', image: '/images/photo_2024-10-23_03-45-40.jpg', categoryId: 1 },
  { id: 55, name: 'محصول ۵۵', image: '/images/photo_2024-10-23_03-46-08.jpg', categoryId: 4 },
  { id: 56, name: 'محصول ۵۶', image: '/images/photo_2024-10-23_03-46-12.jpg', categoryId: 9 },
  { id: 57, name: 'محصول ۵۷', image: '/images/photo_2024-10-23_03-46-16.jpg', categoryId: 6 },
  { id: 58, name: 'محصول ۵۸', image: '/images/photo_2024-10-23_03-46-20.jpg', categoryId: 3 },
  { id: 59, name: 'محصول ۵۹', image: '/images/photo_2024-10-23_03-46-24.jpg', categoryId: 7 },
  { id: 60, name: 'محصول ۶۰', image: '/images/photo_2024-10-23_03-46-28.jpg', categoryId: 5 },
  { id: 61, name: 'محصول ۶۱', image: '/images/photo_2024-10-23_03-46-32.jpg', categoryId: 10 },
  { id: 62, name: 'محصول ۶۲', image: '/images/photo_2024-10-23_03-46-37.jpg', categoryId: 2 },
  { id: 63, name: 'محصول ۶۳', image: '/images/photo_2024-10-23_03-46-43.jpg', categoryId: 8 },
  { id: 64, name: 'محصول ۶۴', image: '/images/photo_2024-10-23_03-46-48.jpg', categoryId: 1 },
  { id: 65, name: 'محصول ۶۵', image: '/images/photo_2024-10-23_03-46-51.jpg', categoryId: 4 },
  { id: 66, name: 'محصول ۶۶', image: '/images/photo_2024-10-23_03-46-57.jpg', categoryId: 9 }
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
      name: product.name,
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
        <h2 className="text-2xl font-bold mb-2">{currentCategory.title}</h2>
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
                alt={product.name} 
                width={200} 
                height={200} 
                className="object-cover rounded-lg w-full h-48"
              />
              <h3 className="text-lg font-bold mt-2 text-right">{product.name}</h3>
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