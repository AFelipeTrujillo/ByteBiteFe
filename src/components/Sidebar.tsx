'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen shadow-md flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-orange-600 italic">ByteBite</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
          Home
        </Link>
        <Link href="/recipes" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
          My Recipes
        </Link>
        <Link href="/planner" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
          Meal Planner
        </Link>
        <Link href="/shopping-list" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
          Shopping List
        </Link>
      </nav>

      <div className="p-4 border-t">
        <button 
          onClick={() => { localStorage.clear(); window.location.href = '/login'; }}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}