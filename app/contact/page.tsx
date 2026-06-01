import { Metadata } from 'next';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Contact Us | Invest In Narela",
  description: "Contact the property experts at Invest In Narela. Call or visit our headquarters for real estate advice.",
  openGraph: {
    title: "Contact Us | Invest In Narela",
    description: "Contact the property experts at Invest In Narela. Call or visit our headquarters for real estate advice.",
    url: "https://investinnarela.in/contact",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Invest In Narela",
    description: "Contact the property experts at Invest In Narela. Call or visit our headquarters for real estate advice.",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center mb-24">
          <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Private Consultation</span>
          <h1 className="text-5xl md:text-7xl font-light font-heading text-black mb-6">Contact <span className="italic text-gray-500">Us</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to find your dream property or high ROI investment plot in Narela? Our curated experts are standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Information */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="text-[#B8860B] mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Direct Line</h3>
                  <p className="text-3xl font-light text-black hover:text-[#B8860B] transition-colors"><a href="tel:+919310868777">+91 93108 68777</a></p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="text-[#B8860B] mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Desk</h3>
                  <p className="text-2xl font-light text-black hover:text-[#B8860B] transition-colors"><a href="mailto:info@investinnarela.in">info@investinnarela.in</a></p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="text-[#B8860B] mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Headquarters</h3>
                  <p className="text-xl font-light text-black leading-relaxed">Near Sr. Sec. School,<br/>Sanoth Village, Ghoga,<br/>Narela, Delhi 110040</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
               <div className="grid grid-cols-2 gap-8">
                 <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Monday - Saturday</h4>
                   <p className="text-black font-medium">10:00 AM - 07:00 PM</p>
                 </div>
                 <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Sunday</h4>
                   <p className="text-black font-medium">By Appointment Only</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
            <h2 className="text-3xl font-heading text-black mb-2">Register Interest</h2>
            <p className="text-gray-500 mb-10 font-light text-sm">Our advisory team will contact you shortly.</p>
            
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 text-black py-3 focus:outline-none focus:border-[#B8860B] transition-colors" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Phone</label>
                <input type="tel" className="w-full bg-transparent border-b border-gray-200 text-black py-3 focus:outline-none focus:border-[#B8860B] transition-colors" placeholder="+91" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Intent</label>
                <select className="w-full bg-transparent border-b border-gray-200 text-black py-3 focus:outline-none focus:border-[#B8860B] transition-colors appearance-none">
                  <option>Buying Residential</option>
                  <option>Buying Commercial</option>
                  <option>Investment Plot</option>
                  <option>Selling Property</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Details</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-200 text-black py-3 focus:outline-none focus:border-[#B8860B] transition-colors resize-none mb-4" placeholder="I am looking for..."></textarea>
              </div>

              <button type="button" className="w-full bg-black hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-[0.2em] py-5 transition-colors flex justify-center items-center gap-2">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
