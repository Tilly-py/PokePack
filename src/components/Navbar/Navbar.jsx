import { NavLink } from 'react-router-dom';
import { Sparkles, Archive, Home } from 'lucide-react';

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
];

const Navbar = () => {
  return (
    <header className="bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
      <nav
        className="sticky mx-auto flex w-full max-w-3xl items-center justify-between gap-3
          rounded-full border border-white/20 bg-blue-zinc-900/25 p-2
          shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          backdrop-blur-xl backdrop-saturate-150
          after:pointer-events-none after:absolute after:inset-0 after:rounded-full
          after:shadow-[inset_2px_2px_5px_-2px_rgba(255,255,255,0.45),inset_-2px_-2px_5px_2px_rgba(255,255,255,0.18),inset_0_-2px_0_rgba(255,255,255,0.16)]"
      >
        <NavLink to="/" className="text-lg font-black tracking-tight text-yellow-400">
          <img
            src="./src/assets/pokeball.svg"
            alt="Pokeball"
            className="inline-block w-12 h-12 mr-2 bg-amber-300 rounded-full p-1"
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
