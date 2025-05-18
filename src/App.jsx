import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Funcionalidades from './pages/Funcionalidades';
import Vantagens from './pages/Vantagens';
import Versoes from './pages/Versoes';
import Contato from './pages/Contato';
import WindowsServer from './pages/WindowsServer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 font-semibold transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-blue-600">Windows Server</h1>
          <button
            className="sm:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <div className="hidden sm:flex space-x-6">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/funcionalidades" className={navLinkClass}>
              Funcionalidades
            </NavLink>
            <NavLink to="/vantagens" className={navLinkClass}>
              Vantagens
            </NavLink>
            <NavLink to="/windowsserver" className={navLinkClass}>
              Sobre
            </NavLink>
            <NavLink to="/versoes" className={navLinkClass}>
              Versões
            </NavLink>
            <NavLink to="/contato" className={navLinkClass}>
              Contato
            </NavLink>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="sm:hidden mt-4 space-y-2">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/funcionalidades" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Funcionalidades
            </NavLink>
            <NavLink to="/vantagens" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Vantagens
            </NavLink>
            <NavLink to="/windowsserver" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Sobre
            </NavLink>
            <NavLink to="/versoes" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Versões
            </NavLink>
            <NavLink to="/contato" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Contato
            </NavLink>
          </div>
        )}
      </nav>

      <main className="p-6 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/windowsserver" element={<WindowsServer />} />
          <Route path="/vantagens" element={<Vantagens />} />
          <Route path="/versoes" element={<Versoes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
