import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import featuredCoupleImg from '../assets/featured-vanlife-couple.jpg';

// Twinkling stars effect for the CTA Banner
const StarField = () => {
  const stars = useMemo(() => {
    const list = [];
    const keyStars = [
      { top: '15%', left: '12%', size: 2.2, opacity: 0.85, glow: true },
      { top: '22%', left: '24%', size: 1.8, opacity: 0.7, glow: false },
      { top: '14%', left: '38%', size: 2.5, opacity: 0.9, glow: true },
      { top: '28%', left: '52%', size: 1.6, opacity: 0.65, glow: false },
      { top: '18%', left: '68%', size: 2.0, opacity: 0.8, glow: true },
      { top: '26%', left: '84%', size: 2.4, opacity: 0.95, glow: true },
      { top: '48%', left: '16%', size: 1.7, opacity: 0.7, glow: false },
      { top: '56%', left: '28%', size: 2.1, opacity: 0.85, glow: true },
      { top: '42%', left: '86%', size: 2.2, opacity: 0.9, glow: true },
      { top: '65%', left: '80%', size: 1.8, opacity: 0.75, glow: false },
      { top: '78%', left: '22%', size: 2.4, opacity: 0.9, glow: true },
      { top: '82%', left: '72%', size: 1.6, opacity: 0.7, glow: false },
    ];

    for (let i = 0; i < 70; i++) {
      const top = ((i * 37 + 11) % 94) + 3;
      const left = ((i * 59 + 23) % 94) + 3;
      const size = i % 3 === 0 ? 1.6 : i % 2 === 0 ? 1.2 : 0.8;
      const opacity = ((i % 5) + 3) / 10;
      const duration = 2.4 + (i % 4) * 1.2;
      const delay = (i % 5) * 0.7;
      list.push({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size,
        opacity,
        duration,
        delay,
        glow: i % 8 === 0
      });
    }

    return [
      ...keyStars.map((s, idx) => ({ ...s, id: `key-${idx}`, duration: 3.2, delay: idx * 0.3 })),
      ...list
    ];
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.glow ? '0 0 6px 1.5px rgba(255, 255, 255, 0.8)' : 'none',
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.25; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 0.35; transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
};

// Double quote SVG icon in gold
const QuoteIcon = () => (
  <svg 
    className="w-7 h-7 text-[#F5A623] shrink-0" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// 5 Stars SVG
const FiveStars = () => (
  <div className="flex items-center gap-1 text-[#F5A623]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Customerstories() {
  const [activeSlide, setActiveSlide] = useState(0);

  // All testimonial slides — each slide has 4 cards (left1, left2, right1, right2)
  const slides = [
    {
      left1: {
        quote: "Mat and the Mango Vans crew did an excellent job with my van, and were extremely supportive after — providing tips and advice while on the road. Great crew!",
        name: "Chris Parker", role: "Adventure Blogger",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>)
      },
      left2: {
        quote: "From layout planning to final delivery, everything works seamlessly. This has become my primary home on wheels.",
        name: "Michael Thompson", role: "Freelance Photographer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>)
      },
      right1: {
        quote: "Security was my biggest concern, but the build quality and attention to detail gave me complete confidence for full-time van living.",
        name: "Sophia Nguyen", role: "Digital Nomad",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>)
      },
      right2: {
        quote: "The mobile app is fast, reliable, and packed with features. I can monitor everything in my van wherever I am.",
        name: "Emily Carter", role: "Travel Vlogger",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>)
      },
    },
    {
      left1: {
        quote: "I've traveled over 20,000 miles in my Mango Vans build. The solar system hasn't let me down once. Best investment I've ever made.",
        name: "Jake Harrison", role: "Full-Time Vanlife",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>)
      },
      left2: {
        quote: "The custom walnut cabinetry and ambient LED lighting make my van feel like a luxury apartment. Couldn't be happier with the craftsmanship.",
        name: "Priya Desai", role: "Remote Designer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)
      },
      right1: {
        quote: "I run my entire business out of my Mango Vans commercial sprinter. The build quality and storage solutions are unmatched.",
        name: "Derek Collins", role: "Mobile Contractor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>)
      },
      right2: {
        quote: "Mat's team walked us through every single decision. The attention to detail in our Sprinter 4x4 build is truly extraordinary.",
        name: "Leila & Tom",  role: "Adventure Couple",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
        icon: (<svg className="w-4 h-4 text-[#124B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>)
      },
    }
  ];

  const TOTAL = slides.length;
  const currentSlide = slides[activeSlide];

  const handlePrev = () => setActiveSlide((p) => (p > 0 ? p - 1 : TOTAL - 1));
  const handleNext = () => setActiveSlide((p) => (p < TOTAL - 1 ? p + 1 : 0));

  // Shorthand aliases used below
  const cardChris   = currentSlide.left1;
  const cardMichael = currentSlide.left2;
  const cardSophia  = currentSlide.right1;
  const cardEmily   = currentSlide.right2;

  return (
    <section className="w-full bg-[#FAF7F2] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* ============================================================== */}
        {/* TOP HEADER: Badge, Title & Right Description                   */}
        {/* ============================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-16"
        >
          <div>
            {/* Pill Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE6BD] text-[#9A6209] font-bold text-xs uppercase tracking-wider mb-4 cursor-default"
            >
              <span>CUSTOMER STORIES</span>
              <span className="text-amber-500 text-sm">💛</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0D3827] leading-[1.12] tracking-tight">
              Trusted by Van Life<br />
              <span className="text-[#F5A623]">Adventurers</span>
            </h2>
          </div>

          {/* Right Subtitle / Description */}
          <p className="text-[#607167] text-sm sm:text-[15px] leading-relaxed max-w-md lg:pb-2">
            See how our customers have transformed their travel dreams into reality with custom Mango Vans builds, crafted right here in Florida.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 3-COLUMN TESTIMONIALS GRID (keyed so AnimatePresence fades on slide change) */}
        {/* ============================================================== */}
        <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.38, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* ----------------- COLUMN 1: LEFT TWO CARDS ----------------- */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Card 1: Chris Parker */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 42px rgba(13, 56, 39, 0.12)", 
                borderColor: "rgba(245, 166, 35, 0.4)",
                transition: { type: "spring", stiffness: 350, damping: 20 } 
              }}
              className="bg-white rounded-[22px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-amber-900/5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <QuoteIcon />
                <p className="text-[#4A5D53] text-[13.5px] leading-relaxed mt-4 mb-6 font-normal">
                  {cardChris.quote}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={cardChris.avatar} 
                    alt={cardChris.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-black/5"
                  />
                  <div>
                    <h4 className="font-bold text-[#0D3827] text-sm leading-snug">{cardChris.name}</h4>
                    <p className="text-[#7F9187] text-xs">{cardChris.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF4EE] flex items-center justify-center shrink-0">
                  {cardChris.icon}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Michael Thompson */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 42px rgba(13, 56, 39, 0.12)", 
                borderColor: "rgba(245, 166, 35, 0.4)",
                transition: { type: "spring", stiffness: 350, damping: 20 } 
              }}
              className="bg-white rounded-[22px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-amber-900/5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <QuoteIcon />
                <p className="text-[#4A5D53] text-[13.5px] leading-relaxed mt-4 mb-6 font-normal">
                  {cardMichael.quote}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={cardMichael.avatar} 
                    alt={cardMichael.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-black/5"
                  />
                  <div>
                    <h4 className="font-bold text-[#0D3827] text-sm leading-snug">{cardMichael.name}</h4>
                    <p className="text-[#7F9187] text-xs">{cardMichael.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF4EE] flex items-center justify-center shrink-0">
                  {cardMichael.icon}
                </div>
              </div>
            </motion.div>
          </div>

          {/* -------------- COLUMN 2: CENTER FEATURED CARD -------------- */}
          <div className="lg:col-span-4 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 28px 56px rgba(13, 56, 39, 0.32)", 
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              className="relative w-full h-full rounded-[26px] overflow-hidden shadow-[0_15px_40px_rgba(13,56,39,0.18)] flex flex-col justify-between p-6 sm:p-7 group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={featuredCoupleImg} 
                alt="Mango Vans Featured Couple" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Dark dramatic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#052115] via-[#052115]/50 to-black/25 pointer-events-none" />

              {/* Top Tag: MANGO VANS FEATURED */}
              <div className="relative z-10 self-start">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0D3827] font-extrabold text-[10.5px] tracking-wider uppercase shadow-sm">
                  MANGO VANS FEATURED
                </span>
              </div>

              {/* Bottom Quote & Author Details */}
              <div className="relative z-10">
                <p className="text-white font-medium text-[14.5px] sm:text-[15.5px] leading-relaxed mb-6 drop-shadow-sm">
                  “The reporting, build updates, and design features have completely changed the way we planned our van life journey. We now have clear visibility of every detail.”
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Mat Rodriguez" 
                      className="w-11 h-11 rounded-full border-2 border-[#F5A623] object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm leading-snug">Mat Rodriguez</h4>
                      <p className="text-[#A2C7B6] text-xs">Founder of Mango Vans</p>
                    </div>
                  </div>
                  <FiveStars />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ----------------- COLUMN 3: RIGHT TWO CARDS ---------------- */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Card 3: Sophia Nguyen */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 42px rgba(13, 56, 39, 0.12)", 
                borderColor: "rgba(245, 166, 35, 0.4)",
                transition: { type: "spring", stiffness: 350, damping: 20 } 
              }}
              className="bg-white rounded-[22px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-amber-900/5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <QuoteIcon />
                <p className="text-[#4A5D53] text-[13.5px] leading-relaxed mt-4 mb-6 font-normal">
                  {cardSophia.quote}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={cardSophia.avatar} 
                    alt={cardSophia.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-black/5"
                  />
                  <div>
                    <h4 className="font-bold text-[#0D3827] text-sm leading-snug">{cardSophia.name}</h4>
                    <p className="text-[#7F9187] text-xs">{cardSophia.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF4EE] flex items-center justify-center shrink-0">
                  {cardSophia.icon}
                </div>
              </div>
            </motion.div>

            {/* Card 4: Emily Carter */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 42px rgba(13, 56, 39, 0.12)", 
                borderColor: "rgba(245, 166, 35, 0.4)",
                transition: { type: "spring", stiffness: 350, damping: 20 } 
              }}
              className="bg-white rounded-[22px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-amber-900/5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <QuoteIcon />
                <p className="text-[#4A5D53] text-[13.5px] leading-relaxed mt-4 mb-6 font-normal">
                  {cardEmily.quote}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={cardEmily.avatar} 
                    alt={cardEmily.name} 
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-black/5"
                  />
                  <div>
                    <h4 className="font-bold text-[#0D3827] text-sm leading-snug">{cardEmily.name}</h4>
                    <p className="text-[#7F9187] text-xs">{cardEmily.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF4EE] flex items-center justify-center shrink-0">
                  {cardEmily.icon}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
        </AnimatePresence>

        {/* ============================================================== */}
        {/* CAROUSEL NAVIGATION ARROWS (Centered)                         */}
        {/* ============================================================== */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous testimonials"
            className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-[#0D3827] hover:bg-slate-50 hover:shadow-md cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide
                    ? 'w-6 h-2.5 bg-[#0D3827]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[#a0c4ac]'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next testimonials"
            className="w-11 h-11 rounded-full bg-[#0D3827] shadow-md flex items-center justify-center text-white hover:bg-[#134e37] hover:shadow-lg cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* ============================================================== */}
        {/* CTA BANNER: "Start your adventure with Mango Vans!"           */}
        {/* ============================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-18 lg:mt-20"
        >
          <div 
            className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] px-8 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-14 text-white shadow-2xl"
            style={{
              backgroundColor: '#073B25',
              backgroundImage: 'radial-gradient(ellipse 80% 70% at 30% 50%, #0d5f3d 0%, #073B25 60%, #042416 100%)',
              boxShadow: '0 20px 45px -10px rgba(7, 59, 37, 0.4)'
            }}
          >
            {/* Twinkling Starfield Layer */}
            <StarField />

            {/* Content flex: Left Title, Right Button */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                {/* Script Badge */}
                <div 
                  className="inline-flex items-center px-4 py-1 rounded-full mb-3"
                  style={{
                    backgroundColor: 'rgba(17, 85, 56, 0.7)',
                    border: '1px solid rgba(48, 148, 102, 0.35)'
                  }}
                >
                  <span 
                    className="text-[#96E7BE] text-base sm:text-lg italic font-normal"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    Get Started with us
                  </span>
                </div>

                {/* Big Headline */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.18] tracking-tight">
                  Start your adventure with<br className="hidden sm:inline" /> Mango Vans!
                </h3>
              </div>

              {/* Right CTA Button with Motion */}
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.06, 
                  y: -2, 
                  boxShadow: "0 12px 35px rgba(251,191,36,0.6)",
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A261A] font-extrabold text-sm sm:text-base tracking-normal shadow-[0_6px_22px_rgba(251,191,36,0.38)] whitespace-nowrap self-start md:self-auto shrink-0 group cursor-pointer"
              >
                <span>Talk To Us</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}