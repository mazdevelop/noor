import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BrandLogo } from './BrandLogo';
import { HeaderActions } from './HeaderActions';

export const MainHeader: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ابتدا همه المان‌ها را مخفی می‌کنیم
    gsap.set([titleRef.current, subtitleRef.current, phoneRef.current], {
      opacity: 0,
      y: 50
    });
    
    // اورلی را کاملاً تیره می‌کنیم
    gsap.set(overlayRef.current, {
      opacity: 0.4
    });

    const mainTimeline = gsap.timeline({
      defaults: { 
        ease: "power3.out",
        duration: 1
      }
    });

    mainTimeline
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1
      }, "-=0.6")
      .to(phoneRef.current, {
        y: 0,
        opacity: 1,
        duration: 1
      }, "-=0.4");

  }, []);

  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-header-pattern bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundSize: 'cover',
          transform: 'scale(1.02)',
        }}
      />
      
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-6 h-full relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center h-full">
          <BrandLogo titleRef={titleRef} subtitleRef={subtitleRef} />
          <HeaderActions phoneRef={phoneRef} />
        </div>
      </div>
    </div>
  );
};