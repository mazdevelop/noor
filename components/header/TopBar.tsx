'use client'
import { SocialLinks } from "./SocialLinks";
import { DesktopNav } from "./DesktopNav";

export const TopBar = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center gap-6 mb-2 sm:mb-0">
        <span className="text-sm font-medium">با ما در ارتباط باشید</span>
        <SocialLinks />
      </div>
      <DesktopNav />
    </div>
  )
}