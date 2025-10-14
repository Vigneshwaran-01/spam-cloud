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

        <section className="about-banner-sec">


              <BackgroundBeamsWithCollision>
              <h1 className={isClient ? css(styles.slideInUp) : ''}>
                About US
              </h1>
    </BackgroundBeamsWithCollision>
        </section>

        {/* banner section ends */}
        {/* welcome section starts */}

        <section className="about-wel-sec">
        <div className="container">
          <div className="row about-wel">
            <div className="col-md-6">
              <h2>Welcome to Spam Cloud</h2>
            </div>

          </div>

          <div className="row about-wel">
            <div className="col-12 ">
              <p>Spam filters are utilized to process incoming emails and prevent spam before it reaches the user’s inbox. Its major function is to detect and eliminate the junk emails getting into the user's accounts. To avoid spam emails, our company offered efficient spam filters to manage and provide spam-free inboxes. We offer Incoming and Outgoing spam filters based on your grade of protection.</p>
              <p>We offer a Cloud-based Spam filter identifies phishing that damages computer, server, or computer network. Once the spam filter is installed, you will get an administration portal where you can manage main features whitelists and blacklists management, subject or content filters, virus identification, email recovery, and quarantine blocking spam.</p>
            </div>
          </div>
        </div>
        </section>

        {/* welcome section ends */}
        {/* about us why sec starts */}
      <section className="about-why-sec">
      <div className="container">
    <div className="row about-why">
            <div className="col-lg-4 col-md-12">
              <div><i className="fi fi-ts-envelope-download"></i></div>
              <h4>SMART SPAM FILTERING</h4>
              <p>We build intelligent, real-time spam filters that adapt to evolving threats. SpamCloud.in ensures your inbox stays clean and secure—without the manual effort.</p>
              <button>
              <Link href="#">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
              </button>
            </div>

            <div className="col-lg-4 col-md-6">
              <div><i className="fi fi-ts-envelope-dot"></i></div>
              <h4>99.9% EMAIL DELIVERY ACCURACY</h4>
              <p>Our filtering engine guarantees reliable and accurate email delivery, ensuring legit emails never get lost. Experience world-class spam protection.</p>
              <button>
              <Link href="#">
                Know More <i className={` fa-solid fa-arrow-right-long`}></i>
              </Link>
              </button>
            </div>

            <div className="col-lg-4 col-md-6">
              <div><i className="fi fi-bs-mailbox-envelope"></i></div>
              <h4>24/7 SUPPORT & SECURITY</h4>
              <p>Your security is our priority. Our expert team is available round-the-clock to assist, monitor, and keep your email infrastructure running smoothly.</p>
              <button>
              <Link href="#">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
              </button>
            </div>
          </div>
</div>
      </section>

      {/* about us why sec ends */}

      {/* about us service sec starts */}
      <section className="about-services-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <h2 className={isClient ? css(styles.slideInUp) : ''}>
    Our Services</h2>
    </div>

  </div>
  <div className="row about-services">
            <div className="col-lg-4 col-md-12">
              <div className='con'>
                <i className="fi fi-ts-envelope-download"></i>
              <h4>Incoming Email Filtering</h4>
              <p>Email continuity & protection from spam, virus, ransomware, phishing, malware.</p>
              <button>
              <Link href="#">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
              </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className='con'>
                <i className="fi fi-ts-envelope-dot"></i>
              <h4>Outgoing Email Filtering</h4>
              <p>Abuse management to help avoid IP blacklisting and improve email delivery and continuity.</p>
              <button>
              <Link href="#">
                Know More <i className={` fa-solid fa-arrow-right-long`}></i>
              </Link>
              </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className='con'>
                <i className="fi fi-bs-mailbox-envelope"></i>
              <h4>Email Archiving</h4>
              <p>Robust encrypted email archiving to help prevent data loss and improve legal compliance.</p>
              <button>
              <Link href="#">
              Know More <i className="fa-solid fa-arrow-right-long"></i></Link>
              </button>
            </div>
            </div>
          </div>

</div>
      </section>

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

      {/* about us service sec ends */}

    </div>
  )
}
