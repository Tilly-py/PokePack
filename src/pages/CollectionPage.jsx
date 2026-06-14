import { useEffect, useState } from 'react';
import { getSleevedCards, removeSleevedCard } from '../utils/sleeveStorage';
import { formatUsdPrice, getCardPrice } from '../utils/cardPrice';
import CardModal from '../components/CardModal/CardModal';

const CollectionPage = () => {
  const [sleevedCards, setSleevedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const storedSleevedCards = getSleevedCards();

    setSleevedCards(storedSleevedCards);
  }, []);

  const handleRemoveCard = (cardId) => {
    const updatedSleevedCards = removeSleevedCard(cardId);
    setSleevedCards(updatedSleevedCards);
  };

  const totalCollectionValue = sleevedCards.reduce((total, card) => {
    const price = getCardPrice(card);
    return total + (price || 0);
  }, 0);

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
      <div className="text-center">
        <p className="mt-5 mb-3 text-sm font-semibold tracking-[0.3em] text-yellow-400">
          Sleeved Collection Value: {formatUsdPrice(totalCollectionValue)}
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          All of your sleeved cards, organized and ready to show off!
        </h1>
      </div>

      {sleevedCards.length === 0 ? (
        <p className="mt-12 text-center text-zinc-400">
          You haven't sleeved any cards yet! Head over to pack opening page to start building your
          collection!
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sleevedCards.map((card) => {
            const price = getCardPrice(card);
            return (
              <article key={card.id} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                <button
                  type="button"
                  onClick={() => handleSelectedCard(card)}
                  className="aspect-63/88 overflow-hidden rounded-md border border-zinc-700 bg-zinc-950 transition hover:border-yellow-400 disabled:cursor-default disabled:opacity-40"
                >
                  <img src={card.images.small} alt={card.name} className="mx-auto rounded-xl" />
                  <h2 className="mt-4 text-xl font-bold text-zinc-100">{card.name}</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    {card.rarity || 'Unknown Rarity'} - {card.supertype}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    #{card.number} / {card.set?.printedTotal}
                  </p>
                  <p className="mt-3 font-bold text-yellow-400">{formatUsdPrice(price)}</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveCard(card.id)}
                  className="mt-4 w-full rounded-xl border border-red-500/40 px-4 py-2 font-bold text-red-300 transition hover:bg-red-500/10"
                >
                  Remove from Collection
                </button>
              </article>
            );
          })}
        </div>
      )}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={handleCloseModal}
          onSleeveCard={() => {}}
          isSleeved={true}
        />
      )}
    </section>
  );
};

export default CollectionPage;
