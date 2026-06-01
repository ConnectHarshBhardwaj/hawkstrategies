'use client';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function PropertySearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [intent, setIntent] = useState(searchParams.get('intent') || 'All');
  const [type, setType] = useState(searchParams.get('type') || 'All Types');
  const [location, setLocation] = useState(searchParams.get('location') || 'All Narela Areas');

  useEffect(() => {
    setIntent(searchParams.get('intent') || 'All');
    setType(searchParams.get('type') || 'All Types');
    setLocation(searchParams.get('location') || 'All Narela Areas');
  }, [searchParams]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (intent !== 'All') params.set('intent', intent);
    if (type !== 'All Types') params.set('type', type);
    if (location !== 'All Narela Areas') params.set('location', location);
    
    // Instead of full page navigation, replace the URL to preserve state and trigger searchParams update in other components
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Real-time update when values change
  useEffect(() => {
    handleSearch();
  }, [intent, type, location]);

  return (
    <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        <form className="flex flex-col lg:flex-row gap-4" onSubmit={handleSearch}>
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Requirement</label>
            <select 
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm"
            >
              <option value="All">Any</option>
              <option value="Sale">Buy</option>
              <option value="Rent">Rent</option>
              <option value="Investment">Invest</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Property Type</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm"
            >
              <option value="All Types">Any Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial Space</option>
              <option value="Industrial">Industrial Plot</option>
              <option value="Builder Floor">Builder Floor</option>
              <option value="Villa">Luxury Villa</option>
              <option value="Land">Land / Plot</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Location</label>
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-black rounded-md px-4 py-3 focus:outline-none focus:border-[#B8860B] transition-colors text-sm"
            >
              <option value="All Narela Areas">All Narela Areas</option>
              <option value="sector-a1-a10">Sector A1-A10</option>
              <option value="sector-b2-b4">Sector B2-B4</option>
              <option value="narela-industrial-area">Narela Industrial Area</option>
              <option value="swatantra-nagar">Swatantra Nagar</option>
              <option value="alipur-grid">Alipur Grid</option>
              <option value="bhorgarh">Bhorgarh</option>
            </select>
          </div>
          
          <div className="flex-1 flex items-end">
            <button type="submit" className="w-full bg-black hover:bg-[#B8860B] text-white font-bold uppercase tracking-[0.2em] py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 text-xs h-[46px]">
              <Search className="w-4 h-4" /> Find
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export function PropertySearch() {
  return (
    <Suspense fallback={<div className="-mt-16 h-32 w-full max-w-5xl mx-auto" />}>
      <PropertySearchContent />
    </Suspense>
  );
}
