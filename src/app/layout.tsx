'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Definimos si es una página pública (como el login)
  const isLoginPage = pathname === '/login';

  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900">
        <div className="flex">
          {!isLoginPage && <Sidebar />}
          <main className={`flex-1 transition-all ${isLoginPage ? 'ml-0' : 'ml-64'} p-8`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}