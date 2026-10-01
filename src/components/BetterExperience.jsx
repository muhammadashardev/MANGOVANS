import React from 'react';
import { motion } from 'framer-motion';
import iconSustainability from '../assets/icon-sustainability.png';
import iconOptions from '../assets/icon-options.png';
import iconTime from '../assets/icon-time.png';
import iconValue from '../assets/icon-value.png';
import iconSimplicity from '../assets/icon-simplicity.png';

const topFeatures = [
  {
    number: '01',
    title: 'Sustainability',
    description: 'Eco-conscious builds for a cleaner, greener tomorrow.',
    icon: iconSustainability
  },
  {
    number: '02',
    title: 'Options',
    description: 'Flexible layouts and custom features to fit your lifestyle.',
    icon: iconOptions
  },
  {
    number: '03',
    title: 'Time',
    description: 'Get on the road faster with streamlined builds and support.',
    icon: iconTime
  }
];

const bottomFeatures = [
  {
    number: '04',
    title: 'Value',
    description: 'Premium craftsmanship that gives you more for your investment.',
    icon: iconValue
  },
  {
    number: '05',
    title: 'Simplicity',
    description: 'A stress-free process from build to adventure.',
    icon: iconSimplicity
  }
];

function AdvantageCard({ item, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -10, 
        scale: 1.025, 
        boxShadow: "0 24px 44px -8px rgba(245, 158, 11, 0.16), 0 12px 24px -6px rgba(0, 0, 0, 0.08)",
        borderColor: "rgba(250, 176, 5, 0.45)",
        transition: { type: "spring", stiffness: 350, damping: 20 }
      }}
      className="group relative flex flex-col justify-between bg-white rounded-[26px] p-6 sm:p-7 border border-slate-100 shadow-[0_10px_28px_rgba(0,0,0,0.04)] cursor-pointer h-full"
    >
      {/* Top Header: Number Pill on Left, 3D Icon on Right */}
      <div className="flex items-start justify-between">
        <motion.span 
          whileHover={{ scale: 1.15, rotate: -6 }}
          className="w-8 h-8 rounded-full bg-[#FEF3C7] text-[#D97706] font-black text-xs flex items-center justify-center shadow-xs"
        >
          {item.number}
        </motion.span>
        <div className="w-20 h-20 sm:w-[86px] sm:h-[86px] flex items-center justify-center shrink-0 -mt-1 -mr-1 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
          <img 
            src={item.icon} 
            alt={item.title} 
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 pt-1 text-left">
        <h3 className="text-lg sm:text-[19px] font-black text-[#111827] tracking-tight group-hover:text-[#D97706] transition-colors">
          {item.title}
        </h3>
        <span className="block w-7 h-[2.5px] bg-[#FAB005] rounded-full my-2.5 group-hover:w-14 transition-all duration-300" />
        <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed max-w-[230px]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function BetterExperience() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EYEBROW WITH YELLOW ACCENTS */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center justify-center gap-2.5 text-center"
        >
          <span className="w-6 h-[2.5px] bg-[#FAB005] rounded-full inline-block" />
          <p className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#1E293B] uppercase">
            MANGO VANS ADVANTAGE
          </p>
          <span className="w-6 h-[2.5px] bg-[#FAB005] rounded-full inline-block" />
        </motion.div>

        {/* SECTION HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.12] tracking-tight text-[#111827]"
        >
          Built for a Better <span className="text-[#FAB005]">Van Life</span>
          <br />
          Experience
        </motion.h2>

        {/* 5-CARD SHOWCASE CONTAINER */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
          
          {/* TOP ROW: 3 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {topFeatures.map((item, idx) => (
              <AdvantageCard key={item.number} item={item} delay={idx * 0.1} />
            ))}
          </div>

          {/* BOTTOM ROW: 2 CARDS (CENTERED) */}
          <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-7 mt-6 sm:mt-7">
            {bottomFeatures.map((item, idx) => (
              <div 
                key={item.number} 
                className="w-full md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
              >
                <AdvantageCard item={item} delay={0.3 + idx * 0.1} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
