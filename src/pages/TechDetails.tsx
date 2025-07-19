
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Recycle, Factory, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TechDetails = () => {
  const technologies = [
    {
      icon: <Recycle className="h-8 w-8 text-tebari-green" />,
      title: "Advanced Sorting Systems",
      description: "AI-powered optical sorting technology that can identify and separate different types of plastics with 99.5% accuracy, ensuring high-quality recycled materials.",
      features: ["Automated plastic type identification", "Color sorting capabilities", "Contamination detection", "Real-time quality monitoring"]
    },
    {
      icon: <Factory className="h-8 w-8 text-tebari-green" />,
      title: "Mechanical Recycling",
      description: "State-of-the-art mechanical processing that transforms waste plastics into high-quality pellets ready for manufacturing new products.",
      features: ["Shredding and washing systems", "Melt filtration technology", "Pelletizing equipment", "Quality control testing"]
    },
    {
      icon: <Zap className="h-8 w-8 text-tebari-green" />,
      title: "Chemical Processing",
      description: "Advanced chemical recycling methods that break down complex plastics into their molecular components for infinite recyclability.",
      features: ["Pyrolysis technology", "Depolymerization processes", "Molecular breakdown", "Chemical purification"]
    },
    {
      icon: <Shield className="h-8 w-8 text-tebari-green" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control systems ensure all recycled materials meet international standards for safety and performance.",
      features: ["Material composition analysis", "Strength testing", "Purity verification", "Environmental compliance"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Collection & Sorting",
      description: "Waste plastics are collected from communities and sorted using advanced optical technology."
    },
    {
      step: "02",
      title: "Cleaning & Preparation",
      description: "Materials undergo thorough cleaning and preparation to remove contaminants and labels."
    },
    {
      step: "03",
      title: "Processing",
      description: "Plastics are processed through mechanical or chemical recycling based on material type."
    },
    {
      step: "04",
      title: "Quality Control",
      description: "All recycled materials undergo rigorous testing to ensure they meet quality standards."
    },
    {
      step: "05",
      title: "Product Manufacturing",
      description: "High-quality recycled materials are transformed into new, sustainable products."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Recycling Technology - Tebari Limited"
        description="Learn about Tebari's advanced plastic recycling technology and processes that transform waste into valuable materials."
        keywords={['plastic recycling technology', 'waste processing', 'circular economy', 'sustainable manufacturing']}
      />
      
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-tebari-green to-gray-900"></div>
          
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced Recycling Technology
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover how Tebari's innovative technology transforms plastic waste into high-quality, sustainable materials through cutting-edge processing methods.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Tebari employs a comprehensive suite of technologies to maximize recycling efficiency and product quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-tebari-green/10 rounded-lg">
                        {tech.icon}
                      </div>
                      <CardTitle className="text-xl">{tech.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="h-4 w-4 text-tebari-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recycling Process</h2>
            <p className="text-lg text-gray-600">
              From waste collection to finished products, every step is optimized for maximum efficiency and quality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-tebari-green text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TechDetails;
