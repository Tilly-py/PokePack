import { X } from 'lucide-react';
import TiltCard from '../TiltCard/TiltCard';
const CardModal = ({ card, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center
        justify-center bg-black/80 px-6"
    >
      <div className="relative w-full max-w-4xl rounded-3xl border border-zinc-700 p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border-zinc-700 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>
        <div className="grid gap-8 md:grid-cols-[320px_1fr">
          <TiltCard image={card.images.large} />

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
