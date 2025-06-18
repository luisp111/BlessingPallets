'use client';

import Image from 'next/image';
import { useState } from 'react';
import ContactSection from '@/app/ui/components/ContactSection';

const gallerySections = [
  {
    title: 'Custom Pallets',
    description: 'High-quality custom-built pallets for all load requirements.',
    images: [
      '/gallery/Custom/IMG_3399.jpg',
      '/gallery/Custom/IMG_3400.jpg',
      '/gallery/Custom/IMG_4831-preview.jpg',
      '/gallery/Custom/IMG_4832-preview.jpg',
      '/gallery/Custom/IMG_4833-preview.jpg',
      '/gallery/Custom/IMG_5016-preview.jpg',
      '/gallery/Custom/IMG_5158-preview.jpg',
    ],
  },
  {
    title: 'Standard & Repaired Pallets',
    description: 'Eco-friendly recycling solutions and repaired pallets.',
    images: [
      '/gallery/standard_repaired/73222286937__32DB40F2-C90D-4315-8D05-678DB6D7E184.fullsizerender.jpg',
      '/gallery/standard_repaired/IMG_2635.jpg',
      '/gallery/standard_repaired/IMG_4675.jpg',
      '/gallery/standard_repaired/IMG_4707.jpg',
      '/gallery/standard_repaired/IMG_4708.jpg',
      '/gallery/standard_repaired/IMG_4709.jpg',
      '/gallery/standard_repaired/IMG_4711.jpg',
      '/gallery/standard_repaired/IMG_4712.jpg',
      '/gallery/standard_repaired/IMG_4824-preview.jpg',
    ],
  },
  {
    title: 'Clean-outs',
    description: 'Ready-to-ship pallet stock stored in our secure facility.',
    images: [
      '/gallery/CleanOuts/93B6CBF1-BA06-4F07-89BB-313F60A1C3FB.JPG',
      '/gallery/CleanOuts/IMG_3302.jpg',
      '/gallery/CleanOuts/IMG_5567.jpg',
      '/gallery/CleanOuts/IMG_5568.jpg',
      '/gallery/CleanOuts/IMG_5575.jpg',
      '/gallery/CleanOuts/IMG_5576.jpg',
      '/gallery/CleanOuts/IMG_5672.jpg',
      '/gallery/CleanOuts/IMG_5673.jpg',
      '/gallery/CleanOuts/IMG_5733.jpg',
    ],
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoom = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(0.5, scale + delta), 3);
      setScale(newScale);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetImage = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <main className="p-6 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>

      {gallerySections.map((section, idx) => (
        <section key={idx} className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.images.map((src, i) => (
              <div 
                key={i} 
                className="overflow-hidden rounded-md shadow cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`${section.title} image ${i + 1}`}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-[250px] object-cover transition-transform hover:scale-105 duration-200"
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            resetImage();
          }}
        >
          <div 
            className="relative w-[90vw] h-[90vh] flex items-center justify-center"
            onWheel={handleZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="absolute top-4 right-4 flex gap-4 z-10">
              <button
                className="text-white bg-black bg-opacity-75 rounded-full p-3 hover:bg-opacity-100 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  resetImage();
                }}
                title="Reset zoom"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                className="text-white bg-black bg-opacity-75 rounded-full p-3 hover:bg-opacity-100 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                  resetImage();
                }}
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div 
              className="w-full h-full flex items-center justify-center overflow-auto"
              style={{ cursor: scale > 1 ? 'grab' : 'default' }}
            >
              <div
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactSection />
    </main>
  );
}
