
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import FloatingContactButton from '@/components/FloatingContactButton';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyTebari from '@/components/WhyTebari';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Tebari Limited - Transforming Plastic Waste into Sustainable Solutions" 
        description="Tebari Limited: Pioneering plastic recycling solutions in Kenya, transforming waste into valuable products while building circular economy communities."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['plastic recycling', 'circular economy', 'sustainable solutions', 'waste management', 'Kenya', 'blue economy', 'environmental services']}
      />
      <Navbar />
      <Hero />
      <Features />
      <WhyTebari />
      <Projects />
      <BlogPreview />
      <ContactInfo />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
