import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fa'); // 'fa' or 'en'
  const menuRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  useEffect(() => {
    const menu = menuRef.current;
    const menuItemsArray = menuItemsRef.current ? Array.from(menuItemsRef.current.children) : [];
    const socialItems = Array.from(document.querySelectorAll('.social-item'));
    const overlay = overlayRef.current;

    if (isMenuOpen && menu) {
      gsap.to(menu, {
        x: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      if (menuItemsArray.length > 0) {
        gsap.fromTo(menuItemsArray, 
          {
            x: 50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
          }
        );
      }

      if (socialItems.length > 0) {
        gsap.fromTo(socialItems,
          {
            y: 20,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.6
          }
        );
      }

      if (overlay) {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.4,
          display: 'block'
        });
      }

    } else if (menu && overlay) {
      gsap.to(menu, {
        x: '100%',
        duration: 0.7,
        ease: 'power3.inOut'
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        display: 'none'
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 hidden"
        onClick={closeMenu}
      />

      <header className="fixed top-0 right-0 w-full flex items-center justify-center px-4 py-3 bg-secondary-200 shadow-md z-50">
        <div className="flex items-center justify-center w-full max-w-6xl">
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none hover:bg-secondary-300 p-2 rounded-full transition-all">
              <i className={`ri-menu-3-fill text-xl`} />
            </button>
            
            <Link href="/" className="flex flex-col items-center tracking-widest">
              <h1 className="text-xl font-bold mb-0 font-sahel w-[250px] text-center">غــزال نــور پارســا</h1>
              <span className="text-sm text-gray-600 w-[200px] text-center tracking-[0.2em]">GHAZAL NOOR PARSA</span>
            </Link>
          </div>

          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-secondary-300 transition-all"
          >
            <span className="text-xs">{language === 'fa' ? 'EN' : 'فا'}</span>
            <i className="ri-global-fill text-sm" />
          </button>
        </div>
      </header>

      <div className="h-20"></div>

      <nav
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-72 bg-secondary-200 shadow-lg transform translate-x-full z-50"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <button 
            onClick={closeMenu}
            className="text-gray-700 focus:outline-none hover:bg-secondary-300 p-2 rounded-full transition-all"
          >
            <i className="ri-close-line text-xl" />
          </button>
        </div>

        <ul ref={menuItemsRef} className="mt-8 space-y-2 text-base">
          <li className="opacity-0">
            <Link href="/" className="flex items-center px-6 py-3 hover:bg-secondary-300 transition-all" onClick={closeMenu}>
              <i className="ri-home-line ml-3 text-lg" /> 
              <span>{language === 'fa' ? 'صفحه اصلی' : 'Home'}</span>
            </Link>
          </li>
          <li className="opacity-0">
            <Link href="/products" className="flex items-center px-6 py-3 hover:bg-secondary-300 transition-all" onClick={closeMenu}>
              <i className="ri-shopping-bag-line ml-3 text-lg" /> 
              <span>{language === 'fa' ? 'محصولات' : 'Products'}</span>
            </Link>
          </li>
          <li className="opacity-0">
            <Link href="/blog" className="flex items-center px-6 py-3 hover:bg-secondary-300 transition-all" onClick={closeMenu}>
              <i className="ri-article-line ml-3 text-lg" /> 
              <span>{language === 'fa' ? 'بلاگ' : 'Blog'}</span>
            </Link>
          </li>
          <li className="opacity-0">
            <Link href="/about" className="flex items-center px-6 py-3 hover:bg-secondary-300 transition-all" onClick={closeMenu}>
              <i className="ri-information-line ml-3 text-lg" /> 
              <span>{language === 'fa' ? 'درباره ما' : 'About Us'}</span>
            </Link>
          </li>
          <li className="opacity-0">
            <Link href="/contact-us" className="flex items-center px-6 py-3 hover:bg-secondary-300 transition-all" onClick={closeMenu}>
              <i className="ri-mail-line ml-3 text-lg" /> 
              <span>{language === 'fa' ? 'تماس با ما' : 'Contact Us'}</span>
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4 text-center">
            {language === 'fa' ? 'ما را در شبکه‌های اجتماعی دنبال کنید' : 'Follow us on social media'}
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Link href="/instagram" className="social-item hover:text-primary-600 flex justify-center items-center h-10 w-10 rounded-full hover:bg-secondary-300 transition-all">
              <i className="ri-instagram-fill text-xl"></i>
            </Link>
            <Link href="/telegram" className="social-item hover:text-primary-600 flex justify-center items-center h-10 w-10 rounded-full hover:bg-secondary-300 transition-all">
              <i className="ri-telegram-fill text-xl"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;