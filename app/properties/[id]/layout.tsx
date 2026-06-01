import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Details | Invest In Narela",
  description: "View comprehensive details, amenities, and investment potential for this exclusive property in Narela.",
  openGraph: {
    title: "Property Details | Invest In Narela",
    description: "View comprehensive details, amenities, and investment potential for this exclusive property in Narela.",
    url: "https://investinnarela.in/properties",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Details | Invest In Narela",
    description: "View comprehensive details, amenities, and investment potential for this exclusive property in Narela.",
  },
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
