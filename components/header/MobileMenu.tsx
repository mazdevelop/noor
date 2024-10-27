'use client'
import { FC ,useRef, useEffect } from 'react'
import { MobileMenuProps } from './types';
import { gsap } from 'gsap'
import { MobileNavLinks } from './MobileNavLinks'
import { MobileActions } from './MobileActions'

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20, display: "none" },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", display: "block" }
      )
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" })
        },
      })
    }
  }, [isOpen])

  return (
    <nav className={`sm:hidden fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col justify-between items-center py-8 ${isOpen ? '' : 'hidden'}`}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-secondary-950 focus:outline-none"
      >
        <i className="ri-close-line text-3xl"></i>
      </button>
      <MobileNavLinks ref={menuRef} onLinkClick={onClose} />
      <MobileActions onActionClick={onClose} />
    </nav>
  )
}
