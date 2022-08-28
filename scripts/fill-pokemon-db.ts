import { PokemonClient } from "pokenode-ts";
import { prisma } from "../src/server/db/client";

const fillPokemonDB = async () => {
    const min = 0;
    const max = 904;
    const api = new PokemonClient();

    const allPokemon = await api.listPokemons(min, max);

    const pokemonMap = allPokemon.results.map((mon, i) => ({
      id: i + 1,
      name: mon.name,
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
    }));

    const created = await prisma.pokemon.createMany({
        data: pokemonMap
    });
    
    console.log("Created?", created);
}

fillPokemonDB();