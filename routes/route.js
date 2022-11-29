const {Router} = require("express");

const data = require("../pokemon.json");



const pokemonsRouter = Router();

pokemonsRouter.route("/").get(getAllPokemons);

module.export = pokemonsRouter;

