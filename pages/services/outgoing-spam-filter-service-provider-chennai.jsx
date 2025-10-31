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
import  CardHoverEffectOutgoing  from "../section/CardHoverEffectoutgoing";
import GlobeComponent from '../section/globecomponent';
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import {people} from '../../lib/data/testi';
import Blogslider from '../section/Blogslider';
import { Meteors } from '@/components/ui/meteors';

// Icon components for Why Choose section
const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SendIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

// Why Choose features data
const whyChooseFeatures = [
  {
    title: "Advanced Outbound Email Protection",
    description: "Protect your domain reputation with comprehensive outbound email filtering that prevents spam, malware, and malicious content from leaving your network, ensuring your IP addresses remain trusted.",
    icon: ShieldIcon,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    learnMore: {
      text: "Learn more about outbound protection",
      link: "#"
    }
  },
  {
    title: "Real-Time Delivery Monitoring",
    description: "Monitor outbound email delivery in real-time with comprehensive tracking and analytics. Get instant notifications about delivery issues, bounce rates, and reputation threats to maintain optimal email performance.",
    icon: EyeIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    learnMore: {
      text: "Explore monitoring features",
      link: "#"
    }
  },
  {
    title: "Domain Reputation Management",
    description: "Maintain and protect your domain's sending reputation with advanced reputation monitoring, blacklist checking, and proactive threat detection that keeps your emails reaching their intended recipients.",
    icon: SendIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    learnMore: {
      text: "See reputation management tools",
      link: "#"
    }
  },
  {
    title: "Enterprise-Grade Infrastructure",
    description: "Built on robust, scalable infrastructure that handles high-volume email traffic with guaranteed uptime and performance. Seamlessly integrates with existing email systems without disrupting your workflow.",
    icon: ServerIcon,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    learnMore: {
      text: "View infrastructure details",
      link: "#"
    }
  }
];

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

const outgoingFilterNew = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Outgoing spam filter service in Chennai - Spam Cloud</title>
        <meta name="description" content="Spam Cloud offers efficient outgoing spam filter services in Chennai to safeguard your emails and enhance security from external threads and fishing attacks." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/services/outgoing-spam-filter-service-provider-chennai" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='outgoing spam filter service in chennai - spam cloud' />
        <meta property="og:description" content="Spam Cloud offers efficient outgoing spam filter services in Chennai to safeguard your emails and enhance security from external threads and fishing attacks." />
        <meta property="og:url" content="https://spamcloud.in/services/outgoing-spam-filter-service-provider-chennai" />
        <meta property="og:site_name" content="Sixth Star Technologies" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
            Outgoing Spam Filter
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your domain reputation with enterprise-grade outbound email filtering that ensures secure delivery and maintains sender credibility.
          </p>
        </div>
        <Meteors number={20} />
      </section>

      {/* deployment section starts */}
      <section id="deployment-section" className="py-10 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Seamless Integration & Deployment
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deploy enterprise-grade outgoing spam filters in minutes with our seamless, one-click setup. Protect your domain reputation instantly.
            </p>
          </div>

          {/* Scroll-based layout starts here */}
          <CardHoverEffectOutgoing />
        </div>
      </section>

      {/* deployment section ends */}

      {/* why choose section starts */}
      <section id="why-choose-section" className="py-20 bg-[#011333]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Why Choose Spam Cloud Outgoing Filter?
            </h2>
          </div>

          {/* Proofpoint-style linear layout with timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>
              
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
                        <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
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
          <Blogslider />
        </div>
      </section>

      {/* index blog sec ends */}

      {/* pricing section starts */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-4xl font-bold text-white mb-4 tracking-tight ${isClient ? css(styles.slideInUp) : ''}`}>
              Pricing For Outgoing Spam Filter
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">50,000 Messages</h4>
                <Link href="../contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Get a Quote
                </Link>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Protect your server's IP reputation</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Domain Name is protected</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Notification in case of abuse</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Easily detect abusers</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">300,000 Messages</h4>
                <Link href="../contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Get a Quote
                </Link>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Protect your server's IP reputation</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited amount of servers</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Notification in case of abuse</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Easily detect abusers</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">1,000,000 Messages</h4>
                <Link href="../contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Get a Quote
                </Link>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Protect your server's IP reputation</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Unlimited amount of servers</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Notification in case of abuse</span></li>
                <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-green-500 mt-1"></i> <span className="text-slate-600">Easily detect abusers</span></li>
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
        <p className="testimonial-quote">We used to get flooded with spam daily. Ever since we switched to this filter, our inboxes have been spotless. Total game-changer!</p>
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

    </div>
  );
};

export default outgoingFilterNew;
