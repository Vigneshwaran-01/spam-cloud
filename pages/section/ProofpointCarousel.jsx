import React, { useState, useRef } from 'react';
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

    setCurrentIndex(index - 1);  // Adjust index for zero-based array

    // Optionally, smooth scroll the carousel track (if you're not using CSS transitions)
    if (carouselTrackRef.current) {
      const cardWidth = carouselTrackRef.current.offsetWidth;
      carouselTrackRef.current.scrollLeft = cardWidth * (index - 1);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };


  return (
    <div className="col-lg-6">
      <div className="proofpoint-carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-track" id="carouselTrack" ref={carouselTrackRef}>

            {cards.map((card, index) => (
              <div
                key={index}
                className={`proofpoint-carousel-card ${card.type === 'stat' ? 'stat-card' : ''} ${index === currentIndex ? 'active' : ''}`}
                style={{
                  filter: index !== currentIndex ? 'blur(5px)' : 'none', // Apply blur
                  opacity: index !== currentIndex ? 0.5 : 1,          // Reduce opacity
                  transition: 'filter 0.5s ease, opacity 0.5s ease', // Add transition
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

        <div className="carousel-dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofpointCarousel;