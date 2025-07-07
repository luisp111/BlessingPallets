'use client';

import { lusitana } from '@/app/ui/fonts';
import ContactSection from '@/app/ui/components/ContactSection';
import { useState, useEffect } from 'react';
import QuickQuoteModal from '@/app/ui/components/QuickQuoteModal';

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(true);

  useEffect(() => {
    setShowQuoteModal(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <QuickQuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button 
              className="absolute -top-4 -right-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition-colors shadow-medium"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-white section-padding">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto container-padding text-center">
          <div className="animate-slide-up">
            <h1 className={`${lusitana.className} text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight`}>
              Blessing Pallets
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Your trusted partner for all pallet needs - from manufacturing to recycling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30">
                Get a Quote
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-green-600">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6 gradient-text`}>
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over <span className="font-semibold text-green-600">15 years of experience</span> in the pallet industry, we've built our reputation on quality, reliability, and customer satisfaction. Our facility allows us to provide customized pallet solutions for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in custom wood pallets designed to meet the demands of manufacturing, shipping, and storage operations like yours. We know your business depends on reliable, strong, and cost-effective pallet solutions — and that's exactly what we deliver!
                </p>
              </div>
              <div className="card card-hover p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Work with Blessing Pallets?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Custom Sizes & Strengths</span>
                      <p className="text-gray-600 text-sm">Engineered for your load types, equipment, and handling systems</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">On-Time Delivery</span>
                      <p className="text-gray-600 text-sm">Consistent supply to keep your operations running smoothly</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Competitive Pricing</span>
                      <p className="text-gray-600 text-sm">Affordable solutions that don't sacrifice durability</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Sustainable & Compliant</span>
                      <p className="text-gray-600 text-sm">Eco-conscious practices and ISPM-15 certified for export if needed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need heavy-duty pallets for manufacturing, stackable options for warehousing, or export-ready builds for shipping, we build them to fit your needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also take pride in our sustainable practices and commitment to environmental responsibility, ensuring that every pallet we produce meets the highest industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-nature section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6 gradient-text`}>
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pallet solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card card-hover p-6 group animate-slide-up">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/gallery/Custom/IMG_3399.jpg" 
                  alt="Custom Pallet Manufacturing" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => setSelectedImage('/gallery/Custom/IMG_3399.jpg')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Pallet/Crates Manufacturing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Tailored pallet solutions designed to meet your specific requirements and industry standards.</p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="card card-hover p-6 group animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/gallery/standard_repaired/IMG_4712.jpg" 
                  alt="Pallet Repair & Recycling" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => setSelectedImage('/gallery/standard_repaired/IMG_4712.jpg')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pallet Repair & Recycling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Professional repair services and eco-friendly recycling options for used pallets.</p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="card card-hover p-6 group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/gallery/CleanOuts/IMG_5733.jpg" 
                  alt="Pallet Management" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => setSelectedImage('/gallery/CleanOuts/IMG_5733.jpg')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Pallet Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive pallet management solutions including tracking, maintenance, and replacement.</p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="card p-8 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 mb-6">Want to see more of our work?</p>
              <a 
                href="/dashboard/gallery" 
                className="btn-primary inline-flex items-center"
              >
                Visit Our Gallery
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}