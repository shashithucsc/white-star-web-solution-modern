'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card rounded-2xl p-8 sm:p-12 lg:p-16 glow-border"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">WHITE STAR</span>
              </motion.h2>

              <motion.p
                className="text-slate-300 text-lg leading-relaxed font-sans"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                White Star Web Solutions is a technology and software solutions holding company that incubates and manages innovative businesses and products across digital marketing, SaaS, e-commerce, and wellness sectors.
              </motion.p>

              <motion.p
                className="text-slate-400 text-base leading-relaxed mt-4 font-sans"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We combine cutting-edge technology with strategic business insights to build solutions that transform industries and empower businesses worldwide.
              </motion.p>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative aspect-square">
                {/* Abstract tech illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Network className="w-48 h-48 text-blue-400/20 animate-float" />
                </div>
                
                {/* Glowing circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Tech grid lines */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
