import Container from "@/app/components/container";
import InputSearch from "@/app/components/input";
import Image from "next/image";
import { GameProps } from "@/types/gameType";
import { IoIosArrowDropright } from "react-icons/io";
import GameCard from "@/app/components/gameCard";

export default async function getGameSearch({
  params: { title },
}: {
  params: { title: string };
}) {
  async function querySearchGame(title: string) {
    try {
      const response = await fetch(
        `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
      );

      return response.json();
    } catch (err) {
      throw new Error("Failed to get game" + err);
    }
  }

  const searchGame: GameProps[] = await querySearchGame(title);

  return (
    <Container>
      <InputSearch />

      <h1 className="font-bold text-lg sm:text-2xl mt-10 mb-4 sm:mb-6 sm:mt-12">
        Veja oque encontramos na nossa base:
      </h1>

      {!searchGame && (
        <p className="font-medium text-lg">Jogo não encontrado...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-6">
        {searchGame &&
          searchGame.map((game) => <GameCard key={game.id} data={game} />)}
      </div>
    </Container>
  );
}
