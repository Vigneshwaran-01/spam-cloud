import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { StyleSheet, css } from 'aphrodite';
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';
import Image from 'next/image';
import { BackgroundBeams } from "../components/ui/background-beams";
import ContactUsForm from './Forms/ContactUsForm';
import { contactSchema } from '../lib/data/schema';
import { Meteors } from '@/components/ui/meteors';

const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: '2s',
    },
    slideInUp: {
      animationName: slideInUp,
      animationDuration: '2s',
    },
    slideInDown: {
      animationName: slideInDown,
      animationDuration: '2s',
    },
    tada: {
      animationName: tada,
      animationDuration: '15s',
    },
    zoomInDown: {
      animationName: zoomInDown,
      animationDuration: '4s',
    },
    slideInLeft: {
      animationName: slideInLeft,
      animationDuration: '4s',
    },
  });
  
  export async function getServerSideProps() {
    try {
      const res = await fetch('https://strapi.sixthstartech.com/api/contactuses?populate=contact.row,contact.row.phone,contact.row.email,contact.row.website');
  
      // Check if response is OK
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
  
      const data = await res.json();
  
      return {
        props: {
          contactData: data.data[0],
        },
      };
    } catch (error) {
      console.error('Website is under maintenance:', error);
  
      return {
        props: {
          contactData: null,
          error: error.message,
        },
      };
    }
  }


export default function contactNew({ contactData, error }) {
     const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        // Ensures code runs only on the client-side
        setIsClient(true);
      }, []);
    
      if (error) {
        return (
          <div>
            <h1>Error loading data</h1>
            <p>{error}</p>
          </div>
        );
      }
    
      const contact = contactData?.contact || [];

  return (
    <div>
      <Head>
      <title>contact us today Secure Your Inbox - Spam cloud</title>
        <meta name="description" content="Reach out to Spam Cloud today to secure your inbox effectively and protect it from spam emails and cyber threats. Contact us now for unparalleled email security" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/contact" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='contact us today Secure Your Inbox - Spam cloud' />
	<meta property="og:description" content="Reach out to Spam Cloud today to secure your inbox effectively and protect it from spam emails and cyber threats. Contact us now for unparalleled email security" />
	<meta property="og:url" content="https://spamcloud.in/contact" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      </Head>
        {/* Hero Section */}
        <section className="relative min-h-[600px] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our email security experts. We're here to help protect your business from spam and cyber threats.
            </p>
          </div>
          <Meteors number={20} />
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
           
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Map Section */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 hover:shadow-3xl transition-all duration-500">
                  <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Visit Our Office
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Located in the heart of Chennai's tech corridor
                    </p>
                  </div>
                  
                  <div className="aspect-video relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.6483831902!2d80.2334966!3d12.9294261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1721981052844!5m2!1sen!2sin" 
                      className="w-full h-full border-0"
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Sixth Star Technologies</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Siri Towers, 1st Floor, No.3 & 4, Fourrts Avenue, Annai Indira Nagar, Thoraipakkam, Chennai - 600 097.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (044) 43869199
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            sales@sixthstar.in
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500">
                  <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-t-3xl">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Send Us a Message
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Get expert advice on email security solutions
                    </p>
                  </div>
                  
                  <div className="p-8">
                    <ContactUsForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        {contact[2]?.para && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <p className="text-lg text-slate-700 leading-relaxed">
                {contact[2]?.para}
              </p>
            </div>
          </section>
        )}

        {/* Contact Offices Section */}
        {contact[3]?.row && contact[3]?.row.length > 0 && (
          <section className="py-10 pb-5 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6  lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                  {contact[3]?.heading || 'Our Offices'}
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {contact[3]?.row?.map((row) => (
                  <div key={row.id} className="bg-white rounded-lg shadow-md p-4 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[140px] flex flex-col">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 pb-2 border-b border-slate-200 text-center">
                      {row.heading}
                    </h3>
                    
                    {row.address && (
                      <div className="mb-3 flex-grow">
                        <p className="text-slate-600 text-xs leading-snug line-clamp-4">{row.address}</p>
                      </div>
                    )}
                    
                    <div className="space-y-1 mt-auto">
                      {row.phone?.map((call) => (
                        <div key={call.id} className="flex items-center gap-1">
                          <i className={`${call.icon} text-blue-600 text-xs`}></i>
                          <Link href={call.link} className="text-slate-700 hover:text-blue-600 transition-colors text-xs">
                            {call.number}
                          </Link>
                        </div>
                      ))}
                      
                      {row.email?.map((email) => (
                        <div key={email.id} className="flex items-center gap-1">
                          <i className={`${email.icon} text-blue-600 text-xs`}></i>
                          <Link href={email.link} className="text-slate-700 hover:text-blue-600 transition-colors text-xs break-all">
                            {email.email}
                          </Link>
                        </div>
                      ))}
                      
                      {row.website?.map((site) => (
                        <div key={site.id} className="flex items-center gap-1">
                          <i className={`${site.icon} text-blue-600 text-xs`}></i>
                          <Link href={site.link} className="text-slate-700 hover:text-blue-600 transition-colors text-xs break-all">
                            {site.website}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


    </div>
  )
}
