import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Invest In Narela",
  description:
    "Terms of service and operational agreements for Invest In Narela property deals.",
  openGraph: {
    title: "Terms & Conditions | Invest In Narela",
    description: "Terms of service and operational agreements for Invest In Narela property deals.",
    url: "https://investinnarela.in/terms",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Invest In Narela",
    description: "Terms of service and operational agreements for Invest In Narela property deals.",
  },
};

export default function TermsPage() {
  return (
    <main className="w-full relative selection:bg-[#d4af37] selection:text-[#0F172A] pt-20 min-h-screen bg-[#0F172A]">
      <div className="py-24 bg-[#0A101C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-black text-white font-heading mb-10 tracking-tight uppercase">
            Terms & <span className="gold-gradient">Conditions</span>
          </h1>
          <div className="prose prose-p:text-gray-300 max-w-none">
            <p>
              By engaging with Invest In Narela, you agree to our operational guidelines designed to ensure smooth property transactions and verified investment deals.
            </p>
            <h2 className="text-[#d4af37] mt-8 font-bold text-2xl mb-4">
              Operational Integrity
            </h2>
            <p>
              We execute real estate deals with extreme precision toward achieving capital growth and security. We operate strictly within the legal boundaries of Delhi property regulations and RERA compliance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
