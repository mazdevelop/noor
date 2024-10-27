import { FC } from 'react';
import Link from 'next/link';

export const SocialLinks: FC = () => {
  return (
    <div className="flex gap-4">
      <Link href="https://www.instagram.com/ghazalnooreparsa?igsh=OXcyeWw3dDF5amxu" passHref>
        <i className="ri-instagram-fill hover:text-primary-300 transition-colors duration-300 cursor-pointer text-lg"></i>
      </Link>
      <Link href="https://t.me/+3zTjofnPMEZkYThk" passHref>
        <i className="ri-telegram-fill hover:text-primary-300 transition-colors duration-300 cursor-pointer text-lg"></i>
      </Link>
    </div>
  );
};