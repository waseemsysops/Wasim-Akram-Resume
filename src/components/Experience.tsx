/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<string>('exp1');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 ambient-glow-green rounded-full pointer-events-none opacity-40 no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 max-w-xl">
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-indigo-500" />
            <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-semibold">CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Over five years of hands-on technical experience spearheading systems administration, cloud networks, virtualization, and incident response operations.
          </p>
        </div>

        {/* Interactive Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Roles List (Left Sidebar) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="font-mono text-xs text-zinc-500 tracking-wider uppercase mb-3">SELECT ROLE TO EXPLORE</h3>
            <div className="space-y-3">
              {experienceData.map((exp) => {
                const isSelected = selectedRole === exp.id;
                return (
                  <button
                    id={`exp-role-btn-${exp.id}`}
                    key={exp.id}
                    onClick={() => setSelectedRole(exp.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all flex items-start space-x-4 cursor-pointer relative group ${
                      isSelected
                        ? 'bg-zinc-900 border-indigo-500/80 shadow-md shadow-indigo-500/5'
                        : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                    }`}
                  >
                    {/* Active vertical status line */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-indigo-400 rounded-r-sm" />
                    )}

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-indigo-500/15 text-indigo-400' : 'bg-zinc-950 text-zinc-500 group-hover:text-indigo-400'
                    }`}>
                      <Briefcase size={16} />
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <h4 className={`font-sans font-bold text-sm sm:text-base leading-tight tracking-tight transition-colors ${
                        isSelected ? 'text-indigo-400' : 'text-zinc-200 group-hover:text-zinc-100'
                      }`}>
                        {exp.role}
                      </h4>
                      <p className="font-sans text-xs text-zinc-400 font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-3 pt-1 text-[11px] font-mono text-zinc-500">
                        <span className="flex items-center space-x-1">
                          <Calendar size={10} />
                          <span>{exp.period.split(' – ')[0]}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={10} />
                          <span className="truncate">{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Role Details Panel (Right Main Card) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {experienceData.map((exp) => {
                if (exp.id !== selectedRole) return null;
                return (
                  <motion.div
                    id={`exp-details-panel-${exp.id}`}
                    key={exp.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden"
                  >
                    {/* Top status header */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500" />

                    <div className="space-y-6">
                      
                      {/* Header details */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-zinc-800 gap-4">
                        <div>
                          <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <p className="font-sans font-semibold text-indigo-400 text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-zinc-400">
                          <div className="flex items-center space-x-1.5 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                            <Calendar size={12} className="text-indigo-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 w-fit sm:self-end">
                            <MapPin size={12} className="text-purple-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-4">
                        <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">CORE CONTRIBUTION LOG</h4>
                        <ul className="space-y-4">
                          {exp.highlights.map((bullet, index) => (
                            <li key={index} className="flex items-start space-x-3.5 group">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                              <span className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed group-hover:text-zinc-100 transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
