import { useMemo } from "react";
import { getCharactersbyCategory } from "../services";
import { CharactersCard } from "./CharactersCard";

export const CharactersGrid = ({ category }) => {
  console.log(category);
  const characters = useMemo(
    () => getCharactersbyCategory(category),
    [category],
  );

  return (
    <div className="grid grid-cols-12 gap-6">
      {characters.map((character) => (
        <CharactersCard key={character.id} {...character} />
      ))}
    </div>
  );
};
