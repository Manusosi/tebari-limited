
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_your_service_id',
        'template_newsletter',
        {
          email: email,
          message: `Newsletter subscription from: ${email}`,
        },
        'your_public_key'
      );
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-tebari-green">TEBARI</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tebari is pioneering sustainable plastic recycling solutions in Kenya, transforming waste into valuable products while building circular economy communities.
            </p>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-sm">P.O. Box 940-80108, Kilifi, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tebari-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects/ocean-cleanup" className="text-gray-300 hover:text-tebari-green transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-tebari-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-tebari-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@tebari.net" className="text-gray-300 hover:text-tebari-green transition-colors">
                  info@tebari.net
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <a href="https://linkedin.com/company/tebari" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tebari-green transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with our latest recycling innovations and projects.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-tebari-green"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-tebari-green text-white rounded-md hover:bg-tebari-green/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? "Subscribing..." : "Subscribe"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-tebari-green transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-tebari-green transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="text-sm text-gray-400">
                © 2025 Tebari Limited. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Built by{" "}
                <a 
                  href="https://portfolio.kazinikazi.co.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-tebari-green hover:text-tebari-green/80 transition-colors"
                >
                  KNK Digital
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
