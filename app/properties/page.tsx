import { Metadata } from 'next';
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { PropertySearch } from "@/components/PropertySearch";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Available Properties | Invest In Narela",
  description: "Explore our exclusive collection of luxury residential units, high-footfall commercial spaces, and premium investment plots in Narela.",
  openGraph: {
    title: "Available Properties | Invest In Narela",
    description: "Explore our exclusive collection of luxury residential units, high-footfall commercial spaces, and premium investment plots in Narela.",
    url: "https://investinnarela.in/properties",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Available Properties | Invest In Narela",
    description: "Explore our exclusive collection of luxury residential units, high-footfall commercial spaces, and premium investment plots in Narela.",
  },
};

export default function PropertiesPage() {
  return (
    <main className="w-full relative selection:bg-[#B8860B] selection:text-white pt-32 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">Premium Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-light font-heading text-black mb-6">Available <span className="italic text-gray-500">Properties</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-16 leading-relaxed">
          Explore our exclusive collection of luxury residential units, high-footfall commercial spaces, and premium investment plots in Narela.
        </p>
      </div>

      <div className="mt-8 mb-20">
        <PropertySearch />
      </div>

      <FeaturedProperties showAll={true} />
      
      <CallToAction />
    </main>
  );
}
