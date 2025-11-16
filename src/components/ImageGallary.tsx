import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  date?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  title = "Moments" 
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header - Compact */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              {title}
            </h2>
          </div>
          <span className="text-sm text-text-muted">
            {images.length} photos
          </span>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-bg-secondary/90 hover:bg-bg-tertiary border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-text-primary" />
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-bg-secondary/90 hover:bg-bg-tertiary border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-5 h-5 text-text-primary" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden border border-border hover:border-primary-500 transition-all duration-300 cursor-pointer group/item animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.caption || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    {image.caption && (
                      <p className="text-white text-xs font-medium line-clamp-2">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover icon */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <div 
              className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].caption || `Gallery image ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg animate-slide-up"
              />
              
              {/* Caption */}
              {(images[selectedImage].caption || images[selectedImage].date) && (
                <div className="mt-4 text-center space-y-1 max-w-2xl">
                  {images[selectedImage].caption && (
                    <p className="text-white text-base sm:text-lg font-medium">
                      {images[selectedImage].caption}
                    </p>
                  )}
                  {images[selectedImage].date && (
                    <p className="text-gray-400 text-sm">
                      {images[selectedImage].date}
                    </p>
                  )}
                </div>
              )}

              {/* Counter */}
              <div className="mt-4 text-gray-400 text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Sample data - replace with your actual images
export const sampleGalleryImages: GalleryImage[] = [
  {
    id: '1',
    url: './ImageGallary/Image_gallary1.jpg',
    caption: 'Tech conference 2024',
    date: 'March 2024'
  },
  {
    id: '2',
    url: './ImageGallary/Image_gallary2.jpg',
    caption: 'Workshop presentation',
    date: 'February 2024'
  },
  {
    id: '3',
    url: './ImageGallary/Image_gallary3.jpg',
    caption: 'Hackathon victory',
    date: 'January 2024'
  },
  {
    id: '4',
    url: './ImageGallary/Image_gallary4.jpg',
    caption: 'Product launch event',
    date: 'December 2023'
  },
  {
    id: '5',
    url: './ImageGallary/Image_gallary5.jpg',
    caption: 'Networking session',
    date: 'November 2023'
  },
  {
    id: '6',
    url: './ImageGallary/Image_gallary6.jpg',
    caption: 'Team building',
    date: 'October 2023'
  },
  {
    id: '7',
    url: './ImageGallary/Image_gallary7.jpg',
    caption: 'Speaking engagement',
    date: 'September 2023'
  }
];

export default ImageGallery;