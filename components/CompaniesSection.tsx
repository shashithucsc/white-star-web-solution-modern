'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const companies = [
  {
    name: 'Artslab Creatives',
    description: 'Full-service digital marketing and technology agency delivering creative and data-driven solutions to scale brands.',
    logo: '/logos/artslab.png',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    name: 'Legistant',
    description: 'AI-powered case management software for lawyers to streamline legal workflows and enhance client experiences.',
    logo: '/logos/legistant.png',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Aumerix',
    description: 'HR and work management platform simplifying attendance, payroll, and productivity.',
    logo: '/logos/aumerix.png',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    name: 'FlowCart',
    description: 'WordPress to Shopify migration plugin preserving SEO and design.',
    logo: '/logos/flow_cart.png',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    name: 'Nyvara',
    description: 'Wellness and mindfulness app for personal growth and productivity.',
    logo: '/logos/nyvara.png',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Influencer Showcase',
    description: 'Shopify plugin integrating influencer UGC to boost conversions.',
    logo: '/logos/influencer_showcase.png',
    gradient: 'from-violet-500 to-indigo-600',
  },
];

export default function CompaniesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            A diverse ecosystem of innovative companies transforming industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companies.map((company, index) => {
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card rounded-2xl p-6 lg:p-8 glow-border group cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                {/* Logo container with clean styling */}
                <div className="relative w-20 h-20 mb-6 mx-auto">
                  {/* Logo image with clean background */}
                  <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain max-w-[48px] max-h-[48px] filter brightness-125 contrast-125 group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                </div>

                <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 text-center">
                  {company.name}
                </h3>

                <p className="text-slate-300 leading-relaxed font-sans text-center">
                  {company.description}
                </p>

                {/* Enhanced hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
