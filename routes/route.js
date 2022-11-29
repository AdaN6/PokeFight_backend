const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

router.get('/', controller.allPokemon);

router.get('/:id', controller.pokemonById);

router.get('/:id/:info', controller.pokemonDetails);

module.exports = router;