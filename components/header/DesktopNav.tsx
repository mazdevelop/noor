import Link from 'next/link';

export const DesktopNav = () => {
    return (
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-primary-300 transition-colors duration-300">خانه</Link></li>
          <li><Link href="/products" className="hover:text-primary-300 transition-colors duration-300">محصولات</Link></li>
          <li><Link href="/blog" className="hover:text-primary-300 transition-colors duration-300">وبلاگ</Link></li>
          <li><Link href="/about" className="hover:text-primary-300 transition-colors duration-300">درباره ما</Link></li>
          <li><Link href="/contact-us" className="hover:text-primary-300 transition-colors duration-300">تماس با ما</Link></li>
        </ul>
      </nav>
    )
  }
  