'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare,
  Plus,
  Filter,
  BarChart3,
  Target,
  Clock,
  AlertCircle,
  CheckCircle2,
  Users,
  TrendingUp,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'Platform Migration to Cloud',
    status: 'in-progress',
    progress: 68,
    owner: 'Tech Lead',
    team: 8,
    deadline: '2026-06-30',
    budget: '$150,000',
    spent: '$95,000',
    priority: 'high',
  },
  {
    id: 2,
    name: 'Customer Portal Redesign',
    status: 'in-progress',
    progress: 45,
    owner: 'Product Manager',
    team: 6,
    deadline: '2026-05-15',
    budget: '$75,000',
    spent: '$28,000',
    priority: 'high',
  },
  {
    id: 3,
    name: 'Mobile App Launch',
    status: 'in-progress',
    progress: 82,
    owner: 'Mobile Lead',
    team: 5,
    deadline: '2026-04-30',
    budget: '$120,000',
    spent: '$110,000',
    priority: 'urgent',
  },
  {
    id: 4,
    name: 'Data Analytics Platform',
    status: 'planning',
    progress: 15,
    owner: 'Data Lead',
    team: 4,
    deadline: '2026-08-15',
    budget: '$200,000',
    spent: '$5,000',
    priority: 'medium',
  },
  {
    id: 5,
    name: 'Security Audit & Compliance',
    status: 'in-progress',
    progress: 55,
    owner: 'Security Lead',
    team: 3,
    deadline: '2026-05-30',
    budget: '$80,000',
    spent: '$35,000',
    priority: 'high',
  },
];

const okrs = [
  {
    id: 1,
    quarter: 'Q2 2026',
    objective: 'Accelerate Revenue Growth',
    keyResults: [
      { result: 'Increase ARR by 35%', progress: 62, owner: 'Sales VP' },
      { result: 'Land 5 enterprise customers', progress: 40, owner: 'Sales VP' },
      { result: 'Improve customer retention to 95%', progress: 85, owner: 'CS Lead' },
    ],
    owner: 'CEO',
    status: 'on-track',
  },
  {
    id: 2,
    quarter: 'Q2 2026',
    objective: 'Enhance Product Quality & Speed',
    keyResults: [
      { result: 'Reduce deployment time by 50%', progress: 45, owner: 'Engineering Lead' },
      { result: 'Achieve 99.9% uptime SLA', progress: 88, owner: 'Ops Lead' },
      { result: 'Complete tech debt sprint', progress: 70, owner: 'Engineering Lead' },
    ],
    owner: 'CTO',
    status: 'on-track',
  },
  {
    id: 3,
    quarter: 'Q2 2026',
    objective: 'Build High-Performance Team',
    keyResults: [
      { result: 'Hire 12 engineers', progress: 75, owner: 'HR Lead' },
      { result: 'Achieve 90% engagement score', progress: 78, owner: 'HR Lead' },
      { result: 'Complete leadership training', progress: 100, owner: 'HR Lead' },
    ],
    owner: 'People Lead',
    status: 'on-track',
  },
];

const teamMetrics = [
  { name: 'On Time Delivery', q1: 82, q2: 85, q3: null, target: 90 },
  { name: 'Budget Adherence', q1: 94, q2: 91, q3: null, target: 95 },
  { name: 'Team Utilization', q1: 78, q2: 82, q3: null, target: 85 },
  { name: 'Quality Score', q1: 87, q2: 89, q3: null, target: 95 },
];

export default function ManagementPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedOKR, setSelectedOKR] = useState<number | null>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500/20 text-red-300';
      case 'high':
        return 'bg-orange-500/20 text-orange-300';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300';
      default:
        return 'bg-green-500/20 text-green-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-300';
      case 'planning':
        return 'bg-slate-500/20 text-slate-300';
      case 'completed':
        return 'bg-green-500/20 text-green-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  const totalBudget = projects.reduce((sum, p) => sum + parseInt(p.budget.replace(/[$,]/g, '')), 0);
  const totalSpent = projects.reduce((sum, p) => sum + parseInt(p.spent.replace(/[$,]/g, '')), 0);
  const avgProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Project Management</h1>
            <p className="text-slate-400">Projects, OKRs, and team metrics</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Active Projects</p>
              <p className="text-3xl font-bold text-emerald-400">{projects.length}</p>
              <p className="text-xs text-slate-500 mt-2">4 in progress</p>
            </div>
            <CheckSquare className="w-10 h-10 text-emerald-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Avg Progress</p>
              <p className="text-3xl font-bold text-blue-400">{avgProgress}%</p>
              <p className="text-xs text-slate-500 mt-2">On target</p>
            </div>
            <BarChart3 className="w-10 h-10 text-blue-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Budget Utilization</p>
              <p className="text-3xl font-bold text-purple-400">{Math.round((totalSpent / totalBudget) * 100)}%</p>
              <p className="text-xs text-slate-500 mt-2">${(totalSpent / 1000000).toFixed(1)}M / ${(totalBudget / 1000000).toFixed(1)}M</p>
            </div>
            <Target className="w-10 h-10 text-purple-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Team Capacity</p>
              <p className="text-3xl font-bold text-cyan-400">{projects.reduce((sum, p) => sum + p.team, 0)}</p>
              <p className="text-xs text-slate-500 mt-2">Across all projects</p>
            </div>
            <Users className="w-10 h-10 text-cyan-500/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Team Performance Metrics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={teamMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.5)" />
            <XAxis stroke="rgba(148, 163, 184, 0.5)" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            />
            <Legend />
            <Bar dataKey="q1" fill="#3b82f6" name="Q1" />
            <Bar dataKey="q2" fill="#10b981" name="Q2" />
            <Bar dataKey="target" fill="#f59e0b" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* OKRs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">OKRs (Objectives & Key Results)</h2>
        <div className="space-y-4">
          {okrs.map((okr) => (
            <motion.div
              key={okr.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedOKR(selectedOKR === okr.id ? null : okr.id)}
              className={`glassmorphism p-6 rounded-lg card-hover cursor-pointer transition ${
                selectedOKR === okr.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">{okr.quarter} • Owner: {okr.owner}</p>
                  <h3 className="text-lg font-bold text-white">{okr.objective}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${okr.status === 'on-track' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                  {okr.status === 'on-track' ? 'On Track' : 'At Risk'}
                </span>
              </div>

              {selectedOKR === okr.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 border-t border-emerald-600/20 pt-4"
                >
                  {okr.keyResults.map((kr) => (
                    <div key={kr.result} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">{kr.result}</span>
                        <span className="text-emerald-400 font-semibold">{kr.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${kr.progress}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        />
                      </div>
                      <p className="text-xs text-slate-500">Owner: {kr.owner}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Portfolio Projects</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className={`bg-slate-800/30 p-5 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 cursor-pointer transition ${
                selectedProject === project.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-slate-400">Team: {project.team} • Owner: {project.owner}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ').charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${getPriorityColor(project.priority)}`}>
                    {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Progress</span>
                <span className="text-sm font-semibold text-emerald-400">{project.progress}%</span>
              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                />
              </div>

              {selectedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-slate-700 pt-4 space-y-3"
                >
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Deadline</p>
                      <p className="font-semibold text-slate-300">{project.deadline}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Budget</p>
                      <p className="font-semibold text-emerald-400">{project.budget}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Spent</p>
                      <p className="font-semibold text-blue-400">{project.spent}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-secondary text-sm flex-1">View Details</button>
                    <button className="btn-ghost text-sm flex-1">Update Status</button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
