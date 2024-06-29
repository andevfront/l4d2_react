import { useMemo } from "react";
import { getCharactersByCategory } from "../services";
import { CharactersCard } from "./CharactersCard";

export const CharactersGrid = ({ category }) => {
  const characters = useMemo(
    () => getCharactersByCategory(category),
    [category],
  );

  return (
    <div className="grid grid-cols-12 gap-5">
      {characters.map((character) => (
        <CharactersCard key={character.id} {...character} />
      ))}
    </div>
  );
};
