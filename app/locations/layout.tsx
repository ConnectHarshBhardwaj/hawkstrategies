import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Areas & Locations | Invest In Narela",
  description: "Browse comprehensive property listings across all primary sectors, pockets, and development corridors in Narela.",
  openGraph: {
    title: "Areas & Locations | Invest In Narela",
    description: "Browse comprehensive property listings across all primary sectors, pockets, and development corridors in Narela.",
    url: "https://investinnarela.in/locations",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas & Locations | Invest In Narela",
    description: "Browse comprehensive property listings across all primary sectors, pockets, and development corridors in Narela.",
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
