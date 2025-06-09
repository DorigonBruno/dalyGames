import Image from "next/image";

import { GameProps } from "@/types/gameType";

import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

export default async function Banner() {
  async function getGame() {
    try {
      const response = await fetch(
        `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
        { next: { revalidate: 320 } }
      );

      return response.json();
    } catch (err) {
      throw new Error("Failed to get game" + err);
    }
  }

  const bannerGame: GameProps = await getGame();

  return (
    <div className="w-full mt-5">
      <div className="w-full max-w-screen-xl relative z-20 h-96 m-auto bg-black px-2 rounded-lg">
        <Link href={"/"}>
          <Image
            src={bannerGame.image_url}
            alt={bannerGame.title}
            priority={true}
            quality={100}
            fill={true}
            sizes="(max-width: 1024) 33vw, (max-width: 768) 100vw"
            className="object-cover block opacity-50 rounded-lg hover:opacity-100 transition-all duration-300 ease-in-out"
          />

          <p className="font-bold text-xl text-white absolute bottom-4 left-6 flex items-center gap-4">
            {bannerGame.title}

            <button>
              <FaArrowAltCircleRight size={18} color="#fff" />
            </button>
          </p>
        </Link>
      </div>
    </div>
  );
}
