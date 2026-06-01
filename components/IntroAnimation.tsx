'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building, Factory, Truck, Cpu, Rocket, GraduationCap, Package, Map } from 'lucide-react';

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-30"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, `${Math.random() * -20 - 10}vh`],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const Scene1Map = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <svg width="300" height="300" viewBox="0 0 100 100" className="drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
      {/* Abstract map outline shape resembling an industrial/urban zone */}
      <motion.path
        d="M20,60 L40,30 L65,25 L85,45 L75,80 L40,90 Z"
        fill="rgba(212,175,55,0.05)"
        stroke="#d4af37"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  </motion.div>
);

const Scene2Skyline = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 flex items-end justify-center pb-[30vh]"
  >
    <div className="flex items-end space-x-2 md:space-x-4">
      {[120, 180, 240, 150, 200].map((h, i) => (
         <motion.div
           key={i}
           className="w-10 md:w-16 border border-[#d4af37] bg-gradient-to-t from-[#d4af37]/20 to-transparent"
           initial={{ height: 0 }}
           animate={{ height: h }}
           transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
         />
      ))}
    </div>
  </motion.div>
);

const Scene3Network = () => {
  const icons = [Building, Factory, Truck, Cpu, Rocket, GraduationCap, Package];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_20px_#d4af37]" />
        </div>
        {icons.map((Icon, i) => {
           const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
           const radius = 120;
           const x = Math.cos(angle) * radius;
           const y = Math.sin(angle) * radius;
           return (
             <motion.div
               key={i}
               className="absolute left-1/2 top-1/2 -ml-5 -mt-5 text-[#d4af37] bg-[#051125] p-2 rounded-full border border-[#d4af37]/30"
               initial={{ x: 0, y: 0, opacity: 0 }}
               animate={{ x, y, opacity: 1 }}
               transition={{ duration: 0.6, delay: i * 0.05 }}
             >
               <Icon className="w-6 h-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] text-[#d4af37]" />
             </motion.div>
           );
        })}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
          {icons.map((_, i) => {
             const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
             const x = 160 + Math.cos(angle) * 120;
             const y = 160 + Math.sin(angle) * 120;
             return (
               <motion.line
                 key={i}
                 x1="160" y1="160" x2={x} y2={y}
                 stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 0.6, delay: i * 0.05 + 0.3 }}
               />
             );
          })}
        </svg>
      </div>
    </motion.div>
  );
};

const Scene4Welcome = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
  >
    <div className="relative w-64 h-32 mb-8">
      <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
        <motion.path
          d="M0,50 L20,30 L40,40 L70,10 L100,0"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.circle
           cx="100" cy="0" r="3" fill="#fff"
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.8 }}
           className="shadow-[0_0_15px_#fff]"
        />
      </svg>
    </div>
    
    <motion.h2 
       className="text-3xl md:text-5xl text-white font-light mb-4 tracking-wide font-heading"
       initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
    >
      Welcome to <span className="font-semibold italic text-[#d4af37]">Invest in Narela</span>
    </motion.h2>
    <motion.p 
       className="text-[#d4af37] text-xs md:text-sm uppercase tracking-[0.3em] font-medium"
       initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
    >
      Delhi&apos;s Emerging Investment Destination
    </motion.p>
  </motion.div>
);

const Scene5Stats = () => {
  const stats = [
    { label: "Strategic Location", icon: Map },
    { label: "Industrial Growth", icon: Factory },
    { label: "Future Infrastructure", icon: Building },
    { label: "Investment Opportunities", icon: Rocket }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex items-center justify-center p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 md:gap-y-16">
         {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-white uppercase tracking-widest text-sm md:text-lg font-light">
                {stat.label}
              </span>
            </motion.div>
         ))}
      </div>
    </motion.div>
  );
};

const Scene6Final = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
  >
    <motion.h1 
      className="text-5xl md:text-[6rem] font-black text-white mb-6 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
      initial={{ filter: "blur(10px)", opacity: 0, scale: 1.05 }}
      animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      INVESTIN<span className="text-[#d4af37]">NARELA</span>
    </motion.h1>
    <motion.div 
      className="w-32 h-[2px] bg-[#d4af37] mb-8"
      initial={{ width: 0 }}
      animate={{ width: 128 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.p 
      className="text-white/80 text-xs md:text-[15px] uppercase tracking-[0.4em] font-light"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      Gateway to Growth. <span className="text-[#d4af37]">Gateway to Opportunity.</span>
    </motion.p>
  </motion.div>
);

export function IntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (!sessionStorage.getItem('introPlayed')) {
      setShow(true);
      
      // Sequence timings (compressing 5 scenes into ~6.5 seconds, then hold)
      const timers = [
        setTimeout(() => setStage(1), 1300),
        setTimeout(() => setStage(2), 2600),
        setTimeout(() => setStage(3), 3900),
        setTimeout(() => setStage(4), 5200),
        setTimeout(() => setStage(5), 6500),
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem('introPlayed', 'true');
        }, 8500)
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, []);

  if (!mounted || !show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#051125] text-[#d4af37] overflow-hidden drop-shadow-2xl"
        >
          {/* Subtle noise texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}} />
          
          <Particles />

          <AnimatePresence mode="wait">
            {stage === 0 && <Scene1Map key="s0" />}
            {stage === 1 && <Scene2Skyline key="s1" />}
            {stage === 2 && <Scene3Network key="s2" />}
            {stage === 3 && <Scene4Welcome key="s3" />}
            {stage === 4 && <Scene5Stats key="s4" />}
            {stage === 5 && <Scene6Final key="s5" />}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
