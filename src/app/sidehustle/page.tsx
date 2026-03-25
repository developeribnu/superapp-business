'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Plus,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Users,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Link from 'next/link';

const incomeStreams = [
  {
    id: 1,
    name: 'Freelance Consulting',
    type: 'Active',
    monthlyIncome: '$4200',
    hours: '12-15/week',
    clients: 3,
    growth: '+18%',
    status: 'scaling',
  },
  {
    id: 2,
    name: 'Digital Products',
    type: 'Passive',
    monthlyIncome: '$1850',
    hours: '5-8/week',
    clients: 340,
    growth: '+22%',
    status: 'growing',
  },
  {
    id: 3,
    name: 'Online Courses',
    type: 'Passive',
    monthlyIncome: '$2300',
    hours: '3-5/week',
    clients: 280,
    growth: '+15%',
    status: 'stable',
  },
  {
    id: 4,
    name: 'Content Monetization',
    type: 'Active',
    monthlyIncome: '$950',
    hours: '8-10/week',
    clients: 'N/A',
    growth: '+8%',
    status: 'early',
  },
];

const startupIdeas = [
  {
    id: 1,
    name: 'AI-Powered Business Analytics',
    market: 'B2B SaaS',
    potential: 'High',
    investment: '$50K-100K',
    timeline: '6-12 months',
    stage: 'Validation',
    score: 8.5,
  },
  {
    id: 2,
    name: 'Sustainable Packaging Solutions',
    market: 'B2B',
    potential: 'Very High',
    investment: '$200K-500K',
    timeline: '12-18 months',
    stage: 'Ideation',
    score: 8.2,
  },
  {
    id: 3,
    name: 'Niche EdTech Platform',
    market: 'B2C',
    potential: 'High',
    investment: '$30K-75K',
    timeline: '4-8 months',
    stage: 'MVP Dev',
    score: 7.8,
  },
  {
    id: 4,
    name: 'Corporate Wellness SaaS',
    market: 'B2B',
    potential: 'High',
    investment: '$75K-150K',
    timeline: '8-14 months',
    stage: 'Pitch Ready',
    score: 8.1,
  },
];

const freelancingGuide = [
  {
    step: 1,
    title: 'Build Your Portfolio',
    description: 'Create case studies and showcase your best work',
    tips: ['Use Behance/GitHub', 'Get testimonials', 'Show ROI metrics'],
    time: '2-4 weeks',
  },
  {
    step: 2,
    title: 'Set Your Rates',
    description: 'Research market rates and position yourself',
    tips: ['Hourly: $50-250+', 'Project: $500-10K+', 'Value-based pricing'],
    time: '1 week',
  },
  {
    step: 3,
    title: 'Find Your First Clients',
    description: 'Use platforms and network to land projects',
    tips: ['LinkedIn network', 'Upwork/Fiverr', 'Cold outreach'],
    time: '4-8 weeks',
  },
  {
    step: 4,
    title: 'Scale & Optimize',
    description: 'Increase rates and target better clients',
    tips: ['Specialize deeper', 'Build recurring revenue', 'Referrals'],
    time: 'Ongoing',
  },
];

const incomeChart = [
  { month: 'Jan', consulting: 3200, products: 800, courses: 1500, content: 400 },
  { month: 'Feb', consulting: 3500, products: 950, courses: 1700, content: 500 },
  { month: 'Mar', consulting: 4200, products: 1850, courses: 2300, content: 950 },
];

const projectedGrowth = [
  { month: 'Current', annual: 48000, target: 48000 },
  { month: 'Q2 Goal', annual: 72000, target: 72000 },
  { month: 'EOY Target', annual: 120000, target: 120000 },
];

export default function SideHustlePage() {
  const [selectedStream, setSelectedStream] = useState<number | null>(null);

  const totalMonthly = incomeStreams.reduce((sum, s) => sum + parseInt(s.monthlyIncome.replace(/[$,]/g, '')), 0);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Side Hustle Hub</h1>
            <p className="text-slate-400">Freelancing, passive income, and startup ideas</p>
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
          <p className="text-slate-400 text-sm mb-2">Monthly Income</p>
          <p className="text-3xl font-bold text-emerald-400">${(totalMonthly / 1000).toFixed(1)}K</p>
          <p className="text-xs text-slate-500 mt-2">+15.8% vs last month</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Annual Run Rate</p>
          <p className="text-3xl font-bold text-blue-400">${(totalMonthly * 12 / 1000).toFixed(0)}K</p>
          <p className="text-xs text-slate-500 mt-2">Projected annual</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Income Streams</p>
          <p className="text-3xl font-bold text-purple-400">{incomeStreams.length}</p>
          <p className="text-xs text-slate-500 mt-2">Active sources</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Total Hours</p>
          <p className="text-3xl font-bold text-cyan-400">35-45</p>
          <p className="text-xs text-slate-500 mt-2">Per week</p>
        </motion.div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Income Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Income by Stream (3 Months)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeChart}>
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
              <Bar dataKey="consulting" fill="#3b82f6" name="Consulting" />
              <Bar dataKey="products" fill="#8b5cf6" name="Products" />
              <Bar dataKey="courses" fill="#f59e0b" name="Courses" />
              <Bar dataKey="content" fill="#10b981" name="Content" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Growth Projection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Revenue Growth Projection</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectedGrowth}>
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
              <Line type="monotone" dataKey="annual" stroke="#10b981" name="Projected" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#f59e0b" name="Target" strokeDasharray="5 5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Income Streams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Income Streams</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Stream
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {incomeStreams.map((stream) => (
            <motion.div
              key={stream.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedStream(selectedStream === stream.id ? null : stream.id)}
              className={`glassmorphism p-6 rounded-xl card-hover cursor-pointer transition ${
                selectedStream === stream.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{stream.name}</h3>
                  <p className="text-sm text-slate-400">{stream.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  stream.status === 'scaling'
                    ? 'bg-green-500/20 text-green-300'
                    : stream.status === 'growing'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {stream.status.charAt(0).toUpperCase() + stream.status.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly</p>
                  <p className="text-2xl font-bold text-emerald-400">{stream.monthlyIncome}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Growth</p>
                  <p className="text-2xl font-bold text-green-400">{stream.growth}</p>
                </div>
              </div>

              {selectedStream === stream.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-emerald-600/20 pt-4 space-y-3"
                >
                  <div className="grid grid-cols-2 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Hours/Week</p>
                      <p className="font-semibold text-slate-300">{stream.hours}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Clients</p>
                      <p className="font-semibold text-slate-300">{stream.clients}</p>
                    </div>
                  </div>
                  <button className="btn-primary w-full text-sm">View Details</button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Startup Ideas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Potential Startup Ideas</h2>
        <div className="space-y-4">
          {startupIdeas.map((idea) => {
            const scoreColor = idea.score >= 8 ? 'text-green-400' : idea.score >= 7 ? 'text-yellow-400' : 'text-orange-400';

            return (
              <motion.div
                key={idea.id}
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-5 rounded-lg card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{idea.name}</h3>
                    <p className="text-sm text-slate-400">{idea.market}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${scoreColor}`}>{idea.score}</p>
                    <p className="text-xs text-slate-500">Score</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Potential</p>
                    <p className="font-semibold text-slate-300">{idea.potential}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Investment</p>
                    <p className="font-semibold text-slate-300 text-xs">{idea.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Timeline</p>
                    <p className="font-semibold text-slate-300 text-xs">{idea.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Stage</p>
                    <p className="font-semibold text-emerald-400">{idea.stage}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Freelancing Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Freelancing Roadmap</h2>
        <div className="space-y-4">
          {freelancingGuide.map((step) => (
            <motion.div
              key={step.step}
              whileHover={{ scale: 1.01 }}
              className="flex gap-6 p-5 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-emerald flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{step.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {step.tips.map((tip) => (
                    <span key={tip} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tip}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Timeline: {step.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
