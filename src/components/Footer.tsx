/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, ArrowUp, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Brand/Signature */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Terminal size={15} />
            </div>
            <div>
              <span className="font-mono text-xs text-zinc-600 block leading-none">ROOT@MWA:~$ LOGOUT</span>
              <span className="font-sans font-bold text-zinc-200 text-sm tracking-wide">
                M. WASIM AKRAM
              </span>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <a
              id="footer-link-github"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-indigo-400 transition-colors"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              id="footer-link-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-indigo-400 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              id="footer-link-mail"
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-indigo-400 transition-colors"
              title="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center space-x-6 text-xs text-zinc-500 font-mono">
            <span>&copy; {new Date().getFullYear()} M. Wasim Akram</span>
            <button
              id="btn-scroll-top"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 text-zinc-400 transition-all flex items-center justify-center cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
