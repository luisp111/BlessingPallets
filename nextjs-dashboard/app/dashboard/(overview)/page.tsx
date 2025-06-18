import { lusitana } from '@/app/ui/fonts';
import ContactSection from '@/app/ui/components/ContactSection';

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-center mb-6`}>
            Blessing Pallets
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for all pallet needs - from manufacturing to recycling.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`${lusitana.className} text-3xl font-bold mb-8 text-center`}>About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              With over 20 years of experience in the pallet industry, we've built our reputation on quality, reliability, and customer satisfaction. Our state-of-the-art facility allows us to provide customized pallet solutions for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-700">
              We take pride in our sustainable practices and commitment to environmental responsibility, ensuring that every pallet we produce meets the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className={`${lusitana.className} text-3xl font-bold mb-12 text-center`}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="/gallery/Custom/IMG_3399.jpg" 
                  alt="Custom Pallet Manufacturing" 
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Pallet/Crates Manufacturing</h3>
              <p className="text-gray-600 mb-4">Tailored pallet solutions designed to meet your specific requirements and industry standards.</p>
              
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="/gallery/standard_repaired/IMG_4712.jpg" 
                  alt="Pallet Repair & Recycling" 
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pallet Repair & Recycling</h3>
              <p className="text-gray-600 mb-4">Professional repair services and eco-friendly recycling options for used pallets.</p>
             
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="/gallery/CleanOuts/IMG_5733.jpg" 
                  alt="Pallet Management" 
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pallet Management</h3>
              <p className="text-gray-600 mb-4">Comprehensive pallet management solutions including tracking, maintenance, and replacement.</p>
             
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Want to see more of our work?</p>
            <a 
              href="/dashboard/gallery" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit Our Gallery
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}