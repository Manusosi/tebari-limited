
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <PageLayout>
      <SEO 
        title="Contact Us - Tebari Limited"
        description="Get in touch with Tebari Limited. Contact our team to learn about our plastic recycling solutions and how we can work together on sustainable projects in Kenya."
        keywords={['contact tebari', 'plastic recycling Kenya', 'sustainable solutions contact', 'circular economy Kenya']}
      />
      
      <HeroSection
        title="Contact Us"
        subtitle="Ready to join Kenya's circular economy revolution? Get in touch with our team to learn how we can work together on sustainable recycling solutions."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        backgroundGradient="from-tebari-green/80 to-tebari-teal/80"
        height="md"
      >
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-white text-tebari-green rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-medium"
        >
          Back to Home
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </HeroSection>

      <div className="bg-gray-50">
        <ContactForm />
      </div>
      
      <ContactInfo />
    </PageLayout>
  );
};

export default Contact;
