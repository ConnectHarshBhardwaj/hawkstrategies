import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EMI Calculator | Invest In Narela",
  description: "Calculate your estimated property EMI and plan your real estate investments in Narela effectively with our financial tool.",
  openGraph: {
    title: "EMI Calculator | Invest In Narela",
    description: "Calculate your estimated property EMI and plan your real estate investments in Narela effectively with our financial tool.",
    url: "https://investinnarela.in/emi-calculator",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI Calculator | Invest In Narela",
    description: "Calculate your estimated property EMI and plan your real estate investments in Narela effectively with our financial tool.",
  },
};

export default function EmiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
