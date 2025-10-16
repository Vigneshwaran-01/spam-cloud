import React from 'react'
import Link from 'next/link'

export default function FOOTER() {
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-t border-slate-700/30'>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          
          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className='text-white font-semibold text-base mb-3 tracking-wide'>Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    Sixth Star Technologies, Siri Towers,<br/>
                    1st Floor, No.3 & 4, Fourrts Avenue,<br/>
                    Annai Indira Nagar, Thoraipakkam,<br/>
                    Chennai - 600 097
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <Link href="tel:+914443869199" className="text-blue-400 hover:text-white transition-colors">(044) 43869199</Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <Link href="mailto:sales@sixthstar.in" className="text-blue-400 hover:text-white transition-colors">sales@sixthstar.in</Link>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className='text-white pl-0 font-semibold text-left text-base mb-3 tracking-wide'>Services</h3>
            <ul className="space-y-2 text-sm pl-0 text-blue-500">
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="/services/incoming-filter">
              
                Incoming Spam Filter
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="/services/outgoing-filter">
               
                Outgoing Spam Filter
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/mail-services/carbonio-mail">
                
                Carbonio Mail
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/high-availability">
               
                High Availability
              </Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className='text-white font-semibold  text-base mb-3 tracking-wide'>Company</h3>
            <ul className="space-y-2 text-sm text-left pl-0 ">
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="/about">
                
                About Us
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="/client">
               
                Clients
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="/contact">
               
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Hosting Column */}
          <div>
            <h3 className='text-white font-semibold text-base mb-3  text-left tracking-wide'>Hosting</h3>
            <ul className="space-y-2 text-sm text-left pl-0 ">
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/ssl-certificate">
              
                SSL Certificate
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/servers/dedicated-server">
               
                Dedicated Hosting
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/servers/vps-server-hosting">
                
                VPS Hosting
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/servers/cloud-hosting-services">
                
                Cloud Hosting
              </Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all duration-200 flex items-center group hover:translate-x-1" href="https://sixthstartech.com/servers/web-hosting">
                
                Web Hosting
              </Link></li>
            </ul>
          </div>

          {/* Certification Column */}
          <div>
            <h3 className='text-white font-semibold text-base mb-3 tracking-wide'>Certification</h3>
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <img 
                className='w-full h-auto rounded-lg' 
                src="https://res.cloudinary.com/daggx9p24/image/upload/v1727067938/iso-sixthstartech_uq1nq6.jpg" 
                alt="ISO Certificate - Sixth Star Technologies" 
              />
              <p className="text-xs text-slate-400 mt-2 text-center">ISO 9001:2015 Certified</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t border-slate-700/30">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Left Side - Company Info & Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-slate-300 font-medium">
                  © {new Date().getFullYear()} Sixth Star Technologies
                </div>
                <div className="text-xs text-slate-500">
                  All rights reserved. Trusted by businesses worldwide.
                </div>
              </div>
              
            
            </div>

            {/* Right Side - Links & Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
                <Link href="/sitemap" className="text-slate-400 hover:text-white transition-colors duration-200">Sitemap</Link>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}
