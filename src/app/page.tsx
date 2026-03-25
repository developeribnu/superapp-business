'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Megaphone,
  Lightbulb,
  Users,
  CheckSquare,
  Briefcase,
  Zap,
  Rocket,
  Handshake,
  Package,
  LayoutGrid,
  BarChart3,
  PieChart,
  Target,
  Award,
  Clock,
  Zap as ZapIcon,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPI, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const departments = [
  {
    id: 'sales',
    name: 'Sales',
    icon: TrendingUp,
    href: '/sales',
    color: 'from-blue-500 to-blue-600',
    stats: { deals: 127, pipeline: '$2.4M', closedMonth: '$450K' },
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    href: '/marketing',
    color: 'from-purple-500 to-purple-600',
    stats: { campaigns: 12, reach: '2.1M', conversion: '3.2%' },
  },
  {
    id: 'strategy',
    name: 'Strategy',
    icon: Lightbulb,
    href: '/strategy',
    color: 'from-amber-500 to-amber-600',
    stats: { initiatives: 8, impact: 'High', timeline: 'Q2-Q3' },
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: Users,
    href: '/leadership',
    color: 'from-red-500 to-red-600',
    stats: { teams: 12, engagement: '92%', retention: '95%' },
  },
  {
    id: 'management',
    name: 'Management',
    icon: CheckSquare,
    href: '/management',
    color: 'from-cyan-500 to-cyan-600',
    stats: { projects: 34, onTrack: '88%', resources: '45' },
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: Briefcase,
    href: '/consulting',
    color: 'from-green-500 to-green-600',
    stats: { frameworks: 15, clients: 8, success: '94%' },
  },
];

const kpiData = [
  { month: 'Jan', revenue: 45000, costs: 28000, profit: 17000 },
  { month: 'Feb', revenue: 52000, costs: 30000, profit: 22000 },
  { month: 'Mar', revenue: 61000, costs: 32000, profit: 29000 },
  { month: 'Apr', revenue: 58000, costs: 31000, profit: 27000 },
  { month: 'May', revenue: 73000, costs: 35000, profit: 38000 },
  { month: 'Jun', revenue: 82000, costs: 38000, profit: 44000 },
];

const departmentHealth = [
  { name: 'Sales', value: 88, color: '#3b82f6' },
  { name: 'Marketing', value: 82, color: '#a855f7' },
  { name: 'Operations', value: 91, color: '#10b981' },
  { name: 'HR', value: 85, color: '#ec4899' },
  { name: 'Strategy', value: 79, color: '#f59e0b' },
];

const orgStructure = [
  { level: 'CEO', count: 1, budget: '$250K' },
  { level: 'C-Suite', count: 5, budget: '$1.2M' },
  { level: 'Directors', count: 12, budget: '$2.1M' },
  { level: 'Managers', count: 35, budget: '$3.5M' },
  { level: 'Individual Contributors', count: 145, budget: '$5.8M' },
];

export default function Dashboard() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Business Dashboard
        </h1>
        <p className="text-slate-400 text-lg">Unified view of all departments and key metrics</p>
      </motion.div>

      {/* KPI Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <motion.div variants={item} className="glassmorphism p-6 rounded-xl card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-emerald-400">$371K</p>
              <p className="text-xs text-green-400 mt-2">+12% from last month</p>
            </div>
            <TrendingUp className="w-10 h-10 text-emerald-500/30" />
          </div>
        </motion.div>

        <motion.div variants={item} className="glassmorphism p-6 rounded-xl card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Active Projects</p>
              <p className="text-3xl font-bold text-cyan-400">34</p>
              <p className="text-xs text-green-400 mt-2">88% on track</p>
            </div>
            <CheckSquare className="w-10 h-10 text-cyan-500/30" />
          </div>
        </motion.div>

        <motion.div variants={item} className="glassmorphism p-6 rounded-xl card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Team Members</p>
              <p className="text-3xl font-bold text-purple-400">198</p>
              <p className="text-xs text-green-400 mt-2">92% engagement</p>
            </div>
            <Users className="w-10 h-10 text-purple-500/30" />
          </div>
        </motion.div>

        <motion.div variants={item} className="glassmorphism p-6 rounded-xl card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Gross Margin</p>
              <p className="text-3xl font-bold text-amber-400">54.2%</p>
              <p className="text-xs text-green-400 mt-2">+2.1% improvement</p>
            </div>
            <BarChart3 className="w-10 h-10 text-amber-500/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Financial Overview (6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={kpiData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.5)" />
            <XAxis stroke="rgba(148, 163, 184, 0.5)" />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#22c55e" dot={{ fill: '#22c55e' }} name="Revenue" />
            <Line type="monotone" dataKey="costs" stroke="#ef4444" dot={{ fill: '#ef4444' }} name="Costs" />
            <Line type="monotone" dataKey="profit" stroke="#3b82f6" dot={{ fill: '#3b82f6' }} name="Profit" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Department Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Department Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const DeptIcon = dept.icon;
            const isSelected = selectedDept === dept.id;

            return (
              <motion.div
                key={dept.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedDept(isSelected ? null : dept.id)}
                className={`glassmorphism rounded-xl p-6 card-hover cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-emerald-400/50' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${dept.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <DeptIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{dept.name}</h3>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 border-t border-emerald-600/20 pt-4"
                  >
                    {Object.entries(dept.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm">
                        <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-emerald-400">{value}</span>
                      </div>
                    ))}
                    <Link href={dept.href}>
                      <button className="btn-primary w-full mt-4 text-sm">
                        View Details →
                      </button>
                    </Link>
                  </motion.div>
                )}

                {!isSelected && (
                  <div className="space-y-2">
                    {Object.entries(dept.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm opacity-60">
                        <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Department Health & Org Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Health Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Department Health Score</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentHealth}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(51, 65, 85, 0.5)" />
              <XAxis dataKey="name" stroke="rgba(148, 163, 184, 0.5)" />
              <YAxis stroke="rgba(148, 163, 184, 0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" fill="#10b981">
                {departmentHealth.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Org Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Organizational Structure</h2>
          <div className="space-y-4">
            {orgStructure.map((level, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition">
                <div>
                  <p className="font-semibold text-slate-100">{level.level}</p>
                  <p className="text-sm text-slate-400">{level.count} positions</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-400">{level.budget}</p>
                  <div className="w-32 h-2 bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      style={{ width: `${(parseInt(level.budget) / 12700) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary py-3 flex items-center justify-center gap-2">
            <Rocket className="w-5 h-5" />
            New Initiative
          </button>
          <button className="btn-secondary py-3 flex items-center justify-center gap-2">
            <Award className="w-5 h-5" />
            Generate Report
          </button>
          <button className="btn-secondary py-3 flex items-center justify-center gap-2">
            <Target className="w-5 h-5" />
            Set OKRs
          </button>
        </div>
      </motion.div>
    </div>
  );
}
