import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Box, ShieldCheck } from 'lucide-react';
import vanFeaturesImg from '../assets/image.png';
import brushUnderline from '../assets/brush-underline.png';

export default function Quality() {
  const featureHighlights = [
    {
      id: 'eco',
      title: 'Eco-Conscious Materials',
      desc: 'Sustainable, non-toxic materials chosen to reduce impact and protect the places we love to explore.',
      icon: (
        <motion.div 
          whileHover={{ scale: 1.12, rotate: 6, backgroundColor: '#FBEEC8' }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 rounded-full bg-[#FCF8EC] border border-[#FBEEC8] flex items-center justify-center shrink-0 shadow-sm"
        >
          <Leaf className="w-6 h-6 text-[#E5A812] stroke-[1.8]" />
        </motion.div>
      )
    },
    {
      id: 'space',
      title: 'Smart Space Optimization',
      desc: 'Thoughtful layouts that make every inch count—so you can live bigger with less.',
      icon: (
        <motion.div 
          whileHover={{ scale: 1.12, rotate: 6, backgroundColor: '#FBEEC8' }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 rounded-full bg-[#FCF8EC] border border-[#FBEEC8] flex items-center justify-center shrink-0 shadow-sm"
        >
          <Box className="w-6 h-6 text-[#E5A812] stroke-[1.8]" />
        </motion.div>
      )
    },
    {
      id: 'durability',
      title: 'Built to Last',
      desc: 'Premium components and meticulous craftsmanship ensure your van is ready for the long haul.',
      icon: (
        <motion.div 
          whileHover={{ scale: 1.12, rotate: 6, backgroundColor: '#FBEEC8' }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 rounded-full bg-[#FCF8EC] border border-[#FBEEC8] flex items-center justify-center shrink-0 shadow-sm"
        >
          <ShieldCheck className="w-6 h-6 text-[#E5A812] stroke-[1.8]" />
        </motion.div>
      )
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: 2-COLUMN HERO/SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: HEADLINE, COPY & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 text-left space-y-6"
          >
            
            {/* SUBTITLE WITH YELLOW ACCENT DASH */}
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[2.5px] bg-[#E5A812] rounded-full inline-block"></span>
              <span className="text-[11px] sm:text-xs font-black tracking-[0.22em] text-slate-600 uppercase">
                QUALITY &amp; SUSTAINABILITY
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#111827] tracking-tight leading-[1.08]">
              Built for <br />
              <span className="relative inline-block text-[#E5A812]">
                Adventure.
                <img 
                  src={brushUnderline} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-[105%] max-w-none pointer-events-none select-none"
                />
              </span> <br />
              Designed for Life.
            </h2>

            {/* BODY PARAGRAPH */}
            <p className="text-slate-600 font-normal sm:font-medium text-sm sm:text-base leading-relaxed max-w-lg pt-1">
              Every Mango Vans build is thoughtfully crafted using sustainable materials, smart design, and expert craftsmanship — so you can go further, live better, and leave a lighter footprint wherever the road takes you.
            </p>

            {/* EXPLORE OUR BUILDS CTA BUTTON */}
            <div className="pt-2">
              <motion.a
                href="#builds"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 14px 32px rgba(250, 176, 5, 0.45)",
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FAB005] hover:bg-[#E5A812] text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/20 group cursor-pointer"
              >
                <span>Explore Our Builds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: USER PROVIDED CAMPER VAN IMAGE WITH CRAFTSMANSHIP & DESIGN BADGES */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                boxShadow: "0 24px 48px -12px rgba(0,0,0,0.12)",
                transition: { type: "spring", stiffness: 250, damping: 20 } 
              }}
              className="relative w-full max-w-2xl rounded-3xl"
            >
              <img 
                src={vanFeaturesImg} 
                alt="Mango Vans Mercedes Sprinter Adventure Van with Expert Craftsmanship and Purposeful Design"
                className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: 3 KEY PILLARS (ECO, SPACE OPTIMIZATION, BUILT TO LAST) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-20 rounded-3xl border border-slate-100 bg-[#FCFCFD]/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featureHighlights.map((feature, idx) => (
              <motion.div 
                key={feature.id} 
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                className={`flex items-start gap-4 sm:gap-5 text-left group cursor-default ${
                  idx < featureHighlights.length - 1 ? 'md:border-r md:border-slate-100 md:pr-8 lg:pr-10' : ''
                }`}
              >
                {feature.icon}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#111827] text-base sm:text-lg tracking-tight group-hover:text-[#D97706] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                  <motion.div 
                    className="w-9 h-[2.5px] bg-[#FAB005] rounded-full mt-2.5 group-hover:w-14 transition-all duration-300" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}