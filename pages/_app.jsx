import "@/styles/globals.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/slider.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import dynamic from "next/dynamic";

const TawkMessenger = dynamic(() => import('../components/TawkMessenger'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    // Initialize GTM properly
    import("react-gtm-module").then(({ default: TagManager }) => {
      TagManager.initialize({ gtmId: "GTM-WFWXZHTW" });
    });
  }, []);

  return (
    <div>
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="1Q8o_x3M1br7MBNk8PzVL5In21lZ1GaSPN4KTOXCaQw"
        />

        {/* Favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/daggx9p24/image/upload/v1737789998/spamcloud-logo-sm_vj7kcc.png"
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <TawkMessenger />
      <Footer />
    </div>
  );
};

export default MyApp;
