'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Plus,
  Trash2,
  MoreVertical,
  Circle,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const kanbanColumns = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-blue-600',
    tasks: [
      { id: 1, title: 'Design new dashboard', priority: 'high', assignee: 'Sarah', dueDate: '2026-03-28' },
      { id: 2, title: 'Write API documentation', priority: 'medium', assignee: 'Mike', dueDate: '2026-04-02' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'bg-yellow-600',
    tasks: [
      { id: 3, title: 'Implement authentication', priority: 'high', assignee: 'John', dueDate: '2026-03-26' },
      { id: 4, title: 'Set up CI/CD pipeline', priority: 'medium', assignee: 'David', dueDate: '2026-03-27' },
      { id: 5, title: 'Create test suite', priority: 'medium', assignee: 'Lisa', dueDate: '2026-03-29' },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    color: 'bg-orange-600',
    tasks: [
      { id: 6, title: 'Code review - API endpoints', priority: 'high', assignee: 'Tech Lead', dueDate: '2026-03-25' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-green-600',
    tasks: [
      { id: 7, title: 'Project setup', priority: 'low', assignee: 'All', dueDate: '2026-03-15' },
      { id: 8, title: 'Infrastructure setup', priority: 'high', assignee: 'DevOps', dueDate: '2026-03-18' },
      { id: 9, title: 'Database schema design', priority: 'high', assignee: 'DB Admin', dueDate: '2026-03-20' },
    ],
  },
];

const dailyTasks = [
  { id: 1, task: 'Team standup meeting', time: '09:00 AM', duration: '15 mins', assignee: 'All' },
  { id: 2, task: 'Review pull requests', time: '10:00 AM', duration: '1 hour', assignee: 'Tech Lead' },
  { id: 3, task: 'Client call', time: '02:00 PM', duration: '30 mins', assignee: 'Product Manager' },
  { id: 4, task: 'Testing sprint session', time: '03:30 PM', duration: '90 mins', assignee: 'QA Team' },
];

const dashboardMetrics = [
  { month: 'Week 1', completed: 8, inProgress: 6, backlog: 12 },
  { month: 'Week 2', completed: 15, inProgress: 8, backlog: 10 },
  { month: 'Week 3', completed: 22, inProgress: 9, backlog: 8 },
  { month: 'Week 4', completed: 28, inProgress: 7, backlog: 5 },
];

const projectStats = [
  { label: 'Total Tasks', value: 34, color: 'text-blue-400' },
  { label: 'Completed', value: 18, color: 'text-green-400' },
  { label: 'In Progress', value: 12, color: 'text-yellow-400' },
  { label: 'Backlog', value: 4, color: 'text-slate-400' },
];

export default function ProjectToolsPage() {
  const [draggedTask, setDraggedTask] = useState<{ taskId: number; fromColumn: string } | null>(null);

  const handleDragStart = (taskId: number, columnId: string) => {
    setDraggedTask({ taskId, fromColumn: columnId });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-300 border-red-600/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-600/30';
      default:
        return 'bg-green-500/20 text-green-300 border-green-600/30';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Project Tools</h1>
            <p className="text-slate-400">Kanban board, daily tasks, and progress dashboard</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Project Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {projectStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glassmorphism p-6 rounded-xl card-hover"
          >
            <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glassmorphism rounded-xl p-6 mb-8 card-hover"
      >
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Progress This Month</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardMetrics}>
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
            <Line type="monotone" dataKey="completed" stroke="#10b981" name="Completed" strokeWidth={2} />
            <Line type="monotone" dataKey="inProgress" stroke="#f59e0b" name="In Progress" strokeWidth={2} />
            <Line type="monotone" dataKey="backlog" stroke="#6b7280" name="Backlog" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Kanban Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Kanban Board</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {kanbanColumns.map((column) => (
            <motion.div
              key={column.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col max-h-96"
            >
              <div className={`${column.color} rounded-t-lg px-4 py-3 text-white font-bold flex items-center justify-between`}>
                <span>{column.title}</span>
                <span className="text-sm bg-white/20 px-2 py-0.5 rounded">{column.tasks.length}</span>
              </div>

              <div
                onDragOver={handleDragOver}
                className="flex-1 bg-slate-800/30 rounded-b-lg p-3 space-y-3 border border-slate-700/50 overflow-y-auto"
              >
                {column.tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task.id, column.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border cursor-grab active:cursor-grabbing transition ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    <p className="font-semibold text-white mb-2">{task.title}</p>
                    <div className="text-xs space-y-1">
                      <p className="text-slate-300">→ {task.assignee}</p>
                      <p className="text-slate-400">📅 {task.dueDate}</p>
                    </div>
                  </motion.div>
                ))}
                <button className="w-full py-2 text-slate-400 hover:text-emerald-400 transition text-sm flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Task
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Daily Tasks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Today's Schedule</h2>
        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.01 }}
              className="glassmorphism p-5 rounded-lg card-hover flex items-center gap-4"
            >
              <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{task.task}</h3>
                <p className="text-sm text-slate-400">{task.time} • {task.duration}</p>
              </div>
              <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded">{task.assignee}</span>
              <CheckCircle2 className="w-5 h-5 text-slate-500 hover:text-emerald-400 transition cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Dashboard Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Project Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Active Projects</h3>
            <div className="space-y-4">
              {[
                { name: 'Platform Upgrade', progress: 68, team: 8 },
                { name: 'Mobile App Release', progress: 82, team: 5 },
                { name: 'Analytics Dashboard', progress: 45, team: 4 },
              ].map((project) => (
                <div key={project.name}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-slate-300">{project.name}</p>
                    <span className="text-xs text-slate-500">{project.team} team members</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    />
                  </div>
                  <p className="text-xs text-emerald-400 mt-1 font-semibold">{project.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <p className="text-sm text-slate-500 mb-1">Average Task Cycle Time</p>
                <p className="text-2xl font-bold text-emerald-400">3.2 days</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <p className="text-sm text-slate-500 mb-1">Team Velocity</p>
                <p className="text-2xl font-bold text-blue-400">18 points/week</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <p className="text-sm text-slate-500 mb-1">Delivery Rate</p>
                <p className="text-2xl font-bold text-green-400">94%</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
