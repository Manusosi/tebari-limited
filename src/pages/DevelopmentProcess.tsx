
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Search, Cog, TestTube, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const DevelopmentProcess = () => {
  const processSteps = [
    {
      icon: <Lightbulb className="h-12 w-12 text-tebari-green" />,
      title: "Ideation & Problem Identification",
      description: "We identify specific waste management challenges in communities and develop innovative solutions that address both environmental and economic needs.",
      details: [
        "Community needs assessment",
        "Waste stream analysis",
        "Market opportunity evaluation",
        "Stakeholder consultation"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-tebari-green" />,
      title: "Research & Feasibility Study",
      description: "Comprehensive research into recycling technologies, material properties, and market demands to ensure viable and sustainable solutions.",
      details: [
        "Technology research and evaluation",
        "Material testing and analysis",
        "Economic feasibility assessment",
        "Environmental impact study"
      ]
    },
    {
      icon: <Cog className="h-12 w-12 text-tebari-green" />,
      title: "Design & Engineering",
      description: "Our engineering team designs efficient recycling processes and develops innovative products that maximize value from waste materials.",
      details: [
        "Process design and optimization",
        "Product development and prototyping",
        "Equipment specification",
        "Quality control system design"
      ]
    },
    {
      icon: <TestTube className="h-12 w-12 text-tebari-green" />,
      title: "Testing & Validation",
      description: "Rigorous testing ensures our processes and products meet international standards while maximizing environmental and social impact.",
      details: [
        "Pilot program implementation",
        "Product quality testing",
        "Process efficiency validation",
        "Community feedback integration"
      ]
    },
    {
      icon: <Rocket className="h-12 w-12 text-tebari-green" />,
      title: "Implementation & Scale",
      description: "Full-scale deployment with continuous monitoring and optimization to ensure sustainable impact and community benefit.",
      details: [
        "Commercial production launch",
        "Community training programs",
        "Impact measurement and reporting",
        "Continuous improvement processes"
      ]
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Development Process - Tebari Limited"
        description="Learn about Tebari's sustainable development process for creating innovative plastic recycling solutions."
        keywords={['sustainable development', 'recycling process', 'circular economy', 'community impact']}
      />
      
      {/* Hero Section */}
      <div className="pt-16 pb-16 bg-gradient-to-b from-tebari-green to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Development Process
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From identifying community needs to implementing scalable solutions, our systematic approach ensures maximum impact and sustainability.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-2 flex justify-center md:justify-start">
                        <div className="p-4 bg-tebari-green/10 rounded-full">
                          {step.icon}
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                      </div>
                      <div className="md:col-span-4">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm text-gray-700 flex items-start">
                                <div className="w-2 h-2 bg-tebari-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sustainable Impact</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our development process is designed to create lasting positive impact on communities and the environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tebari-green mb-2">100+</div>
                <div className="text-gray-700">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tebari-green mb-2">50,000kg</div>
                <div className="text-gray-700">Plastic Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tebari-green mb-2">25</div>
                <div className="text-gray-700">Sustainable Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DevelopmentProcess;
