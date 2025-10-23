'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Rocket, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We combine innovation, technology, and business acumen to launch and grow market-leading products.',
  },
  {
    icon: Rocket,
    title: 'Proven Expertise',
    description: 'Expertise in AI, SaaS, e-commerce, digital marketing, and wellness solutions.',
  },
  {
    icon: Target,
    title: 'Market-Driven',
    description: 'Strategic approach backed by market research and data-driven insights.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Agile development and deployment to bring ideas to market faster.',
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">WHITE STAR</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            We deliver excellence through innovation and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card rounded-2xl p-8 flex gap-6 items-start glow-border group cursor-pointer"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 card rounded-2xl p-8 lg:p-12 text-center glow-border"
        >
          <p className="text-2xl lg:text-3xl font-semibold text-white leading-relaxed font-heading">
            Empowering businesses with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              cutting-edge technology
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              strategic innovation
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
