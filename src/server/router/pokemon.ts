import { createRouter } from "./context";
import { prisma } from "../db/client";

export const pokemonRouter = createRouter()
  .query("get-pokemon", {
    async resolve() {
      const pokemon = await prisma.pokemon.findMany();
      
      return {
        pokemon
      };
    },
  });
