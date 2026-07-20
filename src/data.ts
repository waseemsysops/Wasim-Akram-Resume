/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, Project, Certification } from './types';

export const personalInfo = {
  name: 'M. Wasim Akram',
  title: 'Senior System Engineer',
  tagline: 'Optimizing, Securing, & Scaling Enterprise IT Infrastructure',
  location: 'Lahore, Pakistan',
  phone: '+92 305 410 1870',
  email: 'waseemdevco@gmail.com',
  github: 'https://github.com/m-wasimakram',
  linkedin: 'https://linkedin.com/in/wasimakram-it',
  summary: 'Experienced System Engineer with 5+ years of expertise in managing, optimizing, and securing IT infrastructure. Skilled in server administration, virtualization, and cloud technologies to ensure system reliability and scalability. Proven ability to troubleshoot complex issues and collaborate across teams to deliver reliable, scalable, and secure system solutions.',
};

export const coreCompetencies = [
  { name: 'IT Infrastructure Management', description: 'Design and oversight of resilient, highly available server landscapes and directories.' },
  { name: 'Server & Network Administration', description: 'Advanced configuration of routing, switching, Active Directory, DNS, and system services.' },
  { name: 'Server Virtualization', description: 'Building scalable virtualization farms with VMware vSphere/ESXi and Hyper-V.' },
  { name: 'Cloud Technologies', description: 'Deploying secure resources, storage, and identity management across Microsoft Azure & AWS.' },
  { name: 'Network Design & Implementation', description: 'VLAN segmentation, firewall configurations, and secure site-to-site VPN topology.' },
  { name: 'Automation & DevOps', description: 'Automating infrastructure tasks and configuration management using scripting and CI/CD tools.' },
];

export const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior System Engineer',
    company: 'Sparco Enterprises',
    location: 'Lahore, Pakistan',
    period: 'Jan 2024 – Present',
    highlights: [
      'Design, implement, and maintain enterprise-level IT systems and networks to guarantee 99.9% uptime.',
      'Monitor system performance, troubleshoot complex hardware/software issues, and optimize resource efficiency.',
      'Lead system upgrades, Active Directory migrations, and deployment of cutting-edge infrastructure technologies.',
      'Ensure robust security protocols, automated backup routines, and disaster recovery plans are active and tested.',
      'Collaborate with cross-functional IT teams to support complex business operations and strategic projects.',
      'Provide technical guidance, architectural reviews, and hands-on mentoring to junior IT engineers.',
      'Manage vendor relationships, negotiate service level agreements (SLAs), and evaluate emerging technologies for adoption.'
    ]
  },
  {
    id: 'exp2',
    role: 'IT Manager',
    company: 'Shams & Brothers',
    location: 'Lahore, Pakistan',
    period: 'Jan 2023 – Dec 2023',
    highlights: [
      'Oversaw end-to-end IT systems, corporate networks, and critical hardware infrastructure for ultimate reliability.',
      'Developed and executed comprehensive IT strategies fully aligned with long-term business expansion goals.',
      'Led, mentored, and scheduled professional IT teams, overseeing project pipelines and supplier relations.',
      'Implemented stringent cybersecurity measures, access controls, and ensured regulatory compliance.',
      'Managed IT department budgets, capital expenditure planning, system upgrades, and business continuity plans.'
    ]
  },
  {
    id: 'exp3',
    role: 'System Engineer (Remote)',
    company: 'Implies Solutions (Pvt) Ltd.',
    location: 'Remote',
    period: 'Feb 2022 – Dec 2023',
    highlights: [
      'Managed and maintained cloud-based (AWS/Azure) and on-premise systems to ensure high availability and load-balanced performance.',
      'Troubleshot intricate system issues and provided level-3 technical support to software development and DevOps teams.',
      'Automated routine deployment, log rotation, system monitoring, and maintenance tasks using scripting and modern DevOps tools.',
      'Implemented security best practices, including rigorous access control lists, OS patching cycles, and rapid incident response.',
      'Collaborated closely with software engineers to optimize application databases, API response rates, and infrastructure reliability.'
    ]
  },
  {
    id: 'exp4',
    role: 'Network / System Administrator',
    company: 'Virtual University Campus',
    location: 'Lahore, Pakistan',
    period: 'Aug 2019 – Feb 2022',
    highlights: [
      'Administered and maintained core IT infrastructure, including virtual servers, local networks, and student-facing endpoints.',
      'Installed, configured, and upgraded server hardware, network routers, switches, and edge firewall devices.',
      'Provided advanced troubleshooting, prompt user helpdesk support, and rapid incident resolution to minimize academic downtime.',
      'Managed thorough IT documentation, comprehensive asset inventories, and actively supported formal system audits.'
    ]
  },
  {
    id: 'exp5',
    role: 'IT Administrator',
    company: 'Creative Apparels (Pvt) Ltd',
    location: 'Lahore, Pakistan',
    period: 'Apr 2017 – Jul 2019',
    highlights: [
      'Administered active servers, central storage arrays, and network communications infrastructure for 200+ corporate users.',
      'Managed corporate software updates, security patch schedules, and offsite backup solutions.',
      'Supported general helpdesk operations, resolving hardware issues, printer problems, and local network glitches.',
      'Assembled, installed, and configured end-user desktops, rack servers, and high-speed network switches.'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert1',
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    logoColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 'cert2',
    name: 'Certified Professional – Data Center Virtualization',
    issuer: 'VMware',
    logoColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 'cert3',
    name: 'Certified Cloud Computing Associate',
    issuer: 'Huawei',
    logoColor: 'text-red-500 bg-red-500/10 border-red-500/20'
  },
  {
    id: 'cert4',
    name: 'Professional Routing & Switching',
    issuer: 'Huawei',
    logoColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20'
  },
  {
    id: 'cert5',
    name: 'Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    logoColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20'
  },
  {
    id: 'cert6',
    name: 'Certified Solutions Associate (MCSA)',
    issuer: 'Microsoft',
    logoColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20'
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Automated GitOps Kubernetes Cluster',
    category: 'DevOps',
    description: 'An automated, declarative Kubernetes cluster setup utilizing GitOps workflows for continuous deployment and infrastructure monitoring.',
    details: 'Constructed an on-premise and hybrid Kubernetes infrastructure provisioned using Terraform and automated with Ansible playbooks. Integrated ArgoCD to implement true GitOps practices, synchronizing repository definitions with active cluster state. Installed a complete Prometheus & Grafana stack with customized alerts to capture system metrics, CPU bottlenecks, and network health logs in real time.',
    techStack: ['Kubernetes', 'ArgoCD', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Docker'],
    architecture: [
      'Code/Config Commit to Git Repository',
      'ArgoCD Webhook Triggered & Detects Diff',
      'Declarative Reconciliation of Cluster State',
      'Prometheus Scrapes Pod & Node Exporter Metrics',
      'Grafana Dashboard Visualizes Real-Time CPU/Network Load'
    ],
    metrics: [
      { label: 'Deploy Speed', value: '85% Faster' },
      { label: 'Cluster Recovery', value: '< 2 Minutes' },
      { label: 'Resource Idle-waste', value: '30% Reduced' }
    ]
  },
  {
    id: 'proj2',
    title: 'Hybrid Cloud Network & Active Directory Sync',
    category: 'Cloud',
    description: 'A redundant and highly secure site-to-site hybrid cloud network connecting on-premise hardware directly with Azure and AWS public infrastructure.',
    details: 'Designed and deployed a dual-tunnel IPsec VPN bridging a corporate on-premise datacenter with Azure Virtual Networks and AWS VPCs. Configured Azure Active Directory Connect (now Microsoft Entra Cloud Sync) to establish federated identity management across all environments. Integrated highly available Azure Traffic Managers and Application Gateways to perform intelligent routing, improving end-user latency.',
    techStack: ['Azure Active Directory', 'IPsec VPN', 'AWS VPC', 'Application Gateway', 'DNS Sync', 'Active Directory Domain Services'],
    architecture: [
      'On-Premise Domain Controller',
      'IPsec VPN Secure S2S Dual Tunnels',
      'Azure AD / AWS Directory Replication',
      'Azure Traffic Manager Route Allocation',
      'End-User Secure Single Sign-On (SSO) Access'
    ],
    metrics: [
      { label: 'Network Latency', value: '< 15ms Avg' },
      { label: 'Auth Sync Delay', value: '< 5 Seconds' },
      { label: 'Uptime SLA', value: '99.95% Proven' }
    ]
  },
  {
    id: 'proj3',
    title: 'Infrastructure as Code & Secure CI/CD Pipeline',
    category: 'Automation',
    description: 'An automated pipeline deploying secure, vetted infrastructure modules using Terraform with state lock systems and automatic compliance testing.',
    details: 'Engineered robust GitHub Actions workflows to validate and run Terraform scripts. Integrated TFSec and Checkov static analysis tools to verify compliance against CIS benchmarks before apply actions. Configured remote state management with AWS S3 backends and DynamoDB lock tables to enable conflict-free concurrent developer updates.',
    techStack: ['Terraform', 'GitHub Actions', 'TFSec', 'Checkov', 'AWS S3 / DynamoDB', 'IAM Roles', 'Ansible'],
    architecture: [
      'Engineer submits Pull Request with Infrastructure code',
      'GitHub Action triggers Checkov & TFSec security scanning',
      'Terraform Plan computes changes & locks state in DynamoDB',
      'Admin approves PR, triggering Terraform Apply',
      'Ansible handles late-stage config & boots software on VMs'
    ],
    metrics: [
      { label: 'Config Errors', value: 'Zero in Prod' },
      { label: 'Approval Speed', value: '4x Quicker' },
      { label: 'Compliance Audit', value: '100% Automated' }
    ]
  },
  {
    id: 'proj4',
    title: 'Zero Trust Network Hardening & Core Redundancy',
    category: 'Network',
    description: 'An enterprise network overhaul introducing Zero Trust isolation, redundant core switching, and advanced next-generation firewall policies.',
    details: 'Restructured a legacy flat corporate network of 200+ users into secure isolated VLAN segments (Management, Engineering, Corporate, IoT, Guest). Deployed Palo Alto Next-Generation Firewalls (NGFW) with deep packet inspection, threat protection, and SSL decryption profiles. Set up dual Cisco core switches with HSRP (Hot Standby Router Protocol) to eradicate single points of network failure.',
    techStack: ['Palo Alto NGFW', 'Cisco IOS', 'HSRP Routing', 'VLAN Segmentation', 'MFA Integration', 'SSL Decryption'],
    architecture: [
      'User Network Access Point',
      'Palo Alto NGFW User-ID Vetting',
      'Active Directory MFA Verification',
      'HSRP Dual Switch Automatic Failover',
      'Secure isolated Target VLAN Redirection'
    ],
    metrics: [
      { label: 'Threat Blocks', value: '10k+ / Week' },
      { label: 'Switch Failover', value: '< 300ms' },
      { label: 'Internal Attack Surface', value: '90% Reduced' }
    ]
  }
];
