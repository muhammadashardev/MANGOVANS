import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, Users, Wrench, Mountain, Compass, Sparkles } from 'lucide-react';

const workshopImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85";

const highlights = [
  { 
    icon: Users, 
    title: "Experienced", 
    subtitle: "Master Craftsmen",
    desc: "Over a decade of combined custom automotive fabrication."
  },
  { 
    icon: Wrench, 
    title: "100% Bespoke", 
    subtitle: "Custom Builds",
    desc: "Tailored CAD-designed floorplans built to your exact specs."
  },
  { 
    icon: Compass, 
    title: "Adventure", 
    subtitle: "Driven Passion",
    desc: "Built by vanlifers who test every rig in real wild conditions."
  },
];

export default function OurStory() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-20 sm:py-24 lg:py-28 font-['Plus_Jakarta_Sans',sans-serif] text-slate-900 overflow-hidden">
      
      {/* BACKGROUND AMBIENT GLOWS & TOP ACCENT */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-200/30 via-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-amber-300/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -ml-28 -mb-28" />

      {/* SUBTLE BRAND TOP ACCENT LINE */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: STORY CONTENT & CTAS */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-left space-y-6"
          >
            
            {/* EYEBROW BADGE */}
            <motion.div 
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2.5 bg-amber-400/15 px-3.5 py-1.5 rounded-full border border-amber-400/30 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#E5A812] animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.2em] text-[#0F392B] uppercase">
                OUR STORY &amp; HERITAGE
              </span>
            </motion.div>

            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-[1.12]">
              Meet Mat &amp; the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A812] via-[#F5A623] to-amber-600">
                Mango Vans Crew.
              </span>
            </h2>

            {/* BODY TEXT */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal sm:font-medium">
              Get to know Mat, the founder, and the talented team behind Mango Vans. We’re a group of passionate builders, problem-solvers, and adventure enthusiasts dedicated to creating high-quality custom vans that help you explore further and live life on your own terms.
            </p>

            {/* ACTION & TAGLINE */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <motion.button
                onClick={() => setShowVideoModal(true)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 16px 36px rgba(250, 176, 5, 0.45)",
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FAB005] hover:bg-[#E5A812] text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/25 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white translate-x-0.5" />
                </div>
                <span>Watch Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <div className="border-l-2 border-amber-400/60 pl-3.5 py-0.5">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800">Real People</span>
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#E5A812]">Real Builds</span>
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800">Real Adventure</span>
              </div>
            </div>

            {/* KEY METRICS PILL */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-semibold border-t border-slate-200/80">
              <div>
                <span className="text-base font-black text-[#111827] block">100%</span>
                <span>Florida Handcrafted</span>
              </div>
              <div className="w-px h-7 bg-slate-200" />
              <div>
                <span className="text-base font-black text-[#111827] block">150+</span>
                <span>Bespoke Rigs Built</span>
              </div>
              <div className="w-px h-7 bg-slate-200" />
              <div>
                <span className="text-base font-black text-[#111827] block">5-Star</span>
                <span>Customer Satisfaction</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: PREMIUM CINEMATIC VIDEO & WORKSHOP CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* MAIN VIDEO SHOWCASE CONTAINER */}
            <motion.div 
              onClick={() => setShowVideoModal(true)}
              whileHover={{ 
                scale: 1.02, 
                y: -6, 
                boxShadow: "0 28px 56px -10px rgba(245, 158, 11, 0.28)",
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-slate-950 cursor-pointer"
            >
              {/* IMAGE CONTAINER WITH ASPECT RATIO */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img 
                  src={workshopImage} 
                  alt="Mango Vans master craftsmen working inside custom conversion workshop"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.88]"
                />
                
                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

                {/* TOP LEFT BRAND BADGE */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FAB005]" />
                  <span className="text-[11px] font-black tracking-wider text-white uppercase">
                    MANGO VANS WORKSHOP TOUR
                  </span>
                </div>

                {/* CENTER GLOWING PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute -inset-4 rounded-full bg-amber-400/30 animate-ping opacity-60" />
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FAB005] via-[#E5A812] to-amber-600 flex items-center justify-center text-slate-950 shadow-2xl shadow-amber-500/50 group-hover:shadow-amber-500/80 transition-all duration-300 border-2 border-white/60"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 translate-x-0.5" />
                    </motion.div>
                  </div>
                </div>

                {/* BOTTOM VIDEO SCRUB / DURATION BAR */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-6 z-10 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3 flex-1 max-w-sm">
                    <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-[#FAB005] rounded-full" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-slate-300">03:45</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-300 uppercase tracking-widest hidden sm:inline-block">
                    Click to Play Film
                  </span>
                </div>

              </div>
            </motion.div>

            {/* THREE FLOATING PILL BADGES (EXPERIENCED TEAM, CUSTOM BUILDS, ADVENTURE DRIVEN) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ 
                      y: -6, 
                      scale: 1.025, 
                      boxShadow: "0 14px 28px rgba(0,0,0,0.08)", 
                      borderColor: "rgba(229, 168, 18, 0.45)",
                      transition: { type: "spring", stiffness: 350, damping: 20 }
                    }}
                    className="flex items-center gap-3.5 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm cursor-pointer text-left group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-[#0F392B] shrink-0 group-hover:scale-110 group-hover:bg-amber-400/25 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2.2] text-[#0F392B]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 leading-tight group-hover:text-[#D97706] transition-colors">{item.title}</div>
                      <div className="text-[11px] font-bold text-[#E5A812] leading-tight mt-0.5">{item.subtitle}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>

      {/* FULLSCREEN VIDEO MODAL WITH FRAMER MOTION */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 cursor-default"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70">
                <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Mango Vans — Meet the Crew &amp; Behind the Scenes</span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(51, 65, 85, 1)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowVideoModal(false)}
                  className="p-2 rounded-full bg-slate-800 text-slate-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&controls=1"
                  title="Meet the Mango Vans Crew"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
