import React from 'react'
import Link from 'next/link'

export default function FOOTER() {
  return (
    <div className='footer-section bg-[#0a1a24] text-slate-300 mt-12'>
        <div className="container max-w-6xl mx-auto px-4 py-12">
  <div className="row gap-y-8">

    {/* column - 1 */}
    <div className="col-lg-4 col-md-12">
    <div className='footer-column'>
                <h3 className='text-left text-white font-semibold tracking-tight mb-3'>Contact</h3>
                <ul className="space-y-2 text-sm leading-6">
                    <li><p>Address: Sixth Star Technologies,
                           Siri Towers, 1st Floor, No.3 & 4,
                           Fourrts Avenue, Annai Indira Nagar,
                           Thoraipakkam, Chennai - 600 097.</p></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="#">Phone: (044) 43869199 </Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="#">Email: sales@sixthstar.in </Link></li>
                </ul>
                
    </div>
    </div>

    {/* column - 2 */}
    <div className="col-lg-4 col-md-12">
    <div className="row ">
    <div className="col-md-6 footer-column">
    <h3 className='text-left text-white font-semibold tracking-tight mb-3'>Services</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="/services/incoming-filter">Incoming Spam Filter</Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="/services/outgoing-filter">Outgoing Spam Filter</Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/mail-services/carbonio-mail">Carbonio Mail</Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/high-availability">High Availability</Link></li>
                </ul>
    </div>

    <div className="col-md-6 footer-column">
    <h3 className='text-left text-white font-semibold tracking-tight mb-3'>Our Company</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="/about">About Us</Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="/client">Clients</Link></li>
                    <li><Link className="hover:text-[#14b8a6] transition-colors" href="/contact">Contact</Link></li>
                </ul>
    </div>

    </div>
    </div>

    {/* column - 3 */}

    <div className="col-lg-4 col-md-12">
    <div className="row ">

<div className="col-md-6 footer-column">
<h3 className='text-left text-white font-semibold tracking-tight mb-3'>Other Services</h3>
            <ul className="space-y-2 text-sm">
                <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/ssl-certificate">SSL Certificate</Link></li>
                <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/servers/dedicated-server">Dedicated Hosting</Link></li>
                <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/servers/vps-server-hosting">VPS Hosting</Link></li>
                <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/servers/cloud-hosting-services">Cloud Hosting</Link></li>
                <li><Link className="hover:text-[#14b8a6] transition-colors" href="https://sixthstartech.com/servers/web-hosting">Web Hosting</Link></li>
            </ul>
</div>

<div className="col-md-6 footer-image">
<h3 className=' text-left footer-image-heading text-white font-semibold tracking-tight mb-3'> ISO Certificate</h3>
            <img className='footer-image rounded-lg border border-[#0f2a38]' src="https://res.cloudinary.com/daggx9p24/image/upload/v1727067938/iso-sixthstartech_uq1nq6.jpg" alt="" />
</div>

</div>
    </div>


  </div>
        </div>
        <div className="mt-10 border-t border-[#0f2a38] pt-4 text-sm text-slate-400">© {new Date().getFullYear()} Sixth Star Technologies. All rights reserved.</div>
        </div>


  )
}
