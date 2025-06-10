import Image from "next/image";
import Link from "next/link";
import { IoGameController } from "react-icons/io5";

export function Header() {
  return (
    <header className="bg-gray-300 w-full py-4 px-2">
      <nav className="flex items-center justify-between w-full max-w-screen-xl m-auto">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Image
              src={"./logo.svg"}
              alt="logo do site"
              width={184}
              height={40}
            />
          </Link>

          <div className="hidden sm:flex gap-6">
            <Link href={"/game"} className="font-bold sm:text-lg">
              Jogos
            </Link>
            <Link href={"/profile"} className="font-bold sm:text-lg">
              Perfil
            </Link>
          </div>
        </div>

        <Link href={"/profile"}>
          <IoGameController size={32} color="#475569" />
        </Link>
      </nav>
    </header>
  );
}
