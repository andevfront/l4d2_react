import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CharactersCard } from "./CharactersCard";
import { getCharactersByCategory } from "../services";
import { useLoading } from "../hooks";
import "react-loading-skeleton/dist/skeleton.css";

export const CharactersGrid = ({ category }) => {
  const characters = getCharactersByCategory(category);

  const { loading } = useLoading();

  const skeletonItems = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-2"
    >
      <SkeletonTheme baseColor="#444" highlightColor="#555" duration={0.5}>
        <Skeleton className="h-[663px] w-full rounded-xl sm:h-[432px] lg:h-[360px]" />
      </SkeletonTheme>
    </div>
  ));

  return loading ? (
    <div className="grid grid-cols-12 gap-5">{skeletonItems}</div>
  ) : (
    <div className="grid grid-cols-12 gap-5">
      {characters.map((character) => (
        <CharactersCard key={character.id} {...character} />
      ))}
    </div>
  );
};
