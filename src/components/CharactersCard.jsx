import { Link } from "react-router-dom";

export const CharactersCard = ({ name, id, category, first_appearance }) => {
  return (
    <div className="col-span-12 transition-all duration-300 hover:scale-105 sm:col-span-6 lg:col-span-3 xl:col-span-2">
      <Link to={`/${category}/${name}`}>
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={`./img/characters/${id}.jpg`}
            alt={name}
          />
          <div className="overlay absolute inset-0 flex h-full w-full flex-col p-4">
            <h1 className="text-xl font-bold text-white first-letter:uppercase">
              {name}
            </h1>
            <small
              className={`${category == "sobreviviente" ? "text-blue-300" : "text-red-600"} text-sm first-letter:uppercase`}
            >
              {category}
            </small>
            <figure className="mt-auto h-10 w-10">
              <img
                className="h-full w-full"
                src={`${first_appearance == "Left 4 Dead" ? "./img/l4d-icon.png" : "./img/l4d2-icon.png"}`}
                alt={first_appearance}
              />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};
