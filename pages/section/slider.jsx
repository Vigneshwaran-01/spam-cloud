import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
    // Settings for the first row (left to right)
    const settingsRow1 = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            }
        ]
    };

    // Settings for the second row (right to left)
    const settingsRow2 = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        rtl: true, // Reverse direction
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, slidesToScroll: 1, rtl: true }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 1, rtl: true }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 1, rtl: true }
            }
        ]
    };

    const logos = [
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496948/butterfly-logo_lihzni.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496948/mtutor_ax0010.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496947/imc-logo_gt8kwt.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496946/kshema_ivekpp.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496946/dahnay-logo_wnik6h.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496945/nccr-logo_ucqyqo.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496945/vcare-logo_w3muev.png",
        // "https://res.cloudinary.com/daggx9p24/image/upload/v1745496944/voltech-logo_bpdevu.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496914/efiling-logo_cnargm.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745496509/bonton-logo_rwl4lf.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745647539/hlf-services-logo_zi5nmc.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745647653/vcerp-logo_vouehe.png",
    ];

    const logos2 = [
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559668/marg_aamtoc.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559667/gro_b2ah8v.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/hhf_qqrolg.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/kingfa_rxzrmw.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/panimalar_bptaem.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/power_bwpxtm.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/ifluids_vnt9u9.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/sahara_x8parw.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/marg-logo_omqdhz.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/hoec-logo_py4wmy.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/jamal_mohamed_-logo_r8bx6a.png",
    ];

    const logos3 = [
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/rock_worth_m8q5qt.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559664/spl_udjjtm.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559664/tech_india_wntwyx.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/tvs_wftk3c.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/tnlp-logo_syybbk.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/velammal_mytbsr.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/vecura_h0gvgr.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/vasanth_tv_bjwec1.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/ashok_leyalnd_hrcwkc.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/makkal-logo_fod6pu.png",
        "https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/vijaytv-logo_unqnnc.png",
    ];



    // Combine all logos for better distribution
    const allLogos = [...logos, ...logos2, ...logos3];
    const row1Logos = allLogos.slice(0, Math.ceil(allLogos.length / 2));
    const row2Logos = allLogos.slice(Math.ceil(allLogos.length / 2));

    return (
        <section className="w-full bg-[#011333] py-12 overflow-hidden">
            {/* Section Header */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Leading Organizations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Join thousands of companies worldwide who trust our spam filtering solutions to protect their email communications
                    </p>
                </div>
            </div> */}

            {/* Full Width Slider Container */}
            <div className="w-full space-y-8">
                {/* First Row - Left to Right */}
                <div className="w-full">
                    <Slider {...settingsRow1}>
                        {row1Logos.map((logo, index) => (
                            <div key={`row1-${index}`} className="px-4">
                                <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-2">
                                    <img 
                                        src={logo} 
                                        alt={`Client logo ${index + 1}`}
                                        className="max-h-12 max-w-38 object-cover filter  hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Second Row - Right to Left */}
                <div className="w-full">
                    <Slider {...settingsRow2}>
                        {row2Logos.map((logo, index) => (
                            <div key={`row2-${index}`} className="px-4">
                                <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mx-2">
                                    <img 
                                        src={logo} 
                                        alt={`Client logo ${index + 1}`}
                                        className="max-h-12 max-w-38 object-cover filter  hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            
        </section>
    );
};

export default ClientSlider;
