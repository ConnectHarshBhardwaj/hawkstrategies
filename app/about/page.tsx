import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Award, MapPin } from 'lucide-react';
import { CallToAction } from '@/components/CallToAction';

export const metadata: Metadata = {
  title: "About Us | Invest In Narela",
  description: "Learn about Invest In Narela, your trusted premium real estate advisory firm for high-ROI properties in Delhi.",
  openGraph: {
    title: "About Us | Invest In Narela",
    description: "Learn about Invest In Narela, your trusted premium real estate advisory firm for high-ROI properties in Delhi.",
    url: "https://investinnarela.in/about",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Invest In Narela",
    description: "Learn about Invest In Narela, your trusted premium real estate advisory firm for high-ROI properties in Delhi.",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-24 min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative px-4 py-32 overflow-hidden bg-black text-white">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Narela Skyline" 
          fill
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="text-[#B8860B] font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">Our Heritage</span>
          <h1 className="text-5xl md:text-7xl font-light font-heading tracking-tight mb-8">
            Narela&apos;s Finest <br/><span className="italic">Property Consultants</span>
          </h1>
          <p className="text-xl font-light text-white/70 max-w-3xl leading-relaxed">
            We are a premium real estate advisory firm, curating high-ROI investment opportunities and luxury homes across Delhi&apos;s fastest growing smart city.
          </p>
        </div>
      </section>

      {/* Agency Story */}
      <section className="py-32 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[80vh] w-full">
            <Image 
               src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
               alt="Luxury Office" 
               fill
               className="object-cover grayscale"
            />
          </div>
          <div>
            <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">The Advisory</span>
            <h2 className="text-4xl md:text-5xl font-heading text-black mb-8 leading-tight">
              Local Expertise, <br/><span className="italic text-gray-500">Global Standards</span>
            </h2>
            <p className="text-lg text-gray-600 font-light mb-6 leading-relaxed">
              Most property deals fail due to a lack of transparency, hidden legalities, or poor location understanding. At Invest In Narela, we strip away the guesswork from real estate investing.
            </p>
            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
              Our approach is rooted in advanced market analytics, deep hyperlocal knowledge of Narela&apos;s sectors, and an extensive network of DDA properties and private builders. We act as your central advisory.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8 mt-12">
              <div>
                <div className="text-4xl font-heading text-black mb-2">15<span className="text-[#B8860B]">+</span></div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-black mb-2">500<span className="text-[#B8860B]">+</span></div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">Families Home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Our Principles</span>
             <h2 className="text-4xl md:text-5xl font-heading text-black leading-tight">
               Why Choose <span className="italic text-gray-500">Us</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <MapPin className="w-6 h-6"/>, title: 'Hyperlocal Insight', text: 'We know every block, pocket, and DDA sector in Narela better than anyone else.' },
              { icon: <Shield className="w-6 h-6"/>, title: 'Uncompromising Trust', text: 'Every property goes through strict, 100% clear title checks before we list it.' },
              { icon: <Award className="w-6 h-6"/>, title: 'Wealth Multiplying', text: 'Whether residential or commercial, we focus on properties that multiply your wealth.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-gray-100 group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-[#B8860B] mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading text-black mb-4">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
