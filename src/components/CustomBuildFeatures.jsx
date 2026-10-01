import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bed } from 'lucide-react';

/**
 * Custom SVG icons matching the exact iconography from the reference design
 */
function SolarPanelIcon({ className = "w-6 h-6 text-[#133820]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Sun rays / sparkles top-left */}
      <path d="M4 3v2" />
      <path d="M2 5h2" />
      <path d="M6 5.5l1.5-1.5" />
      
      {/* Angled solar panel grid */}
      <polygon points="4 9 20 9 22 21 2 21" strokeWidth="2.2" />
      <line x1="12" y1="9" x2="12" y2="21" strokeWidth="2" />
      <line x1="3" y1="15" x2="21" y2="15" strokeWidth="2" />
    </svg>
  );
}

function RoofRackIcon({ className = "w-6 h-6 text-[#133820]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Top grab handle */}
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      {/* Main cargo carrier / backpack body */}
      <rect x="5" y="6" width="14" height="15" rx="3" />
      {/* Inner pocket / rack straps */}
      <path d="M9 10h6" />
      <rect x="8" y="13" width="8" height="5" rx="1.5" />
    </svg>
  );
}

function ComfortBedIcon({ className = "w-6 h-6 text-[#133820]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 4v16" />
      <path d="M2 13h20" />
      <path d="M22 10v10" />
      <path d="M2 8h18a2 2 0 0 1 2 2v3" />
      <circle cx="7" cy="9.5" r="1.5" />
    </svg>
  );
}

export default function CustomBuildFeatures() {
  const cards = [
    {
      id: 'solar',
      isPrimary: true,
      title: 'Solar Power',
      description:
        'Our van conversions come with solar panels, empowering you to venture off-grid while staying connected.',
      icon: <SolarPanelIcon className="w-6 h-6 text-[#133820]" />,
      badgeBg: 'bg-[#fabd24]',
    },
    {
      id: 'roof-racks',
      isPrimary: false,
      title: 'Roof Racks & Storage',
      description:
        'Our sturdy roof racks offer additional storage for your gear, while our optional pop-top provides extra living space.',
      icon: <RoofRackIcon className="w-6 h-6 text-[#133820]" />,
      badgeBg: 'bg-[#eaf4ec]',
    },
    {
      id: 'comfort',
      isPrimary: false,
      title: 'Cutting-Edge Comfort',
      description:
        'We incorporate cutting-edge features to enhance your comfort and convenience on the road.',
      icon: <ComfortBedIcon className="w-6 h-6 text-[#133820]" />,
      badgeBg: 'bg-[#eaf4ec]',
    },
  ];

  return (
    <section className="w-full bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200 overflow-hidden">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Action */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4"
          >
            
            {/* Tagline / Subtitle */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 sm:w-6 h-[2px] bg-[#143d22] inline-block rounded-full" />
              <span 
                className="text-[#143d22] text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.16em]"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
              >
                PREMIUM STANDARDS
              </span>
            </div>

            {/* Main Headline */}
            <h2 
              className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-black leading-[1.08] tracking-[-0.03em] text-[#123820] mb-5 sm:mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
            >
              Features of{' '}
              <span className="text-[#fabd24] block">
                Mango Vans
              </span>
              Custom Builds
            </h2>

            {/* Description */}
            <p 
              className="text-[#596b5e] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] font-medium max-w-[430px] mb-8 sm:mb-9"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
            >
              At Mango Vans, we take pride in elevating the standard camper van build. We focus on simplicity, premium materials, and adventure-ready capabilities.
            </p>

            {/* CTA Button with Motion */}
            <motion.a
              href="#build-process"
              whileHover={{ 
                scale: 1.04, 
                y: -2, 
                boxShadow: "0 20px 40px -4px rgba(250,189,36,0.65)",
                transition: { type: "spring", stiffness: 400, damping: 15 } 
              }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#fabd24] text-[#133820] font-extrabold text-[12px] sm:text-[13px] tracking-wider uppercase shadow-[0_14px_28px_-4px_rgba(250,189,36,0.52)] cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
            >
              <span>GO TO OUR BUILD PROCESS</span>
              <ArrowRight 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" 
                strokeWidth={2.6}
              />
            </motion.a>
          </motion.div>

          {/* Right Column: 3 Feature Cards with Motion */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5 xl:gap-6 items-stretch">
              {cards.map((card, idx) => {
                if (card.isPrimary) {
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.025, 
                        boxShadow: "0 28px 52px -6px rgba(54,110,44,0.48)",
                        transition: { type: "spring", stiffness: 350, damping: 20 } 
                      }}
                      className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[30px] bg-[#366e2c] p-7 sm:p-7 xl:p-8 h-full shadow-[0_20px_42px_-6px_rgba(54,110,44,0.36)] cursor-pointer"
                    >
                      {/* Top Icon Badge */}
                      <div>
                        <motion.div 
                          whileHover={{ scale: 1.15, rotate: 6 }}
                          className={`w-[52px] h-[52px] rounded-full ${card.badgeBg} flex items-center justify-center shadow-sm`}
                        >
                          {card.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 
                          className="mt-10 sm:mt-12 text-white font-extrabold text-[21px] sm:text-[22px] xl:text-[23px] tracking-[-0.015em] leading-[1.2]"
                          style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p 
                          className="mt-3.5 text-[#e0ecdd] text-[13.5px] sm:text-[14px] leading-[1.6] font-normal"
                          style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.025, 
                      boxShadow: "0 24px 48px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.04)",
                      borderColor: "rgba(250,189,36,0.45)",
                      transition: { type: "spring", stiffness: 350, damping: 20 } 
                    }}
                    className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[30px] bg-white border border-[#ece9e0]/80 p-7 sm:p-7 xl:p-8 h-full shadow-[0_16px_38px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.02)] cursor-pointer"
                  >
                    {/* Top Icon Badge */}
                    <div>
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        className={`w-[52px] h-[52px] rounded-full ${card.badgeBg} flex items-center justify-center`}
                      >
                        {card.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 
                        className="mt-10 sm:mt-12 text-[#123820] font-extrabold text-[21px] sm:text-[22px] xl:text-[23px] tracking-[-0.015em] leading-[1.2] group-hover:text-[#fabd24] transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="mt-3.5 text-[#5e6f61] text-[13.5px] sm:text-[14px] leading-[1.6] font-normal"
                        style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
