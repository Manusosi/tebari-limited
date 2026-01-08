
import { ArrowRight, Recycle, Leaf, Users, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images for hero slider
  const heroImages = [
    '/gallery/plastic-collection/aboutone.jpeg',
    '/gallery/plastic-collection/abouttwo.jpeg',
    '/gallery/plastic-collection/aboutthree.jpeg',
    '/gallery/plastic-collection/aboutfour.jpeg',
    '/gallery/plastic-collection/aboutfive.jpeg',
    '/gallery/plastic-collection/aboutsix.jpeg',
    '/gallery/plastic-collection/aboutseve..jpeg', // Keep as is since file exists with this name
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showMessage]);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[600px] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Tebari plastic recycling and collection activities"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Unified Black Overlay for visibility */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="w-full" variants={itemVariants}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white" variants={itemVariants}>
            Transforming Plastic Waste into Sustainable Solutions
          </motion.h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200" variants={itemVariants}>
            We aggregate waste plastic and repurpose it into valuable products for a circular economy in Kenya.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <a
                href="mailto:linus.o@tebari.net?subject=Product%20Demo%20Request"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 bg-tebari-teal text-white rounded-lg hover:bg-tebari-teal/90 transition-all shadow-lg hover:shadow-xl hover:shadow-tebari-teal/20 flex items-center justify-center group text-sm sm:text-base font-medium"
              >
                Request Product Demo
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/about"
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all shadow-lg flex items-center justify-center group text-sm sm:text-base font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-tebari-green/10 flex items-center justify-center rounded-lg text-tebari-green mb-2 md:mb-3">
            <Recycle className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Plastic Collection</h3>
          <p className="text-gray-600 text-xs md:text-sm">Gathering plastic waste from communities and coastlines across Kenya.</p>
        </motion.div>

        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-tebari-teal/10 flex items-center justify-center rounded-lg text-tebari-teal mb-2 md:mb-3">
            <Leaf className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Innovative Recycling</h3>
          <p className="text-gray-600 text-xs md:text-sm">Real-time mapping of plastic waste accumulation for efficient collection and recycling.</p>
        </motion.div>

        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
            <Users className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Circular Impact</h3>
          <p className="text-gray-600 text-xs md:text-sm">Building sustainable communities through education, training, and economic empowerment.</p>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>;
};

export default Hero;
