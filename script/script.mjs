async function fetchData() {
  // Two lines. Fetches data. All we need in most cases
  const result = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await result.json();
  // Loops through the list of pokemon fetched from the api
  for (let i = 0; i < data.results.length; i++) {
    // create a new h1 element
    const nameDisplay = document.createElement('h1');
    // sets the text of the element to pokemons name
    nameDisplay.innerText = data.results[i].name;
    // displays the element by appending it to the body
    document.querySelector('body').appendChild(nameDisplay);
  }
}
fetchData();
