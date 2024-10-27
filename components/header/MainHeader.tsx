// MainHeader.tsx
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
    const mainTimeline = gsap.timeline({
      defaults: { 
        ease: "power3.out",
        duration: 1
      }
    });

    mainTimeline
      .from(overlayRef.current, {
        opacity: 1,
        duration: 1.5
      })
      .from(titleRef.current, {
        y: 50,
        opacity: 1,
      }, "-=0.8")
      .from(subtitleRef.current, {
        y: 30,
        opacity: 1,
      }, "-=0.6")
      .from(phoneRef.current, {
        y: 20,
        opacity: 1,
      }, "-=0.4");

  }, []);

  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-header-pattern bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundSize: 'cover',
          transform: 'scale(1.02)', // Prevents white edges during zoom
        }}
      />
      
      {/* Overlay that fades out */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/40"
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


