let jsonData = require('../pokemon.json');

// //Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
const allPokemon = (req, res) => {
  res.send(jsonData);
};
// Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
const pokemonById = (req, res) => {
  const { id } = req.params;
  const pokemon = jsonData[id -1];
  res.send(pokemon);
};
//(Optional) Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>) which gives only one pokemon from the JSON thanks to its id and retrieve only one information (name or type or base) to send back to the client
const pokemonDetails = (req, res) => {
    const { id } = req.params;
    const { info } = req.params;
    const pokemon = jsonData[id -1];
  
    if (info === 'name') {
      res.send(pokemon.name);
    } else if (info === 'base') {
      res.send(pokemon.base);
    } else if (info === 'type') {
      res.send(pokemon.type);
    }
};

module.exports = {allPokemon, pokemonById, pokemonDetails};