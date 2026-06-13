import { motion } from 'framer-motion';

const rarityGlow = {
  Common: 'hover:shadow-[0_0_35px_rgba(229,231,235,0.35)]',
  Uncommon: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.40)]',
  Rare: 'hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]',
  'Rare Holo': 'hover:shadow-[0_0_50px_rgba(168,85,247,0.50)]',
};

const rarityAnimation = {
  Common: '',
  Uncommon: '',
  Rare: '',
  'Rare Holo': 'hover:animate-pulse',
};

const rarityBorder = {
  Common: 'hover:border-zinc-300/60',
  Uncommon: 'hover:border-green-400/70',
  Rare: 'hover:border-yellow-400/80',
  'Rare Holo': 'hover:border-purple-400/90',
};

const CardBackReveal = ({ image, onRevealCard, cardIndex, rarity }) => {
  const glowClass = rarityGlow[rarity] || rarityGlow.Common;
  const borderClass = rarityBorder[rarity] || rarityBorder.Common;
  const rarityAnimationClass = rarityAnimation[rarity] || '';
  return (
    <motion.button
      type="button"
      onClick={onRevealCard}
      className="group mt-4 flex flex-col items-center gap-4"
      key={`card-back-${cardIndex}`}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      exit={{ opacity: 0, y: -24, scale: 0.95 }}
    >
      <img
        src={image}
        alt="Card Back"
        className={`h-[600px] w-[430px] drop-shadow-2xl transition duration-300 group-hover:-translate-y-2 group-hover:scale-105 ${glowClass} ${borderClass} ${rarityAnimationClass} rounded-lg`}
      />
      <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300 mt-4">
        Reveal Card
      </span>
    </motion.button>
  );
};

export default CardBackReveal;
