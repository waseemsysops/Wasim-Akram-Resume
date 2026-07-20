/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data';

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none opacity-20 no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 max-w-xl">
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-indigo-500" />
            <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-semibold">VALIDATED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-sans">
            Rigorous technical assessments and global certifications representing expertise in networking, virtualization architectures, and public cloud deployment models.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert) => (
            <motion.div
              id={`cert-card-${cert.id}`}
              variants={itemVariants}
              key={cert.id}
              className="relative group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 hover:bg-zinc-900/75 transition-all duration-300 hover:border-zinc-700 overflow-hidden flex flex-col justify-between shadow-md"
            >
              <div className="space-y-4">
                {/* Certification Emblem */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center font-mono font-bold text-xs ${cert.logoColor || 'text-indigo-400'}`}>
                    <Award size={20} />
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                    <ShieldCheck size={11} className="text-indigo-400" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Name & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors text-base sm:text-lg leading-snug tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="font-sans text-xs text-indigo-400/90 font-medium tracking-wide">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Verified Badge / Footer */}
              <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle size={12} className="text-emerald-400" />
                  <span>Credential Active</span>
                </span>
                <span className="text-zinc-600">ID: MWA-{cert.id.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
