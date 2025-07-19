
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="About Tebari Limited - Plastic recycling facility"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-tebari-green/80 to-white/20"></div>
          </div>
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white"
            >
              About Tebari Limited
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
            >
              Transforming plastic waste into sustainable solutions for communities across Kenya
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12 text-center"
              >
                We're a team of innovators dedicated to transforming plastic waste into sustainable solutions for communities across Kenya.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At Tebari Limited, we're on a mission to transform plastic waste into valuable resources while building 
                    sustainable circular economy systems that empower local communities and protect our environment.
                  </p>
                  <p className="text-gray-600">
                    We believe that by turning waste into opportunity, we can create a cleaner environment, generate 
                    economic value, and build resilient communities across Kenya.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Sustainability:</strong> We prioritize environmental impact in every decision we make.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Community:</strong> We empower local communities through education and economic opportunities.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> We continuously develop new solutions for plastic waste challenges.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> We measure success by the positive change we create in communities and the environment.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Tebari Limited was founded with the vision of creating a circular economy model that transforms 
                    plastic waste from a problem into a resource. We recognized the urgent need for sustainable 
                    waste management solutions in Kenya, particularly along our coastlines where plastic pollution 
                    threatens marine ecosystems and local livelihoods.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Starting with coastal cleanup initiatives, we developed innovative recycling technologies that 
                    convert plastic waste into valuable products. Our approach combines environmental stewardship 
                    with economic empowerment, creating jobs while addressing the plastic waste crisis.
                  </p>
                  <p className="text-gray-600">
                    Today, we operate across multiple sectors - from construction materials to fashion textiles - 
                    demonstrating that sustainable practices can be both environmentally beneficial and economically viable. 
                    Our community-centered approach ensures that local populations benefit directly from our initiatives.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in environmental science, recycling technology, community development, 
                  and business strategy to deliver comprehensive sustainability solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Linus Owino",
                      role: "Co-founder",
                      bio: "Leading Tebari's mission to transform plastic waste into sustainable solutions across Kenya.",
                      email: "linus@tebari.net",
                      image: "/lovable-uploads/7dced1c1-f838-45ef-9192-f4c6d9002e25.png"
                    },
                    {
                      name: "Nicholas Okeyo",
                      role: "Co-founder",
                      bio: "Overseeing operations and community partnerships to ensure sustainable impact and growth.",
                      email: "nick@tebari.net",
                      image: "/lovable-uploads/b46fb5fb-9e17-44ab-b920-b4cfe1c6fb6a.png"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                          <p className="text-tebari-green text-sm font-medium mb-3">{member.role}</p>
                          <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-tebari-green hover:text-tebari-green/80 text-sm font-medium"
                          >
                            {member.email}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
