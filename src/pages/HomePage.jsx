import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-yellow-400">
        Pokemon Card Pack Simulator
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Open vintage Pokemon Booster Packs and build your collection!
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Reveal cards one by one, and sleeve your favorites to keep them safe!
      </p>
      <Link
        to="/open"
        className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-500"
      >
        <Sparkles className="mr-2" />
        Open a Pack
      </Link>
    </section>
  );
};

export default HomePage;
