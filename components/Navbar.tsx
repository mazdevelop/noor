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
    <header ref={headerRef} className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <span className="text-sm font-medium">با ما در ارتباط باشید</span>
          <div className="flex space-x-4 ml-2">
            <Link href="https://facebook.com" passHref>
              <i className="ri-facebook-fill hover:text-primary-600 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
            <Link href="https://twitter.com" passHref>
              <i className="ri-twitter-fill hover:text-primary-600 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
            <Link href="https://youtube.com" passHref>
              <i className="ri-youtube-fill hover:text-primary-600 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
            <Link href="https://whatsapp.com" passHref>
              <i className="ri-whatsapp-fill hover:text-primary-600 transition-colors duration-300 cursor-pointer text-lg"></i>
            </Link>
          </div>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link href="/" className="hover:text-primary-600 transition-colors duration-300 ml-1">خانه</Link></li>
            <li><Link href="/products" className="hover:text-primary-600 transition-colors duration-300">محصولات</Link></li>
            <li><Link href="/blog" className="hover:text-primary-600 transition-colors duration-300">وبلاگ</Link></li>
            <li><Link href="/about" className="hover:text-primary-600 transition-colors duration-300">درباره ما</Link></li>
            <li><Link href="/contact-us" className="hover:text-primary-600 transition-colors duration-300">تماس با ما</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Main header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div>
              <h1 className="text-2xl font-bold text-primary-800">غزال نور </h1>
              <span className="text-sm text-primary-600">مبلمان شهری</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center ml-2">
              <i className="ri-customer-service-line mr-2 text-sm text-primary-500"></i>
              <span className="text-sm font-medium">۰۹۱۲۵۰۰۰۹۷۹</span>
            </div>
            <Link href="/account" className="w-full sm:w-auto border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 text-center font-medium">
              حساب کاربری
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden container mx-auto px-4 py-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary-900 focus:outline-none"
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`sm:hidden fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col justify-between items-center py-8 ${isMenuOpen ? '' : 'hidden'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-primary-900 focus:outline-none"
        >
          <i className="ri-close-line text-3xl"></i>
        </button>
        <ul ref={menuRef} className="space-y-4 text-center mt-8">
          <li><Link href="/" className="block text-xl hover:text-primary-600 transition-colors duration-300" onClick={handleLinkClick}>خانه</Link></li>
          <li><Link href="/products" className="block text-xl hover:text-primary-600 transition-colors duration-300" onClick={handleLinkClick}>محصولات</Link></li>
          <li><Link href="/blog" className="block text-xl hover:text-primary-600 transition-colors duration-300" onClick={handleLinkClick}>وبلاگ</Link></li>
          <li><Link href="/about" className="block text-xl hover:text-primary-600 transition-colors duration-300" onClick={handleLinkClick}>درباره ما</Link></li>
          <li><Link href="/contact" className="block text-xl hover:text-primary-600 transition-colors duration-300" onClick={handleLinkClick}>تماس با ما</Link></li>
        </ul>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <i className="ri-customer-service-line mr-2 text-sm text-primary-500"></i>
            <span className="text-sm font-medium">09123456789</span>
          </div>
          <Link href="/account" className="border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 text-center font-medium" onClick={handleLinkClick}>
            حساب کاربری
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;