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
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Blogslider from './section/Blogslider';
import { aboutSchema } from '../lib/data/schema';

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
  

export default function AboutNew() {
     const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        // Ensures code runs only on the client-side
        setIsClient(true);
      }, []);
    

  return (
    <div>
      <Head>
      <title>about us - Spam cloud</title>
        <meta name="description" content="get to know about how Spam Cloud's incoming and outgoing spam filters protect your inbox from junk emails and phishing threats and enhance email security." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/about" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='about us - Spam cloud' />
	<meta property="og:description" content="get to know about how Spam Cloud's incoming and outgoing spam filters protect your inbox from junk emails and phishing threats and enhance email security." />
	<meta property="og:url" content="https://spamcloud.in/about" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
                />
      </Head>
        {/* banner section starts */}

        <section className="relative min-h-[500px] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
              <BackgroundBeamsWithCollision>
              <h1 className={`text-6xl md:text-7xl font-bold text-white text-center tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
                About Us
              </h1>
    </BackgroundBeamsWithCollision>
        </section>

        {/* banner section ends */}
        {/* welcome section starts */}

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Welcome to Spam Cloud</h2>
          </div>

          <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">Spam filters are utilized to process incoming emails and prevent spam before it reaches the user's inbox. Its major function is to detect and eliminate the junk emails getting into the user's accounts. To avoid spam emails, our company offered efficient spam filters to manage and provide spam-free inboxes. We offer Incoming and Outgoing spam filters based on your grade of protection.</p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">We offer a Cloud-based Spam filter identifies phishing that damages computer, server, or computer network. Once the spam filter is installed, you will get an administration portal where you can manage main features whitelists and blacklists management, subject or content filters, virus identification, email recovery, and quarantine blocking spam.</p>
          </div>
        </div>
        </section>

        {/* welcome section ends */}
        {/* about us why sec starts */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
              <div className="mb-6"><i className="fi fi-ts-envelope-download text-5xl text-blue-600"></i></div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Smart Spam Filtering</h4>
              <p className="text-slate-600 leading-relaxed mb-6">We build intelligent, real-time spam filters that adapt to evolving threats. SpamCloud.in ensures your inbox stays clean and secure—without the manual effort.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
              <div className="mb-6"><i className="fi fi-ts-envelope-dot text-5xl text-blue-600"></i></div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">99.9% Email Delivery Accuracy</h4>
              <p className="text-slate-600 leading-relaxed mb-6">Our filtering engine guarantees reliable and accurate email delivery, ensuring legit emails never get lost. Experience world-class spam protection.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                Know More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
              <div className="mb-6"><i className="fi fi-bs-mailbox-envelope text-5xl text-blue-600"></i></div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">24/7 Support & Security</h4>
              <p className="text-slate-600 leading-relaxed mb-6">Your security is our priority. Our expert team is available round-the-clock to assist, monitor, and keep your email infrastructure running smoothly.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>
</div>
      </section>

      {/* about us why sec ends */}

      {/* about us service sec starts */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
    Our Services</h2>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group">
                <i className="fi fi-ts-envelope-download text-5xl text-blue-600 mb-6 block group-hover:text-blue-700 transition-colors duration-300"></i>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Incoming Email Filtering</h4>
              <p className="text-slate-600 leading-relaxed mb-6">Email continuity & protection from spam, virus, ransomware, phishing, malware.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group">
                <i className="fi fi-ts-envelope-dot text-5xl text-blue-600 mb-6 block group-hover:text-blue-700 transition-colors duration-300"></i>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Outgoing Email Filtering</h4>
              <p className="text-slate-600 leading-relaxed mb-6">Abuse management to help avoid IP blacklisting and improve email delivery and continuity.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
                Know More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 group">
                <i className="fi fi-bs-mailbox-envelope text-5xl text-blue-600 mb-6 block group-hover:text-blue-700 transition-colors duration-300"></i>
              <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Email Archiving</h4>
              <p className="text-slate-600 leading-relaxed mb-6">Robust encrypted email archiving to help prevent data loss and improve legal compliance.</p>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>

</div>
      </section>

            {/* index blog sec starts */}
            <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Blog</h2>
        </div>
        <div className="w-full">
          <Blogslider />
        </div>
      </div>
      </section>

      {/* index blog sec ends */}

      {/* about us service sec ends */}

    </div>
  )
}
