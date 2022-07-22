const pokemonName = document.querySelector('.pokemon__name');

const pokemonID = document.querySelector('.pokemon__number')

const pokemonImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')

const input = document.querySelector('.input__search')

const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

let pokemonsearch = 1


const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status == 200) {
    const data = await APIResponse.json();
    return data;
  } 

}

const renderPokemon = async (pokemon) => {
  
  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name
    pokemonID.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = ''
    
    pokemonsearch = data.id

  } else {
    pokemonName.innerHTML = 'Not Found 😔'
  }



  // data.types[0].type.name

}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  
  renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click', () => {
  pokemonsearch += 1
  renderPokemon(pokemonsearch)
})

btnPrev.addEventListener('click', () => {
  pokemonsearch -= 1
  renderPokemon(pokemonsearch)
})

renderPokemon( pokemonsearch )