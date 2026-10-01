import React from 'react';
import { motion } from 'framer-motion';
import acHeatingImg from '../assets/builds/ac_heating.jpg';
import seatsBedImg from '../assets/builds/seats_bed.jpg';
import windowRepairImg from '../assets/builds/window_repair.jpg';
import roofOptionsImg from '../assets/builds/roof_options.jpg';

const buildsData = [
  {
    id: 'ac-heating',
    title: 'A/C & Heating\nRepair',
    image: acHeatingImg,
    alt: 'Camper Van A/C & Heating Repair',
  },
  {
    id: 'seats-bed',
    title: 'Seats & Bed\nInstallation',
    image: seatsBedImg,
    alt: 'Camper Van Seats & Bed Installation',
  },
  {
    id: 'window-repair',
    title: 'Window Repair &\nInstallation',
    image: windowRepairImg,
    alt: 'Camper Van Window Repair & Installation',
  },
  {
    id: 'roof-options',
    title: 'Exterior Upgrades &\nRoof Options',
    image: roofOptionsImg,
    alt: 'Camper Van Exterior Upgrades & Roof Options',
  },
];

export default function LatestVanBuilds() {
  return (
    <section className="relative w-full bg-[#fbfbf9] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Script Tag / Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-white border border-[#e4eae2] shadow-[0_3px_12px_rgba(0,0,0,0.05)] cursor-pointer select-none"
        >
          <span
            className="text-[#133820] text-[18px] sm:text-[20px] font-bold leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Projects
          </span>
          <span className="text-base select-none" role="img" aria-label="sun">
            ☀️
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 sm:mt-5 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-[-0.03em] leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
        >
          <span className="text-[#111c14]">Our Latest </span>
          <span className="text-[#134629]">Van Builds</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 sm:mt-4 text-center text-[#55695c] text-[14.5px] sm:text-[15.5px] lg:text-[16px] max-w-2xl leading-relaxed font-normal"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Check out some of our recent custom van conversions — each one
          uniquely built to match the owner's lifestyle and adventure goals.
        </motion.p>

        {/* 4 Cards Grid with Framer Motion */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10 sm:mt-12 lg:mt-14">
          {buildsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                boxShadow: "0 28px 52px -10px rgba(0,0,0,0.35)",
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              className="group relative overflow-hidden rounded-[26px] sm:rounded-[28px] lg:rounded-[30px] aspect-[4/5] sm:aspect-[3/4] lg:h-[420px] w-full bg-[#1b2b20] shadow-[0_10px_28px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Bottom Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-35% to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/95" />

              {/* Card Label / Title */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end">
                <h3
                  className="text-white font-extrabold text-[20px] sm:text-[21px] lg:text-[22px] leading-[1.22] whitespace-pre-line tracking-[-0.015em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:-translate-y-1.5 transition-transform duration-300"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Subtle inner highlight border on hover */}
              <div className="absolute inset-0 rounded-[26px] sm:rounded-[28px] lg:rounded-[30px] ring-1 ring-inset ring-white/10 group-hover:ring-amber-400/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Script Tag / Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08, rotate: 0 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 sm:mt-12 lg:mt-14 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white border border-[#e4eae2] shadow-[0_4px_16px_rgba(0,0,0,0.06)] transform -rotate-1 cursor-pointer select-none"
        >
          <span
            className="text-[#133820] text-[18px] sm:text-[20px] font-bold leading-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Ready for the road!
          </span>
          <span className="text-base select-none" role="img" aria-label="evergreen tree">
            🌲
          </span>
        </motion.div>

      </div>
    </section>
  );
}
