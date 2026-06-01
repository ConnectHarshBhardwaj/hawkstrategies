import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Invest In Narela",
  description:
    "Privacy policy and data protection guidelines for Invest In Narela real estate clients.",
  openGraph: {
    title: "Privacy Policy | Invest In Narela",
    description: "Privacy policy and data protection guidelines for Invest In Narela real estate clients.",
    url: "https://investinnarela.in/privacy-policy",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Invest In Narela",
    description: "Privacy policy and data protection guidelines for Invest In Narela real estate clients.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full relative selection:bg-[#d4af37] selection:text-[#0F172A] pt-20 min-h-screen bg-[#0F172A]">
      <div className="py-24 bg-[#0A101C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-black text-white font-heading mb-10 tracking-tight uppercase">
            Privacy <span className="gold-gradient">Policy</span>
          </h1>
          <div className="prose prose-p:text-gray-300 max-w-none">
            <p>
              At Invest In Narela, client confidentiality and data protection are our foundational tenets. This Privacy Policy details how we handle information acquired during our real estate dealings and property consultations.
            </p>
            <h2 className="text-[#d4af37] mt-8 font-bold text-2xl mb-4">
              Confidentiality of Property Deals
            </h2>
            <p>
              All property inquiries, investment portfolios, and financial data shared with our agency are secured. We never share client information with unauthorized third-party brokers without explicit consent.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
