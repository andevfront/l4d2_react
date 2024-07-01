import { IoIosSearch } from "react-icons/io";
import { useForm } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getCharacterByName } from "../services/getCharacterByName";
import { CharactersCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const characters = getCharacterByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <form className="relative w-full" onSubmit={handleSubmit}>
        <IoIosSearch className="pointer-events-none absolute left-3 top-3 h-5 w-5" />
        <input
          className="h-full w-full rounded-lg border border-zinc-900 bg-transparent p-3 pl-9 outline-none placeholder:text-slate-300 focus:border-white"
          type="search"
          name="searchText"
          placeholder="Buscar..."
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
        />
      </form>
      {q !== "" && characters.length === 0 ? (
        <div className="mt-10">No hay resultados</div>
      ) : (
        <div className="mt-10 grid grid-cols-12 gap-5">
          {characters.map((character) => (
            <CharactersCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </>
  );
};
