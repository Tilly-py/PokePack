import { X } from 'lucide-react';
import TiltCard from '../TiltCard/TiltCard';
import { getCardPrice, formatUsdPrice } from '../../utils/cardPrice';

const CardModal = ({ card, onClose, onSleeveCard, isSleeved }) => {
  const price = getCardPrice(card);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center
        justify-center bg-black/80 px-6 min-h-screen"
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border-zinc-700 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>
        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          <img
            src={card.images.large}
            alt={card.name}
            className="mx-auto max-h-[420px] w-auto rounded-xl"
          />
          <div className="flex flex-col justify-center text-left">
            <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
              {card.rarity || 'Unknown rarity'}
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-100">{card.name}</h2>
            <p className="mt-3 text-zinc-400">
              {card.supertype}
              {card.types ? `-${card.types.join(', ')}` : ''}
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-400">Card Number</p>
              <p className="mt-1 font-bold text-zinc-100">
                {card.number}/{card.set.printedTotal}
              </p>
              <p className="mt-4 text-sm text-zinc-400">Market Price</p>
              <p className="mt-1 font-bold text-zinc-100">{formatUsdPrice(price)}</p>
            </div>
            <button
              type="button"
              onClick={() => onSleeveCard(card)}
              disabled={isSleeved}
              className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300 disabled:cursor-default disabled:bg-yellow-400/50 disabled:text-zinc-500"
            >
              {isSleeved ? 'Card Sleeved' : 'Sleeve Card'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
