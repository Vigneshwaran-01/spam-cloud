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
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { clientSchema } from '../lib/data/schema';
export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/clients?populate=client.row,client.row.img');

    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        clientData: data.data[0],
      },
    };
  } catch (error) {
    console.error('Website is under maintenance:', error);

    return {
      props: {
        clientData: null,
        error: error.message,
      },
    };
  }
}

const images = [
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/voltech_enginner_d5wb5u.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/velammal_anzfkq.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcerp_iz8ka7.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vecura_uuxnb4.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcare-logo_nlya0m.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/tvs_qfc2sc.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/trlpl_vbwnq1.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/techindia_c4xpx8.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/spl_infra_rxefmx.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/mega-global_q0fscr.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/rock_worth_yvvgu6.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/sahara_courier_dtznwq.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/ifluids_dmmvaf.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/power-groups_nbyhpz.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/panimallar_oooj2x.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/nccr_zw3ouz.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/kingfa_edsqaq.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hhf_logo_fmga1o.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/marg_kg1hjk.webp",
  "	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/letsgro_tusjbf.webp",
  "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hhf_logo_fmga1o.webp",

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
  

export default function ClientNew({ clientData, error }) {

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

  // Access client data properly
  const client = clientData?.client || [];

  return (
    <div>
      <Head>
      <title>Explore how our clients benefit from Spam Cloud services</title>
        <meta name="description" content="Examine how our clients benefit and get value from using Spam Cloud services to meet their email security requirements. contact us today to get the best offer." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://spamcloud.in/client" />
        <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content='Explore how our clients benefit from Spam Cloud services' />
	<meta property="og:description" content="Examine how our clients benefit and get value from using Spam Cloud services to meet their email security requirements. contact us today to get the best offer." />
	<meta property="og:url" content="https://spamcloud.in/client" />
	<meta property="og:site_name" content="Sixth Star Technologies" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(clientSchema) }}
                />
      </Head>
        {/* banner section starts */}

        <section className="about-banner-sec">


        <div className=" w-full rounded-md bg-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
       
      <h1 className={isClient ? css(styles.slideInUp) : ''}>
                Clients
              </h1>
      </div>
      <BackgroundBeams />
    </div>
        </section>

        {/* banner section ends */}
        {/* welcome section starts */}

        <section className="client-scrool-sec ">
          <div className='client-pc'>
        <ParallaxScroll images={images} />
        </div>
        <div className="client-mob">
        <div>
        {client[1]?.row?.map((row) => (
          <div key={row.id} className='grid grid-cols-4 gap-4 client-row'>
            {row.img?.map((imgItem) => (
              <div key={imgItem.id}>
                <img src={imgItem.img} alt="Client Image" />
              </div>
            ))}
          </div>
        ))}
      </div>
        </div>
        

        </section>

        
        


    </div>
  )
}
