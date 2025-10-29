import { useState, useEffect } from 'react';
import { ArrowLeft, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getGalleryImages } from '@/lib/galleryLoader';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('plastic-collection');
  const galleryCategories = getGalleryImages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Gallery - Tebari Limited"
        description="View our work in action: plastic collection, innovative recycling technology, and community impact initiatives transforming Kenya's environment."
        keywords={['gallery', 'plastic collection', 'recycling', 'community impact', 'Kenya', 'sustainability']}
      />

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Tebari Gallery - Our Work in Action"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-tebari-green/80 to-white/20"></div>
          </div>
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white"
            >
              Our Gallery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
            >
              Witness the impact of our work through collection drives, innovative recycling, and community transformation
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="plastic-collection" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto gap-2">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-start text-left p-4 h-auto data-[state=active]:bg-tebari-green data-[state=active]:text-white"
                  >
                    <span className="font-semibold text-base mb-1">{category.name}</span>
                    <span className="text-xs opacity-80">{category.description}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-all"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${category.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Empty state for categories with no images yet */}
                  {category.images.length === 0 && (
                    <div className="text-center py-16">
                      <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No images available yet</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Images will be added to this category soon
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-none">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center justify-center w-full h-full p-4">
                <img
                  src={selectedImage}
                  alt="Gallery image fullscreen"
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;

