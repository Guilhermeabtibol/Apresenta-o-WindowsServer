import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Funcionalidades from './pages/Funcionalidades';
import Vantagens from './pages/Vantagens';
import Versoes from './pages/Versoes';
import Contato from './pages/Contato';
import WindowsServer from './pages/WindowsServer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-center space-x-8 sticky top-0 z-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/funcionalidades"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          Funcionalidades
        </NavLink>
        <NavLink
          to="/vantagens"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          Vantagens
        </NavLink>
        <NavLink
          to="/windowsserver"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/versoes"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          Versões
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) =>
            `font-semibold transition-colors duration-200 ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          Contato
        </NavLink>
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
