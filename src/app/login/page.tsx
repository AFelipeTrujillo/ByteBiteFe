'use client';

import { useState } from 'react';
import { loginUser } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.access_token);
      alert('Login successful!');
      // Aquí podrías usar router.push('/dashboard')
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-orange-600">ByteBite</h2>
        <p className="text-center text-gray-500">Enter your credentials to access</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-orange-500 focus:border-orange-500 text-black"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-orange-500 focus:border-orange-500 text-black"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button 
            type="submit"
            className="w-full py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}