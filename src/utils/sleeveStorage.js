const STORAGE_KEY = 'sleevedCards';

export const getSleevedCards = () => {
  const storedCards = localStorage.getItem(STORAGE_KEY);
  if (!storedCards) {
    return [];
  }

  return JSON.parse(storedCards);
};

export const saveSleevedCard = (card) => {
  const sleevedCards = getSleevedCards();
  const alreadySleeved = sleevedCards.some((sleevedCard) => {
    return sleevedCard.id === card.id;
  });

  if (alreadySleeved) {
    return sleevedCards;
  }

  const updatedSleevedCards = [...sleevedCards, card];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSleevedCards));

  return updatedSleevedCards;
};

export const removeSleevedCard = (cardId) => {
  const sleevedCards = getSleevedCards();
  const updatedSleevedCards = sleevedCards.filter((card) => {
    return card.id !== cardId;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSleevedCards));

  return updatedSleevedCards;
};
