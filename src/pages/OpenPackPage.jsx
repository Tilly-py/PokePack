import TiltCard from '../components/TiltCard/TiltCard';

const OpenPackPage = () => {
  const demoCardImage = 'https://images.pokemontcg.io/base1/1_hires.png';

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-yellow-400">
        Booster Pack Opening
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Open A Base Set Booster Pack!
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Reveal cards one by one, and sleeve your favorites to keep them safe!
      </p>
      <div className="mt-10">
        <TiltCard image={demoCardImage} title="Alakazam" />
      </div>
    </section>
  );
};

export default OpenPackPage;
