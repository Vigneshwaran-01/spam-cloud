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
import { TermsOfServiceSchema } from '../lib/data/schema'

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


export default function termsandcondition({ contactData, error }) {
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
      <title>Terms and Conditions - Spam cloud</title>
        <meta name="description" content="terms and conditions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/terms-and-condition" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='terms and conditions' />
	<meta property="og:description" content="terms and conditions" />
	<meta property="og:url" content="https://spamcloud.in/terms-and-condition" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script type="application/ld+json">{JSON.stringify(TermsOfServiceSchema)}</script>
      </Head>
        {/* banner section starts */}

        <section className="about-banner-sec">

        <div className="h-[30rem] w-full rounded-md bg-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
       
      <h1 className={isClient ? css(styles.slideInUp) : ''}>
                Terms and Conditions
              </h1>
      </div>
      <BackgroundBeams />
    </div>
        </section>

       {/* <div className='container'>
       <div className="row">
<div className="col-md-12">
<h2>Acceptable Use Policy</h2>
</div>
</div>
<div className="row">
<div className="col-md-12 w-90">
<h4>1. Prohibited uses</h4>
<p>No Unlawful activities: Usage of our services in an illicit manner like publishing content conveying information that is harmful to others including the following unauthorized or fraudulent activities:</p>
<ul>
<li>Sharing or exposing personal information about others.</li>
<li>Involved or intending in dispensing malware or other harmful code.</li>
<li>Enchanted in the unlawful distribution of controlled substances, smuggling and providing medications without a prescription.</li>
<li>Engaged in any gambling services.</li>
<li>Content that is harmful to minors or encouraging child pornography will be terminated immediately without any information and shall be reported to law enforcement.</li>
<li>Website Hosting FOREX, E-Gold Exchange, Second Life, Pyramid Scheme, High-Yield Interest Programs (HYIP) or related sites.</li>
<li>Hosting a website given within should not intend to dupe the public.</li>
<li>Involved in money laundering</li>
<li>Phishing or engaging in identity theft</li>
<li>Selling weapons or ammunition</li>
</ul>
<h4>2. Network Abuse</h4>
<p>If the following prohibited activities are found you will lose the authorization and cannot access our services anymore. In particular, it includes the following.</p>
<ul>
<li>Accessing, attacking other network and manipulating to know its details like authentication measures without required permissions.</li>
<li>Convoluted in running a file sharing site or software that bind with IRC network.</li>
<li>Unnecessary links, spider, offline reader, click spam redirected to any anonymous site or proxy server to acquire or monitor information of our site for any unauthorized purpose.</li>
</ul>
<h4>3. No spam policy</h4>
<p>You are not authorized to use our services to send bulk unsolicited messages and we maintain a No spam and Zero tolerance policy to avoid those miscellaneous acts using our network. No transmissions of bulk emails is approved and they are strictly restricted by us.</p>
<p><strong>a.</strong>&nbsp;Any lists associated to sales or service promotion will be considered as Spam by us and we will terminate the user account who is involved in sending out SPAM with or without notice.</p>
<p><strong>b.</strong>&nbsp;No websites should be advertised via SPAM through our server but this service is not limited to those sent via fax, phone, posts, email or newsgroups. We rigidly don&rsquo;t host for any organizations that are listed under ROKSO. If found any IP space blacklisted we will terminate the account permanently.</p>
<h4>4. Defamation and Objectionable Content</h4>
<p>As a web hosting provider, we are not responsible to investigate the content provided by the user in their website which is found objectionable and in need to be censored. We respect your freedom of thoughts and encourage you to provide resourceful content that doesn&rsquo;t harm any individuals. If any of those objectionable content is identified by us we have all rights reserved to delete your services concerned to our mere discretion</p>
<h4>5. Enforcement</h4>
<p><strong><em>a. Reseller accounts</em></strong>&nbsp;If you are a reseller and found any violations in your user&rsquo;s accounts regarding this AUP we will intimate and notify you for your reference to have a discussion with the particular user. If this process continues after the intimation then your reseller account will be banned soon.</p>
<p><strong><em>b. Direct customers</em></strong>&nbsp;As a direct bound customer, we will cancel your services if found any violations in any of these AUP and may get ahead in reporting your violations to law enforcement agency.</p>
<p>Also, we reserve the right to make you follow or unfollow these AUP in our sole discretion.</p>
<h4>6. Invoice delay</h4>
<p>If the customer has not paid the invoice within the given due date, we have full authority to suspend the server or block the entire access and will terminate the current and all previously existing services without giving any prior notification. No new services or other products are been provided until clearing the pending payment.</p>
</div>
</div>
       </div> */}


    </div>
  )
}
