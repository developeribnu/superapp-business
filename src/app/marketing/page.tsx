'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  BarChart3,
  TrendingUp,
  Users,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const campaignPerformance = [
  { month: 'Jan', reach: 45000, engagement: 3200, conversions: 320 },
  { month: 'Feb', reach: 52000, engagement: 4100, conversions: 451 },
  { month: 'Mar', reach: 61000, engagement: 5200, conversions: 598 },
  { month: 'Apr', reach: 73000, engagement: 6800, conversions: 782 },
  { month: 'May', reach: 82000, engagement: 7900, conversions: 921 },
  { month: 'Jun', reach: 95000, engagement: 9200, conversions: 1087 },
];

const campaigns = [
  {
    id: 1,
    name: 'Spring Product Launch',
    status: 'active',
    channels: ['Email', 'Social', 'Content'],
    reach: 45000,
    engagement: '3.2%',
    roi: '285%',
    budget: '$15,000',
    spent: '$12,500',
    startDate: '2026-03-01',
    endDate: '2026-04-30',
  },
  {
    id: 2,
    name: 'Brand Awareness - Webinar Series',
    status: 'active',
    channels: ['Webinar', 'Email', 'LinkedIn'],
    reach: 28000,
    engagement: '4.8%',
    roi: '340%',
    budget: '$8,000',
    spent: '$6,200',
    startDate: '2026-02-15',
    endDate: '2026-05-15',
  },
  {
    id: 3,
    name: 'Customer Retention Program',
    status: 'scheduled',
    channels: ['Email', 'In-app'],
    reach: 12000,
    engagement: '6.1%',
    roi: null,
    budget: '$5,000',
    spent: '$1,200',
    startDate: '2026-04-01',
    endDate: '2026-06-30',
  },
  {
    id: 4,
    name: 'Paid Social Ads Q2',
    status: 'active',
    channels: ['Facebook', 'Instagram', 'TikTok'],
    reach: 156000,
    engagement: '2.1%',
    roi: '215%',
    budget: '$25,000',
    spent: '$18,750',
    startDate: '2026-03-15',
    endDate: '2026-06-15',
  },
];

const socialMetrics = [
  { platform: 'LinkedIn', followers: 12500, posts: 28, engagement: '4.2%', reach: 45000 },
  { platform: 'Twitter/X', followers: 8200, posts: 52, engagement: '2.8%', reach: 32000 },
  { platform: 'Facebook', followers: 18900, posts: 35, engagement: '1.9%', reach: 28500 },
  { platform: 'Instagram', followers: 6400, posts: 42, engagement: '5.1%', reach: 24000 },
];

const contentCalendar = [
  { week: 'Week 1', blog: 2, video: 1, social: 14, email: 2 },
  { week: 'Week 2', blog: 1, video: 2, social: 16, email: 3 },
  { week: 'Week 3', blog: 3, video: 1, social: 12, email: 2 },
  { week: 'Week 4', blog: 2, video: 2, social: 18, email: 4 },
];

export default function MarketingPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-300';
      case 'scheduled':
        return 'bg-blue-500/20 text-blue-300';
      case 'completed':
        return 'bg-gray-500/20 text-gray-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  const totalReach = campaigns.reduce((sum, c) => sum + c.reach, 0);
  const avgEngagement =
    (campaigns.reduce((sum, c) => sum + parseFloat(c.engagement), 0) / campaigns.length).toFixed(1);
  const activeCampaigns = campaigns.filter((c) => c.status === 'active').length;
  const avgROI = campaigns
    .filter((c) => c.roi)
    .reduce((sum, c) => sum + parseInt(c.roi || '0'), 0) / campaigns.filter((c) => c.roi).length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Marketing Dashboard</h1>
            <p className="text-slate-400">Campaigns, analytics and content strategy</p>
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
              <p className="text-slate-400 text-sm mb-2">Total Reach</p>
              <p className="text-3xl font-bold text-emerald-400">{(totalReach / 1000).toFixed(0)}K</p>
              <p className="text-xs text-slate-500 mt-2">Last 6 months</p>
            </div>
            <Eye className="w-10 h-10 text-emerald-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Avg Engagement</p>
              <p className="text-3xl font-bold text-purple-400">{avgEngagement}%</p>
              <p className="text-xs text-slate-500 mt-2">+1.2% vs last quarter</p>
            </div>
            <Heart className="w-10 h-10 text-purple-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Active Campaigns</p>
              <p className="text-3xl font-bold text-blue-400">{activeCampaigns}</p>
              <p className="text-xs text-slate-500 mt-2">${campaigns.reduce((sum, c) => sum + parseInt(c.budget.replace(/[$,]/g, '')), 0) / 1000}K total budget</p>
            </div>
            <Megaphone className="w-10 h-10 text-blue-500/30" />
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-2">Avg ROI</p>
              <p className="text-3xl font-bold text-green-400">{avgROI.toFixed(0)}%</p>
              <p className="text-xs text-slate-500 mt-2">Strong performance</p>
            </div>
            <TrendingUp className="w-10 h-10 text-green-500/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Campaign Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Campaign Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignPerformance}>
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
              <Line type="monotone" dataKey="reach" stroke="#3b82f6" name="Reach" />
              <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" name="Engagement" />
              <Line type="monotone" dataKey="conversions" stroke="#10b981" name="Conversions" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Content Calendar - This Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentCalendar}>
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
              <Bar dataKey="blog" fill="#3b82f6" name="Blog Posts" />
              <Bar dataKey="video" fill="#8b5cf6" name="Videos" />
              <Bar dataKey="social" fill="#f59e0b" name="Social Posts" />
              <Bar dataKey="email" fill="#10b981" name="Emails" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Social Media Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Social Media Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-emerald-600/20">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Platform</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Followers</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Posts</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Engagement</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Reach</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Growth</th>
              </tr>
            </thead>
            <tbody>
              {socialMetrics.map((metric, idx) => (
                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
                  <td className="py-4 px-4 font-semibold">{metric.platform}</td>
                  <td className="py-4 px-4 text-blue-400">{metric.followers.toLocaleString()}</td>
                  <td className="py-4 px-4 text-slate-400">{metric.posts}</td>
                  <td className="py-4 px-4 text-purple-400 font-semibold">{metric.engagement}</td>
                  <td className="py-4 px-4 text-emerald-400">{metric.reach.toLocaleString()}</td>
                  <td className="py-4 px-4 text-green-400">+12%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Campaigns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-emerald-400">Active Campaigns</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Campaign
          </button>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
              className={`p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 cursor-pointer transition ${
                selectedCampaign === campaign.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2">{campaign.name}</h3>
                  <div className="flex gap-2 mb-3">
                    {campaign.channels.map((channel) => (
                      <span key={channel} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(campaign.status)}`}>
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </span>
              </div>

              {selectedCampaign === campaign.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-slate-700 space-y-4"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Reach</p>
                      <p className="text-lg font-bold text-blue-400">{campaign.reach.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Engagement</p>
                      <p className="text-lg font-bold text-purple-400">{campaign.engagement}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">ROI</p>
                      <p className="text-lg font-bold text-green-400">{campaign.roi || 'N/A'}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Budget: {campaign.budget}</span>
                      <span className="text-emerald-400 font-semibold">Spent: {campaign.spent}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseInt(campaign.spent.replace(/[$,]/g, '')) / parseInt(campaign.budget.replace(/[$,]/g, ''))) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">
                    <p>{campaign.startDate} → {campaign.endDate}</p>
                  </div>
                </motion.div>
              )}

              {!selectedCampaign && (
                <div className="flex justify-between text-sm text-slate-400 mt-3">
                  <span>{campaign.reach.toLocaleString()} reach • {campaign.engagement} engagement</span>
                  <span className="text-emerald-400">ROI: {campaign.roi || 'TBD'}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
