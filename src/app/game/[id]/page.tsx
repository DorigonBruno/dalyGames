import Container from "@/app/components/container";
import GameCard from "@/app/components/gameCard";
import { GameProps } from "@/types/gameType";
import Image from "next/image";

export async function getGameID(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}//next-api/?api=game&id=${id}`
    );

    return response.json();
  } catch (err) {
    throw new Error("Failed to get game" + err);
  }
}

export async function getGameRecommended() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );

    return response.json();
  } catch (err) {
    throw new Error("Failed to get Game" + err);
  }
}

export default async function gameId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const game: GameProps = await getGameID(id);
  const gameRecommended = await getGameRecommended();

  return (
    <main>
      <div className="w-full relative z-20 h-96 m-auto bg-black px-2 rounded-lg">
        <Image
          src={game.image_url}
          alt={game.title}
          priority={true}
          quality={100}
          fill={true}
          sizes="(max-width: 1024) 33vw, (max-width: 768) 100vw"
          className="object-cover block opacity-50 rounded-lg hover:opacity-100 transition-all duration-300 ease-in-out"
        />

        <p className="font-bold text-xl text-white absolute bottom-4 left-6 flex items-center gap-4">
          {game.title}
        </p>
      </div>

      <Container>
        <h1 className="text-2xl my-6 font-bold">{game.title}</h1>
        <p>{game.description}</p>

        <h2 className="font-bold text-lg mt-8">Plataformas Disponíveis:</h2>

        <div className="flex gap-4 mt-2">
          {game.platforms.map((plataformas) => (
            <p
              className="bg-gray-300 mb-2 p-2 rounded-lg font-medium"
              key={plataformas}
            >
              {plataformas}
            </p>
          ))}
        </div>

        <h2 className="font-bold mt-3">Categorias: </h2>

        <div className="flex gap-4 mt-2">
          {game.categories.map((categorias) => (
            <p
              key={categorias}
              className="bg-gray-300 mb-2 p-2 rounded-lg font-medium"
            >
              {categorias}
            </p>
          ))}
        </div>

        <p className="mt-2 font-bold">
          Lançamento: <span className="font-normal">{game.release}</span>
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2">
          Outros Jogos que recomendamos:
        </h3>
        <div className="mb-4 w-full">
          <GameCard data={gameRecommended} />
        </div>
      </Container>
    </main>
  );
}
