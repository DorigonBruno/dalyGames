import Image from "next/image";
import Container from "../components/container";
import { FaShareAlt } from "react-icons/fa";

export default function profile() {
  return (
    <section className="w-full mt-10 sm:mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/user.png"
              alt="Foto do usuário"
              width={200}
              height={200}
              quality={100}
              priority={true}
              className="object-cover block rounded-full w-42 h-42"
            />

            <h1 className="font-bold text-xl sm:text-5xl text-gray-800">
              Bruno Dev
            </h1>
          </div>
          <div className="flex sm:self-start gap-3">
            <button className="bg-gray-700 text-white px-3 py-2 rounded-lg cursor-pointer font-medium">
              Configurações
            </button>
            <button className="bg-gray-700 px-3 py-2 rounded-lg cursor-pointer">
              <FaShareAlt size={30} color="#fff" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
