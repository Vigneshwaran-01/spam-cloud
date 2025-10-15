import React, { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reusable Tailwind classes following best practices
  const headerClasses = `fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ease-in-out overflow-visible ${
    isScrolled 
      ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700' 
      : 'bg-black border-b border-gray-800'
  }`;
  
  const containerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const flexCenterClasses = "flex items-center justify-between h-16 lg:h-20";
  const navLinkClasses = "text-white hover:text-emerald-400 transition-all duration-200 font-medium text-sm lg:text-xl cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";
  const buttonBaseClasses = "flex items-center gap-2 transition-all duration-200 font-medium text-sm";
  const iconButtonClasses = `${buttonBaseClasses} text-white hover:text-emerald-400 hover:bg-white/10 px-3 py-2 rounded-md`;
  const dropdownClassesBase = "absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-all duration-200 z-[10000] pointer-events-auto";
  const dropdownLinkClasses = "block px-4 py-3 text-white hover:bg-gray-700 hover:text-emerald-400 transition-colors duration-200 text-sm";

  return (
    <>
      {/* Header */}
      <header className={headerClasses}>
        <div className={containerClasses}>
          <div className={flexCenterClasses}>
            {/* Left Section - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  className="h-8 sm:h-10 lg:h-16 w-auto" 
                  src="https://res.cloudinary.com/daggx9p24/image/upload/v1729667110/SPAM_CLOUD_tuomse.png" 
                  alt="Spam Cloud" 
                />
              </Link>
            </div>

            {/* Center Section - Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <Link href="/" className={navLinkClasses}>
                Home
              </Link>
              
              <Link href="/about" className={navLinkClasses}>
                About
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  type="button" 
                  className={`${navLinkClasses} flex items-center gap-2`}
                  aria-haspopup="menu" 
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`${dropdownClassesBase} ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0`}>
                  <Link href="/services/incoming-filter" className={dropdownLinkClasses}>
                    Incoming Spam Filter
                  </Link>
                  <Link href="/services/outgoing-filter" className={dropdownLinkClasses}>
                    Outgoing Spam Filter
                  </Link>
                  <Link href="https://sixthstartech.com/mail-services/carbonio-mail" className={dropdownLinkClasses}>
                    Carbonio Mail
                  </Link>
                  <Link href="https://sixthstartech.com/high-availability" className={dropdownLinkClasses}>
                    High Availability
                  </Link>
                </div>
              </div>
              
              <Link href="/client" className={navLinkClasses}>
                Clients
              </Link>
              
              <Link href="/blog" className={navLinkClasses}>
                Blog
              </Link>
            </nav>

            {/* Right Section - Contact Us Button */}
            <div className="flex items-center">
              {/* Contact Us Button - Always visible */}
              <Link 
                href="/contact" 
                className="bg-[#46e874] hover:bg-emerald-400 active:bg-emerald-500 text-black px-4 py-3 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5 sm:gap-2"
                onClick={() => {
                  setIsContactClicked(true);
                  setTimeout(() => setIsContactClicked(false), 300);
                }}
              >
                <span className="hidden sm:inline font-bold">Contact Us</span>
                <span className="sm:hidden font-bold">Contact</span>
                <svg 
                  className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-all duration-300 ${
                    isContactClicked ? 'translate-x-2 scale-110' : ''
                  }`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden flex flex-col gap-1 p-2 ml-3"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-emerald-400 py-2 font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-emerald-400 py-2 font-medium transition-colors duration-200"
              >
                About
              </Link>
              
              {/* Services Submenu */}
              <div className="space-y-2">
                <span className="block text-white py-2 font-medium">Services</span>
                <div className="ml-4 space-y-2">
                  <Link 
                    href="/services/incoming-filter" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-emerald-400 py-1 text-sm transition-colors duration-200"
                  >
                    Incoming Spam Filter
                  </Link>
                  <Link 
                    href="/services/outgoing-filter" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-emerald-400 py-1 text-sm transition-colors duration-200"
                  >
                    Outgoing Spam Filter
                  </Link>
                  <Link 
                    href="https://sixthstartech.com/mail-services/carbonio-mail" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-emerald-400 py-1 text-sm transition-colors duration-200"
                  >
                    Carbonio Mail
                  </Link>
                  <Link 
                    href="https://sixthstartech.com/high-availability" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-emerald-400 py-1 text-sm transition-colors duration-200"
                  >
                    High Availability
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/client" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-emerald-400 py-2 font-medium transition-colors duration-200"
              >
                Clients
              </Link>
              <Link 
                href="/blog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-emerald-400 py-2 font-medium transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}
