import React from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Facebook } from 'lucide-react'; // Using lucide-react for icons

// Component for the social media icons
const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
    aria-label={Icon.displayName || 'Social Link'}
  >
    <Icon className="w-4 h-4" />
  </a>
);

// The main Footer component
const Footer = () => {
  // Utility component to replace Next.js Link for standalone compatibility
  const AnchorLink = ({ href, children, className }) => (
    <a href={href} className={className} onClick={(e) => e.preventDefault()} role="link">
      {children}
    </a>
  );

  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-t border-slate-700/30 font-[Barlow Condensed] '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-10 md:gap-y-12 lg:gap-6">
          
          {/* 1. Contact Column (Takes 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <h3 className='text-white font-bold text-lg mb-1 tracking-wider border-b border-blue-500/50 pb-1 w-fit'>Sixth Star Technologies</h3>
            <div className="space-y-4 text-sm">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className='flex-1'>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Sixth Star Technologies, Siri Towers,<br className='hidden sm:block'/>
                    1st Floor, No.3 & 4, Fourrts Avenue,<br className='hidden sm:block'/>
                    Annai Indira Nagar, Thoraipakkam,<br className='hidden sm:block'/>
                    <span className='font-semibold text-white'>Chennai - 600 097</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <AnchorLink href="tel:+914443869199" className="text-blue-400 font-medium hover:text-white transition-colors duration-200 text-base">(044) 43869199</AnchorLink>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <AnchorLink href="mailto:sales@sixthstar.in" className="text-blue-400 font-medium hover:text-white transition-colors duration-200 text-base">sales@sixthstar.in</AnchorLink>
              </div>
              
              
            </div>
          </div>

          {/* 2. Services Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-semibold text-base mb-1 tracking-wide'>Services</h3>
            <ul className="space-y-3 text-sm ml-0 lg:ml-[-30px]">
              <li><AnchorLink className="text-slate-400 ml-0 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="/services/incoming-spam-filter-service-provider-chennai">
                Incoming Spam Filter
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="/services/outgoing-spam-filter-service-provider-chennai">
                Outgoing Spam Filter
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/mail-services/carbonio-mail">
                Carbonio Mail
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/high-availability">
                High Availability
              </AnchorLink></li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-semibold text-base mb-1 tracking-wide'>Company</h3>
            <ul className="space-y-3 text-sm ml-0 lg:ml-[-30px]">
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="/about">
                About Us
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px]  hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="/client">
                Clients
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px]  hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="/contact">
                Contact
              </AnchorLink></li>
            </ul>
          </div>

          {/* 4. Hosting Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-semibold text-base mb-1 tracking-wide'>Hosting</h3>
            <ul className="space-y-3 text-sm ml-0 lg:ml-[-30px]">
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/ssl-certificate">
                SSL Certificate
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/servers/dedicated-server">
                Dedicated Hosting
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/servers/vps-server-hosting">
                VPS Hosting
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/servers/cloud-hosting-services">
                Cloud Hosting
              </AnchorLink></li>
              <li><AnchorLink className="text-slate-400 text-[16px] hover:text-blue-400 transition-all duration-200 flex items-center group hover:translate-x-0.5" href="https://sixthstartech.com/servers/web-hosting">
                Web Hosting
              </AnchorLink></li>
            </ul>
          </div>

          {/* 5. Certification Column - Takes 2 columns on tablet for better centering */}
          <div className="lg:col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className='text-white font-semibold text-base mb-1 tracking-wide'>Certification</h3>
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-1 border border-slate-600/30 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none">
              <img 
               className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto h-auto rounded-lg shadow-xl"
                src="https://res.cloudinary.com/daggx9p24/image/upload/v1727067938/iso-sixthstartech_uq1nq6.jpg" 
                alt="ISO Certificate - Sixth Star Technologies" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x100/1e293b/94a3b8?text=ISO+Cert" }}
              />
              <p className="text-sm text-slate-400 mt-3 text-center font-medium">ISO 9001:2015 Certified</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Left Side - Company Info */}
            <div className="flex flex-col gap-2 order-2 lg:order-1">
              <div className="text-sm text-slate-400 font-medium">
                © {new Date().getFullYear()} Sixth Star Technologies
              </div>
              <div className="text-xs text-slate-600">
                All rights reserved. Trusted by businesses worldwide.
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm order-1 lg:order-2">
                <AnchorLink href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">Privacy Policy</AnchorLink>
                <AnchorLink href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">Terms of Service</AnchorLink>
                <AnchorLink href="/sitemap" className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">Sitemap</AnchorLink>
                <div className="text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    System Status: Operational
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;