import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { HeroCard } from "./index";

export const HeroList = () => {
  const { data, isLoading } = useFetch("characters?limit=20&");
  const [heroes, setheroes] = useState([]);
  useEffect(() => {
    setheroes(data);
  }, [isLoading]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {isLoading && <>Loading heroes...</>}
      {heroes?.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
