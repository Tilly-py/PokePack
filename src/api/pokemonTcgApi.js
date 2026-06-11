const BASE_URL = 'https://api.pokemontcg.io/v2';

export const getCardsBySet = async (setId) => {
  const response = await fetch(`${BASE_URL}/cards?q=set.id:${setId}&pageSize=250`);
  if (!response.ok) {
    throw new Error('Failed to fetch cards for the specified set.');
  }
  const data = await response.json();
  return data.data;
};
