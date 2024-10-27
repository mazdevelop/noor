import { FC } from 'react';
import Link from 'next/link';
import { BrandLogoProps } from './types';

export const BrandLogo: FC<BrandLogoProps> = ({ titleRef, subtitleRef }) => {
  return (
    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
      <Link href="/" className="flex flex-col items-start">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold font-sahel text-white  drop-shadow-lg "
        >
          غزال نور
        </h1>
        <span 
          ref={subtitleRef} 
          className="text-3xl md:text-4xl text-white mt-2 font-sahel mr-28 drop-shadow-lg "
        >
          پارسا
        </span>
      </Link>
    </div>
  );
};