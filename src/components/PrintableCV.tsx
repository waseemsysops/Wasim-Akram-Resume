/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, experienceData, certificationsData, coreCompetencies } from '../data';

interface PrintableCVProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintableCV({ isOpen, onClose }: PrintableCVProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 backdrop-blur-md p-4 overflow-y-auto no-print">
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-8 max-h-[90vh]">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            <span className="font-mono text-sm text-indigo-400 font-bold">PRINTER DRIVER v1.2</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              id="btn-print-action"
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 text-xs font-bold text-white bg-indigo-500 hover:bg-indigo-400 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="btn-close-print"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              title="Close Preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 md:p-12 overflow-y-auto bg-white text-gray-950 flex-grow font-sans select-text">
          <div className="max-w-3xl mx-auto space-y-8 print-document text-left">
            
            {/* CV Header */}
            <div className="border-b-2 border-gray-900 pb-6 space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
                {personalInfo.name}
              </h1>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1.5 gap-x-4 text-xs font-medium text-gray-700">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={12} className="text-gray-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Phone size={12} className="text-gray-500" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Mail size={12} className="text-gray-500" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Github size={12} className="text-gray-500" />
                  <span className="break-all">github.com/m-wasimakram</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Linkedin size={12} className="text-gray-500" />
                  <span className="break-all">linkedin.com/in/wasimakram-it</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-gray-800 leading-relaxed font-sans">
                {personalInfo.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Core Competencies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 text-xs text-gray-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    <span>{comp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Professional Experience
              </h2>
              
              <div className="space-y-5">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h3 className="text-sm font-bold text-gray-900">
                        {exp.role} <span className="font-semibold text-gray-600">— {exp.company}</span>
                      </h3>
                      <span className="text-[11px] font-bold text-gray-500 font-mono">
                        {exp.location} | {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-gray-700 leading-relaxed font-sans">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="pl-1">
                          <span className="relative -left-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Education
              </h2>
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-bold text-gray-900">
                  BS-CS <span className="font-semibold text-gray-600">— Virtual University of Pakistan</span>
                </h3>
                <span className="text-[11px] font-bold text-gray-500 font-mono">
                  Graduated 2021
                </span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Certifications & Badges
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-800">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="flex items-center space-x-2">
                    <span className="text-gray-900 font-bold">&#10003;</span>
                    <span>
                      <strong className="font-bold">{cert.name}</strong> <span className="text-gray-500 font-medium">({cert.issuer})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                References
              </h2>
              <p className="text-xs text-gray-600 font-medium italic">
                Available upon request.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
export { PrintableCV };
