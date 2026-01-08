
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const WhyTebari = () => {
  const isMobile = useIsMobile();
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

  return (
    <section id="why-tebari" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px"
          }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
          >
            Why Tebari?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            In a world drowning in plastic waste, we bring innovative solutions and circular economy expertise to create sustainable impact
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px"
          }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={300} suffix=" Million" /> Tons
            </h3>
            <p className="text-gray-700">
              Annual plastic waste generated globally, with massive potential for recycling and circular economy solutions
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={90} suffix="%" />
            </h3>
            <p className="text-gray-700">
              of plastic waste ends up in landfills or the environment, highlighting the urgent need for recycling solutions
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <Clock4 className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={500} suffix=" Years" />
            </h3>
            <p className="text-gray-700">
              Time it takes for plastic to decompose naturally, making recycling critical for environmental sustainability
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-12 relative py-16 px-4 sm:px-8 rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px"
          }}
          variants={containerVariants}
        >
          {/* Sticky Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: 'url("/gallery/plastic-collection/aboutfour.jpeg")' }}
            ></div>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Tebari Does for You
              </h3>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                We transform plastic waste into valuable products while creating sustainable economic opportunities for communities
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start">
                  <div className="bg-tebari-green/20 rounded-full p-3 mr-4 group-hover:bg-tebari-green/40 transition-colors">
                    <BarChart className="w-6 h-6 text-tebari-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Sustainable Products</h4>
                    <p className="text-gray-100">Create high-quality recycled products that generate revenue and reduce environmental impact.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start">
                  <div className="bg-tebari-teal/20 rounded-full p-3 mr-4 group-hover:bg-tebari-teal/40 transition-colors">
                    <Sparkles className="w-6 h-6 text-tebari-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Community Empowerment</h4>
                    <p className="text-gray-100">Build circular economy systems that create jobs and empower local communities.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start">
                  <div className="bg-tebari-green/20 rounded-full p-3 mr-4 group-hover:bg-tebari-green/40 transition-colors">
                    <Zap className="w-6 h-6 text-tebari-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Innovative Technology</h4>
                    <p className="text-gray-100">Our tebari.cloud platform maps plastic waste accumulation via GPS, providing live data for field officers and recyclers alike.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start">
                  <div className="bg-tebari-teal/20 rounded-full p-3 mr-4 group-hover:bg-tebari-teal/40 transition-colors">
                    <Rocket className="w-6 h-6 text-tebari-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Environmental Impact</h4>
                    <p className="text-gray-100">Measurable environmental benefits through plastic waste reduction and ocean cleanup.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                to="/development-process"
                className="inline-flex items-center px-6 py-3 bg-white text-tebari-green font-semibold rounded-lg hover:bg-gray-100 transition-all group shadow-lg"
              >
                Learn more about our sustainable development process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTebari;
