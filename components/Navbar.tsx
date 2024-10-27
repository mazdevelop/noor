'use client'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TopBar} from './header/TopBar';
import { MainHeader } from './header/MainHeader';
import { MobileMenu } from './header/MobileMenu';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    )
  }, [])

  return (
    <header ref={headerRef} className="bg-primary-200 text-secondary-950 font-vazir">
      <TopBar />
      <MainHeader />
      
      {/* Mobile menu button */}
      <div className="sm:hidden container mx-auto px-4 py-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-secondary-950 focus:outline-none"
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
export default Navbar