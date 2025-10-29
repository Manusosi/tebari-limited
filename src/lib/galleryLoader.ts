// Gallery image loader utility
// This file helps organize gallery images by category

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  images: string[];
}

// Function to get all images for a specific category
// Add your images to the respective arrays below
export const getGalleryImages = (): GalleryCategory[] => {
  return [
    {
      id: 'plastic-collection',
      name: 'Plastic Collection',
      description: 'Community-driven plastic waste collection initiatives',
      images: [
        '/gallery/plastic-collection/collection-drive-1.png',
        '/gallery/plastic-collection/collection-drive-2.png',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.45 PM (1).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.45 PM.jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.46 PM (1).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.46 PM (2).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.46 PM.jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.47 PM (1).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.47 PM (2).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.47 PM.jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.48 PM (1).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.48 PM (2).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.48 PM.jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.49 PM (1).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.49 PM (2).jpeg',
        '/gallery/plastic-collection/WhatsApp Image 2025-10-28 at 6.33.49 PM.jpeg',
      ]
    },
    {
      id: 'innovative-recycling',
      name: 'Innovative Recycling',
      description: 'Advanced recycling technology and processes',
      images: [
        '/gallery/innovative-recycling/recycling-1.png',
        '/gallery/innovative-recycling/recycling-2.png',
      ]
    },
    {
      id: 'circular-impact',
      name: 'Circular Impact',
      description: 'Community empowerment and sustainable development',
      images: [
        '/gallery/circular-impact/impact-1.png',
        '/gallery/circular-impact/impact-2.png',
      ]
    }
  ];
};

// Helper function to add new images to a category
export const addImageToCategory = (categoryId: string, imagePath: string): void => {
  console.log(`To add image ${imagePath} to ${categoryId}, update src/lib/galleryLoader.ts`);
};

