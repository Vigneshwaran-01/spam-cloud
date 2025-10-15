import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { StyleSheet, css } from 'aphrodite';
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';  // Importing zoomInDown
import Link from 'next/link';
import ClientSlider from './section/slider';
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import Image from 'next/image';
import {people} from '../lib/data/testi';
import ContactSec from './section/ContactSec';
import Blogslider from './section/Blogslider';
import { homeSchema } from '../lib/data/schema'


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
    animationName: zoomInDown,  // Correct usage after import
    animationDuration: '4s',
  },
  slideInLeft: {
    animationName: slideInLeft,  // Correct usage after import
    animationDuration: '4s',
  },
});




export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/homes?populate=banner.but,banner.feature,banner.item,banner.homeboxrow,banner.homeboxrow.col,banner.clientimage');
    
    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        homeData: data.data[0], 
      },
    };
  } catch (error) {
    console.error('website is under maintanance:', error);

    
    return {
      props: {
        homeData: null, 
        error: error.message, 
      },


    };
  }
}



export default function New({ homeData, error }) {
  const [activeTestimonial, setActiveTestimonial] = useState(people[0].testimonial);
  const [isClient, setIsClient] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const track = document.getElementById('carouselTrack');
    if (track) {
      const translateX = (currentSlideIndex - 1) * -340; // 320px card width + 20px gap
      track.style.transform = `translateX(${translateX}px)`;
      
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex - 1);
      });
    }
  }, [currentSlideIndex]);

  const currentSlide = (n) => {
    setCurrentSlideIndex(n);
  };

  if (error) {
    return (
      <div>Error loading data</div>
    );
  }

  return (
    <div>
      <Head>
        <title>Anti spam cloud Service Provider in Chennai | Spam Cloud</title>
        <meta name="description" content="leading anti-spam Cloud service Providers in Chennai, India. Safeguard your business with our Email spam solutions for enhanced online security from Spam Cloud." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='Anti spam cloud Service Provider in Chennai | Spam Cloud' />
	<meta property="og:description" content='leading anti-spam Cloud service Providers in Chennai, India. Safeguard your business with our Email spam solutions for enhanced online security from Spam Cloud.' />
	<meta property="og:url" content="https://spamcloud.in" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
                />
      </Head>

      {/* Banner section starts */}
      <section className="relative h-screen overflow-hidden">
        {/* Full Width Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daggx9p24/image/upload/v1728965707/884_zbmo91.jpg")'
          }}
        >
          {/* Dark Overlay for Content Readability */}
          <div className="absolute inset-0 bg-[#0c1221]/90"></div>
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60 animate-scan"></div>
        </div>

        <div className="h-full flex relative z-10">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-start px-6 lg:px-16 relative">
            {/* Holographic Border Effect */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-60"></div>
            
            <div className="w-full max-w-2xl">
              <div className="text-left">
                {/* Futuristic Badge */}
                {/* <div className="mb-6 relative">
                  <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/30 px-6 py-3 rounded-full text-sm font-medium relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 animate-pulse"></div>
                    <div className="relative flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-emerald-300">Advanced Email Security</span>
                    </div>
                  </div>
                </div> */}

                {/* Enhanced Title with Better Typography */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-left relative">
                  <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                    Best email security
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                    provider in
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    Chennai
                  </span>
                  {/* Subtle Glow Effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 blur-2xl -z-10"></div> */}
                </h1>

                {/* Enhanced Description */}
                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg font-light">
                  Keep your emails safe and protected with SpamCloud's secure spam filtering solutions
                </p>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {/* Primary CTA - Schedule a Demo Call */}
                  <Link href="#contactForm" className={`group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600  text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300  hover:-translate-y-1 overflow-hidden ${isClient ? css(styles.slideInDown) : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Schedule a Demo Call
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>

                  {/* Secondary CTA - Request a Quote */}
                  <Link href="#service" className={`group relative inline-flex items-center justify-center border-2 border-emerald-400/50 text-emerald-300 hover:border-emerald-400 hover:text-white hover:bg-emerald-500/10 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm ${isClient ? css(styles.slideInDown) : ""}`}>
                    <span className="relative flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Request a Quote
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Mail Filter Demo */}
          <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
            <div className="w-full max-w-md">
              {/* Mail Filter Interface */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-emerald-300 text-sm font-semibold">SpamCloud Filter</span>
                  </div>
                  <div className="text-xs text-gray-400">Real-time Protection</div>
                </div>

                {/* Email Flow Visualization */}
                <div className="space-y-3 mb-6">
                  {/* Incoming Emails */}
                  <div className="text-xs text-gray-400 mb-2">Incoming Emails</div>
                  
                  {/* Email Items */}
                  {[
                    { type: 'spam', subject: 'Win $1000 Now!', sender: 'noreply@fake-lottery.com', status: 'blocked', delay: '0s' },
                    { type: 'phishing', subject: 'Urgent: Verify Account', sender: 'security@fake-bank.net', status: 'blocked', delay: '1s' },
                    { type: 'legitimate', subject: 'Meeting Reminder', sender: 'team@company.com', status: 'delivered', delay: '2s' },
                    { type: 'spam', subject: 'Free Pills Online', sender: 'offers@spam-pharmacy.biz', status: 'blocked', delay: '3s' },
                    { type: 'legitimate', subject: 'Project Update', sender: 'manager@company.com', status: 'delivered', delay: '4s' }
                  ].map((email, index) => (
                    <div 
                      key={index}
                      className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg ${
                        email.status === 'blocked' 
                          ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 animate-pulse' 
                          : 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50'
                      }`}
                      style={{
                        animationDelay: email.delay,
                        animation: `slideInFilter 0.8s ease-out ${email.delay} both`
                      }}
                    >
                      <div className="flex items-center flex-1">
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover:scale-125 ${
                          email.status === 'blocked' ? 'bg-red-400 group-hover:bg-red-300' : 'bg-emerald-400 group-hover:bg-emerald-300'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-medium transition-all duration-300 group-hover:font-semibold truncate ${
                            email.status === 'blocked' ? 'text-red-300 group-hover:text-red-200' : 'text-emerald-300 group-hover:text-emerald-200'
                          }`}>
                            {email.subject}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 truncate">
                            From: {email.sender}
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                            {email.type === 'spam' ? 'Spam Email' : 
                             email.type === 'phishing' ? 'Phishing Attempt' : 'Legitimate Email'}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:px-4 group-hover:shadow-md ${
                        email.status === 'blocked' 
                          ? 'bg-red-500/20 text-red-300 group-hover:bg-red-500/30 group-hover:text-red-200' 
                          : 'bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500/30 group-hover:text-emerald-200'
                      }`}>
                        {email.status === 'blocked' ? 'BLOCKED' : 'DELIVERED'}
                      </div>
                    </div>
                  ))}
                </div>

        

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}></div>
                </div>
              </div>

              {/* Floating Action Indicators */}
              {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center animate-ping">
                <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Futuristic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="text-emerald-400 text-xs font-mono mb-2">SCROLL TO EXPLORE</div>
            <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes slideInFilter {
            0% { 
              transform: translateX(100px); 
              opacity: 0; 
            }
            100% { 
              transform: translateX(0); 
              opacity: 1; 
            }
          }
        `}</style>
      </section>
  {/* Banner section ends */}

  {/* Client Slider Section - Full Width */}
  <ClientSlider />

    {/* Services section starts - Proofpoint inspired design */}
    <section className="proofpoint-services-sec" id='service'>
      <div className="bg-[#035bfb]">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="proofpoint-hero-content">
                <h6 className="proofpoint-badge">WE ARE EMAIL SECURITY EXPERTS</h6>
                <h1 className="proofpoint-main-title">
                  We secure how people, data and email systems connect across email, cloud and collaboration tools
                </h1>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="proofpoint-carousel-container">
                <div className="carousel-wrapper">
                  <div className="carousel-track" id="carouselTrack">
                    
                    <div className="proofpoint-carousel-card">
                      <div className="card-content">
                        <h4>Numbers only ever tell part of the story.</h4>
                        <Link href="/contact" className="proofpoint-cta-link">
                          See customer stories <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="proofpoint-carousel-card stat-card">
                      <div className="card-content">
                        <div className="stat-badge">STOPPING</div>
                        <h2 className="stat-number">95M</h2>
                        <p className="stat-label">BEC attacks per year</p>
                      </div>
                    </div>
                    
                    <div className="proofpoint-carousel-card stat-card">
                      <div className="card-content">
                        <div className="stat-badge">PROTECTING</div>
                        <h2 className="stat-number">2M+</h2>
                        <p className="stat-label">customers worldwide</p>
                      </div>
                    </div>
                    
                    <div className="proofpoint-carousel-card stat-card">
                      <div className="card-content">
                        <div className="stat-badge">SECURING</div>
                        <h2 className="stat-number">83</h2>
                        <p className="stat-label">of the F100 use our solutions</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <div className="carousel-dots">
                  <span className="dot active" onClick={() => currentSlide(1)}></span>
                  <span className="dot" onClick={() => currentSlide(2)}></span>
                  <span className="dot" onClick={() => currentSlide(3)}></span>
                  <span className="dot" onClick={() => currentSlide(4)}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Cards Section - Below the main hero */}
      <div className="proofpoint-services-cards-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="proofpoint-service-card">
                <div className="service-icon">
                  <i className="fi fi-ts-envelope-download"></i>
                </div>
                <h3>Stop Incoming Threats</h3>
                <p>Protect against inbound spam, phishing, and malware with advanced AI-based detection.</p>
                <Link href="/services/incoming-filter" className="service-link">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="proofpoint-service-card">
                <div className="service-icon">
                  <i className="fi fi-ts-envelope-dot"></i>
                </div>
                <h3>Secure Outbound Communications</h3>
                <p>Monitor and protect outgoing emails to prevent data loss and ensure compliance.</p>
                <Link href="/services/outgoing-filter" className="service-link">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="proofpoint-service-card">
                <div className="service-icon">
                  <i className="fi fi-bs-mailbox-envelope"></i>
                </div>
                <h3>Email Archiving & Compliance</h3>
                <p>Comprehensive email archiving solution for regulatory compliance and data management.</p>
                <Link href="/contact" className="service-link">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="proofpoint-service-card">
                <div className="service-icon">
                  <i className="fi fi-ss-email-pending"></i>
                </div>
                <h3>Carbonio Mail Platform</h3>
                <p>Modern, secure email platform with advanced collaboration tools and enterprise security.</p>
                <Link href="/contact" className="service-link">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Services section ends */}

       {/* Home Box Section */}
       {/* <section className='incoming-spamfilter-box-section'>
        <h2 className='text-center'>Our Valubale Clients</h2>
       
      </section> */}

      {/* Modern Stats Section - Awwwards Inspired */}
    <section className='modern-stats-section'>
      <div className="modern-stats-container">
        {/* Left Content Area */}
        <div className="stats-content-area">
          <div className="stats-badge">
            <span className="badge-text">WE ARE EMAIL SECURITY EXPERTS</span>
          </div>
          <h2 className="stats-main-title">
            We secure how people, data and email systems connect across email, cloud and collaboration tools
          </h2>
          <p className="stats-description">
            Protecting businesses worldwide with cutting-edge email security solutions and advanced threat detection.
          </p>
        </div>

        {/* Right Stats Image Area */}
        <div className="stats-image-area">
          <div className="stats-image-container">
            <img 
              src="https://res.cloudinary.com/daggx9p24/image/upload/v1729659698/spamcloud-bene_gl7za1.jpg" 
              alt="Email Security Statistics Dashboard" 
              className="stats-dashboard-image"
            />
            {/* <div className="image-glow-effect"></div> */}
          </div>
        </div>

        {/* Background Elements */}
        {/* <div className="stats-bg-elements">
          
          <div className="grid-pattern"></div>
        </div> */}
      </div>
    </section>
      {/* Modern Stats Section ends */}


      {/* Modern Features Section - Matching Stats Design */}
      <section className="modern-features-section">
        <div className="modern-features-container">
          {/* Left Content Area */}

<div className="features-list-area">
            <div className="features-grid">
              
              <div className="feature-item" data-feature="quarantine">
                <div className="feature-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div className="feature-content">
                  <h4>Email Quarantine System</h4>
                  <p>How email identified as spam - Quarantined, tagged, and delivered with advanced filtering.</p>
                </div>
              </div>

              <div className="feature-item" data-feature="accuracy">
                <div className="feature-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div className="feature-content">
                  <h4>High Accuracy Rate</h4>
                  <p>Rate of false positives - The number of authenticated emails get blocked is minimized.</p>
                </div>
              </div>

              <div className="feature-item" data-feature="reporting">
                <div className="feature-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="feature-content">
                  <h4>Advanced Reporting</h4>
                  <p>The reporting options are available to detect whitelist and blacklist senders effectively.</p>
                </div>
              </div>

              <div className="feature-item" data-feature="testing">
                <div className="feature-icon">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <div className="feature-content">
                  <h4>Real-time Testing</h4>
                  <p>To accelerate the filtering process, the front end test is conducted continuously.</p>
                </div>
              </div>

              <div className="feature-item" data-feature="protection">
                <div className="feature-icon">
                  <i className="fa-solid fa-virus-slash"></i>
                </div>
                <div className="feature-content">
                  <h4>Virus Protection</h4>
                  <p>Best antivirus software protects your business from malware activities and threats.</p>
                </div>
              </div>

            </div>
          </div>
  {/* Right Features List Area */}

          <div className="features-content-area">
            <div className="features-badge">
              <span className="badge-text">ANTI SPAM CLOUD FILTER</span>
            </div>
            <h2 className="features-main-title">
              Essential Features of Email Filtering Services
            </h2>
            <p className="features-description">
              We substantially illustrate the immense verifiable levels of spam and virus detection service for your business.
            </p>
          </div>

        
          

          {/* Background Elements */}
          <div className="features-bg-elements">
            <div className="grid-pattern"></div>
          </div>
        </div>
      </section>


      {/* index why choose ends */}

{/* Testimonials removed per request */}


      {/* Modern Tab Section */}
      <section className="modern-tab-section">
        <div className="container">
          <div className="modern-tab-container">
            
            {/* Tab Navigation */}
            <div className="modern-tab-nav">
              <ul className="nav nav-tabs" id="modernTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="unique-tab" data-bs-toggle="tab" data-bs-target="#unique" type="button" role="tab" aria-controls="unique" aria-selected="true">
                    WHAT MAKES US UNIQUE
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="choose-tab" data-bs-toggle="tab" data-bs-target="#choose" type="button" role="tab" aria-controls="choose" aria-selected="false">
                    WHY CHOOSE SIXTHSTAR
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="solution-tab" data-bs-toggle="tab" data-bs-target="#solution" type="button" role="tab" aria-controls="solution" aria-selected="false">
                    SPAM SOLUTION
                  </button>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content modern-tab-content" id="modernTabContent">
              
              {/* What Makes Us Unique Tab */}
              <div className="tab-pane fade show active" id="unique" role="tabpanel" aria-labelledby="unique-tab">
                <div className="modern-tab-layout">
                  <div className="tab-features-list">
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Effortless Usability</h4>
                        <p>Easily manage and transfer messages in no time.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>High Detection Rate</h4>
                        <p>Accurately blocks viruses & malware before they enter your network</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Seamless Email Flow</h4>
                        <p>Ensures smooth & secure email delivery with an extra protective layer</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>24/7 Expert Support</h4>
                        <p>Get instant help from our native email security specialists anytime</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-cta-area">
                    <div className="cta-content">
                      <h3>Talk To our Spam Filter <span className="text-blue">Experts</span></h3>
                      <Link href="/contact" className="cta-button-tab">
                        Contact us Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose SixthStar Tab */}
              <div className="tab-pane fade" id="choose" role="tabpanel" aria-labelledby="choose-tab">
                <div className="modern-tab-layout">
                  <div className="tab-features-list">
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Incoming Spam Filter</h4>
                        <p>SixthStar provides you an excellent incoming spam filter in which users send mails to the recipient.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Outgoing Spam Filter</h4>
                        <p>SixthStar provides a cloud-based outgoing spam filter that verifies and blocks spams to provide the most secure email delivery.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-cta-area">
                    <div className="cta-content">
                      <h3>Talk To our Spam Filter <span className="text-blue">Experts</span></h3>
                      <Link href="/contact" className="cta-button-tab">
                        Contact us Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spam Solution Tab */}
              <div className="tab-pane fade" id="solution" role="tabpanel" aria-labelledby="solution-tab">
                <div className="modern-tab-layout">
                  <div className="tab-features-list">
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Lightning-Fast Performance</h4>
                        <p>Ensures seamless email filtering without delays.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Customizable Solutions</h4>
                        <p>Tailored security settings to fit your business needs.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Scalable for All</h4>
                        <p>Perfect for individuals, startups & enterprises alike.</p>
                      </div>
                    </div>
                    
                    <div className="feature-item-tab">
                      <div className="feature-check">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="feature-content-tab">
                        <h4>Proven Expertise</h4>
                        <p>Trusted by businesses for top-notch email security solutions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-cta-area">
                    <div className="cta-content">
                      <h3>Talk To our Spam Filter <span className="text-blue">Experts</span></h3>
                      <Link href="/contact" className="cta-button-tab">
                        Contact us Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modern Blog Section */}
      <section className="modern-blog-section">
        <div className="container">
          <div className="modern-blog-container">
            
            {/* Section Header */}
            <div className="blog-header">
              <h2 className="blog-title">OUR BLOG</h2>
            </div>

            {/* Blog Slider with Backend Data */}
            <div className="blog-slider-wrapper">
              <Blogslider />
            </div>

            {/* View All Button */}
            <div className="blog-footer">
              <Link href="/blog" className="view-all-blogs">
                View All Articles
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* Modern Blog Section ends */}
    

      <ContactSec />
      {/* index tabsec ends */}

{/* Modern FAQ Section */}
<section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 font-['Barlow_Condensed'] tracking-tight">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Get answers to common questions about our email security services and spam protection solutions.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Column - Image */}
      <div className="relative order-2 lg:order-1">
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-3xl"></div>
          <Image
            src="https://res.cloudinary.com/daggx9p24/image/upload/v1729661580/1_spmzxs.png"
            alt="Email Security FAQ Illustration"
            width={500}
            height={400}
            className="relative z-10 w-full h-auto rounded-2xl shadow-lg"
            priority={false}
            loading="lazy"
          />
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Right Column - FAQ Accordion */}
      <div className="order-1 lg:order-2">
        <div className="space-y-3">
          {[
            {
              id: 'faq-1',
              question: 'What happens to a spam-detected message?',
              answer: 'For inbound messages: This filtering will be done based on the IP address of the sender. As a default process, content-filter spam is sent to the junk folder of the recipient. All these actions can be controlled by you. For outbound messages: Here, the email delivery status can be easily known by the sender whether the email is bounced or not delivered through a message status.',
              defaultOpen: true
            },
            {
              id: 'faq-2',
              question: 'Do I need to configure the service to provide anti-spam protection?',
              answer: 'Once you get the spam filter, service will be automatically enabled as per anti-spam policies. If you want any alteration in the policies based on your organizational structure, you can tailor it according to it.',
              defaultOpen: false
            },
            {
              id: 'faq-3',
              question: 'Does the service have URL filtering?',
              answer: 'Yes, the service provides URL filtering. If the read URL has any spam content, then it will be marked as a spam message.',
              defaultOpen: false
            },
            {
              id: 'faq-4',
              question: 'Is bulk email filtering works automatically?',
              answer: 'This email filtering works differently for new and migrated customers. So make sure if the service is automatically enabled or not.',
              defaultOpen: false
            },
            {
              id: 'faq-5',
              question: 'Can I get spam reports?',
              answer: 'Yes, you will get spam reports about the volume of messages present in the account.',
              defaultOpen: false
            }
          ].map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <button
                className="w-full px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl group"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${faq.id}`}
                aria-expanded={faq.defaultOpen}
                aria-controls={faq.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg className="w-5 h-5 text-slate-500 transform transition-transform duration-200 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div 
                id={faq.id}
                className={`accordion-collapse collapse ${faq.defaultOpen ? 'show' : ''}`}
                aria-labelledby={`${faq.id}-heading`}
              >
                <div className="px-5 pb-4">
                  <div className="pl-12">
                    <div className="w-full h-px bg-gradient-to-r from-slate-200 to-transparent mb-3"></div>
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              Still have questions?
            </h4>
            <p className="text-slate-600 mb-4">
              Our email security experts are here to help you with any additional questions.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Our Experts
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</section>








    </div>
  );
}
