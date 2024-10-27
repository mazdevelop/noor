import { FC } from 'react';
// import Link from 'next/link';
import { HeaderActionsProps } from './types';


export const HeaderActions: FC<HeaderActionsProps> = ({ phoneRef }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 z-10">
      <div 
        ref={phoneRef} 
        className="flex items-center ml-2 bg-white/95 hover:bg-white px-4 py-2 rounded-full backdrop-blur-none opacity-0 transition-all duration-300"
      >
        <i className="ri-customer-service-line mx-1 text-sm text-tertiary-950"></i>
        <span className="text-sm font-medium">۰۹۱۲۵۰۰۰۹۷۹</span>
      </div>
    </div>
  );
};