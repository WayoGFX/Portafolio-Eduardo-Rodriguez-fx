
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
  onCancel: () => void;
}

// Fixed: Changed to default export to match the import in App.tsx
const AdminLogin = ({ onLogin, onCancel }: AdminLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === import.meta.env.VITE_ADMIN_USER && password === import.meta.env.VITE_ADMIN_PASSWORD) {
      onLogin(true);
    } else {
      setError('Credenciales incorrectas, miau...');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl sketchy-border">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🔐</div>
        <h3 className="text-2xl font-handwritten text-[#2d241e] font-bold">Acceso Wayo</h3>
        <p className="text-sm text-[#4a3728] font-bold">Solo personal autorizado</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-brown-700 mb-1 ml-1">Usuario</label>
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-500 outline-none text-[#2d241e] font-bold"
            placeholder="Introduce usuario"
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-brown-700 mb-1 ml-1">Contraseña</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-500 outline-none text-[#2d241e] font-bold"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs font-bold text-center"
          >
            {error}
          </motion.p>
        )}

        <div className="flex flex-col gap-2 mt-2">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-[#2739e5] text-white rounded-xl font-black shadow-lg"
          >
            ENTRAR 🐾
          </motion.button>
          <button 
            type="button"
            onClick={onCancel}
            className="text-xs text-gray-500 font-bold hover:text-gray-700"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
