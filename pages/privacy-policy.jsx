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
import { PrivacyPolicySchema } from '../lib/data/schema'

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


export default function PrivacyPolicy({ contactData, error }) {
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
      <title>Privacy Policy</title>
        <meta name="description" content="privacy policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/privacy-policy" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='privacy policy' />
	<meta property="og:description" content="Privacy Policy" />
	<meta property="og:url" content="https://spamcloud.in/privacy-policy" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script type="application/ld+json">{JSON.stringify(PrivacyPolicySchema)}</script>
      </Head>
        {/* banner section starts */}

        <section className="about-banner-sec">

        <div className="h-[30rem] w-full rounded-md bg-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
       
      <h1 className={isClient ? css(styles.slideInUp) : ''}>
                Privacy Policy
              </h1>
      </div>
      <BackgroundBeams />
    </div>
        </section>

       <div className='container'>
       <div class="row">
<div class="col-md-12">
<div class="row">
<div class="col-md-12">
<h2>Privacy Policy</h2>
<p>The below declared policies are exhibited with information complying promising commitment to our customers by safeguarding and respecting their individual privacy. And these specific detailed formats are known and true to our knowledge and we request you to read them precisely concerning your safety.</p>
</div>
</div>
<div class="row">
<div class="col-md-12">
<h4>How we gather the Information</h4>
<p><strong>1. Personal Information</strong>&nbsp;:<br />Information&rsquo;s we collect from a customer is entirely based on the service we provide them. The personal informations include your name, address, phone numbers, emails, payment options, card information, the name of the domain etc. this details are acquired to offer you products which you have purchased from us. If the payment is via card your safety is enhanced by sending the details to the card provider. All your information&rsquo;s are secured under safe and secured browsers.</p>
<p><strong>2. Social Media&nbsp;</strong>:<br />Our web site includes social media options (&ldquo;Facebook like&rdquo;) and this aid us to collect information about IP address of the visiting customers and all these features are hosted directly on our website. All these interactions are managed by the privacy policy of the company providing the feature.</p>
<h4>How We Use the Information</h4>
<p><strong>1. Personal Information</strong>&nbsp;:<br />We will analyse the data&rsquo;s that are gathered to provide you the services at best. This information helps us to determine your requirement in the market and we take liability in providing services or support for your welfare. For the ad purpose of promoting our services in websites, we will use your information indirectly to build aggregate profiles and thereby protect it. We ensure to provide precaution in safeguarding and preventing your profiles from unauthorized access. And if there is any requirement to know about your account details then additionally you are requested to provide another identity information forms. We also make use of this information to email you about our product and service arrivals.</p>
<p><strong>2. Log Files&nbsp;</strong>:<br />Log files helps us to keep tracking our customer&rsquo;s page visit, interests through IP address information. These IP address doesn&rsquo;t track your overall personal details instead it gives the information about website access during website browsing. This extensive log file information&rsquo;s about customers are collected for the aggregate purpose only.</p>
<h4>To Whom We Disclose the Information&rsquo;s</h4>
<p>We will not reveal your personal information to any other third parties at any occurrences unless they are a reputed one by us. This information is secured legally and shared only with our partners and vendors who are in hand with us. To be particular we have detailed about it below,</p>
<p><strong>1. Partners</strong>&nbsp;:<br />We will share your personal information&rsquo;s to our trusted partners or vendors who share a part of providing hosting service to you along with us by additional amenities. This information is confessed to them since they provide service to you. Also, we may disclose aggregate information&rsquo;s to reputed third parties who pursue and agrees to sign our legal agreement epitomized to secure your confidential information.</p>
<p><strong>2. Service Providers&nbsp;</strong>:<br />As a hosting provider we may share your information with the third parties who get in hand with us to provide our entire service or shared a part in providing service to you. We assure that they will maintain and manage it confidential and doesn&rsquo;t disclose the information for their personal reference or marketing procedures.</p>
<p><strong>3. Advertisements</strong>&nbsp;:<br />We won&rsquo;t reveal your personal information to any advertisers rather we build online advertisements and share our customer&rsquo;s non-identifying information with specific advertisers. We also display a tailored advertisement to a specific category (Ex. Gender, age) with our gathered data.</p>
<p><strong>4. Domain Name Registrations&nbsp;</strong>:<br />It is required to confess your informations while creating a domain to the ICANN registry to make it practical on the internet. It needs your name, address and all other personal information with your domain name, its registration date and expiration date. Considering your privacy policy we will refer this information to you by intimating as &lsquo;WHOIS&rsquo; information. Also, note that we don&rsquo;t take responsibility and can&rsquo;t control the actions of the public towards this information.</p>
<p>Also, we will reveal this information when a legal formality is required i.e. if found any miscellaneous content or fraud is attempted.</p>
<h4>Security</h4>
<p>We will protect your data&rsquo;s and information&rsquo;s that are under our control without loss or misuse. All the information that is collected through online is stored and safeguarded manually or electronically in a safe server by us. We use SSL (Secure Socket Layer) technology to protect your financial details and data&rsquo;s.</p>
<h4>Reseller Information</h4>
<p>These below terms apply only to resellers,</p>
<p><strong>1. Collected Information</strong>&nbsp;:<br />We have a set of gathered information about our reseller&rsquo;s client including their personal details but we don&rsquo;t share any type of bond with those clients. If the reseller client request to access or delete any kind of data&rsquo;s the request should be processed by the reseller ONLY. If the reseller sends or requests any process to be done (like deleting an account or accessing) to us we will proceed forward.</p>
<p><strong>2. Alternate&nbsp;</strong>:<br />If you are one of our reseller&rsquo;s customer and not willing to continue the service you are required to contact the particular reseller who provides you goods and services.</p>
<p><strong>3. Data Use</strong>&nbsp;:<br />The client data which we obtain from the reseller including the reseller&rsquo;s information will be kept as long as we provide service. We use this personal information if required to deal legally or suspected in any act of violations in the terms and policies.</p>
<h4>Payment issues</h4>
<p>Any outstanding invoices without settlement will be verified and we have full rights to terminate the server or alter the administrative password. We will suspend the current and all previously existing services without any prior information. No new services or other products are been provided until clearing the pending payment.</p>
<h4>Change in Policies</h4>
<p>To keep personal data provided by you accurate, current, and complete, please contact us as specified in the &ldquo;Contact Us&rdquo; section. We can then take immediate steps to update or correct such information in our possession, or to delete your information from our contact list.</p>
<p><em>Features are infinite, For more details contact us.</em></p>
</div>
</div>
</div>
</div>
       </div>


    </div>
  )
}
