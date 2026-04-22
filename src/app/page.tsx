"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Shield, Sparkles, Truck, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#features",
        },
        {
          name: "Results",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Detail Kingz Auto Spa"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "glowing-orb",
      }}
      title="Excellence in Every Detail."
      description="Detail Kingz Auto Spa delivers premium auto detailing that restores the showroom shine. We treat your vehicle with the precision it deserves."
      buttons={[
        {
          text: "Book Your Detail",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/headlights-hood-black-luxury-car_146671-19732.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934331.jpg",
          alt: "Luxury car interior view",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-sitting-inside-car-car-showroom_1303-15214.jpg",
          alt: "Client inside showroom",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-woman-posing-dramatic-light_23-2149085798.jpg",
          alt: "Detailing professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-auto-repairer-working-shop-car_23-2150170008.jpg",
          alt: "Workshop scene",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-sitting-his-car-looking-through-window_1303-31572.jpg",
          alt: "Happy customer",
        },
      ]}
      avatarText="Trusted by 500+ luxury car owners"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Premium Paint Protection",
          icon: Shield,
        },
        {
          type: "text-icon",
          text: "Showroom Quality Finish",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Expert Precision Care",
          icon: Wrench,
        },
        {
          type: "text-icon",
          text: "Elite Mobile Detailing",
          icon: Truck,
        },
        {
          type: "text-icon",
          text: "Satisfaction Guaranteed",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Why Choose Detail Kingz?"
      description={[
        "At Detail Kingz, we blend precision engineering with automotive passion. Our master detailers use premium products and techniques to ensure your car doesn't just look good; it stays protected.",
        "We specialize in high-end vehicle maintenance, from paint correction to ceramic coatings, creating lasting results for every client.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Premium Foam Wash",
          description: "Hand-wash treatment for a swirl-free, deep-cleaning experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-white-foam-diffusing-with-blue_23-2147798003.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/detergent-brown-liquid-with-blue-spume_23-2147933942.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Ceramic Paint Coating",
          description: "Long-term protection and hydrophobic finish for your vehicle.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-painter-overalls-doing-his-work-car-shop_23-2149750004.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/male-painter-hazmat-suit-inside-car-shop_23-2149750039.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Interior Deep Detail",
          description: "Rejuvenate your cabin with our precision leather and upholstery treatment.",
          imageSrc: "http://img.b2bpic.net/free-photo/comfortable-leather-seats-add-elegance-driving-generated-by-ai_188544-27222.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/beautiful-car-interior-clean-up-service_23-2149212257.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Our Elite Services"
      description="Comprehensive detailing care for the modern performance machine."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1500+",
          title: "Cars Detailed",
          items: [
            "Successfully serviced",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "Satisfaction Rate",
          items: [
            "Committed to quality",
          ],
        },
        {
          id: "m3",
          value: "5+",
          title: "Years Experience",
          items: [
            "Industry experts",
          ],
        },
      ]}
      title="Proven Results"
      description="Numbers that reflect our dedication to the perfect finish."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Incredible Shine",
          quote: "The team at Detail Kingz transformed my car. Truly the best auto spa in town.",
          name: "James L.",
          role: "Collector",
          imageSrc: "http://img.b2bpic.net/free-photo/young-male-leaning-new-car_23-2148332929.jpg",
        },
        {
          id: "2",
          title: "Precision Care",
          quote: "Professional, fast, and the ceramic coating is holding up perfectly.",
          name: "Maria K.",
          role: "Executive",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-near-his-modern-car_651396-2811.jpg",
        },
        {
          id: "3",
          title: "Amazing Results",
          quote: "My interior looked brand new. Extremely detailed and thorough service.",
          name: "David R.",
          role: "Car Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-dark-jacket-pink-background_179666-14171.jpg",
        },
        {
          id: "4",
          title: "Top Tier",
          quote: "Highly recommended for anyone who loves their car. These guys are the real deal.",
          name: "Elena S.",
          role: "Creative",
          imageSrc: "http://img.b2bpic.net/free-photo/man-hugging-car-car-showroom_1303-15203.jpg",
        },
        {
          id: "5",
          title: "Absolute Perfection",
          quote: "The paint correction work was nothing short of perfection. Outstanding quality.",
          name: "Mark D.",
          role: "Performance Driver",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-mechanic-standing-with-tyre_1170-1189.jpg",
        },
      ]}
      title="Client Spotlights"
      description="Hear what our premium clients say about their showroom results."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does a full detail take?",
          content: "Depending on the package, usually 4 to 8 hours.",
        },
        {
          id: "2",
          title: "Do you offer mobile services?",
          content: "Yes, we bring our elite equipment to your location.",
        },
        {
          id: "3",
          title: "Is your ceramic coating durable?",
          content: "Yes, our high-end coating lasts for several years with proper care.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/everyday-bath-utensils-dark-marble-background_58702-17754.jpg"
      title="Common Questions"
      description="Get clear answers about our professional detailing process."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Booking Inquiry"
      title="Ready for a Showroom Shine?"
      description="Secure your slot with Detail Kingz and experience the premium difference."
      buttons={[
        {
          text: "Book Detail Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Detail Kingz Auto Spa"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Results",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Support",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Detail Kingz Auto Spa. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
