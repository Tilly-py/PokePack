import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getCardsBySet } from '../api/pokemonTcgApi';
import { generateBaseSetPack } from '../utils/packGenerator';
import OpenedPackTray from '../components/OpenedPackTray/OpenedPackTray';
import CardModal from '../components/CardModal/CardModal';
import { getSleevedCards, saveSleevedCard } from '../utils/sleeveStorage';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import BaseSetOne from '../assets/BaseSet.png';
import cardBackImage from '../assets/pokemon-card-back.png';
import BoosterPackButton from '../components/BoosterPackButton/BoosterPackButton';
import CardBackReveal from '../components/CardBackReveal/CardBackReveal';
import RevealedCardDisplay from '../components/RevealedCardDisplay/RevealedCardDisplay';

const OpenPackPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [openedPack, setOpenedPack] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [sleevedCards, setSleevedCards] = useState([]);
  const [isCardRevealed, setIsCardRevealed] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const baseSetCards = await getCardsBySet('base1');
        setCards(baseSetCards);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCards();
  }, []);

  useEffect(() => {
    const storedSleevedCards = getSleevedCards();
    setSleevedCards(storedSleevedCards);
  }, []);
  const handleSleeveCard = (card) => {
    const updatedSleevedCards = saveSleevedCard(card);
    setSleevedCards(updatedSleevedCards);
  };
  const isSelectedCardSleeved = sleevedCards.some((sleevedCard) => {
    return sleevedCard.id === selectedCard?.id;
  });
  const handleOpenPack = () => {
    const newPack = generateBaseSetPack(cards);

    setOpenedPack(newPack);
    setCurrentCardIndex(0);
    setIsCardRevealed(false);
  };

  const handleRevealCard = () => {
    setIsCardRevealed(true);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setIsCardRevealed(false);
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
  const revealedCards = isCardRevealed
    ? openedPack.slice(0, currentCardIndex + 1)
    : openedPack.slice(0, currentCardIndex);
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
      {isLoading && <LoadingScreen />}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {!isLoading && !hasOpenedPack && !errorMessage && (
        <BoosterPackButton
          image={BaseSetOne}
          onOpenPack={handleOpenPack}
          disabled={isLoading || Boolean(errorMessage) || cards.length === 0}
        />
      )}
      {hasOpenedPack && (
        <div className="mt-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <OpenedPackTray cards={revealedCards} onCardClick={handleSelectedCard} />
          <div className="flex min-w-0 flex-col items-center gap-4">
            {currentCard && (
              <>
                <div>
                  {isCardRevealed ? (
                    <>
                      <h2 className="text-2xl font-bold text-zinc-100">
                        {currentCard.rarity || 'Unknown rarity'} - {currentCard.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-zinc-400">
                        {currentCard.supertype}
                      </p>
                    </>
                  ) : (
                    <h2 className="text-2xl font-bold text-zinc-100">Card Ready to Reveal!</h2>
                  )}

                  <p className="mt-1 text-sm font-semibold text-zinc-400">
                    Card {currentCardIndex + 1} of {openedPack.length}
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  {!isCardRevealed ? (
                    <CardBackReveal
                      key={`card-back-${currentCardIndex}`}
                      image={cardBackImage}
                      onRevealCard={handleRevealCard}
                      cardIndex={currentCardIndex}
                      rarity={currentCard.rarity}
                    />
                  ) : (
                    <RevealedCardDisplay
                      key={`revealed-card-${currentCard.id}`}
                      card={currentCard}
                      isLastCard={isLastCard}
                      onNextCard={handleNextCard}
                      onOpenPack={handleOpenPack}
                    />
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      )}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={handleCloseModal}
          onSleeveCard={handleSleeveCard}
          isSleeved={isSelectedCardSleeved}
        />
      )}
    </section>
  );
};

export default OpenPackPage;
