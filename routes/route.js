const express = require("express");

const data = require("../pokemon.json");

const pokemonsRouter = express.Router();

//pokemonsRouter.route("/").get(getAllPokemons);

pokemonsRouter.get("/", (req,res)=>{
    res.send(data)
})

//GET POKEMON WITH ID
pokemonsRouter.get( "/:id", (req,res)=>{
    const result = data.pokemon.filter(element => element.id == req.params.id)
    //console.log(result)
    res.send(result)
})

module.exports = pokemonsRouter;

