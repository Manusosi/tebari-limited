import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Circular Plastic Economy: Rethinking Waste Management",
      excerpt: "Exploring how circular economy principles can transform plastic waste from a problem into a resource for sustainable development.",
      image: "/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.47 PM.jpeg",
      date: "July 17, 2024",
      author: "Tebari Team",
      slug: "circular-plastic-economy"
    },
    {
      id: 2,
      title: "Turning Ocean Waste into Opportunity: Innovations in Cleanup",
      excerpt: "How innovative cleanup technologies and community partnerships are transforming ocean plastic waste into valuable products.",
      image: "/lovable-uploads/3d9b4ab1-4b93-49d1-a762-4b852a76c4b8.png",
      date: "July 17, 2024",
      author: "Tebari Team",
      slug: "ocean-waste-opportunity"
    },
    {
      id: 3,
      title: "The Science of Recycling: Converting Plastics into New Materials",
      excerpt: "Deep dive into the technical processes behind converting waste plastics into high-quality recycled materials for various applications.",
      image: "/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.46 PM (1).jpeg",
      date: "July 17, 2024",
      author: "Tebari Team",
      slug: "science-of-recycling"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay updated with the latest news and insights about sustainable recycling and circular economy solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-tebari-green hover:text-tebari-green/80 font-medium transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-tebari-green text-white rounded-lg hover:bg-tebari-green/90 transition-all group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
