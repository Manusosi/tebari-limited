# Gallery Feature Documentation

## Overview
The Gallery page showcases Tebari Limited's work through organized image collections in three main categories:

1. **Plastic Collection** - Community-driven collection initiatives
2. **Innovative Recycling** - Recycling technology and processes
3. **Circular Impact** - Community empowerment and sustainable development

## Accessing the Gallery

### From Navigation Menu
- Desktop: Hover over "About Us" → Click "Gallery"
- Mobile: Tap menu icon → Tap "Gallery"

### Direct URL
- Navigate to: `/gallery`

## Adding Images to Gallery

### Method 1: Using Gallery Folders (Recommended for New Images)

Place your images in the appropriate category folder:

```
public/
  └── gallery/
      ├── plastic-collection/     # Collection activities
      ├── innovative-recycling/   # Recycling processes
      └── circular-impact/        # Community impact
```

**Supported Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

After adding images to folders, update the gallery loader:

1. Open `src/lib/galleryLoader.ts`
2. Add the image path to the appropriate category array:

```typescript
{
  id: 'plastic-collection',
  name: 'Plastic Collection',
  description: 'Community-driven plastic waste collection initiatives',
  images: [
    // ... existing images
    '/gallery/plastic-collection/your-new-image.jpg',  // Add here
  ]
}
```

### Method 2: Using Existing Images

If you have images in `public/lovable-uploads/`, you can reference them directly:

```typescript
images: [
  '/lovable-uploads/your-image-filename.png',
]
```

## Gallery Features

### User Interface
- **Tab Navigation**: Switch between three categories
- **Responsive Grid**: Adapts to screen size (1-4 columns)
- **Image Preview**: Click any image to view fullscreen
- **Hover Effects**: Smooth transitions and zoom effects
- **Lightbox Modal**: View images in large format with dark overlay

### Technical Features
- **Lazy Loading**: Images load as needed for performance
- **Smooth Animations**: Framer Motion powered transitions
- **Mobile Optimized**: Touch-friendly and responsive
- **SEO Optimized**: Proper meta tags and descriptions

## Page Structure

### Hero Section
- Consistent with other pages (About, Careers, etc.)
- Full-width hero image with gradient overlay
- Breadcrumb navigation back to home

### Gallery Grid
- Organized by category tabs
- Square aspect ratio cards
- Hover zoom effect
- Click to expand

### Instructions Panel
- Helpful guide for adding new images
- Shows folder structure
- Lists supported formats

## Customization

### Changing Category Names/Descriptions
Edit `src/lib/galleryLoader.ts`:

```typescript
{
  id: 'category-id',
  name: 'Display Name',          // Change this
  description: 'Your description', // Change this
  images: [...]
}
```

### Adding New Categories
1. Create new folder: `public/gallery/new-category/`
2. Add category to `galleryLoader.ts`:

```typescript
{
  id: 'new-category',
  name: 'New Category Name',
  description: 'Category description',
  images: ['/gallery/new-category/image1.jpg']
}
```

### Styling Adjustments
Modify `src/pages/Gallery.tsx`:
- Grid columns: Change `grid-cols-*` classes
- Card size: Adjust `aspect-square` or dimensions
- Colors: Update color classes (e.g., `bg-tebari-green`)

## File Locations

```
tebari-limited/
├── public/
│   └── gallery/
│       ├── plastic-collection/
│       │   ├── README.md
│       │   └── [your images]
│       ├── innovative-recycling/
│       │   ├── README.md
│       │   └── [your images]
│       └── circular-impact/
│           ├── README.md
│           └── [your images]
├── src/
│   ├── pages/
│   │   └── Gallery.tsx              # Main gallery page
│   ├── lib/
│   │   └── galleryLoader.ts         # Gallery data configuration
│   └── components/
│       └── Navbar.tsx               # Updated with dropdown
└── GALLERY_README.md                # This file
```

## Best Practices

### Image Guidelines
- **Recommended Size**: 1200x1200px for square grid
- **Format**: Use `.jpg` for photos, `.png` for graphics with transparency
- **File Size**: Optimize images to < 500KB each
- **Naming**: Use descriptive names (e.g., `beach-cleanup-2024.jpg`)

### Organization Tips
- Keep related images in the same category
- Use consistent naming conventions
- Add date or location in filename if relevant
- Delete unused images to keep repo clean

### Performance
- Compress images before uploading
- Use modern formats (`.webp`) when possible
- Limit to ~20-30 images per category for optimal load times

## Troubleshooting

### Images Not Showing
1. Check file path is correct (case-sensitive)
2. Verify image is in `public/` directory
3. Check browser console for 404 errors
4. Clear browser cache and reload

### Broken Layout
1. Ensure all image URLs are valid
2. Check that images have proper aspect ratios
3. Verify Tailwind classes are not overridden

### Navigation Issues
1. Clear browser cache
2. Check route is added in `App.tsx`
3. Verify link paths in `Navbar.tsx`

## Future Enhancements

Possible improvements for the gallery:
- [ ] Automatic image loading from folders (no manual config)
- [ ] Image upload interface
- [ ] Filtering and search functionality
- [ ] Image captions and metadata
- [ ] Download original image option
- [ ] Social media sharing
- [ ] Gallery statistics/analytics

## Support

For issues or questions:
- Email: info@tebari.net
- GitHub: Create an issue in the repository

