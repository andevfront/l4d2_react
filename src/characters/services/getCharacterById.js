import { characters } from "../data";

export const getCharacterById = (id) =>
  characters.find((character) => character.id == id);
