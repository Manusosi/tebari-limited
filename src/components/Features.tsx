import { useEffect, useRef, useState } from 'react';
import { Users, Recycle, Wrench, BookOpen, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Users className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Community Collection",
      description: "Gathering plastic waste from communities and coastlines through organized collection programs and partnerships.",
      image: "/lovable-uploads/ba0ef241-e9a9-4a7e-8f81-5b4c5ae33aeb.png"
    },
    {
      icon: <Recycle className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Digital Waste Tracking",
      description: "Real-time platform for mapping plastic waste locations and connecting recyclers with available materials.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Wrench className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Product Manufacturing",
      description: "Transforming sorted plastic waste into valuable new materials and products for various industries.",
      image: "/lovable-uploads/ac1cd6db-1491-467f-8cc4-cf8e10d3b5e9.png"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Education & Impact",
      description: "Community training and awareness programs that promote sustainable practices and environmental stewardship.",
      image: "/lovable-uploads/a379c144-f21a-4d1e-8b5b-974aa66de067.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const sensorCaseStudies = [{
    image: "/lovable-uploads/29216872-19ac-4f42-a4de-493eef44a00a.png",
    title: "Plastic Bottle Collection Drive",
    description: "Community volunteers collecting plastic bottles and containers for recycling, creating economic opportunities while cleaning the environment."
  }, {
    image: "/lovable-uploads/d6a7ae37-e01c-4bd1-9d47-0dd9401a2db0.png",
    title: "Recycled Plastic Products",
    description: "Manufacturing facility producing new products from recycled plastic waste, including building materials and household items."
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
    icon: <Microchip className="h-10 w-10 text-tebari-green" />,
    title: "Collection Network",
    description: "Our community-based aggregation points for collecting and sorting plastic waste across Kenya"
  }, {
    icon: <Factory className="h-10 w-10 text-tebari-green" />,
    title: "Plastic Mapping Tech",
    description: "We are developing a platform that maps plastic waste accumulation in real time, giving recyclers live data on available plastic for collection and allowing them to place orders for both raw and repurposed materials."
  }, {
    icon: <Handshake className="h-10 w-10 text-tebari-green" />,
    title: "Community Partners",
    description: "Strategic partnerships with local recyclers, manufacturers and communities to create a complete recycling ecosystem"
  }];
  const sprintPhases = [{
    name: "Data Collection",
    icon: <Recycle className="h-4 w-4" />
  }, {
    name: "Platform Build",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "User Testing",
    icon: <Users className="h-4 w-4" />
  }, {
    name: "Deployment",
    icon: <Rocket className="h-4 w-4" />
  }];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-tebari-green/10 text-tebari-green rounded-full text-sm font-medium">
              Recycling Solutions
            </div>
            <p className="text-gray-600 mt-4">
              Our comprehensive approach transforms plastic waste into valuable resources while building sustainable communities across Kenya.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-black/40" 
                      : hoveredFeature === index 
                        ? "bg-black/50" 
                        : "bg-black/70"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Swipe" : "Scroll"} to continue • Press ESC to exit
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-tebari-green/10 text-tebari-green rounded-full text-sm font-medium">
                Real-World Impact
              </div>
              <h3 className="text-2xl font-bold">Our Work in Action</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                See how we're making a difference through community engagement, innovative recycling, and sustainable education programs.
                <span className="block text-sm mt-1 text-tebari-teal">Scroll horizontally to see more examples →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {sensorCaseStudies.map((study, index) => <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-48">
                            <img src={study.image} alt={study.title} className="w-full h-full object-cover rounded-t-lg" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <div className="text-center mt-6 text-sm text-gray-600">
                <p className="font-medium">These examples showcase our comprehensive approach to plastic waste management and community empowerment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-tebari-green hover:bg-tebari-green/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Need Custom Solutions?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-tebari-green rounded-lg border border-tebari-green hover:bg-tebari-green/5 hover:shadow-md transition-all group w-full sm:w-auto">
            Learn More About Our Process
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="technology" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-tebari-green/10 text-tebari-green rounded-full text-sm font-medium">
              Our Process
            </div>
            <h2 className="text-3xl font-bold mb-4">Collect → Transform → Repurpose</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tebari's three-step process combines community engagement, advanced technology, and sustainable manufacturing to create a complete circular economy solution.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500">Our proprietary technology provides the core foundation of every solution we build.</p>}
                      {index === 1 && <p className="text-xs text-gray-500">We carefully select the best off-the-shelf components to complement our proprietary technology.</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Our network of production partners ensures quality manufacturing at scale.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold">Plastic Mapping Platform</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Data-Driven Development</span>
                    <Microchip className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">Building a real-time platform that connects waste collectors with recyclers for efficient resource allocation</p>
                
                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>
                
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Real-time waste location data updates and recycler feedback</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Data-driven optimization</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Rocket className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Platform Launch</h3>
              <p className="text-gray-700">Connecting waste collectors and recyclers across Kenya</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/technology-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-white text-tebari-green rounded-lg border border-tebari-green hover:bg-tebari-green/5 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Learn More About Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-tebari-green hover:bg-tebari-green/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Contact Our Team
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
