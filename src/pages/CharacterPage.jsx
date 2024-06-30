import { useParams } from "react-router-dom";
import { getCharacterById } from "../services";
import { formatDescription } from "../helpers";
import { useLoading } from "../hooks";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "animate.css";

export const CharacterPage = () => {
  const { id } = useParams();
  const { name, category, first_appearance, description } =
    getCharacterById(id);

  const formattedDescription = formatDescription(description);

  const { loading } = useLoading();

  return loading ? (
    <div className="flex gap-10">
      <div className="hidden h-[500px] w-[312px] shrink-0 overflow-hidden rounded-xl md:block">
        <SkeletonTheme baseColor="#444" highlightColor="#555" duration={0.5}>
          <Skeleton className="h-full w-full rounded-xl" />
        </SkeletonTheme>
      </div>
      <div className="w-full">
        <SkeletonTheme baseColor="#444" highlightColor="#555" duration={0.5}>
          <Skeleton className="h-8 w-32 rounded-lg" />
          <Skeleton className="mt-2 h-5 w-24 rounded-lg" />
          <Skeleton className="mt-10 h-6 w-36 rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-2 h-5 w-full rounded-lg" />
          <Skeleton className="mt-10 h-6 w-48 rounded-lg" />
          <Skeleton className="mt-2 h-10 w-10 rounded-lg" />
        </SkeletonTheme>
      </div>
    </div>
  ) : (
    <div className="animate__animated animate__fadeIn flex gap-10">
      <figure className="hidden h-[500px] shrink-0 overflow-hidden rounded-xl md:block">
        <img
          className="h-full w-full object-cover"
          src={`/img/characters/${id}.jpg`}
          alt={name}
        />
      </figure>
      <div>
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
