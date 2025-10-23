'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-navy-medium/50">
      <div className="max-w-7xl mx-auto">
        <div className="card rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Company info */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                White Star Web Solutions
              </h3>
              <p className="text-slate-400 text-sm font-sans">
                Building Digital Futures, One Solution at a Time
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4 text-white">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@whitestarwebsolutions.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@whitestarwebsolutions.com</span>
                </a>
                <a
                  href="tel:+94778385938"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+94 778385938</span>
                </a>
                <a
                  href="tel:+946273901"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+94 6273901</span>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-700/50">
            <p className="text-center text-slate-400 text-sm font-sans">
              © 2025 White Star Web Solutions (Pvt) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
