export const getCardPrice = (card) => {
  const normalMarket = card.tcgplayer?.prices?.normal?.market;
  const holoMarket = card.tcgplayer?.prices?.holofoil?.market;
  const reverseHoloMarket = card.tcgplayer?.prices?.reverseHolofoil?.market;

  return normalMarket || holoMarket || reverseHoloMarket || null;
};

export const formatUsdPrice = (price) => {
  if (!price) {
    return 'No Price Data';
  }
  return `$${price.toFixed(2)}`;
};
