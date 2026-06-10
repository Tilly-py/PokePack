import { NavLink } from 'react-router-dom';
import { Sparkles, Archive, Info, Home } from 'lucide-react';

const NavIcons = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
  },
  {
    path: '/open',
    label: 'Open Pack',
    icon: Sparkles,
  },
  {
    path: '/collection',
    label: 'Collection',
    icon: Archive,
  },
  {
    path: '/about',
    label: 'About',
    icon: Info,
  },
];

const Navbar = () => {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
        <NavLink to="/" className="text-lg font-black tracking-tight text-yellow-400">
          <img
            src="./src/assets/pokeball.svg"
            alt="Pokeball"
            className="inline-block w-6 h-6 mr-2"
          />
          PokePack
        </NavLink>

        <div className="flex items-center gap-2">
          {NavIcons.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-yellow-400 text-zinc-950'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
                  }`
                }
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{link.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
