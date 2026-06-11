const HOLO_RARE_PULL_RATE = 0.33;

const getCardNumber = (card) => {
  return Number(card.number);
};

const getRandomCards = (cards, amount) => {
  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  return shuffledCards.slice(0, amount);
};

const getRandomCard = (cards) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

const isCommon = (card) => {
  const cardNumber = getCardNumber(card);
  return card.rarity === 'Common' || cardNumber <= 96;
};

const isUncommon = (card) => {
  const cardNumber = getCardNumber(card);
  return card.rarity === 'Uncommon' || (cardNumber >= 17 && cardNumber <= 95);
};

const isHoloRare = (card) => {
  const cardNumber = getCardNumber(card);
  return card.rarity === 'Rare Holo' || (cardNumber >= 1 && cardNumber <= 16);
};

const isNonHoloRare = (card) => {
  const cardNumber = getCardNumber(card);
  return card.rarity === 'Rare' || (cardNumber >= 17 && cardNumber <= 95);
};

export const generateBaseSetPack = (cards) => {
  const commons = cards.filter(isCommon);
  const uncommons = cards.filter(isUncommon);
  const holoRares = cards.filter(isHoloRare);
  const nonHoloRares = cards.filter(isNonHoloRare);

  const shouldPullHoloRare = Math.random() < HOLO_RARE_PULL_RATE;

  const rareCard = shouldPullHoloRare ? getRandomCard(holoRares) : getRandomCard(nonHoloRares);

  return [...getRandomCards(commons, 6), ...getRandomCards(uncommons, 3), rareCard];
};
