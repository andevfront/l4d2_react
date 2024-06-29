import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services";
import { formatDescription } from "../helpers";

export const CharacterPage = () => {
  const { id } = useParams();
  const { name, category, first_appearance, description } = useMemo(
    () => getCharacterById(id),
    [id],
  );

  const formattedDescription = useMemo(
    () => formatDescription(description),
    [description],
  );

  return (
    <div className="flex gap-10">
      <figure className="hidden h-[500px] shrink-0 overflow-hidden rounded-xl md:block">
        <img
          className="h-full w-full object-cover"
          src={`/img/characters/${id}.jpg`}
          alt={name}
        />
      </figure>
      <div className="">
        <h2 className="text-3xl font-bold text-white">{name}</h2>
        <small
          className={`${category == "sobreviviente" ? "text-blue-300" : "text-red-600"} block first-letter:uppercase`}
        >
          {category}
        </small>
        <h3 className="mt-10 text-xl font-bold text-white">Descripción</h3>
        {formattedDescription}
        <h3 className="mt-10 text-xl font-bold text-white">
          Primera Aparición:
        </h3>
        <figure className="mt-3 h-10 w-10">
          <img
            className="h-full w-full"
            src={`${first_appearance == "Left 4 Dead" ? "/img/l4d-icon.png" : "/img/l4d2-icon.png"}`}
            alt={first_appearance}
          />
        </figure>
      </div>
    </div>
  );
};
