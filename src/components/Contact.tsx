/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Database, Trash2, Clipboard } from 'lucide-react';
import { personalInfo } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sent Messages Queue / Local System Logs (stored in localStorage)
  const [messageLogs, setMessageLogs] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const savedLogs = localStorage.getItem('wasim_portfolio_msg_logs');
    if (savedLogs) {
      try {
        setMessageLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error('Error parsing local message logs', e);
      }
    }
  }, []);

  const saveLogs = (logs: ContactMessage[]) => {
    setMessageLogs(logs);
    localStorage.setItem('wasim_portfolio_msg_logs', JSON.stringify(logs));
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    
    if (!subject.trim()) tempErrors.subject = 'Subject is required';
    if (!message.trim()) tempErrors.message = 'Message content cannot be empty';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate Network Latency
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: 'MSG-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString() + ' (Local Queue)',
      };

      const updatedLogs = [newMessage, ...messageLogs];
      saveLogs(updatedLogs);

      setIsSubmitting(false);
      setSuccess(true);
      
      // Clear Form Fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto clear success notification after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const clearLogs = () => {
    saveLogs([]);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 ambient-glow-green rounded-full pointer-events-none opacity-20 no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 max-w-xl">
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-indigo-500" />
            <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Contact & Message Queue
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-sans">
            Have an open infrastructure engineering position or need consultations on systems automation? Drop a message below to connect.
          </p>
        </div>

        {/* Form and Log Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form & Direct Contacts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-indigo-500" />

              <h3 className="font-sans font-bold text-lg sm:text-xl text-zinc-100 mb-6 flex items-center space-x-2">
                <Send size={18} className="text-indigo-400" />
                <span>Transmit Secure Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-zinc-500 uppercase">Sender Name</label>
                    <input
                      id="input-contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-zinc-950 border rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.name ? 'border-red-500/50' : 'border-zinc-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center space-x-1.5 text-xs text-red-400 font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-zinc-500 uppercase">Email Address</label>
                    <input
                      id="input-contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className={`w-full bg-zinc-950 border rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.email ? 'border-red-500/50' : 'border-zinc-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center space-x-1.5 text-xs text-red-400 font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-zinc-500 uppercase">Subject</label>
                  <input
                    id="input-contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. System Integration Consultation"
                    className={`w-full bg-zinc-950 border rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors ${
                      errors.subject ? 'border-red-500/50' : 'border-zinc-800'
                    }`}
                  />
                  {errors.subject && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-400 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-zinc-500 uppercase">Message Body</label>
                  <textarea
                    id="input-contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project or opportunity..."
                    className={`w-full bg-zinc-950 border rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-zinc-800'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center space-x-1.5 text-xs text-red-400 font-mono mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form submission actions */}
                <div className="flex items-center justify-between pt-2 gap-4">
                  <button
                    id="btn-contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Queue Message'}</span>
                    <Send size={12} className={isSubmitting ? 'animate-bounce' : ''} />
                  </button>

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        id="contact-success-msg"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center space-x-2 text-emerald-400 text-sm font-mono"
                      >
                        <CheckCircle size={16} />
                        <span>Transmission Complete!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Dynamic Storage Log & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Info Card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
              <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">Direct Connection Info</h4>
              <div className="space-y-3.5">
                <a
                  id="contact-detail-email"
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-3.5 p-3 rounded-2xl bg-zinc-950/50 border border-transparent hover:border-zinc-800 hover:bg-zinc-900/50 transition-all text-sm text-zinc-300"
                >
                  <Mail className="text-indigo-400 flex-shrink-0" size={16} />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <a
                  id="contact-detail-phone"
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-3.5 p-3 rounded-2xl bg-zinc-950/50 border border-transparent hover:border-zinc-800 hover:bg-zinc-900/50 transition-all text-sm text-zinc-300"
                >
                  <Phone className="text-purple-400 flex-shrink-0" size={16} />
                  <span>{personalInfo.phone}</span>
                </a>
                <div
                  id="contact-detail-location"
                  className="flex items-center space-x-3.5 p-3 rounded-2xl bg-zinc-950/50 border border-transparent text-sm text-zinc-300"
                >
                  <MapPin className="text-pink-400 flex-shrink-0" size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Simulated System Message logs */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-xs text-zinc-500 tracking-wider uppercase flex items-center space-x-2">
                  <Database size={12} className="text-indigo-400" />
                  <span>Local Queue (Session Database)</span>
                </h4>
                {messageLogs.length > 0 && (
                  <button
                    id="btn-clear-msg-logs"
                    onClick={clearLogs}
                    className="text-zinc-500 hover:text-red-400 flex items-center space-x-1 text-[10px] font-mono border border-transparent hover:border-red-500/20 px-2 py-0.5 rounded transition-all cursor-pointer"
                    title="Clear database logs"
                  >
                    <Trash2 size={11} />
                    <span>Purge</span>
                  </button>
                )}
              </div>

              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {messageLogs.length === 0 ? (
                  <div className="border border-dashed border-zinc-800 rounded-2xl p-6 text-center text-zinc-500 text-xs font-mono">
                    Queue empty. Submit a contact message to view logs.
                  </div>
                ) : (
                  messageLogs.map((log) => (
                    <div
                      id={`msg-log-item-${log.id}`}
                      key={log.id}
                      className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-indigo-400 font-bold">{log.id}</span>
                        <span className="text-zinc-500">{log.timestamp}</span>
                      </div>
                      <div className="text-zinc-300">
                        <span className="text-zinc-500">FROM:</span> {log.name} &lt;{log.email}&gt;
                      </div>
                      <div className="text-zinc-300">
                        <span className="text-zinc-500">SUBJ:</span> {log.subject}
                      </div>
                      <div className="text-zinc-400 pt-1 border-t border-zinc-800/40 line-clamp-2">
                        {log.message}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
