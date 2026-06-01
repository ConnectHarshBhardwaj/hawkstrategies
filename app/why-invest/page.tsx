import { Metadata } from 'next';
import { CallToAction } from '@/components/CallToAction';
import { InvestNarela } from '@/components/InvestNarela';

export const metadata: Metadata = {
  title: "Why Invest In Narela? | Real Estate Insights",
  description: "Understand the driving factors, transport networks and economic infrastructure making Narela Delhi's smartest property investment.",
  openGraph: {
    title: "Why Invest In Narela? | Real Estate Insights",
    description: "Understand the driving factors, transport networks and economic infrastructure making Narela Delhi's smartest property investment.",
    url: "https://investinnarela.in/why-invest",
    siteName: "Invest In Narela",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Invest In Narela? | Real Estate Insights",
    description: "Understand the driving factors, transport networks and economic infrastructure making Narela Delhi's smartest property investment.",
  },
};

export default function WhyInvestPage() {
  return (
    <main className="w-full relative selection:bg-[#d4af37] selection:text-[#0F172A] pt-24 min-h-screen bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Real Estate</span>
        <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-6 uppercase tracking-tight">Why Invest in <span className="gold-gradient">Narela</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light mb-16">
          Understand the economic drivers, infrastructure projects, and market dynamics that ensure guaranteed appreciation in the Narela property market.
        </p>
      </div>

      <InvestNarela />
      
      <CallToAction />
    </main>
  );
}
