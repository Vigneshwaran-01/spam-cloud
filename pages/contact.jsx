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
import { contactSchema } from '../lib/data/schema'

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
        {/* banner section starts */}

        <section className="about-banner-sec">

        <div className="h-[30rem] w-full rounded-md bg-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
       
      <h1 className={isClient ? css(styles.slideInUp) : ''}>
                Contact US
              </h1>
      </div>
      <BackgroundBeams />
    </div>
        </section>

        {/* contact form starts */}
        <section className="contact-form-sec">
          <div className="container-1">
            <div className="row">
              <div className="col-md-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.6483831902!2d80.2334966!3d12.9294261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1721981052844!5m2!1sen!2sin" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                />
              </div>

              <div className="col-md-6 contact-form">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </section>

        {/* contact para sec starts */}
        <section className="contact-para-sec">
          <div className="container-1">
            <div className="row ">
              <div className="col-12 p-5">
                <p>{contact[2]?.para}</p>
              </div>
            </div>
          </div>
        </section>

        {/* contact address sec starts */}
        <section className="contact-add-sec">
          <div className="container-1 w  p-5">
            <div className="row ">
              <div className="col-12">
                <h3 className='text-center'>{contact[3]?.heading}</h3>
                <hr />
               <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {contact[3]?.row?.map((row) => (
                    <div key={row.id} className="bg-white border p-4 rounded-lg shadow-sm">
                      <h3>{row.heading}</h3>
                      <hr />
                      <p>{row.address}</p>
                      <ul className='m-0 p-0'>
                        {row.phone?.map((call) => (
                          <li key={call.id}><i className={call.icon}></i> <Link href={call.link}>{call.number}</Link></li>
                        ))}
                      </ul>
                      <ul className='m-0 p-0'>
                        {row.email?.map((email) => (
                          <li key={email.id}><i className={email.icon}></i> <Link href={email.link}>{email.email}</Link></li>
                        ))}
                      </ul>
                      <ul className='m-0 p-0'>
                        {row.website?.map((site) => (
                          <li key={site.id}><i className={site.icon}></i> <Link href={site.link}>{site.website}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


    </div>
  )
}
