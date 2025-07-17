
import { motion } from "framer-motion";
import { Leaf, Recycle, Users, Globe, Award, Target } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Features = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Advanced Recycling Technology",
      description: "State-of-the-art equipment to process various types of plastic waste into high-quality recycled materials."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Empowerment",
      description: "Training local communities in waste collection, sorting, and recycling techniques to create sustainable livelihoods."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Environmental Impact",
      description: "Reducing plastic pollution in Kenya's environment while contributing to the blue economy and marine conservation."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control to ensure recycled products meet international standards."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Circular Economy",
      description: "Creating closed-loop systems where waste becomes valuable input for new products and processes."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Sustainable Solutions",
      description: "Developing innovative approaches to turn plastic waste into construction materials, textiles, and more."
    }
  ];

  const caseStudies = [
    {
      title: "Ocean Cleanup Initiative",
      subtitle: "Removing plastic waste from Kenya's coastline",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
      description: "Our ocean cleanup project has successfully removed over 50 tons of plastic waste from Kenyan beaches and coastal waters, directly contributing to marine ecosystem protection.",
      impact: "50+ tons of plastic waste removed",
      link: "/projects/ocean-cleanup"
    },
    {
      title: "Community Recycling Centers",
      subtitle: "Empowering local communities",
      image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png",
      description: "We've established 15 community recycling centers across Kenya, providing training and equipment to local entrepreneurs for sustainable waste management.",
      impact: "15 centers established, 200+ jobs created",
      link: "/projects/community-centers"
    },
    {
      title: "Plastic-to-Construction Materials",
      subtitle: "Innovative building solutions",
      image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      description: "Converting plastic waste into durable construction materials, providing affordable housing solutions while addressing waste management challenges.",
      impact: "30% cost reduction in construction materials",
      link: "/projects/construction-materials"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Collection & Sorting",
      description: "Plastic waste is collected from communities, beaches, and waste management centers, then sorted by type and quality."
    },
    {
      step: "02",
      title: "Cleaning & Processing",
      description: "Thorough cleaning removes contaminants, followed by shredding and melting to prepare materials for recycling."
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "Recycled plastic is transformed into new products including construction materials, textiles, and household items."
    },
    {
      step: "04",
      title: "Distribution",
      description: "Finished products are distributed to markets, creating economic value and closing the circular economy loop."
    }
  ];

  const galleryItems = [{
    image: "/lovable-uploads/d6a7ae37-e01c-4bd1-9d47-0dd9401a2db0.png",
    title: "Recycled Plastic Products",
    description: "High-quality products made from recycled plastic materials, demonstrating the value of our circular economy approach."
  }, {
    image: "/lovable-uploads/0b050b90-7be0-43f3-8285-57ea81afb241.png",
    title: "Community Training Workshop",
    description: "Educational sessions teaching communities about plastic waste management, sorting techniques, and sustainable practices."
  }, {
    image: "/lovable-uploads/eeb4c09e-1923-433f-914a-f4c951acfcc6.png",
    title: "Circular Plastic Economy: Rethinking Waste Management",
    description: "Implementing circular economy principles to transform plastic waste into valuable resources and sustainable business opportunities."
  }, {
    image: "/lovable-uploads/eeb4c09e-1923-433f-914a-f4c951acfcc6.png",
    title: "The Science of Recycling",
    description: "Advanced scientific processes and technology used to break down and transform plastic waste into new materials."
  }];

  const stepFlowItems = [{
    step: "01",
    title: "Waste Collection",
    description: "Community-based collection of plastic waste from households, businesses, and coastal areas."
  }, {
    step: "02", 
    title: "Sorting & Processing",
    description: "Advanced sorting techniques to categorize plastic by type and prepare for recycling processes."
  }, {
    step: "03",
    title: "Recycling & Manufacturing", 
    description: "State-of-the-art equipment transforms waste into new products and materials."
  }, {
    step: "04",
    title: "Market Distribution",
    description: "Recycled products reach markets, creating economic opportunities and environmental benefits."
  }];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features Grid */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Waste Into Value
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We use innovative technology and community partnerships to create sustainable solutions for plastic waste management across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-tebari-green mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Making Real Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how our innovative recycling solutions are transforming communities and the environment across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-tebari-green font-medium mb-2">{study.subtitle}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="text-sm font-semibold text-tebari-green mb-4">{study.impact}</div>
                  <a 
                    href={study.link}
                    className="inline-flex items-center text-tebari-green hover:text-tebari-green/80 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Waste to Value
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures maximum value extraction from plastic waste while creating sustainable economic opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-tebari-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
              Our Work in Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From community workshops to finished products, witness how we're building a circular economy across Kenya.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Step Flow Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
              Step by Step
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Create Change
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven methodology transforms plastic waste into valuable resources while empowering communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepFlowItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-tebari-green text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < stepFlowItems.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-tebari-green transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
