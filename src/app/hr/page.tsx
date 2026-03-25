'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Plus,
  BarChart3,
  TrendingUp,
  Target,
  Award,
  CheckCircle2,
  AlertCircle,
  Briefcase,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

const recruitmentPipeline = [
  { stage: 'Applied', count: 245, conversionRate: '25%' },
  { stage: 'Screening', count: 61, conversionRate: '41%' },
  { stage: 'Interview', count: 25, conversionRate: '68%' },
  { stage: 'Offer', count: 17, conversionRate: '94%' },
  { stage: 'Hired', count: 16, conversionRate: '100%' },
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    salary: '$150K - $200K',
    posted: '2026-02-15',
    applicants: 42,
    stage: 'Interview',
    urgency: 'High',
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco',
    salary: '$140K - $180K',
    posted: '2026-02-20',
    applicants: 28,
    stage: 'Screening',
    urgency: 'High',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New York',
    salary: '$110K - $150K',
    posted: '2026-03-01',
    applicants: 15,
    stage: 'Applied',
    urgency: 'Medium',
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Remote',
    salary: '$130K - $170K',
    posted: '2026-03-05',
    applicants: 35,
    stage: 'Interview',
    urgency: 'High',
  },
];

const performanceReviews = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Engineering Manager',
    rating: 4.5,
    feedback: 'Excellent technical leadership and team growth',
    nextReview: '2026-09-01',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    rating: 4.2,
    feedback: 'Strong execution on key initiatives',
    nextReview: '2026-09-15',
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Sales Director',
    rating: 4.7,
    feedback: 'Exceeds targets, great team motivator',
    nextReview: '2026-08-20',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'HR Specialist',
    rating: 3.9,
    feedback: 'Good performer, needs growth in strategic thinking',
    nextReview: '2026-10-01',
  },
];

const compensationData = [
  { level: 'Executive', count: 5, avgSalary: '$280K', avgBonus: '$120K', avgEquity: '$500K' },
  { level: 'Director', count: 12, avgSalary: '$180K', avgBonus: '$60K', avgEquity: '$150K' },
  { level: 'Manager', count: 35, avgSalary: '$120K', avgBonus: '$25K', avgEquity: '$50K' },
  { level: 'Individual Contributor', count: 145, avgSalary: '$85K', avgBonus: '$12K', avgEquity: '$15K' },
];

const departmentDistribution = [
  { name: 'Engineering', value: 45, color: '#3b82f6' },
  { name: 'Product', value: 12, color: '#8b5cf6' },
  { name: 'Sales', value: 28, color: '#f59e0b' },
  { name: 'Marketing', value: 18, color: '#ec4899' },
  { name: 'Operations', value: 22, color: '#10b981' },
  { name: 'Support', value: 15, color: '#06b6d4' },
];

const hrMetrics = [
  { metric: 'Headcount', value: 198, change: '+12 this quarter' },
  { metric: 'Turnover Rate', value: '8%', change: 'Target: <10%' },
  { metric: 'Time to Hire', value: '28 days', change: 'Target: <30 days' },
  { metric: 'Engagement Score', value: '8.2/10', change: '+0.5 vs last year' },
];

export default function HRPage() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Human Resources</h1>
            <p className="text-slate-400">Recruitment, performance, and compensation</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* HR Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {hrMetrics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glassmorphism p-6 rounded-xl card-hover"
          >
            <p className="text-slate-400 text-sm mb-2">{item.metric}</p>
            <p className="text-3xl font-bold text-emerald-400 mb-1">{item.value}</p>
            <p className="text-xs text-slate-500">{item.change}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Department Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Team Distribution by Department</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={departmentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recruitment Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Recruitment Pipeline</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={recruitmentPipeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.5)" />
              <XAxis stroke="rgba(148, 163, 184, 0.5)" />
              <YAxis stroke="rgba(148, 163, 184, 0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              />
              <Bar dataKey="count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Open Positions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Open Positions</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Position
          </button>
        </div>

        <div className="space-y-4">
          {openPositions.map((position) => (
            <motion.div
              key={position.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
              className={`glassmorphism p-5 rounded-lg card-hover cursor-pointer transition ${
                selectedPosition === position.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{position.title}</h3>
                  <p className="text-sm text-slate-400">{position.department} • {position.location}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    position.urgency === 'High'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {position.urgency}
                  </span>
                </div>
              </div>

              {selectedPosition === position.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-emerald-600/20 space-y-3"
                >
                  <div className="grid grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Salary Range</p>
                      <p className="font-semibold text-emerald-400">{position.salary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Posted</p>
                      <p className="font-semibold text-slate-300">{position.posted}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Applicants</p>
                      <p className="font-semibold text-blue-400">{position.applicants}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Stage</p>
                      <p className="font-semibold text-purple-400">{position.stage}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-secondary text-sm flex-1">View Candidates</button>
                    <button className="btn-ghost text-sm flex-1">Edit Position</button>
                  </div>
                </motion.div>
              )}

              {!selectedPosition && (
                <div className="flex justify-between text-sm text-slate-400 mt-3">
                  <span>{position.applicants} applicants</span>
                  <span className="text-slate-300 font-semibold">{position.salary}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Recent Performance Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glassmorphism p-6 rounded-xl card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-white">{review.name}</h3>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <span className="text-yellow-400">★</span>
                    <span className="font-bold text-white text-lg">{review.rating}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">of 5.0</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4">{review.feedback}</p>

              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-700 pt-3">
                <span>Next Review: {review.nextReview}</span>
                <button className="text-emerald-400 hover:text-emerald-300 font-semibold">View Full →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compensation Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Compensation Overview</h2>
        <div className="space-y-4">
          {compensationData.map((level) => (
            <motion.div
              key={level.level}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-800/30 p-5 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white mb-1">{level.level}</h3>
                  <p className="text-sm text-slate-400">{level.count} positions</p>
                </div>
                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Avg Salary</p>
                    <p className="font-bold text-emerald-400">{level.avgSalary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Avg Bonus</p>
                    <p className="font-bold text-blue-400">{level.avgBonus}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Avg Equity</p>
                    <p className="font-bold text-purple-400">{level.avgEquity}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
