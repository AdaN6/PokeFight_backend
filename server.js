const express = require("express");
//const pokemonsRouter = require("./routes/route")
const app = express();
const port = process.env.PORT || 4000;
const data = require("./pokemon.json");

app.use(express.json());
// app.use("/pokemons", pokemonsRouter);
//GET ALL POKEMOS
app.get("/pokemon", (req,res)=>{
    res.send(data)
})
//GET POKEMON WITH ID
app.get( "/pokemon/:id", (req,res)=>{
    const result = data.pokemon.filter(element => element.id == req.params.id)
    //console.log(result)
    res.send(result)
})

app.listen(port, () => console.log(`Server running on port ${port}`));
