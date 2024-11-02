import { Category } from '@/types';
  
   export const allCategory: Category = {
        id: 0,
        name: 'همه محصولات',
        title: 'نمایش تمام محصولات',
        description: 'مشاهده تمامی محصولات موجود در تمام دسته‌بندی‌ها',
        icon: '/icons/all-products.png'
    };
  // Categories with complete descriptions
  export const categories: Category[] = [
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