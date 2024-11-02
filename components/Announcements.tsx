'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Announcements: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const announcementsRef = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

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

  // بررسی سایز صفحه و تشخیص موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // تنظیم انیمیشن‌ها
  useEffect(() => {
    if (containerRef.current && announcementsRef.current.length > 0) {
      // پاک کردن انیمیشن قبلی اگر وجود داشته باشد
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const announcements = announcementsRef.current;
      const direction = isMobile ? 'x' : 'y';
      const distance = isMobile ? '100%' : '50px';

      // مخفی کردن همه اعلان‌ها در ابتدا
      gsap.set(announcements, { opacity: 0, [direction]: distance });

      // ایجاد تایم‌لاین جدید
      const tl = gsap.timeline({ repeat: -1 });
      timelineRef.current = tl;

      // اضافه کردن انیمیشن برای هر اعلان
      announcements.forEach((announcement) => {
        tl.to(announcement, {
          opacity: 1,
          [direction]: 0,
          duration: 0.5,
          ease: 'power2.out'
        })
        .to(announcement, {
          opacity: 1,
          duration: 3
        })
        .to(announcement, {
          opacity: 0,
          [direction]: `-${distance}`,
          duration: 0.5,
          ease: 'power2.in'
        });
      });
    }
  }, [isMobile]);

  return (
    <div className="bg-secondary-200 rounded-lg  text-tertiary-950 overflow-hidden">
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 relative h-24 md:h-20"
      >
        {announcements.map(({ id, icon, text }, index) => (
          <div 
            key={id}
            ref={el => {
              if (el) announcementsRef.current[index] = el;
            }}
            className="absolute top-0 right-0 w-full text-center flex items-center justify-center px-2 py-1"
          >
            <i className={`${icon} ml-3 text-xl text-secondary-600`}></i>
            <span className="font-sahel text-sm md:text-lg leading-relaxed">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;