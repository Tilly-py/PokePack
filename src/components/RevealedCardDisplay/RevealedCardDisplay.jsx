import { motion } from 'framer-motion';
import TiltCard from '../TiltCard/TiltCard';

const RevealedCardDisplay = ({ card, isLastCard, onNextCard, onOpenPack }) => {
  return (
    <motion.div
      key={`revealed-card-${card.id}`}
      initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
    >
      <TiltCard image={card.images.large} onClick={isLastCard ? onOpenPack: onNextCard}/>
      {!isLastCard && (
        <button
          type="button"
          onClick={isLastCard ? onOpenPack : onNextCard}
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
            onClick={onOpenPack}
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
          >
            Open Another Pack
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default RevealedCardDisplay;
