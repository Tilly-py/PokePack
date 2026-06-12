import { useEffect, useState } from 'react';
import TiltCard from '../components/TiltCard/TiltCard';
import { getCardsBySet } from '../api/pokemonTcgApi';
import { generateBaseSetPack } from '../utils/packGenerator';
import OpenedPackTray from '../components/OpenedPackTray/OpenedPackTray';
import CardModal from '../components/CardModal/CardModal';

const OpenPackPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [openedPack, setOpenedPack] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
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
  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };
  const handleCloseModal = () => {
    setSelectedCard(null);
  };
  const currentCard = openedPack[currentCardIndex];
  const hasOpenedPack = openedPack.length > 0;
  const isLastCard = currentCardIndex === openedPack.length - 1;
  const revealedCards = openedPack.slice(0, currentCardIndex);
  return (
    <section className="mx-auto flex min-h-screen w-full flex-col items-center justify-start gap-6 px-6 py-16 text-center">
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
      {hasOpenedPack && (
        <div className="mt-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <OpenedPackTray cards={revealedCards} onCardClick={handleSelectedCard} />
          <div className="flex min-w-0 flex-col items-center gap-4">
            {currentCard && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-100">
                    {currentCard.rarity || 'Unknown rarity'} - {currentCard.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-zinc-400">
                    Card {currentCardIndex + 1} of {openedPack.length}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">{currentCard.supertype}</p>
                </div>
                <TiltCard image={currentCard.images.large} />
                {!isLastCard && (
                  <button
                    type="button"
                    onClick={handleNextCard}
                    className="mt-4 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
                  >
                    Next Card
                  </button>
                )}
                {isLastCard && (
                  <div className="flex flex-col items-center gap-3">
                    <p className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 font-semibold text-yellow-300">
                      Pack Fully Opened! Sleeve your favorites and share your pulls with friends!
                    </p>
                    <button
                      type="button"
                      onClick={handleOpenPack}
                      className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
                    >
                      Open Another Pack
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      {selectedCard && <CardModal card={selectedCard} onClose={handleCloseModal} />}
    </section>
  );
};

export default OpenPackPage;
