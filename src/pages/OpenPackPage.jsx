import { useEffect, useState } from 'react';
import TiltCard from '../components/TiltCard/TiltCard';
import { getCardsBySet } from '../api/pokemonTcgApi';

const OpenPackPage = () => {
  const demoCardImage = 'https://images.pokemontcg.io/base1/1_hires.png';
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadCards = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const baseSetCards = await getCardsBySet('base1');
        console.log(baseSetCards);
        setCards(baseSetCards);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCards();
  }, []);
  const previewCard = cards[0];
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
      <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm text-zinc-300">
        {isLoading && <p>Loading...</p>}

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      {previewCard && (
        <div className="mt-10">
          <TiltCard image={previewCard.images.large} title={previewCard.name} />
        </div>
      )}
    </section>
  );
};

export default OpenPackPage;
