import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'SuperApp Business Hub',
  description: 'Unified platform for sales, marketing, strategy, and more',
  keywords: [
    'business',
    'management',
    'sales',
    'marketing',
    'crm',
    'project management',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
