/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Cloud' | 'DevOps' | 'Network' | 'Automation';
  description: string;
  details: string;
  techStack: string[];
  architecture?: string[]; // list of steps or diagram nodes
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  logoColor: string; // for custom stylized emblem
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
