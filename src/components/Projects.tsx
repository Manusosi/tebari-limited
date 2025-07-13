
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Recycle, Leaf, Building, Shirt, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Ocean Cleanup Initiative",
      subtitle: "Coastal plastic collection and community engagement",
      description: "Our flagship program collecting plastic waste from Kenya's coastlines while empowering local communities through education and economic opportunities.",
      image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
      slug: "ocean-cleanup",
      icon: <Recycle className="w-6 h-6" />,
      tag: "FEATURED"
    },
    {
      id: 2,
      title: "Recycled Road Construction",
      subtitle: "Innovative infrastructure using recycled plastics",
      description: "Converting plastic waste into durable construction materials for roads and infrastructure projects across Kenya.",
      image: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
      slug: "road-construction",
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Eco-Packaging Solutions",
      subtitle: "Biodegradable and recycled packaging alternatives",
      description: "Creating sustainable packaging solutions from recycled materials to reduce single-use plastic dependency.",
      image: "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png",
      slug: "eco-packaging",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Sustainable Fashion Textiles",
      subtitle: "Plastic waste transformed into textile fibers",
      description: "Converting plastic bottles and waste into high-quality textile fibers for the sustainable fashion industry.",
      image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
      slug: "sustainable-textiles",
      icon: <Shirt className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Community Recycling Hub",
      subtitle: "Local plastic aggregation and training centers",
      description: "Establishing community-based recycling centers that provide training, equipment, and economic opportunities for local entrepreneurs.",
      image: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
      slug: "recycling-hub",
      icon: <Users className="w-6 h-6" />
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how we're transforming plastic waste into sustainable solutions across different sectors
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 h-full min-h-[500px]">
                    {/* Image side */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                      {project.tag && (
                        <div className="absolute top-6 left-6">
                          <span className="px-3 py-1 bg-tebari-green text-white rounded-full text-sm font-medium">
                            {project.tag}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-tebari-green/10 rounded-lg mr-3">
                          {project.icon}
                        </div>
                        <span className="text-tebari-green font-medium text-sm">
                          Project {project.id}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-tebari-green font-medium mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-tebari-green text-white rounded-lg hover:bg-tebari-green/90 transition-all group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-tebari-green scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
