export function savePokemons(list) {
  localStorage.setItem("pokemon_list", JSON.stringify(list));
}
export function getPokemons() {
  var pokemons = localStorage.getItem("pokemon_list");
  return JSON.parse(pokemons);
}

export function saveSelectedPokemonData(list) {
  localStorage.setItem("selected_pokemon_data", JSON.stringify(list));
}
export function getSelectedPokemonData() {
  var selectedPokemonData = localStorage.getItem("selected_pokemon_data");
  return JSON.parse(selectedPokemonData);
}

export function saveTeam(list) {
  localStorage.setItem("pokemon_team", JSON.stringify(list));
}
export function getTeam() {
  var pokemons = localStorage.getItem("pokemon_team");
  return JSON.parse(pokemons);
}

export function saveFavourite(id) {
  console.log('Favourites');
  
    if (id !== undefined) {
    console.log('id: ' + id);

    var ids = getFavourites();
    console.log('ids: ');console.log(ids);

    if (ids === null) {
      if (id === null)
        ids = [];
      else
        ids = [id];
      console.log('Created: ' + id);
    } else if (ids.find(item => item === id) === undefined) { // if not favourite
      ids.push(id);
      console.log('Pushed: ' + id);
    } else { // als die bestaat
      ids = ids.filter(item => item !== id);
      console.log('Filtered: ' + id);
    }
    localStorage.setItem("pokemon_favourites", JSON.stringify(ids));
    console.log('Endresult');
    console.log(localStorage.getItem('pokemon_favourites'));
  }
}
export function getFavourites() {
  var pokemons = localStorage.getItem("pokemon_favourites");
  if (pokemons !== undefined)
    return JSON.parse(pokemons);
  else
    console.log('LocalStorage = undefined');
}