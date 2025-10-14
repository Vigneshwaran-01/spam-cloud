import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-2 income-deploy-card">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    description: "Real-Time Email Filtering",
    link: "#",
    // title: "Real-Time Email Filtering",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745499064/time-zones-abstract-concept-vector-illustration_107173-26043_x19xg9.jpg",
  },
  {
    description: "Enhanced Inbox Productivity",
    link: "#",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745499185/people-stand-near-big-envelope-letter-shield-flat-vector-modern-illustration_566886-11466_smehra.jpg",
  },
  {
    description: "Business-Grade Email Security",
    link: "#",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745499279/envelope-with-document-shield-with-lock-mail-email-message-security-vector-illustration_660702-750_etr8h0.jpg",
  },
];
