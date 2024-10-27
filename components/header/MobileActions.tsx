import { FC } from 'react'
import { MobileActionsProps } from './types';


export const MobileActions: FC<MobileActionsProps> = ({ }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center bg-white/90 px-4 py-2 rounded-full">
        <i className="ri-customer-service-line mx-1 text-sm text-tertiary-950"></i>
        <span className="text-sm font-medium">۰۹۱۲۵۰۰۰۹۷۹</span>
      </div>
      {/* <Link 
        href="/account" 
        onClick={onActionClick}
        className="w-full border-2 border-secondary-950 bg-transparent text-secondary-950 px-6 py-2 rounded-full hover:bg-secondary-950 hover:text-white transition-all duration-300 text-center font-medium"
      >
        حساب کاربری
      </Link> */}
    </div>
  )
}