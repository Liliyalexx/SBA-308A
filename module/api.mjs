const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}
export async function getPokemonList(offset = 0, limit = 20) {
  const url = `${BASE_URL}?offset=${offset}&limit=${limit}`;
  return await fetchData(url);
}

export async function getPokemonByName(name) {
  const url = `${BASE_URL}/${name}`;
  return await fetchData(url);
}
