import { getPokemonList, getPokemonByName } from './api.mjs';
import { displayPokemon, showError } from './ui.mjs';


let offset = 0;
const limit = 20;

async function loadPokemon() {
  try {
    const data = await getPokemonList(offset, limit);
    displayPokemon(data.results);
  } catch (error) {
    showError('Failed to fetch Pokémon data.');
  }
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const search = document.getElementById('search').value.trim().toLowerCase();
  if (search) {
    try {
      const data = await getPokemonByName(search);
      displayPokemon([data]);
    } catch (error) {
      showError('Pokémon not found.');
    }
  } else {
    loadPokemon();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (offset > 0) {
    offset -= limit;
    loadPokemon();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  offset += limit;
  loadPokemon();
});

loadPokemon();
