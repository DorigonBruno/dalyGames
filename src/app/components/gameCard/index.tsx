import { GameProps } from "@/types/gameType";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

interface GameCardProps {
  data: GameProps;
}

export default function GameCard({ data }: GameCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <article className="bg-gray-300 p-2 rounded-lg flex flex-col gap-4">
        <Image
          src={data.image_url}
          alt={data.title}
          width={260}
          height={230}
          priority={true}
          quality={100}
          className="object-cover block w-full h-56 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out"
        />

        <div className="flex w-full justify-between items-center px-2 mb-2 font-bold">
          <h3 className="text-ellipsis overflow-hidden whitespace-nowrap truncate">
            {data.title}
          </h3>
          <button className="cursor-pointer">
            <IoIosArrowDropright size={18} />
          </button>
        </div>
      </article>
    </Link>
  );
}
