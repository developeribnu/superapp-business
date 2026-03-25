'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Plus,
  BarChart3,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Target,
  Zap,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import Link from 'next/link';

const swotData = {
  strengths: [
    { id: 1, title: 'Strong Brand Reputation', impact: 'High', description: 'Market leader in innovation and customer satisfaction' },
    { id: 2, title: 'Diverse Product Portfolio', impact: 'High', description: 'Multiple revenue streams across different segments' },
    { id: 3, title: 'Talented Team', impact: 'High', description: 'Top talent with deep industry expertise' },
    { id: 4, title: 'Advanced Technology', impact: 'Medium', description: 'Proprietary systems and infrastructure' },
  ],
  weaknesses: [
    { id: 1, title: 'High Operating Costs', impact: 'High', description: 'Need to optimize expense structure' },
    { id: 2, title: 'Limited International Presence', impact: 'Medium', description: 'Primary focus on domestic market' },
    { id: 3, title: 'Legacy Systems', impact: 'Medium', description: 'Some outdated infrastructure requiring modernization' },
    { id: 4, title: 'Slower Decision Making', impact: 'Low', description: 'Complex organizational structure' },
  ],
  opportunities: [
    { id: 1, title: 'AI/ML Integration', impact: 'High', description: 'Automate processes and improve customer experience' },
    { id: 2, title: 'Global Expansion', impact: 'High', description: 'Enter new markets (Asia, Europe)' },
    { id: 3, title: 'Partnership Ecosystem', impact: 'Medium', description: 'Strategic partnerships with complementary businesses' },
    { id: 4, title: 'Subscription Model', impact: 'Medium', description: 'Shift towards recurring revenue streams' },
  ],
  threats: [
    { id: 1, title: 'Increased Competition', impact: 'High', description: 'New entrants disrupting the market' },
    { id: 2, title: 'Market Saturation', impact: 'High', description: 'Declining growth rates in mature segments' },
    { id: 3, title: 'Regulatory Changes', impact: 'Medium', description: 'New compliance requirements' },
    { id: 4, title: 'Economic Downturn', impact: 'Medium', description: 'Potential customer spending reduction' },
  ],
};

const businessModels = [
  {
    id: 1,
    name: 'B2B SaaS',
    description: 'Software as a Service for enterprises',
    revenue: 'Subscription',
    customers: '500+',
    growth: '+35% YoY',
    margin: '72%',
  },
  {
    id: 2,
    name: 'Marketplace',
    description: 'Platform connecting buyers and sellers',
    revenue: 'Commission',
    customers: '2K+',
    growth: '+52% YoY',
    margin: '28%',
  },
  {
    id: 3,
    name: 'Consulting Services',
    description: 'Professional services and advisory',
    revenue: 'Project-based',
    customers: '50+',
    growth: '+18% YoY',
    margin: '45%',
  },
];

const strategicInitiatives = [
  {
    id: 1,
    title: 'Digital Transformation',
    status: 'in-progress',
    owner: 'CTO',
    progress: 65,
    budget: '$500K',
    impact: 'High',
    timeline: 'Q2-Q4 2026',
  },
  {
    id: 2,
    title: 'Market Expansion - Southeast Asia',
    status: 'planned',
    owner: 'CEO',
    progress: 15,
    budget: '$2M',
    impact: 'Very High',
    timeline: 'Q3 2026 - Q2 2027',
  },
  {
    id: 3,
    title: 'AI-Powered Product Enhancement',
    status: 'in-progress',
    owner: 'Product Head',
    progress: 40,
    budget: '$750K',
    impact: 'High',
    timeline: 'Q2-Q3 2026',
  },
  {
    id: 4,
    title: 'Cost Optimization Program',
    status: 'completed',
    owner: 'CFO',
    progress: 100,
    budget: '$200K',
    impact: 'Medium',
    timeline: 'Q1 2026',
  },
];

const competitorAnalysis = [
  {
    name: 'Competitor A',
    marketShare: '28%',
    strength: 'Large customer base',
    weakness: 'Legacy technology',
    strategy: 'Price competition',
  },
  {
    name: 'Competitor B',
    marketShare: '19%',
    strength: 'Innovation-focused',
    weakness: 'Limited market reach',
    strategy: 'Premium positioning',
  },
  {
    name: 'Competitor C',
    marketShare: '12%',
    strength: 'Established brand',
    weakness: 'Slow to adapt',
    strategy: 'Traditional channels',
  },
];

export default function StrategyPage() {
  const [selectedSwot, setSelectedSwot] = useState<string>('strengths');

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High':
        return 'text-red-400 bg-red-500/10';
      case 'High':
        return 'text-orange-400 bg-orange-500/10';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/10';
      case 'Low':
        return 'text-green-400 bg-green-500/10';
      default:
        return 'text-slate-400';
    }
  };

  const swotColors: Record<string, string> = {
    strengths: 'from-green-500 to-emerald-600',
    weaknesses: 'from-red-500 to-rose-600',
    opportunities: 'from-blue-500 to-cyan-600',
    threats: 'from-orange-500 to-amber-600',
  };

  const swotIcons: Record<string, any> = {
    strengths: CheckCircle2,
    weaknesses: AlertCircle,
    opportunities: Zap,
    threats: TrendingUp,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Business Strategy</h1>
            <p className="text-slate-400">Business models, SWOT analysis, and strategic initiatives</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Business Model Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Business Model Canvas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessModels.map((model) => (
            <motion.div
              key={model.id}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism rounded-xl p-6 card-hover"
            >
              <h3 className="text-lg font-bold text-white mb-2">{model.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{model.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-slate-700">
                  <span className="text-sm text-slate-400">Revenue Model</span>
                  <span className="text-emerald-400 font-semibold">{model.revenue}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-slate-700">
                  <span className="text-sm text-slate-400">Active Customers</span>
                  <span className="text-blue-400 font-semibold">{model.customers}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-slate-700">
                  <span className="text-sm text-slate-400">Growth Rate</span>
                  <span className="text-green-400 font-semibold">{model.growth}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-slate-700">
                  <span className="text-sm text-slate-400">Gross Margin</span>
                  <span className="text-purple-400 font-semibold">{model.margin}</span>
                </div>
              </div>

              <button className="btn-primary w-full mt-6 text-sm">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SWOT Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">SWOT Analysis</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['strengths', 'weaknesses', 'opportunities', 'threats'].map((category) => {
            const label = category.charAt(0).toUpperCase() + category.slice(1);
            const Icon = swotIcons[category];
            const count = swotData[category as keyof typeof swotData].length;

            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedSwot(category)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedSwot === category
                    ? `border-emerald-500 bg-emerald-500/10`
                    : `border-slate-700 hover:border-slate-600`
                }`}
              >
                <div className={`bg-gradient-to-br ${swotColors[category]} w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-white">{label}</p>
                <p className="text-sm text-slate-400">{count} items</p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={selectedSwot}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {swotData[selectedSwot as keyof typeof swotData].map((item: any) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glassmorphism p-4 rounded-lg card-hover"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-white flex-1">{item.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${getImpactColor(item.impact)}`}>
                  {item.impact}
                </span>
              </div>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Strategic Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Strategic Initiatives</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Initiative
          </button>
        </div>

        <div className="space-y-4">
          {strategicInitiatives.map((initiative) => {
            const statusColor =
              initiative.status === 'completed'
                ? 'bg-green-500/20 text-green-300'
                : initiative.status === 'in-progress'
                  ? 'bg-blue-500/20 text-blue-300'
                  : 'bg-slate-500/20 text-slate-300';

            return (
              <motion.div
                key={initiative.id}
                whileHover={{ scale: 1.01 }}
                className="glassmorphism p-6 rounded-lg card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{initiative.title}</h3>
                    <p className="text-sm text-slate-400">Owner: {initiative.owner}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                    {initiative.status.replace('-', ' ').charAt(0).toUpperCase() + initiative.status.slice(1).replace('-', ' ')}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Budget</p>
                    <p className="font-semibold text-emerald-400">{initiative.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Impact</p>
                    <p className="font-semibold text-purple-400">{initiative.impact}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Timeline</p>
                    <p className="font-semibold text-blue-400 text-sm">{initiative.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Progress</p>
                    <p className="font-semibold text-cyan-400">{initiative.progress}%</p>
                  </div>
                </div>

                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${initiative.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Competitor Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Competitive Landscape</h2>

        <div className="space-y-4">
          {competitorAnalysis.map((competitor, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Competitor</p>
                  <p className="font-bold text-white">{competitor.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Market Share</p>
                  <p className="font-bold text-blue-400">{competitor.marketShare}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Key Strength</p>
                  <p className="text-sm text-slate-300">{competitor.strength}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Weakness</p>
                  <p className="text-sm text-slate-300">{competitor.weakness}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Strategy</p>
                  <p className="text-sm text-slate-300">{competitor.strategy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
