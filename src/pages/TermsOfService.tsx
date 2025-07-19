import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: July 19, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Tebari Limited ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
              <p className="text-gray-600 mb-4">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>In any way that violates any applicable laws or regulations</li>
                <li>To transmit or procure the sending of any unsolicited or unauthorized advertising</li>
                <li>To impersonate or attempt to impersonate the company or another user</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use of the services</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                The services and their entire contents, features, and functionality are owned by Tebari Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
              <p className="text-gray-600 mb-4">
                Our services may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post to the services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">
                You may not use our services for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Tebari Limited excludes all representations, warranties, conditions and all other terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Tebari Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at hello@tebari.co.ke
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;