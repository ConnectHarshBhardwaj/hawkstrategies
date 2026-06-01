import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Real Estate Insights | Invest In Narela",
  description: "Latest real estate trends, investment guides, and infrastructure updates from Narela.",
  openGraph: {
    title: "Real Estate Insights | Invest In Narela",
    description: "Latest real estate trends, investment guides, and infrastructure updates from Narela.",
    url: "https://investinnarela.in/blog",
    siteName: "Invest In Narela",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Insights | Invest In Narela",
    description: "Latest real estate trends, investment guides, and infrastructure updates from Narela.",
  },
};

export default function BlogPage() {
  const posts = [
    {
      category: "Market Insights",
      title: "Why Narela is Delhi's Next Big Real Estate Boom",
      date: "Nov 12, 2023",
      readTime: "5 min read",
      author: "Investment Desk",
    },
    {
      category: "Infrastructure",
      title: "Impact of Upcoming Metro Phase IV on Property Prices",
      date: "Oct 28, 2023",
      readTime: "8 min read",
      author: "Market Research",
    },
    {
      category: "Buying Guide",
      title: "DDA Flats in Narela: Complete Buying & Allotment Guide",
      date: "Sep 15, 2023",
      readTime: "6 min read",
      author: "Legal Team",
    },
    {
      category: "Commercial",
      title: "Top Commercial Pockets for Retail Investment in Narela",
      date: "Aug 02, 2023",
      readTime: "7 min read",
      author: "Commercial Division",
    }
  ];

  return (
    <main className="w-full relative selection:bg-[#d4af37] selection:text-[#0F172A] pt-24 min-h-screen bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-2 block">Market Reports</span>
          <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-4 uppercase tracking-tight">Real Estate <span className="gold-gradient">Insights</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Latest trends, investment guides, and infrastructure updates from Narela and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-[#1e293b] p-8 border border-[#d4af37]/20 rounded-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-[#d4af37]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">{post.category}</span>
                <span className="text-xs text-gray-500 font-medium">&bull;</span>
                <span className="text-xs text-gray-500 font-medium">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A] border border-[#d4af37]/30 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-[#d4af37]">{post.author.charAt(0)}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300">{post.author}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
