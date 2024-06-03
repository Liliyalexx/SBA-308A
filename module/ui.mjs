export function displayPokemon(pokemonList) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  pokemonList.forEach((pokemon) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');
    pokemonDiv.innerHTML = `
            <h2>${pokemon.name}</h2>
        `;
    gallery.appendChild(pokemonDiv);
  });
}

export function showError(error) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `<p>${error}</p>`;
}
