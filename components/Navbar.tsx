'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20, display: "none" },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", display: "block" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-primary-200 text-secondary-950 font-vazir">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-6 mb-2 sm:mb-0">
          <span className="text-sm font-medium">با ما در ارتباط باشید</span>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/ghazalnooreparsa?igsh=OXcyeWw3dDF5amxu" passHref>
              <i className="ri-instagram-fill hover:text-primary-300 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
            <Link href="https://t.me/+3zTjofnPMEZkYThk" passHref>
              <i className="ri-telegram-fill hover:text-primary-300 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
          </div>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-primary-300 transition-colors duration-300">خانه</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary-300 transition-colors duration-300">محصولات</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary-300 transition-colors duration-300">وبلاگ</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary-300 transition-colors duration-300">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-primary-300 transition-colors duration-300">تماس با ما</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main header */}
      <div className="bg-secondary-200 shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Link href="/" className="flex flex-col items-start">
            <h1 className="text-2xl font-bold font-sahel text-tertiary-950">غزال نور</h1>
            <span className="text-xl text-tertiary-950 mt-1 font-sahel mr-28">پارسا</span>
          </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center ml-2">
              <i className="ri-customer-service-line mx-1 text-sm text-tertiary-950"></i>
              <span className="text-sm font-medium">۰۹۱۲۵۰۰۰۹۷۹</span>
            </div>
            <Link href="/" className="w-full sm:w-auto border-2 border-primary-300 bg-transparent text-tertiary-900 px-6 py-2 rounded-full hover:bg-secondary-900 hover:text-primary-300 transition-colors duration-300 text-center font-medium">
              حساب کاربری
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden container mx-auto px-4 py-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-secondary-950 focus:outline-none"
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`sm:hidden fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col justify-between items-center py-8 ${isMenuOpen ? '' : 'hidden'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-secondary-950 focus:outline-none"
        >
          <i className="ri-close-line text-3xl"></i>
        </button>
        <ul ref={menuRef} className="space-y-4 text-center mt-8">
          <li><Link href="/" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={handleLinkClick}>خانه</Link></li>
          <li><Link href="/products" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={handleLinkClick}>محصولات</Link></li>
          <li><Link href="/blog" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={handleLinkClick}>وبلاگ</Link></li>
          <li><Link href="/about" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={handleLinkClick}>درباره ما</Link></li>
          <li><Link href="/contact-us" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={handleLinkClick}>تماس با ما</Link></li>
        </ul>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <i className="ri-customer-service-line mx-1 text-sm text-tertiary-950"></i>
            <span className="text-sm font-medium">09123456789</span>
          </div>
          <Link href="/account" className="border-2 border-primary-300 bg-transparent text-tertiary-900 px-6 py-2 rounded-full hover:bg-secondary-900 hover:text-primary-300 transition-colors duration-300 text-center font-medium" onClick={handleLinkClick}>
            حساب کاربری
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;