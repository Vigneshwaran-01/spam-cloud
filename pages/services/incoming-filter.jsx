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
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { Meteors } from "../../components/ui/meteors";
import Image from 'next/image';
import  CardHoverEffectDemo  from "../section/CardHoverEffectDemo";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import GlobeComponent from '../section/globecomponent';
import  TimeLineIncome from '../section/TimeLineIncome';
import FAQSection from '../section/FAQSection'; import { faqData } from '../../lib/data/income';
import {people} from '../../lib/data/testi';
import Blogslider from '../section/Blogslider';


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
      <title>incoming spam filter service in chennai - spam cloud</title>
        <meta name="description" content="Spam Cloud provides a reliable incoming spam filter service in Chennai, designed to protect your inbox from unwanted emails and cyber threats effectively." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/services/incoming-filter" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='incoming spam filter service in chennai - spam cloud' />
	<meta property="og:description" content="Spam Cloud provides a reliable incoming spam filter service in Chennai, designed to protect your inbox from unwanted emails and cyber threats effectively." />
	<meta property="og:url" content="https://spamcloud.in/services/incoming-filter" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
      </Head>
      {/* Banner section starts */}
      <div className=" w-full relative income-banner-sec">
              <div
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl container" />
              <div
                className="relative shadow-xl bg-gray-900  px-4 py-8 h-full overflow-hidden flex flex-col justify-center ">
                <div
                  className="h-5  flex items-center justify-center mb-4">
                </div>
      
                <div className="row">
            <div className="col-md-12">
              <h1 className={isClient ? css(styles.slideInUp) : ''}>
                Incoming Spam Filter
              </h1>
              <p>
              Smarter Filtering, Cleaner Inboxes With Inbound Email Filtering product
              </p>
              <div className="cta">
                <button>
                  <Link href="/contact">Contact Us</Link>
                </button>
                
              </div>
              
            </div>
          </div>
      
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
           
            </div>

     
      {/* Banner section ends */}

      {/* dashboard section starts */}
        <section className="income-dashboard-sec">
        <div className="income-dashboard">
                   <div className="flex flex-col overflow-hidden">
                         <ContainerScroll
                           titleComponent={
                             <>
                             </>
                           }>
                           <Image
                             src={`https://res.cloudinary.com/daggx9p24/image/upload/v1740212849/incoming-spamfilter_iex0oz.png`}
                             alt="hero"
                             height={900}
                             width={1500}
                             className="mx-auto rounded-2xl object-cover h-full object-left-top"
                             draggable={false} />
                         </ContainerScroll>
                       </div>
                  </div>
        </section>

      {/* dashboard section ends */}

      {/* deployment section starts */}
          <section className="income-deploy-sec">
            <div className="row">
              <div className="col-md-12">
                <h2 className={isClient ? css(styles.slideInUp) : ''}>
                hassle free deployment
                </h2>
                {/* <p className='pb-4'>
                Deploy enterprise-grade spam filters in seconds with our seamless, one-click setup. No complex configurations. Just plug in and protect.
                </p> */}
              </div>
            </div>
              <div className="container">
              <div className="row income-deploy-con">
                <div className="col-lg-7 col-md-6">
                  <div className="con">
                           <CardHoverEffectDemo />
                           <h4>One-Click Deployment</h4>
                           <p>Deploy enterprise-grade spam filters in seconds with our seamless, one-click setup. No complex configurations. Just plug in and protect.</p>
                  </div>
              
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="con">
                <h4>Restricting Spam Mail Worldwide</h4>
               
                <Image 
                   src={`https://res.cloudinary.com/daggx9p24/image/upload/v1745498593/email-concept-with-world-envelope_869423-2166_qpm4tm.jpg`}
                   alt="hero"
                   height={300}
                   width={500}
                   className="mx-auto rounded-2xl object-cover h-full object-left-top"
                   draggable={false}
                   style={{paddingLeft: '20px', paddingTop: '20px'}}
                    />
                
                </div>
                </div>
              </div>

              <div className="row income-deploy-con">
                
              <div className="col-lg-5 col-md-6">
                <div className="con">
                <h4>Global Spam Protection for Businesses</h4>
                
               <GlobeComponent />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                  <div className="con">
                    
                  <h4>One click Report Generation</h4>
                <Image 
                   src={`https://res.cloudinary.com/daggx9p24/image/upload/v1745556920/report-generation_ba8eas.png`}
                   alt="hero"
                   height={300}
                   width={600}
                   className="mx-auto rounded-2xl object-cover h-full object-left-top"
                   draggable={false}
                   style={{paddingTop: '20px'}}
                    />
                  </div>
              
              </div>
              </div>
              </div>

            </section>                  
        

      {/* deployment section ends */}

      {/* why choose section starts */}

      <section className="why-choose-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className={isClient ? css(styles.slideInUp) : '' }>
              Why Choose Spam Cloud Incoming Filter?
              </h2>
            </div>

  <TimeLineIncome />
          </div>
          </div>
          </section>

      {/* why choose section ends  */}

            {/* index blog sec starts */}
            <section className="index-blog-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className='text-center '>Our Blog</h2>
            <Blogslider />
          </div>
        </div>
      </div>
      </section>

      {/* index blog sec ends */}

      {/* pricing section starts */}
                
          <section className="income-price-sec">
          <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className={isClient ? css(styles.slideInUp) : '' }>
              Pricing For Incomimg Spam Filter
              </h2>
            </div>
            </div>
            <div className="row income-price-con">

    <div className="col-lg-4 col-md-12">
          <div className="pricecard bg-gray-50">
            <div className="block">
              <h4 className='text-center'>1 Domain</h4>
              {/* <p>$ <span className="price">99 </span>/month</p> */}
              <button><Link href="../contact">Get a quote</Link></button>
            </div>
            <ul>
              <li><i className="fa-solid fa-circle-check"></i> <p>12 months Anti-Spam and Anti-Virus protection</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail addresses / mailboxes</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail filtering</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>14 days e-mail storage</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Advanced e-mail reports</p></li>
            </ul>
          </div>
    </div>

    <div className="col-lg-4 col-md-6 ">
    <div className="pricecard bg-gray-50">
            <div className="block">
              <h4 className='text-center'>50 Domains</h4>
              {/* <p>$ <span className="price">500</span> /month</p> */}
              <button><Link href="../contact">Get a quote</Link></button>
            </div>
            <ul>
            <li><i className="fa-solid fa-circle-check"></i> <p>12 months Anti-Spam and Anti-Virus protection</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail addresses / mailboxes</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail filtering</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>14 days e-mail storage</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Advanced e-mail reports</p></li>    
            </ul>
          </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="pricecard bg-gray-50">
            <div className="block">
              <h4 className='text-center'>250 Domains</h4>
              {/* <p>$ <span className="price"> 1500</span>/month</p> */}
              <button><Link href="#">Get a quote</Link></button>
            </div>
            <ul>
            <li><i className="fa-solid fa-circle-check"></i> <p>12 months Anti-Spam and Anti-Virus protection</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail addresses / mailboxes</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited e-mail filtering</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>14 days e-mail storage</p></li>
              <li><i className="fa-solid fa-circle-check"></i> <p>Advanced e-mail reports</p></li>  
            </ul>
          </div>
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
