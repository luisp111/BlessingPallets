import { lusitana } from '@/app/ui/fonts';

export default function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-green-800 to-emerald-900 text-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6`}>
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to get started? Get in touch with us today for a free consultation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a 
                        href="tel:+15033284040" 
                        className="text-white font-semibold hover:text-green-400 transition-colors text-lg"
                      >
                        (503) 332-8404
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a 
                        href="mailto:blessingpallets48@gmail.com" 
                        className="text-white font-semibold hover:text-emerald-400 transition-colors text-lg"
                      >
                        blessingpallets48@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold text-lg">
                        1404 N Schmeer Rd, Portland, OR 97217
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="space-y-8">
              <div className="card bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">6:00 AM - 2:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-green-600/20 rounded-lg border border-green-400/30">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-green-300 text-sm font-semibold">Emergency Service</p>
                      <p className="text-white text-sm">Available for urgent pallet needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact CTA */}
              <div className="card bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center">
                <h4 className="text-xl font-bold mb-4">Need a Quick Quote?</h4>
                <p className="text-green-100 mb-6">
                  Get an instant estimate for your pallet needs
                </p>
                <a href="/dashboard/customers" className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30">
                  Get a Quote
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Map or Additional Info */}
          <div className="mt-16 text-center">
            <div className="card bg-white/5 backdrop-blur-sm p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Service Area</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We proudly serve the greater Portland metropolitan area and surrounding regions. 
                Contact us to see if we can accommodate your location.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-white/10 rounded-full text-white">Portland</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white">Beaverton</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white">Gresham</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white">Hillsboro</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-white">Vancouver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 