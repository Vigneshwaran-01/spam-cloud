import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function CardHoverEffectoutgoing() {
  return (
    <div className="max-w-5xl mx-auto px-2 income-deploy-card">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    description: "Real-Time Outgoing Email Monitoring",
    link: "#",
    // title: "Real-Time Email Filtering",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745556538/secure-email-otp-authentication-verification-method_258153-468_fp0mjg.jpg",
  },
  {
    description: "Safeguard Email Deliverability",
    link: "#",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745556359/4957160_4957160_fa0ub1.jpg",
  },
  {
    description: "Smart Sender Behavior Detection",
    link: "#",
    img: "https://res.cloudinary.com/daggx9p24/image/upload/v1745499279/envelope-with-document-shield-with-lock-mail-email-message-security-vector-illustration_660702-750_etr8h0.jpg",
  },
];
