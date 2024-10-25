'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = (): JSX.Element => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    })
    .to(progressRef.current, {
      duration: 1.5,
      width: "100%",
      ease: "power3.inOut"
    })
    .to(preloaderRef.current, {
      duration: 0.8,
      opacity: 0,
      ease: "power3.inOut",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      }
    });
  }, []);

  return (
    <div 
      ref={preloaderRef} 
      className="fixed inset-0 bg-secondary-700 z-50 flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-center">
        <h1 className="text-white font-sahel text-4xl mb-2">غزال نور <span className='text-2xl'>پارسا</span></h1>
        <p className="text-primary-300 text-lg">به دنیای مبلمان شهری خوش امدید</p>
      </div>
      
      <div className="w-64 h-[2px] bg-primary-700 mt-8 overflow-hidden">
        <div 
          ref={progressRef} 
          className="h-full w-0 bg-primary-300"
        />
      </div>
    </div>
  );
};

export default Preloader;