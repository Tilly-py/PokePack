import { useEffect, useState } from 'react';
import TiltCard from '../components/TiltCard/TiltCard';
import { getCardsBySet } from '../api/pokemonTcgApi';
import { generateBaseSetPack } from '../utils/packGenerator';

const OpenPackPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [openedPack, setOpenedPack] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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
  const handleOpenPack = () => {
    const newPack = generateBaseSetPack(cards);
    setOpenedPack(newPack);
    setCurrentCardIndex(0);
  };
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };
  const currentCard = openedPack[currentCardIndex];
  const hasOpenedPack = openedPack.length > 0;
  const isLastCard = currentCardIndex === openedPack.length - 1;
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
      {!hasOpenedPack && (
        <button
          type="button"
          onClick={handleOpenPack}
          disabled={isLoading || Boolean(errorMessage) || cards.length === 0}
          className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
        >
          Open Pack
        </button>
      )}
      {hasOpenedPack && !isLastCard && (
        <button
          type="button"
          onClick={handleNextCard}
          disabled={isLoading || Boolean(errorMessage)}
          className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
        >
          Next Card
        </button>
      )}
      {currentCard && (
        <div className="mt-10">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100">
              {currentCard.rarity} - {currentCard.name}
            </h2>
          </div>
          <p className="text-sm font-semibold text-zinc-400">
            Card {currentCardIndex + 1} of {hasOpenedPack.length}
          </p>
          <TiltCard image={currentCard.images.large} />
        </div>
      )}
    </section>
  );
};

export default OpenPackPage;
