import React, { useState } from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/mangovans-brand-logo.png";
import adventureAwaitsImg from "../assets/adventure-awaits.png";
import vanMountainImg from "../assets/footer-van-mountain.png";
import { Phone, Mail, MapPin, Globe, ChevronRight, Send } from "lucide-react";

const quickLinks = [
  { label: "Home",         href: "#home" },
  { label: "Adventure Vans", href: "#adventure-vans" },
  { label: "Commercial Vans", href: "#commercial" },
  { label: "Our Work",     href: "#our-work" },
  { label: "Reviews",      href: "#reviews" },
  { label: "Contact Us",   href: "#contact" },
];
const services = [
  { label: "Custom Van Conversions",  href: "#commercial" },
  { label: "Adventure Van Builds",    href: "#adventure-vans" },
  { label: "Commercial Van Builds",   href: "#commercial" },
  { label: "Van Upgrades",            href: "#our-work" },
  { label: "Consultation",            href: "#contact" },
  { label: "Aftercare & Support",     href: "#contact" },
];

const contactItems = [
  { icon: Phone,  label: "(941) 220-7943",       sub: "Mon - Fri: 9AM - 6PM EST" },
  { icon: Mail,   label: "hello@mangovans.com",   sub: "We reply within 24 hours" },
  { icon: MapPin, label: "Sarasota, Florida",     sub: "Serving all of Florida" },
  { icon: Globe,  label: "www.mangovans.com",     sub: "Visit our website" },
];

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"15px",height:"15px"}}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");

  const sectionTitle = (text) => (
    <h4 style={{ color: "#ffffff", fontSize: "12px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px", marginTop: 0 }}>
      {text}
      <div style={{ width: "28px", height: "2px", background: "#e6a817", marginTop: "10px", borderRadius: "2px" }} />
    </h4>
  );

  return (
    <footer style={{ background: "#0a1f15", fontFamily: "'Outfit', sans-serif" }}>

      {/* MAIN BODY */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 32px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1.2fr 1.2fr 1.2fr", gap: "40px", alignItems: "start" }}>

          {/* COL 1 – Brand */}
          <div>
            <motion.div 
              whileHover={{ scale: 1.04, boxShadow: '0 6px 20px rgba(230,168,23,0.35)' }}
              style={{ 
                marginBottom: "20px", 
                display: "inline-flex",
                alignItems: "center",
                background: "#ffffff",
                padding: "5px 14px",
                borderRadius: "12px",
                border: "2px solid #e6a817",
                boxShadow: "0 4px 15px rgba(0,0,0,0.25), 0 0 10px rgba(230,168,23,0.2)",
                transition: "all 0.25s ease"
              }}
            >
              <img src={logoImg} alt="MangoVans" style={{ height: "46px", width: "auto", objectFit: "contain", display: "block" }} />
            </motion.div>
            <p style={{ color: "#8aab96", fontSize: "13.5px", lineHeight: "1.7", marginBottom: "20px", maxWidth: "230px" }}>
              Florida's premier custom van builders specializing in adventure and commercial van conversions for Mercedes Sprinter, Ford Transit, and RAM Promaster vehicles.
            </p>
            <div style={{ width: "44px", height: "2px", background: "#e6a817", marginBottom: "22px", borderRadius: "2px" }} />
            {[
              { emoji: "🏔", title: "Adventure Vans",       sub: "Built for the wild." },
              { emoji: "🚐", title: "Commercial Vans",      sub: "Built for business." },
              { emoji: "⚙️", title: "Mercedes • Ford • RAM", sub: "Your van. Our expertise." },
            ].map(item => (
              <motion.div 
                key={item.title} 
                whileHover={{ x: 4 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px", cursor: "default" }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid #2a4a38", background: "#0d2a1c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "14px" }}>{item.emoji}</div>
                <div>
                  <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600" }}>{item.title}</div>
                  <div style={{ color: "#6a9479", fontSize: "12px" }}>{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COL 2 – Quick Links */}
          <div>
            {sectionTitle("Quick Links")}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label} style={{ marginBottom: "12px" }}>
                  <motion.a 
                    href={href} 
                    whileHover={{ x: 5, color: "#e6a817" }}
                    whileTap={{ scale: 0.98 }}
                    style={{ color: "#8aab96", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
                  >
                    <ChevronRight size={13} color="#e6a817" />{label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 – Services */}
          <div>
            {sectionTitle("Our Services")}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map(({ label, href }) => (
                <li key={label} style={{ marginBottom: "12px" }}>
                  <motion.a 
                    href={href} 
                    whileHover={{ x: 5, color: "#e6a817" }}
                    whileTap={{ scale: 0.98 }}
                    style={{ color: "#8aab96", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
                  >
                    <ChevronRight size={13} color="#e6a817" />{label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 – Contact */}
          <div>
            {sectionTitle("Get In Touch")}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {contactItems.map(({ icon: Icon, label, sub }) => (
                <motion.div 
                  key={label} 
                  whileHover={{ x: 4 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "default" }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#e6a817", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  >
                    <Icon size={15} color="#0a1f15" />
                  </motion.div>
                  <div>
                    <div style={{ color: "#ffffff", fontSize: "13.5px", fontWeight: "600" }}>{label}</div>
                    <div style={{ color: "#6a9479", fontSize: "12px" }}>{sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COL 5 – Newsletter + Van */}
          <div>
            {sectionTitle("Stay In The Loop")}
            <p style={{ color: "#8aab96", fontSize: "13.5px", lineHeight: "1.6", marginBottom: "20px" }}>
              Get updates on new builds, van life tips, and exclusive offers.
            </p>
            <div style={{ display: "flex", marginBottom: "28px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: 1, padding: "11px 14px", background: "#0d2a1c", border: "1px solid #2a4a38", borderRight: "none", borderRadius: "6px 0 0 6px", color: "#ffffff", fontSize: "13px", outline: "none", fontFamily: "'Outfit', sans-serif" }}
              />
              <motion.button 
                whileHover={{ scale: 1.06, backgroundColor: "#d49610" }}
                whileTap={{ scale: 0.94 }}
                style={{ background: "#e6a817", border: "none", borderRadius: "0 6px 6px 0", width: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <Send size={16} color="#0a1f15" />
              </motion.button>
            </div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              style={{ borderRadius: "8px", overflow: "hidden", opacity: 0.8 }}
            >
              <img src={vanMountainImg} alt="Van in mountains" style={{ width: "100%", display: "block" }} />
            </motion.div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div style={{ borderTop: "1px solid #1e3d2b" }} />

      {/* BOTTOM BAR */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ color: "#4d7a5e", fontSize: "13px", margin: 0 }}>© 2024 Mango Vans. All rights reserved.</p>
          <motion.img 
            whileHover={{ scale: 1.06, rotate: 1 }}
            src={adventureAwaitsImg} 
            alt="Adventure Awaits" 
            style={{ height: "38px", objectFit: "contain", cursor: "pointer" }} 
          />
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "Instagram", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:"15px",height:"15px"}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
              { label: "Facebook", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"15px",height:"15px"}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { label: "YouTube", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"15px",height:"15px"}}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg> },
              { label: "Pinterest", svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{width:"15px",height:"15px"}}><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
            ].map(({ svg, label }) => (
              <motion.a 
                key={label} 
                href="#" 
                aria-label={label} 
                whileHover={{ scale: 1.15, y: -2, borderColor: "#e6a817", color: "#e6a817", backgroundColor: "#143d28" }}
                whileTap={{ scale: 0.92 }}
                style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid #2a4a38", background: "#0d2a1c", display: "flex", alignItems: "center", justifyContent: "center", color: "#8aab96", textDecoration: "none", transition: "all 0.2s" }}
              >
                {svg}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}


