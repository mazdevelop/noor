import { forwardRef } from 'react';
import Link from 'next/link';
import { MobileNavLinksProps } from './types';

export const MobileNavLinks = forwardRef<HTMLUListElement, MobileNavLinksProps>(
  ({ onLinkClick }, ref) => {
    return (
      <ul ref={ref} className="space-y-4 text-center mt-8">
        <li><Link href="/" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={onLinkClick}>خانه</Link></li>
        <li><Link href="/products" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={onLinkClick}>محصولات</Link></li>
        <li><Link href="/blog" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={onLinkClick}>وبلاگ</Link></li>
        <li><Link href="/about" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={onLinkClick}>درباره ما</Link></li>
        <li><Link href="/contact-us" className="block text-xl hover:text-primary-300 transition-colors duration-300" onClick={onLinkClick}>تماس با ما</Link></li>
      </ul>
    );
  }
);
MobileNavLinks.displayName = 'MobileNavLinks';
