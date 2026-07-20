/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrintableCV from './components/PrintableCV';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isPrintOpen, setIsPrintOpen] = useState(false);

  // ScrollSpy to automatically update navigation as user scrolls
  useEffect(() => {
    const sections = ['about', 'competencies', 'experience', 'projects', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset of header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    setActiveSection('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenPrint = () => {
    setIsPrintOpen(true);
  };

  const handleClosePrint = () => {
    setIsPrintOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
      {/* Fixed Navigation Header */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onPrintPreview={handleOpenPrint}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onScrollToContact={handleScrollToContact} 
          onPrintPreview={handleOpenPrint}
        />
        <Competencies />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable CV Modal */}
      <PrintableCV 
        isOpen={isPrintOpen} 
        onClose={handleClosePrint} 
      />
    </div>
  );
}
export { App };
