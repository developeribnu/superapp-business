'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  BookOpen,
  Lightbulb,
  Award,
  TrendingUp,
  Target,
  MessageCircle,
  Plus,
  Zap,
  Eye,
  Heart,
  Brain,
} from 'lucide-react';
import Link from 'next/link';

const frameworks = [
  {
    id: 1,
    name: 'Situational Leadership',
    author: 'Hersey & Blanchard',
    description: 'Adapt leadership style based on employee development level and task complexity',
    principles: ['Directing', 'Coaching', 'Supporting', 'Delegating'],
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    name: 'Servant Leadership',
    author: 'Robert K. Greenleaf',
    description: 'Lead by prioritizing the needs of team members and stakeholders',
    principles: ['Empathy', 'Listening', 'Healing', 'Awareness', 'Persuasion'],
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    name: 'Transformational Leadership',
    author: 'James MacGregor Burns',
    description: 'Inspire and motivate team to exceed expectations and achieve higher goals',
    principles: ['Inspiration', 'Innovation', 'Individualized Consideration', 'Intellectual Stimulation'],
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 4,
    name: 'Authentic Leadership',
    author: 'George et al.',
    description: 'Lead with genuine self-awareness, values, and ethical decision-making',
    principles: ['Self-Awareness', 'Relational Transparency', 'Balanced Processing', 'Internalized Moral Perspective'],
    rating: 4.5,
    reviews: 167,
  },
];

const leadershipPrinciples = [
  {
    icon: Eye,
    title: 'Clear Vision',
    description: 'Articulate compelling direction and future state',
    implementation: 'Quarterly all-hands, communication cascades',
  },
  {
    icon: Heart,
    title: 'Empathy First',
    description: 'Understand and support team members holistically',
    implementation: 'Regular 1:1s, listening sessions, wellness programs',
  },
  {
    icon: Brain,
    title: 'Learning Culture',
    description: 'Foster continuous growth and development',
    implementation: 'Training budget, mentorship programs, failure tolerance',
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description: 'Celebrate wins and acknowledge contributions',
    implementation: 'Monthly awards, peer recognition, performance bonuses',
  },
  {
    icon: Zap,
    title: 'Accountability',
    description: 'Hold self and others to high standards',
    implementation: 'Clear OKRs, regular reviews, transparent metrics',
  },
  {
    icon: MessageCircle,
    title: 'Open Communication',
    description: 'Create psychological safety for honest dialogue',
    implementation: 'Skip-level meetings, feedback channels, town halls',
  },
];

const bookSummaries = [
  {
    id: 1,
    title: 'Leaders Eat Last',
    author: 'Simon Sinek',
    keyIdeas: ['People first', 'Trust & safety', 'Circle of safety', 'Why matters more than what'],
    pages: 480,
    rating: 4.7,
    releaseYear: 2014,
  },
  {
    id: 2,
    title: 'Good to Great',
    author: 'Jim Collins',
    keyIdeas: ['Level 5 leadership', 'First who then what', 'Confront brutal facts', 'Hedgehog concept'],
    pages: 320,
    rating: 4.6,
    releaseYear: 2001,
  },
  {
    id: 3,
    title: 'Dare to Lead',
    author: 'Brené Brown',
    keyIdeas: ['Vulnerability', 'Rumbling with tensions', 'Building trust', 'Leading with values'],
    pages: 320,
    rating: 4.8,
    releaseYear: 2018,
  },
  {
    id: 4,
    title: 'The Culture Code',
    author: 'Daniel Coyle',
    keyIdeas: ['Safety signals', 'Shared purpose', 'Storytelling', 'Creating connection'],
    pages: 352,
    rating: 4.7,
    releaseYear: 2018,
  },
];

const executiveCoachingTopics = [
  {
    id: 1,
    topic: 'Executive Presence',
    description: 'Develop commanding presence and communication impact',
    sessions: 6,
    duration: '90 mins each',
    investment: '$3,500',
  },
  {
    id: 2,
    topic: 'Emotional Intelligence',
    description: 'Master self-awareness, empathy, and relationship management',
    sessions: 8,
    duration: '60 mins each',
    investment: '$4,000',
  },
  {
    id: 3,
    topic: 'Strategic Decision Making',
    description: 'Navigate complex decisions with confidence and clarity',
    sessions: 6,
    duration: '90 mins each',
    investment: '$4,500',
  },
  {
    id: 4,
    topic: 'Change Leadership',
    description: 'Lead organizational transformation effectively',
    sessions: 10,
    duration: '60 mins each',
    investment: '$5,000',
  },
];

const teamEngagement = [
  { metric: 'Employee Satisfaction', score: 8.2, target: 8.5, status: 'on-track' },
  { metric: 'Retention Rate', score: 92, target: 95, status: 'on-track' },
  { metric: 'Engagement Index', score: 7.8, target: 8.0, status: 'watch' },
  { metric: 'Manager Effectiveness', score: 8.4, target: 8.5, status: 'on-track' },
  { metric: 'Career Development', score: 7.6, target: 8.0, status: 'watch' },
];

export default function LeadershipPage() {
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Leadership Hub</h1>
            <p className="text-slate-400">Frameworks, principles, and executive coaching</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Team Engagement & Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {teamEngagement.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism p-4 rounded-lg card-hover"
            >
              <p className="text-xs text-slate-500 mb-2">{item.metric}</p>
              <p className="text-2xl font-bold text-emerald-400 mb-2">
                {typeof item.score === 'number' && item.score % 1 === 0 ? `${item.score}%` : item.score}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Target: {item.target}{typeof item.score === 'number' && item.score % 1 === 0 ? '%' : ''}</span>
                <span className={`px-2 py-0.5 rounded ${item.status === 'on-track' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                  {item.status === 'on-track' ? 'On Track' : 'Watch'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Core Leadership Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipPrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glassmorphism p-6 rounded-xl card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{principle.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{principle.description}</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded p-3 border border-slate-700/50">
                  <p className="text-xs text-slate-400">
                    <span className="text-emerald-400 font-semibold">Implementation:</span> {principle.implementation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Leadership Frameworks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Leadership Frameworks</h2>
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
                <h3 className="text-lg font-bold text-white flex-1">{framework.name}</h3>
                <div className="flex items-center gap-1 ml-2">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold text-white">{framework.rating}</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-3">{framework.author}</p>
              <p className="text-sm text-slate-300 mb-4">{framework.description}</p>

              {selectedFramework === framework.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 border-t border-emerald-600/20 pt-4"
                >
                  <div>
                    <p className="text-sm text-emerald-400 font-semibold mb-2">Core Principles:</p>
                    <div className="flex flex-wrap gap-2">
                      {framework.principles.map((principle) => (
                        <span key={principle} className="text-xs bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full">
                          {principle}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {framework.reviews} reviews based on team feedback
                  </div>
                  <button className="btn-primary w-full text-sm">Learn More</button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Book Summaries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Recommended Leadership Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookSummaries.map((book) => (
            <motion.div
              key={book.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="glassmorphism p-6 rounded-xl card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                  <p className="text-sm text-slate-400">{book.author}</p>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 text-lg">★ {book.rating}</div>
                  <p className="text-xs text-slate-500">{book.pages} pages</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2 font-semibold">Key Ideas:</p>
                <div className="space-y-1">
                  {book.keyIdeas.map((idea) => (
                    <p key={idea} className="text-sm text-slate-300">• {idea}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="btn-secondary text-sm flex-1">Read Summary</button>
                <button className="btn-ghost text-sm flex-1">Purchase</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Executive Coaching */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Executive Coaching Programs</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Book Session
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {executiveCoachingTopics.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/30 p-5 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <h3 className="text-lg font-bold text-white mb-2">{program.topic}</h3>
              <p className="text-sm text-slate-400 mb-4">{program.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div className="bg-slate-700/50 rounded p-2">
                  <p className="text-xs text-slate-500 mb-0.5">Sessions</p>
                  <p className="font-bold text-emerald-400">{program.sessions}</p>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <p className="text-xs text-slate-500 mb-0.5">Duration</p>
                  <p className="font-bold text-blue-400 text-xs">{program.duration}</p>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <p className="text-xs text-slate-500 mb-0.5">Investment</p>
                  <p className="font-bold text-purple-400 text-sm">{program.investment}</p>
                </div>
              </div>

              <button className="btn-primary w-full text-sm">Enroll Now</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
