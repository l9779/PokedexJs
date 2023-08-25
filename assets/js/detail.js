const params = new URLSearchParams(document.location.search);
const id = params.get('id');

const req = { url: `https://pokeapi.co/api/v2/pokemon/${id}/` };

const pokemonData = pokeApi.getPokemonDetail(req).then((req) => {
  loadPokemonInfo(req);
});

async function loadPokemonInfo(pokemon) {
  const pokenomDetail = document.getElementById('pokenom_detail');
  pokenomDetail.innerHTML += `
    <section class="picture_section ${pokemon.type}">
      <img
        src="${pokemon.picture}"
        alt="${pokemon.name}"
      />
    </section>

    <section class="info_section">
      <div class="info_tile">
        <h4>name:</h4>
        <span id="name">${pokemon.name}</span>
      </div>
      <hr />
      <div class="info_tile">
        <h4>number:</h4>
        <span>#${pokemon.number}</span>
      </div>
      <hr />
      <div class="info_tile types">
        <h4>Types:</h4>
        <ul>
           ${pokemon.types
             .map((type) => `<li class="${type}" >${type}</li>`)
             .join('')}
        </ul>
      </div>
      <hr />
      <div class="info_tile">
        <h4>base experience:</h4>
        <span>${pokemon.baseExperience}</span>
      </div>
      <hr />
      <div class="info_tile">
        <h4>height:</h4>
        <span>${pokemon.height}</span>
      </div>
      <hr />
      <div class="info_tile">
        <h4>weight:</h4>
        <span>${pokemon.weight}</span>
      </div>
    </section>
  `;
}
