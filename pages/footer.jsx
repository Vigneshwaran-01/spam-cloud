import React from 'react'
import Link from 'next/link'

export default function FOOTER() {
  return (
    <footer className='bg-[#011333] text-slate-300'>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Contact Column */}
          <div className="lg:col-span-1 lg:w-[calc(100%+20px)]">
            <h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wide'>CONTACT</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400 leading-relaxed">
                  Address: Sixth Star Technologies, Siri Towers, 1st Floor, No.3 & 4, Fourrts Avenue, Annai Indira Nagar, Thoraipakkam, Chennai - 600 097.
                </p>
              </div>
              <div>
                <p className="text-slate-400">
                  Phone: <Link href="tel:+914443869199" className="text-blue-400 hover:text-blue-300 transition-colors">(044) 43869199</Link>
                </p>
              </div>
              <div>
                <p className="text-slate-400 flex flex-wrap items-center gap-1">
                  <span>Email:</span>
                  <Link href="mailto:sales@sixthstar.in" className="text-blue-400 text-md hover:text-blue-300 transition-colors">sales@sixthstar.in</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wide'>SERVICES</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services/incoming-filter">Incoming Spam Filter</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services/outgoing-filter">Outgoing Spam Filter</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/mail-services/carbonio-mail">Carbonio Mail</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/high-availability">High Availability</Link></li>
            </ul>
          </div>

          {/* Our Company Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wide'>OUR COMPANY</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/about">About Us</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/client">Clients</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Other Services Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wide'>OTHER SERVICES</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/ssl-certificate">SSL Certificate</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/servers/dedicated-server">Dedicated Hosting</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/servers/vps-server-hosting">VPS Hosting</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/servers/cloud-hosting-services">Cloud Hosting</Link></li>
              <li><Link className="text-slate-400 hover:text-blue-400 transition-colors" href="https://sixthstartech.com/servers/web-hosting">Web Hosting</Link></li>
            </ul>
          </div>

          {/* ISO Certificate Column */}
          <div className="lg:col-span-1">
            <h3 className='text-white font-bold text-lg mb-6 uppercase tracking-wide'>ISO CERTIFICATE</h3>
            <div className="bg-white/5 rounded-lg p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <img 
                className='w-full h-auto rounded-md' 
                src="https://res.cloudinary.com/daggx9p24/image/upload/v1727067938/iso-sixthstartech_uq1nq6.jpg" 
                alt="ISO Certificate - Sixth Star Technologies" 
              />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Sixth Star Technologies. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-blue-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}
