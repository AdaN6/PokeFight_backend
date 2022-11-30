const express = require('express');
const router = express.Router();
//import controller
const controller = require('./controller.js');

//all Pokemon route
router.get('/', controller.allPokemon);

//Pokemon by id route
router.get('/:id', controller.pokemonById);

//Pokemon Details route
router.get('/:id/:info', controller.pokemonDetails);

module.exports = router;