import { motion } from 'framer-motion';
const BoosterPackButton = ({ image, onOpenPack, disabled }) => {
  return (
    <motion.button
      type="button"
      onClick={onOpenPack}
      disabled={disabled}
      className="rounded-xl px-6 py-3 font-bold text-zinc-950"
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      exit={{ opacity: 0, y: -24, scale: 0.95 }}
    >
      <img
        src={image}
        alt="Base Set Booster Pack"
        className="h-[600px] w-[430px] rounded-lg drop-shadow-2xl transition duration-300 group-hover:-translate-y-2 group-hover:scale-105"
      />
      <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300 mt-4">
        Open Pack
      </span>
    </motion.button>
  );
};

export default BoosterPackButton;
