import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <HeroSection
          title="Join Our Team"
          subtitle="We're looking for passionate individuals to help us transform plastic waste into sustainable solutions for Kenya's future."
          height="md"
          textColor="white"
          className="pt-16"
        />
        
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="prose prose-lg max-w-none">
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  We welcome both full-time professionals and interns who are eager to contribute to environmental sustainability and community empowerment.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join Tebari?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Environmental Impact",
                        description: "Work on projects that directly contribute to cleaning up plastic waste and protecting our environment."
                      },
                      {
                        title: "Community Empowerment",
                        description: "Help build sustainable economic opportunities for local communities across Kenya."
                      },
                      {
                        title: "Innovation",
                        description: "Develop cutting-edge recycling technologies and circular economy solutions."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Contact Our Leadership Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex flex-col items-center text-center">
                          <img 
                            src="/lovable-uploads/7dced1c1-f838-45ef-9192-f4c6d9002e25.png"
                            alt="Linus Owino"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-xl font-bold text-gray-900">Linus Owino</h3>
                          <p className="text-gray-600 mb-4">Co-founder</p>
                          <div className="flex flex-col space-y-3">
                            <a href="mailto:linus@tebari.net" className="flex items-center text-gray-700 hover:text-tebari-green">
                              <Mail className="w-5 h-5 mr-2" />
                              linus@tebari.net
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex flex-col items-center text-center">
                          <img 
                            src="/lovable-uploads/b46fb5fb-9e17-44ab-b920-b4cfe1c6fb6a.png"
                            alt="Nicholas Okeyo"
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                          />
                          <h3 className="text-xl font-bold text-gray-900">Nicholas Okeyo</h3>
                          <p className="text-gray-600 mb-4">Co-founder</p>
                          <div className="flex flex-col space-y-3">
                            <a href="mailto:nick@tebari.net" className="flex items-center text-gray-700 hover:text-tebari-green">
                              <Mail className="w-5 h-5 mr-2" />
                              nick@tebari.net
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                      <p className="text-gray-600 mb-4">For general inquiries and applications, contact us at:</p>
                      <a 
                        href="mailto:info@tebari.net" 
                        className="inline-flex items-center text-tebari-green hover:text-tebari-green/80 font-medium"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        info@tebari.net
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
