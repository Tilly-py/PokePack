const HOLO_RARE_PULL_RATE = 0.33;

const getRandomCards = (cards, amount) => {
  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  return shuffledCards.slice(0, amount);
};

const getRandomCard = (cards) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

const isCommon = (card) => {
  return card.rarity === 'Common';
};

const isUncommon = (card) => {
  return card.rarity === 'Uncommon';
};

const isHoloRare = (card) => {
  return card.rarity === 'Rare Holo';
};

const isNonHoloRare = (card) => {
  return card.rarity === 'Rare';
};

export const generateBaseSetPack = (cards) => {
  const commons = cards.filter(isCommon);
  const uncommons = cards.filter(isUncommon);
  const holoRares = cards.filter(isHoloRare);
  const nonHoloRares = cards.filter(isNonHoloRare);

  const shouldPullHoloRare = Math.random() < HOLO_RARE_PULL_RATE;

  const rareCard = shouldPullHoloRare ? getRandomCard(holoRares) : getRandomCard(nonHoloRares);
  const normalCards = [...getRandomCards(commons, 6), ...getRandomCards(uncommons, 3)];

  const shuffleNormalCards = getRandomCards(normalCards, normalCards.length);

  return [...shuffleNormalCards, rareCard];
};
