const pokmeonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
  pokmeonList.innerHTML += pokemons.map(createPokemonLi).join('');
});

function createPokemonLi(pokemon) {
  return `
    <li class="pokemon-card ${pokemon.type} ">
      <h2>${pokemon.name}</h2>
      <h4 class="card-number">#${pokemon.number}</h4>
      
      <ul class="type">
        ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
      </ul>

      <img src=${pokemon.profile} alt=${pokemon.name} />
    </li>`;
}
