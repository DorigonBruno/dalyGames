import Link from "next/link";
import Banner from "./components/banner";
import Container from "./components/container";
import InputSearch from "./components/input";
import { GameProps } from "@/types/gameType";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

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

        <h2 className="font-bold text-lg sm:text-xl mb-4">Jogos para conhecer:</h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-6">
          {allGames.map((game) => (
            <Link href={`/game/${game.id}`} key={game.id}>
              <article className="bg-gray-300 p-2 rounded-lg flex flex-col gap-4">
                <Image
                  src={game.image_url}
                  alt={game.title}
                  width={260}
                  height={230}
                  priority={true}
                  quality={100}
                  className="object-cover block w-full sm:w-76 h-56 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
                />

                <div className="flex w-full justify-between items-center px-2 mb-2 font-bold">
                  <h3 className="text-ellipsis overflow-hidden whitespace-nowrap truncate">
                    {game.title}
                  </h3>
                  <button className="cursor-pointer">
                    <IoIosArrowDropright size={18} />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
}
