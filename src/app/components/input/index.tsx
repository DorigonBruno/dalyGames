"use client";
import { FormEvent, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function InputSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();

  async function searchGame(e: FormEvent) {
    e.preventDefault();

    try {
      if (input === "") return;

      router.push(`/game/search/${input}`);
    } catch (err) {
      throw new Error("Failed to search game" + err);
    }
  }

  return (
    <div className="my-8">
      <form
        className="w-full bg-gray-300 rounded-lg px-2"
        onSubmit={searchGame}
      >
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="w-full outline-none px-2 py-3 rounded-lg text-black"
            placeholder="Está procurando algum jogo?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="cursor-pointer" type="submit">
            <IoMdSearch size={28} color="#EA580C" />
          </button>
        </div>
      </form>
    </div>
  );
}
