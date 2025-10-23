'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Grid3x3 } from 'lucide-react';

function useScrolled(threshold: number = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}

export default function Header() {
  const scrolled = useScrolled(10);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 border-b border-blue-500/20" : "bg-slate-950/90"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
      }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="flex items-center gap-3" aria-label="White Star Web Solutions">
          <div className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
            <Image 
              src="/WSWB_logo.png" 
              alt="White Star Web Solutions logo" 
              fill 
              sizes="(max-width: 768px) 48px, 56px" 
              className="object-contain drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]" 
              priority 
              unoptimized 
            />
          </div>
          <div className="select-none leading-tight">
            <div className="text-base font-bold tracking-tight text-white md:text-lg font-heading">
              WHITE STAR
            </div>
            <div className="text-xs font-medium tracking-[0.15em] text-slate-400 md:text-[13px] font-sans">
              WEB SOLUTIONS
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {[
            { 
              href: "about", 
              label: "ABOUT"
            },
            { 
              href: "companies", 
              label: "COMPANIES"
            },
            { 
              href: "cta", 
              label: "CONTACT"
            },
          ].map((item) => {
            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="group relative py-2.5 text-[15px] font-medium text-slate-300 transition-all duration-300 hover:text-blue-400"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            );
          })}

          {/* CTA Button */}
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('cta');
            }}
            className="ml-4 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(30,41,59,0.4)] hover:from-slate-700 hover:to-slate-600"
          >
            GET STARTED
          </a>
        </nav>

        {/* Mobile menu button - placeholder for future implementation */}
           <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-600/30 text-slate-300 hover:bg-slate-700/80 hover:border-slate-500/40 transition-colors duration-300"
            aria-label="Menu"
          >
          <Grid3x3 className="h-5 w-5" />
        </button>
      </div>

      {/* Thin blue glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </motion.header>
  );
}
