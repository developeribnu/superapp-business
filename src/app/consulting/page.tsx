'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Plus,
  BookOpen,
  BarChart3,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';
import Link from 'next/link';

const frameworks = [
  {
    id: 1,
    name: 'McKinsey 7S Framework',
    author: 'McKinsey & Company',
    description: 'Organizational effectiveness through 7 interconnected dimensions',
    elements: ['Strategy', 'Structure', 'Systems', 'Skills', 'Style', 'Staff', 'Shared Values'],
    useCase: 'Organizational change, strategy implementation',
    complexity: 'Intermediate',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Porters Five Forces',
    author: 'Michael Porter',
    description: 'Analyze competitive dynamics and industry attractiveness',
    elements: ['Threat of New Entrants', 'Bargaining Power of Suppliers', 'Bargaining Power of Buyers', 'Threat of Substitutes', 'Competitive Rivalry'],
    useCase: 'Market analysis, competitive strategy',
    complexity: 'Beginner',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'MECE Principle',
    author: 'McKinsey & Company',
    description: 'Mutually Exclusive, Collectively Exhaustive framework for problem solving',
    elements: ['Define Problem', 'Break Down Systematically', 'No Overlaps', 'Complete Coverage'],
    useCase: 'Problem analysis, hypothesis development',
    complexity: 'Intermediate',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'BCG Growth-Share Matrix',
    author: 'Boston Consulting Group',
    description: 'Analyze portfolio of business units based on market growth and share',
    elements: ['Stars', 'Cash Cows', 'Question Marks', 'Dogs'],
    useCase: 'Portfolio management, resource allocation',
    complexity: 'Beginner',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Ansoff Matrix',
    author: 'Igor Ansoff',
    description: 'Growth strategies through product and market combinations',
    elements: ['Market Penetration', 'Product Development', 'Market Development', 'Diversification'],
    useCase: 'Growth strategy, expansion planning',
    complexity: 'Beginner',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Value Chain Analysis',
    author: 'Michael Porter',
    description: 'Identify sources of competitive advantage through value creation',
    elements: ['Inbound Logistics', 'Operations', 'Outbound Logistics', 'Marketing', 'Service'],
    useCase: 'Competitive advantage, cost optimization',
    complexity: 'Advanced',
    rating: 4.8,
  },
];

const caseInterviews = [
  {
    id: 1,
    title: 'Market Sizing',
    description: 'Estimate the size of a new market opportunity',
    difficulty: 'Easy',
    duration: '15 mins',
    format: 'Quantitative',
    example: 'How many gas stations in the United States?',
  },
  {
    id: 2,
    title: 'Profitability Analysis',
    description: 'Diagnose why a business is losing money',
    difficulty: 'Medium',
    duration: '20 mins',
    format: 'Analytical',
    example: 'Airline company is experiencing declining profits',
  },
  {
    id: 3,
    title: 'Entry Strategy',
    description: 'Determine if company should enter a new market',
    difficulty: 'Hard',
    duration: '25 mins',
    format: 'Strategic',
    example: 'Should an automotive company enter the electric vehicle market?',
  },
  {
    id: 4,
    title: 'M&A Analysis',
    description: 'Evaluate acquisition opportunity',
    difficulty: 'Hard',
    duration: '25 mins',
    format: 'Financial',
    example: 'Should we acquire competitor X for $500M?',
  },
  {
    id: 5,
    title: 'Operations Improvement',
    description: 'Optimize operational efficiency',
    difficulty: 'Medium',
    duration: '20 mins',
    format: 'Analytical',
    example: 'Logistics company wants to reduce delivery costs by 20%',
  },
  {
    id: 6,
    title: 'Pricing Strategy',
    description: 'Determine optimal pricing for product',
    difficulty: 'Medium',
    duration: '20 mins',
    format: 'Strategic',
    example: 'How should we price our new SaaS offering?',
  },
];

const consultingTools = [
  {
    name: 'Hypothesis Testing',
    description: 'Develop testable hypotheses to guide analysis',
    steps: ['Define problem clearly', 'Generate hypotheses', 'Prioritize', 'Test & validate'],
  },
  {
    name: 'Stakeholder Analysis',
    description: 'Identify and map all affected parties',
    steps: ['List stakeholders', 'Assess interests & influence', 'Plan engagement', 'Manage relationships'],
  },
  {
    name: 'Root Cause Analysis',
    description: '5 Whys method for problem identification',
    steps: ['State problem', 'Ask why 5 times', 'Identify root cause', 'Develop solution'],
  },
  {
    name: 'Benchmarking',
    description: 'Compare performance against best practices',
    steps: ['Identify metrics', 'Find benchmark', 'Analyze gap', 'Plan improvement'],
  },
];

const consultingResources = [
  {
    id: 1,
    resource: 'Case Interview Handbook',
    author: 'Dan Day',
    pages: 400,
    rating: 4.7,
    type: 'Book',
  },
  {
    id: 2,
    resource: 'Cracking the Consulting Interview',
    author: 'McDowell & Bavaro',
    pages: 312,
    rating: 4.6,
    type: 'Book',
  },
  {
    id: 3,
    resource: 'The Art of Strategy',
    author: 'Dixit & Nalebuff',
    pages: 560,
    rating: 4.8,
    type: 'Book',
  },
  {
    id: 4,
    resource: 'Strategy for Consultants',
    author: 'Freeman et al.',
    pages: 480,
    rating: 4.5,
    type: 'Online Course',
  },
];

export default function ConsultingPage() {
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Consulting Hub</h1>
            <p className="text-slate-400">Frameworks, case studies, and interview preparation</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Total Frameworks</p>
          <p className="text-3xl font-bold text-emerald-400">{frameworks.length}</p>
          <p className="text-xs text-slate-500 mt-2">Ready to apply</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Case Studies</p>
          <p className="text-3xl font-bold text-blue-400">{caseInterviews.length}</p>
          <p className="text-xs text-slate-500 mt-2">Practice interviews</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Core Tools</p>
          <p className="text-3xl font-bold text-purple-400">{consultingTools.length}</p>
          <p className="text-xs text-slate-500 mt-2">Problem-solving methods</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Resources</p>
          <p className="text-3xl font-bold text-cyan-400">{consultingResources.length}</p>
          <p className="text-xs text-slate-500 mt-2">Learning materials</p>
        </motion.div>
      </motion.div>

      {/* Consulting Frameworks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Consulting Frameworks Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frameworks.map((framework) => (
            <motion.div
              key={framework.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFramework(selectedFramework === framework.id ? null : framework.id)}
              className={`glassmorphism p-6 rounded-xl card-hover cursor-pointer transition ${
                selectedFramework === framework.id ? 'ring-2 ring-emerald-400/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{framework.name}</h3>
                  <p className="text-sm text-slate-400">{framework.author}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-semibold text-white">{framework.rating}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-3">{framework.description}</p>

              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{framework.complexity}</span>
              </div>

              {selectedFramework === framework.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 border-t border-emerald-600/20 pt-4"
                >
                  <div>
                    <p className="text-sm text-emerald-400 font-semibold mb-2">Key Elements:</p>
                    <div className="flex flex-wrap gap-2">
                      {framework.elements.map((element) => (
                        <span key={element} className="text-xs bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full">
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">
                      <span className="text-slate-300 font-semibold">Use Case:</span> {framework.useCase}
                    </p>
                  </div>
                  <button className="btn-primary w-full text-sm">Start Learning</button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Case Interview Training */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Case Interview Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseInterviews.map((caseStudy) => {
            const difficultyColor =
              caseStudy.difficulty === 'Easy'
                ? 'bg-green-500/20 text-green-300'
                : caseStudy.difficulty === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-red-500/20 text-red-300';

            return (
              <motion.div
                key={caseStudy.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: caseStudy.id * 0.1 }}
                className="glassmorphism p-6 rounded-xl card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex-1">{caseStudy.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${difficultyColor}`}>
                    {caseStudy.difficulty}
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-4">{caseStudy.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Type</p>
                    <p className="font-semibold text-slate-300">{caseStudy.format}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Duration</p>
                    <p className="font-semibold text-slate-300">{caseStudy.duration}</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded p-3 mb-4 border border-slate-700/50">
                  <p className="text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold">Example:</span> {caseStudy.example}
                  </p>
                </div>

                <button className="btn-primary w-full text-sm">Start Case</button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Core Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Core Consulting Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingTools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-xl card-hover"
            >
              <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{tool.description}</p>

              <div className="space-y-2">
                <p className="text-xs text-emerald-400 font-semibold">Steps:</p>
                {tool.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-emerald-400 font-bold">{stepIdx + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Recommended Resources</h2>
        <div className="space-y-3">
          {consultingResources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div className="flex-1">
                <h3 className="font-bold text-white">{resource.resource}</h3>
                <p className="text-sm text-slate-400">{resource.author}</p>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Rating</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="font-semibold text-slate-300">{resource.rating}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Type</p>
                  <p className="font-semibold text-slate-300 text-sm">{resource.type}</p>
                </div>
                <button className="btn-primary text-sm whitespace-nowrap">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
