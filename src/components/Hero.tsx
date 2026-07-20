/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Server, Shield, Cloud, Cpu, Network } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onScrollToContact: () => void;
  onPrintPreview: () => void;
}

export default function Hero({ onScrollToContact, onPrintPreview }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const floatingBadges = [
    { icon: <Cloud className="text-indigo-400" size={18} />, text: 'Cloud Infrastructure' },
    { icon: <Server className="text-violet-400" size={18} />, text: 'Virtualization (VMware)' },
    { icon: <Shield className="text-pink-400" size={18} />, text: 'Security Hardening' },
    { icon: <Network className="text-indigo-400" size={18} />, text: 'Network Routing (CCNA)' },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none no-print" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 ambient-glow-green rounded-full pointer-events-none no-print" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Lead Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                Available for New Opportunities
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white leading-tight"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-500">{personalInfo.name}</span>
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold tracking-tight text-zinc-400"
              >
                {personalInfo.title}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Key Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-zinc-900 max-w-md"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400">5+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400">06+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Industry Certs</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Infrastructure IaC</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                id="btn-hero-contact"
                onClick={onScrollToContact}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs transition-all active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </button>

              <button
                id="btn-hero-print"
                onClick={onPrintPreview}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.98]"
              >
                <FileText size={14} className="text-indigo-400" />
                <span>Printable Resume</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Graphic / Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto"
          >
            {/* Main Visual Profile Frame */}
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm overflow-hidden shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px] flex items-center justify-center">
                    <div className="w-full h-full rounded-xl bg-zinc-950 flex items-center justify-center text-indigo-400">
                      <Cpu size={22} className="animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-zinc-100 text-base">{personalInfo.name}</h3>
                    <p className="font-mono text-xs text-zinc-500">System Engineer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] text-zinc-400">ACTIVE</span>
                </div>
              </div>

              {/* Competency Tags List inside Card */}
              <div className="py-6 space-y-4">
                <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">VETTING SPECS</h4>
                <div className="space-y-3">
                  {floatingBadges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 rounded-2xl bg-zinc-950/60 border border-zinc-850 hover:border-zinc-700 transition-all"
                    >
                      <div className="flex-shrink-0">{badge.icon}</div>
                      <span className="font-sans text-sm text-zinc-300 font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-[11px] font-mono text-zinc-500">
                <span>LOC: Lahore, PK</span>
                <span>UTC+5:00</span>
              </div>
            </div>

            {/* Background design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
