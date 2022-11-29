const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//import json data
let jsonData = require('./pokemon.json');


//Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
app.get('/pokemon', (req, res) => {
  res.send(jsonData);
})

// Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const singlePokemon = jsonData[id - 1];
    res.send(singlePokemon);
})

//(Optional) Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>) which gives only one pokemon from the JSON thanks to its id and retrieve only one information (name or type or base) to send back to the client
app.get('/pokemon/:id/:info', (req, res) => {
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
  
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });