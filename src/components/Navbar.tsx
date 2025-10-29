
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/2e4ff685-7212-4b95-9338-d2a7d96500bd.png" 
                alt="Tebari Limited Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <span className={cn("text-xl sm:text-2xl font-bold transition-colors", isScrolled ? "text-tebari-green" : "text-white")}>
                TEBARI
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Center */}
          <div className="hidden md:block flex-1">
            <NavigationMenu className={cn("mx-auto", isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/about" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Story</div>
                          <p className="text-sm text-gray-500">Learn about our mission and team</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Gallery</div>
                          <p className="text-sm text-gray-500">View our work in action</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/ocean-cleanup" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Ocean Cleanup Initiative</div>
                          <p className="text-sm text-gray-500">Coastal plastic collection program</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/road-construction" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Recycled Road Construction</div>
                          <p className="text-sm text-gray-500">Plastic-based building materials</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/eco-packaging" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Eco-Packaging Solutions</div>
                          <p className="text-sm text-gray-500">Sustainable packaging from recycled materials</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/sustainable-textiles" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Sustainable Fashion Textiles</div>
                          <p className="text-sm text-gray-500">Plastic-to-fabric conversion</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/recycling-hub" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Community Recycling Hub</div>
                          <p className="text-sm text-gray-500">Local plastic aggregation centers</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Recycling Technology</div>
                          <p className="text-sm text-gray-500">Our plastic processing methods</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Our sustainable development approach</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Contact Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <Link to="/contact">
              <button className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-tebari-green text-white hover:bg-tebari-green/90" : "bg-tebari-green text-white hover:bg-tebari-green/90")}>
                Contact Us
              </button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-[600px]", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          {/* About Us Dropdown */}
          <div>
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={cn("flex items-center justify-between w-full px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              About Us
              <ChevronDown className={cn("w-4 h-4 transition-transform", mobileAboutOpen && "rotate-180")} />
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileAboutOpen(false);
                }}>
                  Our Story
                </Link>
                <Link to="/gallery" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileAboutOpen(false);
                }}>
                  Gallery
                </Link>
              </div>
            )}
          </div>
          
          {/* Projects Dropdown */}
          <div>
            <button 
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className={cn("flex items-center justify-between w-full px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              Projects
              <ChevronDown className={cn("w-4 h-4 transition-transform", mobileProjectsOpen && "rotate-180")} />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/projects/ocean-cleanup" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileProjectsOpen(false);
                }}>
                  Ocean Cleanup Initiative
                </Link>
                <Link to="/projects/road-construction" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileProjectsOpen(false);
                }}>
                  Recycled Road Construction
                </Link>
                <Link to="/projects/eco-packaging" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileProjectsOpen(false);
                }}>
                  Eco-Packaging Solutions
                </Link>
                <Link to="/projects/sustainable-textiles" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileProjectsOpen(false);
                }}>
                  Sustainable Fashion Textiles
                </Link>
                <Link to="/projects/recycling-hub" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileProjectsOpen(false);
                }}>
                  Community Recycling Hub
                </Link>
              </div>
            )}
          </div>
          
          {/* Learn More Dropdown */}
          <div>
            <button 
              onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
              className={cn("flex items-center justify-between w-full px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              Learn More
              <ChevronDown className={cn("w-4 h-4 transition-transform", mobileLearnOpen && "rotate-180")} />
            </button>
            {mobileLearnOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileLearnOpen(false);
                }}>
                  Recycling Technology
                </Link>
                <Link to="/development-process" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => {
                  setIsMenuOpen(false);
                  setMobileLearnOpen(false);
                }}>
                  Development Process
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Blog
          </Link>
          
          <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <Link to="/contact" className={cn("block w-full text-center px-3 py-2 rounded-md text-sm mt-2", isScrolled ? "text-white bg-tebari-green hover:bg-tebari-green/90" : "text-white bg-tebari-green hover:bg-tebari-green/90")} onClick={() => {
            setIsMenuOpen(false);
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
