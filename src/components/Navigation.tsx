
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Trang chủ', href: '#home' },
  { name: 'Tính năng', href: '#features' },
  { name: 'Cách thức hoạt động', href: '#howItWorks' },
  { name: 'Chứng thực', href: '#testimonials' },
  { name: 'Báo giá', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-background/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-medium tracking-tight text-white">
              Bot<span className="text-primary">BH</span>
            </a>
          </div>
          
          {!isMobile ? (
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ) : (
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          )}
          
          {!isMobile && (
            <a href="#contact" className="neuro-button">
              Bắt đầu
            </a>
          )}
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-background backdrop-blur-xl transform ${
          mobileMenuOpen ? 'animate-menu-in' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-2xl font-medium tracking-tight text-white">
              Bot<span className="text-primary">BH</span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-md text-white/80 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="neuro-button text-center" onClick={toggleMobileMenu}>
              Bắt đầu
            </a>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
};

export default Navigation;
