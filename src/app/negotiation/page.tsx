'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  Plus,
  MessageCircle,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

const negotiationFrameworks = [
  {
    id: 1,
    name: 'BATNA (Best Alternative to Negotiated Agreement)',
    description: 'Know your best alternative if negotiation fails',
    steps: [
      'Identify all alternatives',
      'Evaluate each alternative',
      'Determine your BATNA',
      'Set your walk-away point',
      'Use it as leverage',
    ],
    usedIn: 'All negotiations',
    difficulty: 'Beginner',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Interest-Based Relational (IBR)',
    description: 'Focus on interests, not positions; build relationships',
    steps: [
      'Listen to understand interests',
      'Separate people from problem',
      'Generate options for mutual gain',
      'Use objective criteria',
      'Agree on clear terms',
    ],
    usedIn: 'Salary, contract, partnership',
    difficulty: 'Intermediate',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Anchoring Strategy',
    description: 'Make first offer to set negotiation baseline',
    steps: [
      'Research fair market value',
      'Make ambitious first offer',
      'Support with reasoning',
      'Let other party counter',
      'Negotiate to middle ground',
    ],
    usedIn: 'Salary, pricing, deals',
    difficulty: 'Beginner',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Collaborative Problem-Solving',
    description: 'Work together to find creative solutions',
    steps: [
      'Define the problem together',
      'Explore creative options',
      'Evaluate alternatives',
      'Find win-win solution',
      'Formalize agreement',
    ],
    usedIn: 'Complex deals, partnerships',
    difficulty: 'Advanced',
    rating: 4.8,
  },
];

const negotiationScenarios = [
  {
    id: 1,
    title: 'Salary Negotiation',
    context: 'Discussing compensation for new role',
    difficulty: 'Intermediate',
    keyPoints: ['Research market rate', 'Highlight value', 'Emphasize contributions', 'Be prepared to walk'],
    target: '+15-25% increase',
  },
  {
    id: 2,
    title: 'Vendor Pricing',
    context: 'Negotiating contract terms and pricing',
    difficulty: 'Intermediate',
    keyPoints: ['Volume discounts', 'Payment terms', 'Service levels', 'Long-term partnership'],
    target: 'Cost savings 10-20%',
  },
  {
    id: 3,
    title: 'Partnership Terms',
    context: 'Structuring equity and terms',
    difficulty: 'Advanced',
    keyPoints: ['Equity split', 'Decision authority', 'Exit clauses', 'Dispute resolution'],
    target: 'Fair and aligned',
  },
  {
    id: 4,
    title: 'Customer Objection',
    context: 'Handling price or feature pushback',
    difficulty: 'Beginner',
    keyPoints: ['Validate concern', 'Show ROI', 'Provide alternatives', 'Create urgency'],
    target: 'Deal closure',
  },
  {
    id: 5,
    title: 'Promotion Negotiation',
    context: 'Discussing promotion and salary increase',
    difficulty: 'Intermediate',
    keyPoints: ['Document achievements', 'Peer benchmarking', 'Job market research', 'Timeline clarity'],
    target: '+30-40% boost',
  },
  {
    id: 6,
    title: 'Deal Terms',
    context: 'Structuring acquisition or major contract',
    difficulty: 'Advanced',
    keyPoints: ['Price structure', 'Earnouts', 'Representations', 'Post-closing support'],
    target: 'Optimal structure',
  },
];

const communicationTips = [
  {
    id: 1,
    principle: 'Active Listening',
    description: 'Listen 70%, talk 30%',
    tactics: [
      'Ask open-ended questions',
      'Take notes',
      'Paraphrase to confirm understanding',
      'Notice non-verbal cues',
      'Show genuine interest',
    ],
  },
  {
    id: 2,
    principle: 'Emotional Intelligence',
    description: 'Manage emotions in negotiation',
    tactics: [
      'Stay calm under pressure',
      'Read emotions of other party',
      'Use strategic silence',
      'Don\'t react emotionally',
      'Build rapport first',
    ],
  },
  {
    id: 3,
    principle: 'Framing & Language',
    description: 'Use language strategically',
    tactics: [
      'Frame positively',
      'Use hypotheticals',
      'Avoid absolute statements',
      'Use "we" language',
      'Anticipate objections',
    ],
  },
  {
    id: 4,
    principle: 'Networking & Relationships',
    description: 'Build long-term relationships',
    tactics: [
      'Follow-up consistently',
      'Find mutual interests',
      'Help without expecting return',
      'Be reliable',
      'Show genuine care',
    ],
  },
];

const softSkills = [
  { skill: 'Empathy', importance: 95, level: 'Master' },
  { skill: 'Communication', importance: 98, level: 'Master' },
  { skill: 'Emotional Intelligence', importance: 92, level: 'Advanced' },
  { skill: 'Persuasion', importance: 90, level: 'Advanced' },
  { skill: 'Confidence', importance: 88, level: 'Advanced' },
  { skill: 'Conflict Resolution', importance: 85, level: 'Intermediate' },
];

export default function NegotiationPage() {
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Negotiation & Soft Skills</h1>
            <p className="text-slate-400">Frameworks, scenarios, and communication mastery</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Negotiation Frameworks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Negotiation Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {negotiationFrameworks.map((framework) => (
            <motion.div
              key={framework.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFramework(selectedFramework === framework.id ? null : framework.id)}
              className={`glassmorphism p-6 rounded-xl card-hover cursor-pointer transition ${
                selectedFramework === framework.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{framework.name}</h3>
                  <p className="text-sm text-slate-400">{framework.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-bold text-white">{framework.rating}</span>
                  </div>
                </div>
              </div>

              {selectedFramework === framework.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 border-t border-emerald-600/20 pt-4"
                >
                  <div>
                    <p className="text-sm text-emerald-400 font-semibold mb-3">Implementation Steps:</p>
                    <ol className="space-y-2">
                      {framework.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-bold text-emerald-400 flex-shrink-0">{idx + 1}.</span>
                          <span className="text-sm text-slate-300">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Used For</p>
                      <p className="text-sm font-semibold text-slate-300">{framework.usedIn}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Difficulty</p>
                      <p className="text-sm font-semibold text-emerald-400">{framework.difficulty}</p>
                    </div>
                  </div>

                  <button className="btn-primary w-full text-sm">Learn More</button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Negotiation Scenarios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Negotiation Scenarios & Playbooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {negotiationScenarios.map((scenario) => {
            const difficultyColor =
              scenario.difficulty === 'Beginner'
                ? 'bg-green-500/20 text-green-300'
                : scenario.difficulty === 'Intermediate'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-red-500/20 text-red-300';

            return (
              <motion.div
                key={scenario.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: scenario.id * 0.1 }}
                className="glassmorphism p-6 rounded-xl card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex-1">{scenario.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${difficultyColor}`}>
                    {scenario.difficulty}
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-4">{scenario.context}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-emerald-400 font-semibold mb-2">Key Points:</p>
                    <ul className="space-y-1">
                      {scenario.keyPoints.map((point) => (
                        <li key={point} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 rounded p-3 border border-slate-700/50">
                    <p className="text-xs text-slate-500 mb-1">Target Outcome</p>
                    <p className="font-semibold text-emerald-400">{scenario.target}</p>
                  </div>

                  <button className="btn-secondary w-full text-sm">View Playbook</button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Communication Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Communication Principles</h2>
        <div className="space-y-4">
          {communicationTips.map((tip) => (
            <motion.div
              key={tip.id}
              whileHover={{ scale: 1.01 }}
              className="glassmorphism p-6 rounded-lg card-hover"
            >
              <h3 className="text-lg font-bold text-white mb-2">{tip.principle}</h3>
              <p className="text-sm text-slate-400 mb-4">{tip.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {tip.tactics.map((tactic) => (
                  <div key={tactic} className="bg-slate-800/50 p-3 rounded border border-slate-700/50 hover:border-emerald-600/50 transition">
                    <p className="text-xs text-slate-300 text-center">{tactic}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills Assessment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Soft Skills Development</h2>
        <div className="space-y-4">
          {softSkills.map((item) => (
            <motion.div
              key={item.skill}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div>
                <h3 className="font-bold text-white">{item.skill}</h3>
                <p className="text-xs text-slate-500 mt-1">Mastery Level: {item.level}</p>
              </div>
              <div className="flex-1 mx-6">
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.importance}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  />
                </div>
              </div>
              <div className="text-right min-w-fit">
                <p className="font-bold text-emerald-400">{item.importance}%</p>
                <p className="text-xs text-slate-500">importance</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-emerald-600/10 border border-emerald-600/30 rounded-lg">
          <p className="text-sm text-slate-300">
            <span className="font-bold text-emerald-400">Pro Tip:</span> Master communication and empathy first. These two skills will unlock success in 90% of business negotiations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
