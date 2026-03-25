'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Plus,
  CheckCircle2,
  Circle,
  Trash2,
  Calendar,
  Clock,
  TrendingUp,
  AlertCircle,
  Target,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Link from 'next/link';

const tasks = [
  {
    id: 1,
    title: 'Complete Q2 Strategy Document',
    priority: 'high',
    dueDate: '2026-03-28',
    status: 'in-progress',
    progress: 75,
    category: 'Work',
  },
  {
    id: 2,
    title: 'Review team performance evaluations',
    priority: 'high',
    dueDate: '2026-03-30',
    status: 'pending',
    progress: 0,
    category: 'HR',
  },
  {
    id: 3,
    title: 'Prepare board presentation',
    priority: 'urgent',
    dueDate: '2026-03-25',
    status: 'in-progress',
    progress: 60,
    category: 'Leadership',
  },
  {
    id: 4,
    title: 'Schedule investor meetings',
    priority: 'medium',
    dueDate: '2026-04-05',
    status: 'pending',
    progress: 0,
    category: 'Business Dev',
  },
  {
    id: 5,
    title: 'Review marketing campaign results',
    priority: 'medium',
    dueDate: '2026-03-27',
    status: 'completed',
    progress: 100,
    category: 'Marketing',
  },
];

const habits = [
  {
    id: 1,
    name: 'Morning Reading',
    frequency: 'Daily',
    target: 30,
    unit: 'mins',
    streak: 24,
    completion: 92,
  },
  {
    id: 2,
    name: 'Exercise',
    frequency: 'Daily',
    target: 45,
    unit: 'mins',
    streak: 18,
    completion: 78,
  },
  {
    id: 3,
    name: 'Meditation',
    frequency: 'Daily',
    target: 20,
    unit: 'mins',
    streak: 12,
    completion: 65,
  },
  {
    id: 4,
    name: '1:1 Meetings',
    frequency: 'Weekly',
    target: 5,
    unit: 'meetings',
    streak: 8,
    completion: 88,
  },
];

const timeTracking = [
  { day: 'Mon', deepWork: 6, meetings: 2, admin: 1 },
  { day: 'Tue', deepWork: 5, meetings: 3, admin: 1 },
  { day: 'Wed', deepWork: 7, meetings: 1, admin: 1 },
  { day: 'Thu', deepWork: 4, meetings: 4, admin: 1 },
  { day: 'Fri', deepWork: 3, meetings: 2, admin: 2 },
];

const pomodoroStats = [
  { week: 'Week 1', completed: 24, target: 25, focus: 92 },
  { week: 'Week 2', completed: 22, target: 25, focus: 88 },
  { week: 'Week 3', completed: 26, target: 25, focus: 94 },
  { week: 'Week 4', completed: 20, target: 25, focus: 85 },
];

export default function ProductivityPage() {
  const [tasks_, setTasks] = useState(tasks);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);

  const toggleTask = (id: number) => {
    setTasks(tasks_.map(t =>
      t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks_.filter(t => t.id !== id));
  };

  const totalTasks = tasks_.length;
  const completedTasks = tasks_.filter(t => t.status === 'completed').length;
  const inProgressTasks = tasks_.filter(t => t.status === 'in-progress').length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-emerald-400 mb-2">Productivity Hub</h1>
            <p className="text-slate-400">Task management, habits, and focus tracking</p>
          </div>
          <Link href="/">
            <button className="btn-secondary">← Back to Dashboard</button>
          </Link>
        </div>
      </motion.div>

      {/* Pomodoro Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 glassmorphism rounded-xl p-8 card-hover text-center"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Pomodoro Timer</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-emerald opacity-10" />
            <div className="text-center">
              <p className="text-5xl font-bold text-emerald-400">
                {Math.floor(pomodoroTime / 60)}:{(pomodoroTime % 60).toString().padStart(2, '0')}
              </p>
              <p className="text-sm text-slate-400 mt-2">Focus Session</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setPomodoroActive(!pomodoroActive)}
              className={`px-8 py-3 rounded-lg font-semibold transition ${pomodoroActive ? 'btn-secondary' : 'btn-primary'}`}
            >
              {pomodoroActive ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => setPomodoroTime(25 * 60)}
              className="btn-ghost"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-slate-500">This week: 20/25 pomodoros completed</p>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Total Tasks</p>
          <p className="text-3xl font-bold text-emerald-400">{totalTasks}</p>
          <p className="text-xs text-slate-500 mt-2">{inProgressTasks} in progress</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Completed</p>
          <p className="text-3xl font-bold text-green-400">{completedTasks}</p>
          <p className="text-xs text-slate-500 mt-2">{Math.round((completedTasks / totalTasks) * 100)}% completion rate</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Deep Work Hours</p>
          <p className="text-3xl font-bold text-blue-400">25h</p>
          <p className="text-xs text-slate-500 mt-2">This week (target: 30h)</p>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glassmorphism p-6 rounded-xl">
          <p className="text-slate-400 text-sm mb-2">Current Streak</p>
          <p className="text-3xl font-bold text-purple-400">12d</p>
          <p className="text-xs text-slate-500 mt-2">Daily habit tracking</p>
        </motion.div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Time Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">This Week's Time Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeTracking}>
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
              <Bar dataKey="deepWork" fill="#10b981" name="Deep Work" />
              <Bar dataKey="meetings" fill="#f59e0b" name="Meetings" />
              <Bar dataKey="admin" fill="#6366f1" name="Admin" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pomodoro Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glassmorphism rounded-xl p-6 card-hover"
        >
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Pomodoro Completion</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pomodoroStats}>
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
              <Line type="monotone" dataKey="completed" stroke="#10b981" name="Completed" />
              <Line type="monotone" dataKey="target" stroke="#f59e0b" name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Tasks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Today's Tasks</h2>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>

        <div className="space-y-3">
          {tasks_.map((task) => {
            const priorityColor =
              task.priority === 'urgent'
                ? 'bg-red-500/20 text-red-300'
                : task.priority === 'high'
                  ? 'bg-orange-500/20 text-orange-300'
                  : 'bg-yellow-500/20 text-yellow-300';

            return (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.01 }}
                className={`glassmorphism p-4 rounded-lg card-hover ${task.status === 'completed' ? 'opacity-60' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0 focus:outline-none"
                  >
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-400 hover:text-emerald-400 transition" />
                    )}
                  </button>

                  <div className="flex-1">
                    <h3 className={`font-semibold ${task.status === 'completed' ? 'line-through text-slate-500' : 'text-white'}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-slate-500">{task.category}</span>
                      <span className={`text-xs px-2 py-1 rounded ${priorityColor}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                      <span className="text-xs text-slate-500">Due: {task.dueDate}</span>
                    </div>
                  </div>

                  {task.status === 'in-progress' && (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-400 mb-1">{task.progress}%</p>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-slate-400 hover:text-red-400 transition ml-4"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Habits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glassmorphism rounded-xl p-6 card-hover"
      >
        <h2 className="text-2xl font-bold text-emerald-400 mb-6">Daily Habits</h2>
        <div className="space-y-4">
          {habits.map((habit) => (
            <motion.div
              key={habit.id}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-800/30 p-5 rounded-lg border border-slate-700/50 hover:border-emerald-600/50 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-white">{habit.name}</h3>
                  <p className="text-sm text-slate-400">{habit.frequency} • {habit.target} {habit.unit}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-400">{habit.streak} day streak 🔥</p>
                  <p className="text-xs text-slate-500">{habit.completion}% complete</p>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${habit.completion}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
