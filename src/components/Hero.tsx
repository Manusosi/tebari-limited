
import { ArrowRight, Recycle, Leaf, Users, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
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
    toast({
      title: "Coming Soon",
      description: "This feature is coming soon. Stay tuned!",
    });
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[600px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Plastic recycling facility with sorting and processing equipment"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tebari-green/80 via-tebari-green/70 to-white"></div>
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
              <button 
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 bg-white text-tebari-green rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-white/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                onClick={handleShopClick}
              >
                Browse Shop
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 bg-tebari-teal text-white rounded-lg hover:bg-tebari-teal/90 transition-all shadow-lg hover:shadow-xl hover:shadow-tebari-teal/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                onClick={scrollToContact}
              >
                Contact Us
                <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
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
            <p className="text-gray-600 text-xs md:text-sm">Advanced sorting and processing technology that transforms waste into resources.</p>
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
