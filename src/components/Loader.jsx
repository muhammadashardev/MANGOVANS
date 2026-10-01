import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandLogo from "../assets/mangovans-brand-logo.png";
import { Sparkles, Compass, Zap, ShieldCheck } from "lucide-react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        // Smooth progressive increments
        const step = prev < 60 
          ? Math.floor(Math.random() * 8) + 6 
          : Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + step, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Dynamic build milestone status based on progress
  const getStatusText = () => {
    if (progress < 25) return "COMMISSIONING CHASSIS & POWER SYSTEM";
    if (progress < 50) return "CALIBRATING 600Ah OFF-GRID LITHIUM";
    if (progress < 75) return "CRAFTING LUXURY BESPOKE INTERIOR";
    if (progress < 95) return "FINAL QUALITY INSPECTION • SARASOTA, FL";
    return "EXPEDITION READY • WELCOME TO MANGOVANS";
  };

  const getStatusIcon = () => {
    if (progress < 25) return <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />;
    if (progress < 50) return <Compass className="w-3.5 h-3.5 text-yellow-300 animate-spin" />;
    if (progress < 75) return <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-bounce" />;
    return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.04,
        filter: "blur(14px)", 
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05130b] font-['Outfit',sans-serif] select-none overflow-hidden"
    >
      {/* ── 3D AMBIENT ATMOSPHERE & LIGHTING ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/15 via-[#0d3420]/30 to-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[320px] bg-amber-400/15 rounded-full blur-[90px]" />
        
        {/* Subtle 3D background grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#e6a817 1px, transparent 1px), linear-gradient(90deg, #e6a817 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient floating dust particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/60"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              left: `${10 + (i * 7.5)}%`,
              top: `${20 + ((i * 13) % 70)}%`,
              boxShadow: '0 0 8px rgba(245, 200, 66, 0.8)',
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 0.9, 0],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── 3D MAIN STAGE ── */}
      <div 
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{ perspective: '1100px' }}
      >

        {/* 3D FLOATING VAN & GYROSCOPE CONTAINER */}
        <div 
          className="relative w-72 h-60 flex items-center justify-center mb-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 1. 3D GYROSCOPIC ORBITAL RING 1 (GOLD) */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-amber-400/35 pointer-events-none"
            style={{
              boxShadow: '0 0 24px rgba(230,168,23,0.2), inset 0 0 16px rgba(230,168,23,0.15)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [65, 68, 65],
              rotateY: [18, 22, 18],
              rotateZ: [0, 360],
            }}
            transition={{
              rotateZ: { duration: 9, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Orbiting Spark 1 */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 shadow-[0_0_12px_#f5c842]" />
          </motion.div>

          {/* 2. 3D GYROSCOPIC ORBITAL RING 2 (EMERALD / CYAN ACCENT) */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-emerald-400/25 pointer-events-none"
            style={{
              boxShadow: '0 0 20px rgba(52,211,153,0.15)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [50, 46, 50],
              rotateY: [-30, -26, -30],
              rotateZ: [360, 0],
            }}
            transition={{
              rotateZ: { duration: 7, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Orbiting Spark 2 */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </motion.div>

          {/* 3. 3D HOLOGRAPHIC GROUND ROAD / PEDESTAL */}
          <div 
            className="absolute bottom-2 w-64 h-24 pointer-events-none"
            style={{
              transform: 'rotateX(72deg) translateZ(-35px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glowing pedestal disc */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-500/20 via-[#0a2318]/50 to-transparent border border-amber-400/30 blur-[1px] shadow-[0_0_30px_rgba(230,168,23,0.25)]" />
            
            {/* Moving perspective road dashed speed lines */}
            <div className="absolute inset-x-12 top-0 bottom-0 flex flex-col justify-around items-center opacity-60 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full shadow-[0_0_8px_#f5c842]"
                  animate={{
                    y: [0, 45],
                    opacity: [0, 1, 0],
                    scaleX: [0.6, 1.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeIn",
                  }}
                />
              ))}
            </div>
          </div>

          {/* 4. DYNAMIC 3D DROP SHADOW UNDER THE VAN */}
          <motion.div
            className="absolute bottom-5 w-36 h-8 rounded-full bg-black/70 blur-md pointer-events-none"
            animate={{
              scale: [0.85, 1.15, 0.85],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* 5. 3D FLOATING & ROTATING LOGO PLAQUE */}
          <motion.div
            className="relative z-20 flex items-center justify-center cursor-default"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [-9, 9, -9],
              rotateY: [-13, 13, -13],
              rotateX: [9, -9, 9],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* The Luxury White Plaque with 3D Depth */}
            <div 
              className="relative bg-white rounded-2xl p-3.5 border-2 border-[#e6a817] flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0 20px 45px -10px rgba(0,0,0,0.85), 0 0 35px rgba(230,168,23,0.38), inset 0 2px 4px rgba(255,255,255,0.9)',
                transform: 'translateZ(30px)',
              }}
            >
              {/* Dynamic Specular Sheen Beam sweeping across the plaque */}
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] pointer-events-none z-30"
                animate={{
                  x: ['-120%', '240%'],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />

              {/* The User's MangoVans Brand Logo */}
              <img
                src={brandLogo}
                alt="MangoVans Brand Logo"
                className="h-20 w-auto object-contain block relative z-20 select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
              />
            </div>
          </motion.div>
        </div>

        {/* ── BRAND NAME & TYPOGRAPHY ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-black tracking-wider text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              MANGO<span className="text-[#e6a817]">VANS</span>
            </h1>
          </div>
          <p className="text-[11px] sm:text-[12px] font-extrabold tracking-[4px] text-amber-400/90 uppercase mt-1">
            FLORIDA CUSTOM BUILDERS
          </p>
        </motion.div>

        {/* ── 3D PROGRESS ENGINE CONTAINER ── */}
        <div className="w-[300px] sm:w-[360px] flex flex-col items-center gap-3">
          
          {/* Progress Bar with 3D Bevel and Neon Fill */}
          <div 
            className="w-full h-3 rounded-full bg-[#0a2318] p-[2px] border border-amber-400/30 relative overflow-hidden"
            style={{
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(230,168,23,0.15)',
            }}
          >
            {/* Active Progress Fill */}
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 relative"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 16px rgba(245, 200, 66, 0.9)',
              }}
              transition={{ ease: "easeOut" }}
            >
              {/* Shimmer light bar across fill */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing tip head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
            </motion.div>
          </div>

          {/* Telemetry and Real-Time Build Milestone */}
          <div className="w-full flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold tracking-wide text-[11px] truncate max-w-[280px]">
              {getStatusIcon()}
              <span className="tracking-wider uppercase truncate">
                {getStatusText()}
              </span>
            </div>

            {/* Percentage Display */}
            <div className="flex items-baseline gap-0.5 font-mono font-bold text-white pl-2">
              <span className="text-base text-amber-400">{progress}</span>
              <span className="text-[10px] text-white/60">%</span>
            </div>
          </div>

          {/* Expedition Badges */}
          <div className="flex items-center gap-3 pt-2 text-[10px] font-semibold text-slate-400 tracking-widest uppercase">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              MERCEDES
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              FORD TRANSIT
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              RAM PROMASTER
            </span>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
