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
// Simplified visuals to match site's new dark theme
import Image from 'next/image';
import  CardHoverEffectDemo  from "../section/CardHoverEffectDemo";
import GlobeComponent from '../section/globecomponent';
import  TimeLineIncome from '../section/TimeLineIncome';

// Icon components for Why Choose section
const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CogIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Why Choose features data
const whyChooseFeatures = [
  {
    title: "Comprehensive Spam Detection and Filtering",
    description: "Unlike others that only detect a limited range of threats, our system delivers comprehensive protection with unrivaled detection accuracy. Our proprietary, predictive, self-learning technology blocks spam emails before they reach your network, learning from millions of emails processed daily with a nearly 100% accuracy rate.",
    icon: ShieldIcon,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    learnMore: {
      text: "Learn more about our detection technology",
      link: "#"
    }
  },
  {
    title: "Uninterrupted Email Continuity",
    description: "Our system streamlines email operations by ensuring maximum uptime and reliability. When your email server is unreachable, we provide full access to emails stored in our queue, preventing messages from being lost or bounced back while maintaining business continuity.",
    icon: EmailIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    learnMore: {
      text: "Explore email continuity features",
      link: "#"
    }
  },
  {
    title: "Real-Time Threat Intelligence",
    description: "Our system continuously collects and analyzes data to predict and instantly identify new spam outbreaks. Intelligence is shared real-time with all clients worldwide for immediate protection, ensuring you're always protected against the latest threats.",
    icon: SearchIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    learnMore: {
      text: "See threat intelligence in action",
      link: "#"
    }
  },
  {
    title: "Simplified Operations and Cost Reduction",
    description: "Achieve more with less through our comprehensive solution. Reduce resource usage while providing comprehensive monitoring and regular updates. Optimize your infrastructure, minimize operational overhead, and offload support requirements through our managed service approach.",
    icon: CogIcon,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    learnMore: {
      text: "Calculate your cost savings",
      link: "#"
    }
  }
];
import FAQSection from '../section/FAQSection'; import { faqData } from '../../lib/data/income';
import {people} from '../../lib/data/testi';
import Blogslider from '../section/Blogslider';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
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

const IncomingFilterNew = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
      <title>Incoming spam filter service in Chennai - Spam Cloud</title>
        <meta name="description" content="Spam Cloud provides a reliable incoming spam filter service in Chennai, designed to protect your inbox from unwanted emails and cyber threats effectively." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/services/incoming-spam-filter-service-provider-chennai" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='incoming spam filter service in chennai - spam cloud' />
	<meta property="og:description" content="Spam Cloud provides a reliable incoming spam filter service in Chennai, designed to protect your inbox from unwanted emails and cyber threats effectively." />
	<meta property="og:url" content="https://spamcloud.in/services/incoming-spam-filter-service-provider-chennai" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
      </Head>
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
            Incoming Spam Filter
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Keep your emails safe and protected with adaptive filtering that blocks spam, malware and phishing.
          </p>
         
        </div>
        <Meteors number={20} />
      </section>

 

      {/* dashboard section ends */}


      {/* deployment section starts */}
          <section id="deployment-section" className="py-10 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
                  Hassle Free Deployment
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Deploy enterprise-grade spam filters in seconds with our seamless, one-click setup. No complex configurations. Just plug in and protect.
                </p>
              </div>

              {/* Built-in intelligence heading */}
              <div className="mb-16 text-center">
               
              </div>

              {/* Scroll-based layout starts here */}
              <CardHoverEffectDemo />
            </div>
          </section>                  
        

      {/* deployment section ends */}

      {/* why choose section starts */}

      <section id="why-choose-section" className="py-20 bg-[#011333]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Why Choose Spam Cloud Incoming Filter?
            </h2>
          </div>

          {/* Proofpoint-style linear layout with timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>
              
              <div className="space-y-12">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="relative  pb-8 ">
                    <div className="flex items-start gap-6">
                      <div className={`relative z-10 w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gray-700 shadow-sm`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        {feature.learnMore && (
                          <a 
                            href={feature.learnMore.link} 
                            className="text-blue-400 hover:text-blue-300 font-medium underline transition-colors duration-200"
                          >
                            {feature.learnMore.text}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose section ends  */}

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

      {/* pricing section starts */}
                
          <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-4xl font-bold text-white mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Pricing For Incoming Spam Filter
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-white rounded-xl p-[0.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-2">1 Domain</h4>
              <Link href="../contact" className="inline-flex items-center gap-2 px-3 py-3 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Get a Quote
              </Link>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">12 months Anti-Spam and Anti-Virus protection</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail addresses / mailboxes</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail filtering</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">14 days e-mail storage</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Advanced e-mail reports</span></li>
            </ul>
    </div>

    <div className="bg-white rounded-xl p-[0.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-2">50 Domains</h4>
              <Link href="../contact" className="inline-flex items-center gap-2 px-3 py-3 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Get a Quote
              </Link>
            </div>
            <ul className="space-y-4">
            <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">12 months Anti-Spam and Anti-Virus protection</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail addresses / mailboxes</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail filtering</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">14 days e-mail storage</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Advanced e-mail reports</span></li>    
            </ul>
    </div>

    <div className="bg-white rounded-xl p-[0.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-2 mt-2">250 Domains</h4>
              <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-3 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Get a Quote
              </Link>
            </div>
            <ul className="space-y-4">
            <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">12 months Anti-Spam and Anti-Virus protection</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail addresses / mailboxes</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited e-mail filtering</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">14 days e-mail storage</span></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Advanced e-mail reports</span></li>  
            </ul>
    </div>

  </div>
            </div>

          </section>

      {/* pricing section ends */}

{/* testimonial section starts */}

<section className="modern-testimonial-section">
  <div className="modern-testimonial-container">
    <div className="testimonial-content-area">
      <div className="testimonial-badge">
        <span className="badge-text">CLIENT TESTIMONIALS</span>
      </div>
      <div className="testimonial-text-area">
        <p className="testimonial-quote">Since using this spam filter, we’ve had zero complaints from our staff about spam. That says a lot.</p>
        <div className="testimonial-rating">
          <Image
            src="https://res.cloudinary.com/daggx9p24/image/upload/v1736167632/star_gmjgly.png"
            width={120}
            height={24}
            className='rating-stars'
            alt="5 star rating"
          />
        </div>
        <div className="testimonial-avatars">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
    
    <div className="testimonial-cta-area">
      <div className="cta-card">
        <h3>Ready to Get Started?</h3>
        <p>Connect with our email security experts and protect your business today.</p>
        <Link href="/contact" className="modern-cta-button">
          <i className="fa-solid fa-calendar-days"></i>
          Book a call With our experts
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
    
    <div className="testimonial-bg-elements">
      <div className="grid-pattern"></div>
    </div>
  </div>
</section>

{/* testimonial section ends  */}

<section className="faq-sec">
  <FAQSection  faqData = {faqData} />
</section>

    </div>
  );
};

export default IncomingFilterNew;
