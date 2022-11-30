const express = require("express");
const pokemonsRouter = require("./routes/route.js");
const app = express();
const port = process.env.PORT || 4000;
const data = require("./pokemon.json");

app.use(express.json());
// app.use("/pokemons", pokemonsRouter);
//GET ALL POKEMOS
app.use("/pokemon",pokemonsRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));
