import { characters } from "../data";

export const getCharactersbyCategory = (category) => {
  const validCategory = ["sobreviviente", "infectado"];

  if (!validCategory.includes(category)) {
    throw new Error(`${category} no existe`);
    return;
  }

  return characters.filter((character) => character.category == category);
};
