'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-emerald-600/20 min-h-screen sticky top-0 overflow-y-auto"
    >
      <div className="p-6 border-b border-emerald-600/20">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-gradient-emerald rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-emerald-400">SuperApp</h1>
            <p className="text-xs text-slate-400">Business Hub</p>
          </div>
        </Link>
      </div>

      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.id} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-emerald-600/20 border border-emerald-600/40 text-emerald-400'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : item.color}`} />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-400 transition">
                    {item.description}
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-4 bg-emerald-400 rounded"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-emerald-600/20 mt-auto mb-4">
        <div className="bg-slate-800/50 rounded-lg p-4 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Enterprise Business Management
          </p>
          <button className="btn-primary w-full text-sm">
            Documentation
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
