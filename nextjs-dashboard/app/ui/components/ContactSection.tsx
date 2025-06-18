import { lusitana } from '@/app/ui/fonts';

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`${lusitana.className} text-3xl font-bold mb-8 text-center`}>Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-2">📞 (503) 328-4040</p>
              <p className="text-gray-600 mb-2">📧 Blessingpallets48@gmail.com</p>
              <p className="text-gray-600">📍 1404 N Schmeer Rd, Portland, OR 97217</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mb-2">Saturday: 6:00 AM - 2:30 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 