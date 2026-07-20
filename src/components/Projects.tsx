/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, ArrowUpRight, Cpu, Layers, HardDrive, Filter, Activity, GitFork, Server } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);

  const categories = ['All', 'Cloud', 'DevOps', 'Network', 'Automation'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-y border-zinc-900 relative">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 ambient-glow-cyan rounded-full pointer-events-none opacity-20 no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4 max-w-xl">
            <div className="flex items-center space-x-2">
              <span className="h-0.5 w-8 bg-indigo-500" />
              <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-semibold">ENGINEERING PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              Project Gallery & Architecture
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed font-sans">
              A curated collection of infrastructure setups, automated workflows, and hardened corporate configurations built and documented to absolute industry standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-800 w-fit">
            {categories.map((cat) => (
              <button
                id={`project-tab-${cat}`}
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  // Auto-select first in category if available
                  const found = projectsData.find(p => cat === 'All' || p.category === cat);
                  if (found) setSelectedProject(found);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-indigo-500 text-zinc-950 font-bold shadow-md shadow-indigo-500/10'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Breakdown Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Projects Mini-Grid / Cards Selector (Left Side) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">PROJECT CATALOGUE</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => {
                  const isSelected = selectedProject.id === proj.id;
                  return (
                    <motion.div
                      id={`project-selector-${proj.id}`}
                      layout
                      variants={itemVariants}
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                        isSelected
                          ? 'bg-zinc-900 border-indigo-500 shadow-lg shadow-indigo-500/5'
                          : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                      }`}
                    >
                      {/* Interactive edge overlay */}
                      <div className={`absolute top-0 bottom-0 left-0 w-1 transition-colors ${
                        isSelected ? 'bg-indigo-400' : 'bg-transparent group-hover:bg-zinc-800'
                      }`} />

                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                            {proj.category}
                          </span>
                          <h4 className={`text-base sm:text-lg font-sans font-bold leading-tight tracking-tight transition-colors ${
                            isSelected ? 'text-indigo-300' : 'text-zinc-200 group-hover:text-zinc-100'
                          }`}>
                            {proj.title}
                          </h4>
                          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 text-zinc-400 group-hover:text-indigo-400 flex-shrink-0 transition-colors">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Expanded Project Details Panel (Right Side) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                id={`project-details-card-${selectedProject.id}`}
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-8 relative overflow-hidden"
              >
                {/* Visual Top Highlight Accent */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                {/* Header details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {selectedProject.category} ENVIRONMENT
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Sub-section: Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4 p-4.5 rounded-2xl bg-zinc-950/60 border border-zinc-850/85">
                    {selectedProject.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-lg sm:text-xl font-mono font-bold text-emerald-400">{metric.value}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1.5 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase flex items-center space-x-1.5">
                    <Cpu size={12} className="text-indigo-400" />
                    <span>PROVISIONED INFRASTRUCTURE TOOLS</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-xs text-indigo-300 bg-indigo-500/5 border border-indigo-500/20 px-3 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Overview */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase flex items-center space-x-1.5">
                    <HardDrive size={12} className="text-indigo-400" />
                    <span>SYSTEM WORKFLOW SUMMARY</span>
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Architecture Pipeline Flow */}
                {selectedProject.architecture && (
                  <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                    <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase flex items-center space-x-1.5">
                      <GitFork size={12} className="text-indigo-400" />
                      <span>ARCHITECTURE ROUTING FLOW</span>
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.architecture.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-3 text-sm">
                          <div className="w-6 h-6 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center font-mono text-xs text-indigo-400 font-bold flex-shrink-0">
                            {sIdx + 1}
                          </div>
                          <span className="text-zinc-300 font-sans leading-normal">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
