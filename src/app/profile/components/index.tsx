"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function FavoritesGames() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleClick() {
    setShow(!show);
    if (input !== "") setGameName(input);

    setInput("");
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="bg-gray-900 w-full h-56 p-2 rounded-lg relative">
        {show ? (
          <div className="flex items-center gap-3 p-2">
            <input
              type="text"
              className="bg-white p-2 text-black outline-none mt-3 rounded-md w-full sm:w-86"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleClick} className="cursor-pointer">
              <FaPencil size={24} color="#fff" />
            </button>
          </div>
        ) : (
          <button onClick={handleClick} className="cursor-pointer">
            <FaPlus size={28} color="#fff" />
          </button>
        )}

        {gameName ? (
          <p className="text-white absolute bottom-3 left-4 font-bold">
            {gameName}
          </p>
        ) : (
          <p className="text-white absolute bottom-3 left-4 font-bold">
            Adicionar Jogo
          </p>
        )}
      </div>
    </div>
  );
}
