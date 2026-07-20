/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Server, ShieldAlert, Cpu, Cloud, Settings, Layers, Workflow, Network } from 'lucide-react';
import { coreCompetencies } from '../data';

export default function Competencies() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const getIcon = (name: string) => {
    const lowercase = name.toLowerCase();
    if (lowercase.includes('cloud')) return <Cloud className="text-indigo-400" size={24} />;
    if (lowercase.includes('virtualization')) return <Layers className="text-violet-400" size={24} />;
    if (lowercase.includes('network design')) return <Network className="text-indigo-400" size={24} />;
    if (lowercase.includes('administration')) return <Cpu className="text-pink-400" size={24} />;
    if (lowercase.includes('automation') || lowercase.includes('devops')) return <Workflow className="text-violet-400" size={24} />;
    return <Server className="text-indigo-400" size={24} />;
  };

  return (
    <section id="competencies" className="py-24 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-left space-y-4 mb-16 max-w-xl">
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-indigo-500" />
            <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-semibold">SKILL SPECTRUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Core Competencies
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            A comprehensive overview of architectural frameworks, engineering methodologies, and technologies that I utilize to power resilient, highly available system networks.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {coreCompetencies.map((comp, idx) => {
            // Let's create an asymmetric layout pattern for the bento grid
            const gridSpans = [
              'lg:col-span-2', // item 0
              'lg:col-span-1', // item 1
              'lg:col-span-1', // item 2
              'lg:col-span-2', // item 3
              'lg:col-span-1', // item 4
              'lg:col-span-2', // item 5
            ];
            const spanClass = gridSpans[idx % gridSpans.length];

            return (
              <motion.div
                id={`competency-card-${idx}`}
                variants={cardVariants}
                key={idx}
                className={`relative group rounded-3xl border border-zinc-800 bg-zinc-900/45 p-6 sm:p-8 hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-700 overflow-hidden ${spanClass}`}
              >
                {/* Dynamic top hover gradient bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-400 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Frame */}
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-850 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors">
                  {getIcon(comp.name)}
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-sans font-bold text-zinc-100 mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {comp.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {comp.description}
                </p>

                {/* Stylized background grid line */}
                <div className="absolute right-0 bottom-0 w-16 h-16 pointer-events-none opacity-[0.02] text-white">
                  <Settings size={64} className="animate-[spin_40s_linear_infinite]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
