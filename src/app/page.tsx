import Banner from "./components/banner";
import Container from "./components/container";
import InputSearch from "./components/input";
import { GameProps } from "@/types/gameType";

import GameCard from "./components/gameCard";

export default async function Home() {
  async function getGames() {
    try {
      const response = await fetch(
        `${process.env.NEXT_API_URL}/next-api/?api=games`
      );

      return response.json();
    } catch (err) {
      throw new Error("Failed to query games" + err);
    }
  }

  const allGames: GameProps[] = await getGames();

  return (
    <main className="w-full mt-4">
      <Container>
        <h1 className="font-bold text-center text-lg sm:text-2xl">
          Separamos um jogo exclusivo pra você
        </h1>

        <Banner />

        <InputSearch />

        <h2 className="font-bold text-lg sm:text-xl mb-4">
          Jogos para conhecer:
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-6">
          {allGames.map((game) => (
            <GameCard data={game} key={game.id} />
          ))}
        </section>
      </Container>
    </main>
  );
}
