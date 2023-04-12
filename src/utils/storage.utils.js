export function savePokemons(list) {
  localStorage.setItem("pokemon_list", JSON.stringify(list));
}
export function getPokemons(list) {
  var pokemons = localStorage.getItem("pokemon_list");
  return JSON.parse(pokemons);
}

export function saveTeam(list) {
  localStorage.setItem("pokemon_team", JSON.stringify(list));
}
export function getTeam() {
  var pokemons = localStorage.getItem("pokemon_team");
  return JSON.parse(pokemons);
}

export function saveFavourites(list) {
  localStorage.setItem("pokemon_favourites", JSON.stringify(list));
}
export function getFavourites() {
  var pokemons = localStorage.getItem("pokemon_favourites");
  return JSON.parse(pokemons);
}