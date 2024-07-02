import { characters } from "../data";

export const getCharacterByName = (name = "") => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return characters.filter((character) =>
    character.name.toLowerCase().includes(name),
  );
};
