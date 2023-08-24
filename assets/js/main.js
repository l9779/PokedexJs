const pokmeonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const maxRecord = 151;
const limit = 5;
let offset = 0;

function loadPokemonCards(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon-card ${pokemon.type} ">
            <h2>${pokemon.name}</h2>
            <h4 class="card-number">#${pokemon.number}</h4>
      
            <ul class="types">
              ${pokemon.types
                .map((type) => `<li class="${type}" >${type}</li>`)
                .join('')}
            </ul>

             <img src=${pokemon.picture} alt=${pokemon.name} />
          </li>
    `
      )
      .join('');
    pokmeonList.innerHTML += newHtml;
  });
}

loadPokemonCards(offset, limit);

loadMoreButton.addEventListener('click', (e) => {
  offset += limit;
  const recordCount = offset + limit;

  if (recordCount >= maxRecord) {
    const newLimit = maxRecord - offset;

    loadPokemonCards(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonCards(offset, limit);
  }
});
