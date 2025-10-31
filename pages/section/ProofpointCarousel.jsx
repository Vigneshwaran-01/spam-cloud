import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ProofpointCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      type: 'story',
      content: (
        <>
          <h4>Numbers only ever tell part of the story.</h4>
          <Link href="/contact" className="proofpoint-cta-link">
            See customer stories <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </>
      ),
    },
    {
      type: 'stat',
      badge: 'STOPPING',
      number: '200k',
      label: 'BEC attacks per year',
    },
    {
      type: 'stat',
      badge: 'PROTECTING',
      number: '25k+',
      label: 'customers worldwide',
    },
    {
      type: 'stat',
      badge: 'SECURING',
      number: '83',
      label: 'of the F100 use our solutions',
    },
  ];

const currentSlide = (index) => {
  if (isTransitioning) return;
  setIsTransitioning(true);
  setCurrentIndex(index);

  setTimeout(() => {
    setIsTransitioning(false);

    if (carouselTrackRef.current) {
      const card = carouselTrackRef.current.children[0]; // 👈 first card
      const cardWidth = card?.offsetWidth || 0;          // get actual card width
      carouselTrackRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  }, 100);
};

useEffect(() => {
  if (carouselTrackRef.current) {
    const card = carouselTrackRef.current.children[0];
    const cardWidth = card?.offsetWidth || 0;
    carouselTrackRef.current.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth",
    });
  }
}, [currentIndex]);


  return (
    <div className="col-lg-6">
  <div className="proofpoint-carousel-container relative overflow-hidden">
    <div className="carousel-wrapper relative">
      <div
        ref={carouselTrackRef}
        className="carousel-track flex transition-all duration-500 ease-in-out overflow-hidden" // 👈 critical
        id="carouselTrack"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`proofpoint-carousel-card flex-shrink-0 w-full md:w-[80%] lg:w-[60%] px-4 ${card.type === 'stat' ? 'stat-card' : ''} ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              filter: index !== currentIndex ? 'blur(5px)' : 'none',
              opacity: index !== currentIndex ? 0.5 : 1,
              transition: 'filter 0.5s ease, opacity 0.5s ease',
            }}
          >
            <div className="card-content">
              {card.type === 'story' ? (
                card.content
              ) : (
                <>
                  <div className="stat-badge">{card.badge}</div>
                  <h2 className="stat-number">{card.number}</h2>
                  <p className="stat-label">{card.label}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Dots */}
    <div className="carousel-dots flex justify-center mt-4 gap-2">
      {cards.map((_, index) => (
        <span
          key={index}
          className={`dot cursor-pointer w-3 h-3 rounded-full ${
            index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
          }`}
          onClick={() => currentSlide(index)}
        ></span>
      ))}
    </div>

    {/* Optional right-side blur overlay */}
  </div>
</div>

  );   
};

export default ProofpointCarousel;