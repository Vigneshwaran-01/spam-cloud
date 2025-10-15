import React, { useState, useEffect } from 'react';

export default function CardHoverEffectOutgoing() {
  const [activeSection, setActiveSection] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeOverviewSection, setActiveOverviewSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      const deploymentSection = document.getElementById('deployment-section');
      const whyChooseSection = document.getElementById('why-choose-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if we're between deployment section start and why-choose section end
      if (deploymentSection && whyChooseSection) {
        const deploymentTop = deploymentSection.offsetTop;
        const whyChooseTop = whyChooseSection.offsetTop;
        const whyChooseBottom = whyChooseTop + whyChooseSection.offsetHeight;
        
        if (scrollPosition >= deploymentTop && scrollPosition <= whyChooseBottom) {
          setShowSidebar(true);
        } else {
          setShowSidebar(false);
        }

        // Determine which overview section is active
        if (scrollPosition >= deploymentTop && scrollPosition < whyChooseTop) {
          if (scrollPosition < deploymentTop + 300) {
            setActiveOverviewSection('deployment');
          } else {
            setActiveOverviewSection('integration');
          }
        } else if (scrollPosition >= whyChooseTop && scrollPosition <= whyChooseBottom) {
          setActiveOverviewSection('why-choose');
        } else {
          setActiveOverviewSection('');
        }
      }

      // Update active section
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundColor = (index) => {
    const colors = ['bg-white', 'bg-slate-50', 'bg-blue-50'];
    return colors[index] || 'bg-white';
  };

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative">
      {/* Left Sidebar Navigation - Clean style */}
      <div className={`hidden lg:block w-48 fixed left-8 z-10 transition-all duration-500 ${
        showSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`} style={{ top: 'calc(35vh)' }}>
        <div className="space-y-2">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">Page Overview</h4>
            <div className="space-y-1">
              <div 
                className={`text-sm cursor-pointer transition-colors ${
                  activeOverviewSection === 'deployment' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => {
                  const element = document.getElementById('deployment-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Seamless Integration
              </div>
              <div 
                className={`text-sm cursor-pointer transition-colors ${
                  activeOverviewSection === 'integration' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => {
                  const element = document.getElementById('section-0');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Outbound Protection
              </div>
              <div 
                className={`text-sm cursor-pointer transition-colors ${
                  activeOverviewSection === 'why-choose' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => {
                  const element = document.getElementById('why-choose-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Why Choose Outgoing Filter
              </div>
            </div>
          </div>
          
          {/* {features.map((feature, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeSection === index ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-blue-600'
              }`}
              onClick={() => {
                const element = document.getElementById(`section-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-3 py-1">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === index ? 'bg-blue-600' : 'bg-slate-300'
                }`}></div>
                <span className="text-sm">{feature.shortTitle}</span>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      {/* Proofpoint-style collapsible sections */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            id={`section-${index}`}
            className="scroll-section border-b border-gray-200 pb-8"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Left side - Title only (image hidden by default) */}
              <div className="lg:w-1/3">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                {/* Image only shows when section is expanded */}
                {expandedSections[index] && feature.image && (
                  <div className="w-full h-40 bg-slate-100 rounded-lg overflow-hidden animate-in slide-in-from-top duration-300">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Right side - Content and Toggle */}
              <div className="lg:w-2/3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-slate-700 text-base leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Collapsible content */}
                    {expandedSections[index] && (
                      <div className="mt-4 animate-in slide-in-from-top duration-300">
                        {/* Benefits list */}
                        <ul className="space-y-2 mb-4">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600 leading-relaxed text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        {feature.learnMore && (
                          <div>
                            <a 
                              href={feature.learnMore.link} 
                              className="text-slate-900 hover:text-blue-600 font-medium underline transition-colors duration-200 text-sm"
                            >
                              {feature.learnMore.text}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-blue-700 transition-colors duration-300"
                  >
                    <span className="text-white font-bold text-base">
                      {expandedSections[index] ? '−' : '+'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple icon components
const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const InboxIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-2-2m0 0l-2 2m2-2v2M4 13l2-2m0 0l2 2m-2-2v2" />
  </svg>
);

export const features = [
  {
    title: "Real-Time Outbound Email Monitoring",
    shortTitle: "Email Monitoring",
    description: "Monitor all outbound email traffic in real-time with comprehensive analytics and instant threat detection to protect your domain reputation.",
    icon: ClockIcon,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1745556538/secure-email-otp-authentication-verification-method_258153-468_fp0mjg.jpg",
    benefits: [
      "Real-time monitoring of all outbound email traffic",
      "Instant alerts for suspicious sending patterns",
      "Comprehensive analytics and reporting dashboard",
      "Automated threat detection and response"
    ],
    learnMore: {
      text: "Learn more about Email Monitoring",
      link: "#"
    }
  },
  {
    title: "Advanced Sender Reputation Protection",
    shortTitle: "Reputation Protection",
    description: "Safeguard your email deliverability with advanced sender reputation management that prevents blacklisting and maintains high delivery rates.",
    icon: ShieldIcon,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1745556359/4957160_4957160_fa0ub1.jpg",
    benefits: [
      "Proactive blacklist monitoring and prevention",
      "Domain and IP reputation management",
      "Automated compliance with email authentication standards",
      "Delivery rate optimization and tracking"
    ],
    learnMore: {
      text: "Learn more about Reputation Protection",
      link: "#"
    }
  },
  {
    title: "Intelligent Spam Detection & Prevention",
    shortTitle: "Spam Prevention",
    description: "Advanced AI-powered spam detection that prevents malicious content from leaving your network while maintaining legitimate email flow.",
    icon: InboxIcon,
    image: "https://res.cloudinary.com/daggx9p24/image/upload/v1745499279/envelope-with-document-shield-with-lock-mail-email-message-security-vector-illustration_660702-750_etr8h0.jpg",
    benefits: [
      "AI-powered content analysis and filtering",
      "Behavioral pattern recognition for abuse detection",
      "Zero-day threat protection with machine learning",
      "Customizable filtering policies and rules"
    ],
    learnMore: {
      text: "Learn more about Spam Prevention",
      link: "#"
    }
  }
];
