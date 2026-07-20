/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, Printer, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onPrintPreview: () => void;
}

export default function Header({ activeSection, setActiveSection, onPrintPreview }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'Summary' },
    { id: 'competencies', label: 'Competencies' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Terminal Brand */}
            <div 
              onClick={() => handleNavClick('about')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-black text-sm transition-transform group-hover:scale-105">
                WA
              </div>
              <div>
                <span className="font-mono text-xs text-zinc-500 block tracking-widest leading-none">ROOT@MWA:~$</span>
                <span className="font-sans font-bold text-zinc-100 block tracking-tight group-hover:text-indigo-400 transition-colors">
                  WASIM AKRAM
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    id={`nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-colors ${
                      isActive ? 'text-indigo-400' : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-indigo-550/5 border-b-2 border-indigo-500 rounded-b-sm -bottom-1"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons (Print CV & Socials) */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                id="btn-print-cv"
                onClick={onPrintPreview}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Printer size={13} />
                <span>Print Resume</span>
              </button>

              <div className="flex items-center space-x-2 border-l border-zinc-800 pl-4">
                <a
                  id="link-github"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                  title="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  id="link-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                id="btn-print-cv-mobile"
                onClick={onPrintPreview}
                className="p-2 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 transition-all"
                title="Print CV"
              >
                <Printer size={16} />
              </button>
              <button
                id="btn-mobile-menu"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 py-4 shadow-xl no-print md:hidden"
          >
            <div className="px-4 space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                  </button>
                );
              })}

              <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between px-4">
                <span className="text-xs text-zinc-500 font-mono">SOCIAL PROFILES</span>
                <div className="flex space-x-3">
                  <a
                    id="mobile-link-github"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    id="mobile-link-linkedin"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
