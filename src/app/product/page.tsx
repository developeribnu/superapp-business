'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Plus,
  FileText,
  BarChart3,
  Users,
  Target,
  CheckCircle2,
  AlertCircle,
  Zap,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Link from 'next/link';

const prdTemplates = [
  {
    id: 1,
    name: 'New Feature PRD',
    description: 'Template for new product features',
    sections: ['Overview', 'Goals', 'User Stories', 'Success Metrics', 'Timeline'],
    lastUpdated: '2026-03-20',
    usage: 12,
  },
  {
    id: 2,
    name: 'Enhancement PRD',
    description: 'Improving existing features',
    sections: ['Current State', 'Problem Statement', 'Proposed Solution', 'Metrics', 'Rollout Plan'],
    lastUpdated: '2026-03-15',
    usage: 8,
  },
  {
    id: 3,
    name: 'Platform PRD',
    description: 'Major platform initiatives',
    sections: ['Strategy', 'Architecture', 'User Flows', 'Technical Requirements', 'Risk Assessment'],
    lastUpdated: '2026-02-28',
    usage: 3,
  },
];

const userStories = [
  {
    id: 1,
    story: 'As a sales manager, I want to see real-time pipeline analytics so that I can make informed decisions',
    acceptance: ['Show updated metrics every 5 mins', 'Display by region', 'Export capability'],
    priority: 'High',
    points: 13,
    status: 'In Development',
  },
  {
    id: 2,
    story: 'As a customer, I want mobile app push notifications so that I stay informed about updates',
    acceptance: ['iOS & Android', 'Customizable', 'Real-time delivery'],
    priority: 'High',
    points: 8,
    status: 'In Development',
  },
  {
    id: 3,
    story: 'As an admin, I want to manage team permissions so that I control access levels',
    acceptance: ['Role-based access', 'Audit logs', 'Bulk editing'],
    priority: 'Medium',
    points: 5,
    status: 'Backlog',
  },
  {
    id: 4,
    story: 'As an analyst, I want advanced filtering options so that I can segment data precisely',
    acceptance: ['Multi-filter support', 'Save filters', 'Share filters'],
    priority: 'Medium',
    points: 8,
    status: 'Testing',
  },
];

const roadmapData = [
  { quarter: 'Q1', features: 8, shipped: 8, completion: 100 },
  { quarter: 'Q2', features: 12, shipped: 9, completion: 75 },
  { quarter: 'Q3', features: 15, shipped: 0, completion: 0 },
  { quarter: 'Q4', features: 10, shipped: 0, completion: 0 },
];

const productMetrics = [
  { metric: 'User Adoption', value: 68, unit: '%', target: 85 },
  { metric: 'Feature Usage', value: 72, unit: '%', target: 80 },
  { metric: 'Customer Satisfaction', value: 4.5, unit: '/5', target: 4.7 },
  { metric: 'Retention Rate', value: 92, unit: '%', target: 95 },
];

const roadmapItems = [
  {
    quarter: 'Q2 2026',
    items: [
      { name: 'AI-Powered Dashboard', status: 'In Progress', completion: 65 },
      { name: 'Mobile App v2', status: 'In Progress', completion: 50 },
      { name: 'API v2 Release', status: 'In Progress', completion: 80 },
    ],
  },
  {
    quarter: 'Q3 2026',
    items: [
      { name: 'Advanced Analytics', status: 'Planned', completion: 0 },
      { name: 'Collaboration Tools', status: 'Planned', completion: 0 },
      { name: 'Integration Hub', status: 'Planned', completion: 0 },
    ],
  },
  {
    quarter: 'Q4 2026',
    items: [
      { name: 'Enterprise Security', status: 'Planned', completion: 0 },
      { name: 'Custom Workflows', status: 'Planned', completion: 0 },
    ],
  },
];

export default function ProductPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Product Management</h1>
            <p className="text-slate-400">PRDs, user stories, and roadmaps</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Product Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {productMetrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glassmorphism p-6 rounded-xl card-hover"
          >
            <p className="text-slate-400 text-sm mb-2">{item.metric}</p>
            <p className="text-3xl font-bold text-emerald-400">{item.value}{item.unit}</p>
            <p className="text-xs text-slate-500 mt-2">Target: {item.target}{item.unit}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Roadmap Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Roadmap Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={roadmapData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.5)" />
            <XAxis stroke="rgba(148, 163, 184, 0.5)" />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            />
            <Legend />
            <Bar dataKey="features" fill="#3b82f6" name="Planned" />
            <Bar dataKey="shipped" fill="#10b981" name="Shipped" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* PRD Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">PRD Templates</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prdTemplates.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
              className={`glassmorphism p-6 rounded-xl card-hover cursor-pointer transition ${
                selectedTemplate === template.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-3">
                <FileText className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-white">{template.name}</h3>
                  <p className="text-sm text-slate-400">{template.description}</p>
                </div>
              </div>

              {selectedTemplate === template.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 border-t border-emerald-600/20 pt-4"
                >
                  <div>
                    <p className="text-sm text-emerald-400 font-semibold mb-2">Sections:</p>
                    <div className="space-y-1">
                      {template.sections.map((section) => (
                        <p key={section} className="text-sm text-slate-300">• {section}</p>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 border-t border-slate-700 pt-3">
                    Last updated: {template.lastUpdated} • Used {template.usage} times
                  </div>
                  <button className="btn-primary w-full text-sm">Use Template</button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* User Stories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">User Stories</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Story
          </button>
        </div>

        <div className="space-y-4">
          {userStories.map((story) => {
            const statusColor =
              story.status === 'In Development'
                ? 'bg-blue-500/20 text-blue-300'
                : story.status === 'Testing'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-slate-500/20 text-slate-300';

            const priorityColor = story.priority === 'High' ? 'text-red-400' : 'text-yellow-400';

            return (
              <motion.div
                key={story.id}
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-5 rounded-lg card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-slate-300 mb-2">{story.story}</p>
                    <div className="flex gap-3 items-center">
                      <span className={`text-sm font-bold ${priorityColor}`}>Priority: {story.priority}</span>
                      <span className="text-sm text-slate-400">|</span>
                      <span className="text-sm text-slate-400">Points: {story.points}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ml-4 ${statusColor}`}>
                    {story.status}
                  </span>
                </div>

                <div className="bg-slate-800/50 rounded p-3 border border-slate-700/50">
                  <p className="text-xs text-emerald-400 font-semibold mb-2">Acceptance Criteria:</p>
                  <ul className="space-y-1">
                    {story.acceptance.map((criteria) => (
                      <li key={criteria} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Roadmap by Quarter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Product Roadmap</h2>
        <div className="space-y-6">
          {roadmapItems.map((quarter) => (
            <div key={quarter.quarter} className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-lg font-bold text-white mb-4">{quarter.quarter}</h3>
              <div className="space-y-3">
                {quarter.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.01 }}
                    className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-slate-600/20 text-slate-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {item.completion > 0 && (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.completion}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                          />
                        </div>
                        <p className="text-sm font-semibold text-emerald-400 min-w-fit">{item.completion}%</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
