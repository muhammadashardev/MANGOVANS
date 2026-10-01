import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Play, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Wrench,
  Sun,
  Zap,
  Compass,
  Star,
  Flame,
  BatteryCharging,
  Maximize2
} from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import brandLogo from '../assets/mangovans-brand-logo.png';

export default function Herosection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ADVENTURE VANS');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [quoteStep, setQuoteStep] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [quoteData, setQuoteData] = useState({
    chassis: 'Mercedes Sprinter',
    powerSystem: '600Ah Off-Grid Lithium',
    budget: '$65k - $90k',
    name: '',
    phone: '',
    email: ''
  });

  // Track scroll position for dynamic sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'ADVENTURE VANS',
    'COMMERCIAL VANS',
    'PROJECTS & UPGRADES',
    'OUR WORK',
    'REVIEWS',
    'CONTACT'
  ];

  // Van interactive inspection tags corresponding to the sunset photo
  const vanHotspots = [
    {
      id: 'roof',
      title: 'Solar & Roof Expedition Gear',
      desc: '800W+ Monocrystalline solar array, low-profile aluminum rack & 360° high-output LED perimeter lights.',
      pos: 'top-[22%] right-[16%] sm:right-[18%]',
      icon: Sun
    },
    {
      id: 'interior',
      title: 'Artisan Warm Interior Galley',
      desc: 'Marine-grade walnut cabinetry, ambient dimmable LED lighting, induction stove & deep undermount sink.',
      pos: 'top-[54%] right-[28%] sm:right-[26%]',
      icon: Flame
    },
    {
      id: 'offroad',
      title: 'Mercedes 4x4 Off-Road Package',
      desc: 'Heavy-duty suspension lift, Black Rhino wheels, all-terrain KO2 tires & steel winch bumper.',
      pos: 'bottom-[22%] right-[12%] sm:right-[14%]',
      icon: Compass
    }
  ];

  return (
    <div className="relative font-['Plus_Jakarta_Sans',sans-serif] text-slate-100 bg-[#090D16] overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* ============================================================ */}
      {/* HEADER — Transparent → Solid on Scroll                       */}
      {/* ============================================================ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease, box-shadow 0.4s ease',
          background: isScrolled
            ? 'rgba(8, 26, 18, 0.97)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(230, 168, 23, 0.15)' : 'none',
          boxShadow: isScrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isScrolled ? '68px' : '80px', transition: 'height 0.4s ease' }}>

            {/* ── LOGO ── */}
            <motion.a 
              href="#home" 
              whileHover={{ scale: 1.04, boxShadow: '0 6px 20px rgba(230,168,23,0.35)' }} 
              whileTap={{ scale: 0.98 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                flexShrink: 0,
                background: '#ffffff',
                padding: '4px 12px',
                borderRadius: '12px',
                border: '2px solid #e6a817',
                boxShadow: '0 4px 15px rgba(0,0,0,0.25), 0 0 10px rgba(230,168,23,0.2)',
                transition: 'all 0.25s ease'
              }}
            >
              <img
                src={brandLogo}
                alt="MangoVans Logo"
                style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </motion.a>

            {/* ── DESKTOP NAV LINKS (only on lg+ screens) ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: 'Home',           href: '#home' },
                { label: 'Adventure Vans', href: '#adventure-vans' },
                { label: 'Commercial',     href: '#commercial' },
                { label: 'Our Work',       href: '#our-work' },
                { label: 'Reviews',        href: '#reviews' },
                { label: 'Contact',        href: '#contact' },
              ].map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -2, color: '#e6a817' }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.3px',
                    textDecoration: 'none',
                    padding: '8px 13px',
                    borderRadius: '8px',
                    transition: 'background 0.2s, color 0.2s',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,168,23,0.09)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* ── RIGHT CTAs (desktop: phone + quote right | mobile: hidden, shown in drawer) ── */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Phone */}
              <motion.a
                href="tel:9412207943"
                whileHover={{ scale: 1.04, y: -1, borderColor: 'rgba(230,168,23,0.5)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  fontSize: '13px', fontWeight: '600', fontFamily: "'Outfit', sans-serif",
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: '#e6a817' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.2 6.2l1.77-1.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                </svg>
                (941) 220-7943
              </motion.a>

              {/* Get A Quote */}
              <motion.button
                onClick={() => setShowQuoteModal(true)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: '0 6px 28px rgba(230,168,23,0.55)',
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  background: 'linear-gradient(135deg, #e6a817, #f5c842)',
                  color: '#0a1f15',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  fontFamily: "'Outfit', sans-serif",
                  boxShadow: '0 4px 20px rgba(230,168,23,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                Get A Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '13px', height: '13px' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </div>

            {/* ── HAMBURGER: visible only on mobile/tablet (hidden on lg+) ── */}
            <motion.button
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="lg:hidden flex items-center justify-center p-2.5 rounded-xl bg-white/10 border border-amber-400/30 text-amber-400 cursor-pointer shadow-md"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-5 h-5" />
            </motion.button>

          </div>
        </div>
      </motion.header>

      {/* ============================================================ */}
      {/* OFFCANVAS (OFFSET) HEADER DRAWER FOR MOBILE & TABLET         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-over Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#07170f] border-l border-amber-400/25 shadow-[-15px_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto p-6 font-['Outfit',sans-serif]"
            >
              {/* Drawer Top Bar & Navigation */}
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <a 
                    href="#home" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center bg-white px-3 py-1.5 rounded-xl border-2 border-[#e6a817] shadow-[0_4px_15px_rgba(0,0,0,0.25),0_0_10px_rgba(230,168,23,0.2)]"
                  >
                    <img 
                      src={brandLogo} 
                      alt="MangoVans" 
                      className="h-10 w-auto object-contain block" 
                    />
                  </a>

                  {/* Close button */}
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                    aria-label="Close Navigation Drawer"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Section title */}
                <div className="mt-6 mb-3 px-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-amber-400/80">
                    Menu & Navigation
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1.5">
                  {[
                    { label: 'Home',              href: '#home' },
                    { label: 'Adventure Vans',    href: '#adventure-vans' },
                    { label: 'Commercial Vans',   href: '#commercial' },
                    { label: 'Projects & Upgrades', href: '#our-story' },
                    { label: 'Our Work',           href: '#our-work' },
                    { label: 'Customer Reviews',   href: '#reviews' },
                    { label: 'Contact Us',         href: '#contact' },
                  ].map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.25 }}
                      whileHover={{ x: 6, backgroundColor: 'rgba(230,168,23,0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-200 hover:text-amber-400 font-semibold text-[15px] transition-colors border border-transparent hover:border-amber-400/20"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-amber-400/60" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions & Trust */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                {/* Phone Call */}
                <motion.a
                  href="tel:9412207943"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4" /> (941) 220-7943
                </motion.a>

                {/* Free Quote Button */}
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowQuoteModal(true);
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(230,168,23,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#e6a817] via-[#f5c842] to-[#d99009] text-[#0a1f15] font-black text-sm shadow-[0_4px_20px_rgba(230,168,23,0.35)] cursor-pointer"
                >
                  Get A Free Quote <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Trust info */}
                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-300 flex items-center justify-center gap-1 font-medium">
                    <span className="text-amber-400">★ ★ ★ ★ ★</span>
                    <span className="font-bold text-white">5.0 Star</span> Rated Builder
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Tampa Bay, Florida • Statewide Delivery
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------------------- */}
      {/* 2. HERO SECTION WITH USER'S SUNSET VAN BACKGROUND */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 flex items-center overflow-hidden">
        
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Mango Vans Luxury Mercedes Sprinter 4x4 Camper Van at Mountain Lake Sunset"
            className="w-full h-full object-cover object-right md:object-center transform scale-100"
          />
          
          {/* CINEMATIC OVERLAYS FOR READABILITY AND SUNSET VIBE */}
          {/* Left Dark Slate Vignette for Typography Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/85 sm:via-[#090D16]/75 to-transparent w-full md:w-3/4 lg:w-3/5 z-10" />
          
          {/* Subtle Mobile Dark Shade */}
          <div className="absolute inset-0 bg-[#090D16]/40 md:hidden z-10" />

          {/* Top header fade */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/40 to-transparent z-10" />
          
          {/* Bottom transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#090D16] to-transparent z-10" />

          {/* Subtle warm sunset atmospheric flare */}
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-amber-500/20 blur-3xl pointer-events-none mix-blend-screen" />
        </div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HERO HEADLINE, BADGES & CTAS */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1
                  }
                }
              }}
              className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8 text-left max-w-2xl"
            >
              
              {/* TOP PILL BADGE */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: -16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ scale: 1.03, borderColor: "rgba(245, 158, 11, 0.7)" }}
                className="inline-flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/40 shadow-lg shadow-black/40 cursor-default"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-amber-300">
                  FLORIDA'S PREMIER CUSTOM VAN CONVERSIONS
                </span>
              </motion.div>

              {/* MAIN HERO HEADLINE */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
                  Handcrafted for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 drop-shadow-sm">
                    Uncharted
                  </span>{' '}
                  Journeys
                </h1>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl pt-2">
                  We turn Mercedes Sprinter, Ford Transit & RAM Promaster chassis into luxury off-grid camper homes engineered for rugged wild exploration and full-time living.
                </p>
              </motion.div>

              {/* CTA ACTIONS */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                {/* Primary CTA Button */}
                <motion.button
                  onClick={() => setShowQuoteModal(true)}
                  whileHover={{ 
                    scale: 1.04, 
                    y: -3, 
                    boxShadow: "0 20px 42px -10px rgba(245, 158, 11, 0.65)",
                    transition: { type: "spring", stiffness: 400, damping: 15 } 
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/35 cursor-pointer border border-amber-300/60 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Build Your Custom Van
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Secondary Video Tour CTA */}
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  whileHover={{ 
                    scale: 1.04, 
                    y: -3, 
                    borderColor: 'rgba(245, 158, 11, 0.8)',
                    boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.6)',
                    transition: { type: "spring", stiffness: 400, damping: 15 } 
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-slate-900/70 hover:bg-slate-800/90 backdrop-blur-md text-white font-extrabold text-base shadow-lg border border-slate-700/80 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-300 transition-all">
                    <Play className="w-4 h-4 fill-slate-950 translate-x-0.5" />
                  </div>
                  <span>Watch Van Tour</span>
                </motion.button>
              </motion.div>

              {/* THREE QUICK TRUST FEATURES WITH MOTION HOVER */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.5, staggerChildren: 0.1 } 
                  }
                }}
                className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                <motion.div 
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(230, 168, 23, 0.5)', 
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    transition: { type: "spring", stiffness: 350, damping: 20 }
                  }}
                  className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-3 rounded-2xl border border-slate-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">800W+ Off-Grid</div>
                    <div className="text-[10px] text-slate-400 font-semibold">Victron Lithium Power</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(230, 168, 23, 0.5)', 
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    transition: { type: "spring", stiffness: 350, damping: 20 }
                  }}
                  className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-3 rounded-2xl border border-slate-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">100% Bespoke</div>
                    <div className="text-[10px] text-slate-400 font-semibold">Handmade Cabinetry</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(230, 168, 23, 0.5)', 
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    transition: { type: "spring", stiffness: 350, damping: 20 }
                  }}
                  className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-3 rounded-2xl border border-slate-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">3-Year / 36k Mi</div>
                    <div className="text-[10px] text-slate-400 font-semibold">Florida Workshop Warranty</div>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* RIGHT COLUMN: INTERACTIVE SUNSET PHOTO HIGHLIGHT OVERLAYS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-end items-end min-h-[300px] lg:min-h-[460px]"
            >
              
             
             
            </motion.div>

          </div>
        </div>

        {/* BOTTOM PILLARS BAR (Adventure Vans, Commercial Vans, Mercedes • Ford • RAM) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-slate-950/70 backdrop-blur-xl py-4 px-4 hidden md:block"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 text-left">
            
            {/* Item 1: Adventure Vans */}
            <motion.div 
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              className="flex items-center gap-3.5 border-r border-white/10 pr-6 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl border border-amber-400/80 flex items-center justify-center text-amber-400 shrink-0 bg-slate-900/60 shadow-inner">
                <Compass className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Adventure Vans</div>
                <div className="text-xs text-slate-300 font-medium">Built for the wild.</div>
              </div>
            </motion.div>

            {/* Item 2: Commercial Vans */}
            <motion.div 
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              className="flex items-center gap-3.5 border-r border-white/10 pr-6 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl border border-amber-400/80 flex items-center justify-center text-amber-400 shrink-0 bg-slate-900/60 shadow-inner">
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Commercial Vans</div>
                <div className="text-xs text-slate-300 font-medium">Built for business.</div>
              </div>
            </motion.div>

            {/* Item 3: Mercedes • Ford • RAM */}
            <motion.div 
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              className="flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full border border-amber-400/80 flex items-center justify-center text-amber-400 shrink-0 bg-slate-900/60 shadow-inner">
                <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8 0 1.83-.62 3.52-1.66 4.88l-6.34-6.34V4.08c0-.03 0-.05 0-.08zm-1 0v6.46l-6.34 6.34C3.62 15.52 3 13.83 3 12c0-4.41 3.59-8 8-8zm-7.07 14.24l6.41-6.41 6.41 6.41C15.39 19.34 13.77 20 12 20s-3.39-.66-4.66-1.76z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Mercedes • Ford • RAM</div>
                <div className="text-xs text-slate-300 font-medium">Your van. Our expertise.</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* 3. MULTI-STEP VAN CUSTOMIZER MODAL WITH FRAMER MOTION                  */}
      {/* ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-xl bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-500/30 text-white"
            >
              
              {/* Close Button */}
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(51, 65, 85, 1)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowQuoteModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Modal Title */}
              <div className="mb-6 text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase mb-2 border border-amber-400/30">
                  Step {quoteStep} of 3
                </span>
                <h3 className="text-2xl font-black text-white">Build Your Dream Van</h3>
                <p className="text-sm text-slate-400 mt-1">Get an instant quote estimate from our Florida master workshop.</p>
              </div>

              {/* STEP 1: CHASSIS SELECTION */}
              {quoteStep === 1 && (
                <div className="space-y-4 text-left">
                  <label className="block text-sm font-bold text-slate-300">Select Base Vehicle Platform:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Mercedes Sprinter', tag: '144" / 170" Wheelbase' },
                      { name: 'Ford Transit', tag: 'High Roof AWD Platform' },
                      { name: 'RAM Promaster', tag: 'Wide Interior Living' }
                    ].map((v) => (
                      <motion.button
                        key={v.name}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setQuoteData({ ...quoteData, chassis: v.name })}
                        className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                          quoteData.chassis.includes(v.name)
                            ? 'border-amber-400 bg-amber-400/15 text-white shadow-md shadow-amber-500/20'
                            : 'border-slate-800 bg-slate-800/50 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="text-amber-400 mb-2">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div className="font-extrabold text-sm text-white">{v.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{v.tag}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: POWER & BUDGET */}
              {quoteStep === 2 && (
                <div className="space-y-4 text-left">
                  <label className="block text-sm font-bold text-slate-300">Off-Grid Power System:</label>
                  <select 
                    value={quoteData.powerSystem}
                    onChange={(e) => setQuoteData({ ...quoteData, powerSystem: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-slate-700 bg-slate-800 font-semibold text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="400Ah Lithium Off-Grid">400Ah Lithium + 400W Solar (Weekender)</option>
                    <option value="600Ah Off-Grid Lithium">600Ah Lithium + 800W Solar + AC (Full-Time Off-Grid)</option>
                    <option value="1000Ah Ultra Off-Grid">1000Ah Heavy Duty + Dual Alternator (Extreme Expeditions)</option>
                  </select>

                  <label className="block text-sm font-bold text-slate-300 pt-2">Target Budget Range:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['$45k - $65k', '$65k - $90k', '$90k - $130k', '$130k+ Master'].map((b) => (
                      <motion.button
                        key={b}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setQuoteData({ ...quoteData, budget: b })}
                        className={`p-3 rounded-xl border text-center font-extrabold text-xs transition-all cursor-pointer ${
                          quoteData.budget === b 
                            ? 'border-amber-400 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-md' 
                            : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {b}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT FORM */}
              {quoteStep === 3 && (
                <div className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={quoteData.name}
                      onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      value={quoteData.phone}
                      onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                      placeholder="(786) 977-2203"
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={quoteData.email}
                      onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Modal Navigation */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                {quoteStep > 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuoteStep(quoteStep - 1)}
                    className="px-5 py-2.5 rounded-full border border-slate-700 font-bold text-xs text-slate-300 hover:bg-slate-800 cursor-pointer"
                  >
                    Back
                  </motion.button>
                ) : <div />}

                {quoteStep < 3 ? (
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(245, 158, 11, 0.4)" }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setQuoteStep(quoteStep + 1)}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    Continue <ChevronRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(245, 158, 11, 0.55)" }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      alert('Thank you! A Mango Vans specialist will contact you shortly.');
                      setShowQuoteModal(false);
                      setQuoteStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    Request Detailed Estimate <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  </motion.button>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------------------- */}
      {/* 4. VIDEO SHOWCASE MODAL WITH FRAMER MOTION                            */}
      {/* ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/40"
            >
              
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Mango Vans Florida - Custom Craftsmanship Showcase</span>
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

              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&controls=1"
                  title="Mango Vans Camper Build Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}