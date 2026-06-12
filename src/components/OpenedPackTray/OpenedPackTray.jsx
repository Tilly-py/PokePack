const OpenedPackTray = ({ cards, onCardClick }) => {
  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 lg:w-60">
      <h2 className="text-lg font-bold text-zinc-100">Opened Cards</h2>

      <div className="grid grid-cols-5 gap-2 lg:grid-cols-2">
        {Array.from({ length: 10 }).map((_, index) => {
          const card = cards[index];
          return (
            <button
              key={index}
              type="button"
              onClick={() => card && onCardClick(card)}
              disabled={!card}
              className="aspect-63/88 overflow-hidden rounded-md border border-zinc-700 bg-zinc-950 transition hover:border-yelow-400 disabled:cursor-default disabled:opacity-40"
            >
              {card && (
                <img
                  src={card.images.small}
                  alt={card.name}
                  className="h-full w-full object-cover"
                />
              )}
            </button>
          );
        })}
        ;
      </div>
    </div>
  );
};
export default OpenedPackTray;
