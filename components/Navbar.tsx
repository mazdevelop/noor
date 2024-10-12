// src/components/Navbar.tsx
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href={`/${pathname.locale}/`}>{t('home')}</Link>
        </li>
        <li>
          <Link href={`/${pathname.locale}/about-us`}>{t('about')}</Link>
        </li>
        {/* Add more links */}
      </ul>
    </nav>
  );
}
