import { characters } from "../data";

export const getCharacterById = (id) => {
  return characters.find((character) => character.id == id);
};
