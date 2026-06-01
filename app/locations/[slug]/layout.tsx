import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Location Details | Invest In Narela",
  description: "Discover the unique features, connectivity, and real estate opportunities in this specific Narela sector.",
  openGraph: {
    title: "Location Details | Invest In Narela",
    description: "Discover the unique features, connectivity, and real estate opportunities in this specific Narela sector.",
    url: "https://investinnarela.in/locations",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Details | Invest In Narela",
    description: "Discover the unique features, connectivity, and real estate opportunities in this specific Narela sector.",
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
