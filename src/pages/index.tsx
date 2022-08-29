import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const pokemon = trpc.useQuery(["pokemon.get-pokemon"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log(pokemon);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 ">
          <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-stone-100">
            Pokedex
          </h1>

          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            {pokemon.data?.pokemon.map(mon => (
              <div 
                key={mon.id}
                className="border-2 border-sky-500">
                <span>{mon.name}</span>
                <Image 
                  layout="fixed"
                  width={256}
                  height={256}
                  src={mon.spriteUrl} 
                  alt={mon.name} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
