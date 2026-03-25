'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Plus,
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Target,
  Users,
  DollarSign,
  BarChart3,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const pipelineData = [
  { name: 'Lead', value: 45, color: '#3b82f6' },
  { name: 'Qualified', value: 32, color: '#8b5cf6' },
  { name: 'Proposal', value: 18, color: '#f59e0b' },
  { name: 'Negotiation', value: 12, color: '#ec4899' },
  { name: 'Won', value: 20, color: '#10b981' },
];

const deals = [
  {
    id: 1,
    company: 'Acme Corp',
    amount: '$125,000',
    status: 'negotiation',
    probability: 75,
    closingDate: '2026-04-15',
    owner: 'John Smith',
  },
  {
    id: 2,
    company: 'TechVision Ltd',
    amount: '$89,500',
    status: 'proposal',
    probability: 60,
    closingDate: '2026-04-22',
    owner: 'Sarah Johnson',
  },
  {
    id: 3,
    company: 'Global Solutions',
    amount: '$250,000',
    status: 'proposal',
    probability: 45,
    closingDate: '2026-05-10',
    owner: 'Mike Chen',
  },
  {
    id: 4,
    company: 'Digital Innovations',
    amount: '$67,200',
    status: 'qualified',
    probability: 30,
    closingDate: '2026-05-25',
    owner: 'Emily Davis',
  },
  {
    id: 5,
    company: 'Enterprise Partners',
    amount: '$340,000',
    status: 'won',
    probability: 100,
    closingDate: '2026-03-20',
    owner: 'John Smith',
  },
  {
    id: 6,
    company: 'Growth Metrics Inc',
    amount: '$145,800',
    status: 'negotiation',
    probability: 80,
    closingDate: '2026-04-08',
    owner: 'Sarah Johnson',
  },
];

const salesReps = [
  { name: 'John Smith', deals: 8, revenue: '$465,000', conversion: '42%', target: '$500,000' },
  { name: 'Sarah Johnson', revenue: '$389,500', deals: 6, conversion: '35%', target: '$400,000' },
  { name: 'Mike Chen', revenue: '$267,300', deals: 5, conversion: '28%', target: '$350,000' },
  { name: 'Emily Davis', revenue: '$178,900', deals: 4, conversion: '22%', target: '$300,000' },
];

const monthlyForecast = [
  { month: 'Jan', forecast: 45000, actual: 42000, target: 50000 },
  { month: 'Feb', forecast: 52000, actual: 51000, target: 55000 },
  { month: 'Mar', forecast: 61000, actual: 62000, target: 60000 },
  { month: 'Apr', forecast: 73000, actual: null, target: 75000 },
  { month: 'May', forecast: 68000, actual: null, target: 70000 },
  { month: 'Jun', forecast: 75000, actual: null, target: 78000 },
];

export default function SalesPage() {
  const [selectedDeal, setSelectedDeal] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      lead: 'bg-blue-500/20 text-blue-300',
      qualified: 'bg-purple-500/20 text-purple-300',
      proposal: 'bg-amber-500/20 text-amber-300',
      negotiation: 'bg-pink-500/20 text-pink-300',
      won: 'bg-green-500/20 text-green-300',
    };
    return colors[status] || 'bg-slate-500/20 text-slate-300';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'won':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'negotiation':
        return <Clock className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  const totalPipeline = deals.reduce((sum, deal) => {
    const amount = parseInt(deal.amount.replace(/[$,]/g, ''));
    return sum + amount;
  }, 0);

  const wonDeals = deals.filter((d) => d.status === 'won').length;
  const avgDealSize = totalPipeline / deals.length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Sales Dashboard</h1>
            <p className="text-slate-400">Pipeline management and deal tracking</p>
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
              <p className="text-slate-400 text-sm mb-2">Total Pipeline</p>
              <p className="text-3xl font-bold text-emerald-400">${(totalPipeline / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-slate-500 mt-2">{deals.length} deals</p>
            </div>
            <Target className="w-10 h-10 text-emerald-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Deals Won</p>
              <p className="text-3xl font-bold text-green-400">{wonDeals}</p>
              <p className="text-xs text-slate-500 mt-2">$340K this month</p>
            </div>
            <CheckCircle2 className="w-10 h-10 text-green-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Avg Deal Size</p>
              <p className="text-3xl font-bold text-blue-400">${(avgDealSize / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500 mt-2">Up 8% from last month</p>
            </div>
            <DollarSign className="w-10 h-10 text-blue-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Sales Reps</p>
              <p className="text-3xl font-bold text-purple-400">{salesReps.length}</p>
              <p className="text-xs text-slate-500 mt-2">100% quota on track</p>
            </div>
            <Users className="w-10 h-10 text-purple-500/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Sales Pipeline Funnel</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pipelineData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pipelineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Monthly Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Sales Forecast vs Actual</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyForecast}>
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
              <Bar dataKey="forecast" fill="#3b82f6" />
              <Bar dataKey="actual" fill="#10b981" />
              <Bar dataKey="target" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Sales Reps Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Top Sales Representatives</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-600/20">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Name</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Deals</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Revenue</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Conversion</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Target</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Progress</th>
              </tr>
            </thead>
            <tbody>
              {salesReps.map((rep, idx) => {
                const revenue = parseInt(rep.revenue.replace(/[$,]/g, ''));
                const target = parseInt(rep.target.replace(/[$,]/g, ''));
                const progress = (revenue / target) * 100;

                return (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
                    <td className="py-4 px-4 font-semibold">{rep.name}</td>
                    <td className="py-4 px-4 text-blue-400">{rep.deals}</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">{rep.revenue}</td>
                    <td className="py-4 px-4 text-purple-400">{rep.conversion}</td>
                    <td className="py-4 px-4 text-slate-400">{rep.target}</td>
                    <td className="py-4 px-4">
                      <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(progress, 100)}%` }}
                          transition={{ duration: 1 }}
                          className={`h-full ${progress >= 100 ? 'bg-green-500' : 'bg-gradient-to-r from-emerald-500 to-cyan-500'}`}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{progress.toFixed(0)}%</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Deals Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-emerald-400">Active Deals</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Deal
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:border-emerald-600 focus:outline-none transition"
            />
          </div>
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="space-y-3">
          {deals.map((deal) => (
            <motion.div
              key={deal.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedDeal(selectedDeal === deal.id ? null : deal.id)}
              className={`p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 cursor-pointer transition ${
                selectedDeal === deal.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div>
                    <h3 className="font-bold text-white">{deal.company}</h3>
                    <p className="text-sm text-slate-400">Owner: {deal.owner}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-400">{deal.amount}</p>
                  <p className="text-xs text-slate-400">Close: {deal.closingDate}</p>
                </div>
                <div className="ml-6 flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getStatusColor(deal.status)}`}>
                    {getStatusIcon(deal.status)}
                    {deal.status.charAt(0).toUpperCase() + deal.status.slice(1)}
                  </span>
                </div>
              </div>

              {selectedDeal === deal.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-slate-700 space-y-3"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Probability</p>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${deal.probability}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        />
                      </div>
                      <p className="text-sm font-semibold text-emerald-400 mt-1">{deal.probability}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Days to Close</p>
                      <p className="text-lg font-bold text-amber-400">
                        {Math.ceil((new Date(deal.closingDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Expected Value</p>
                      <p className="text-lg font-bold text-blue-400">
                        ${(parseInt(deal.amount.replace(/[$,]/g, '')) * (deal.probability / 100) / 1000).toFixed(0)}K
                      </p>
                    </div>
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
