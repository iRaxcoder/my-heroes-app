import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
export const HeroPage = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState([]);
  const { data, isLoading, errors } = useFetch(
    "characters/" + characterId + "?limit=20&"
  );

  const { data: comicData, isLoading: isLoadingComic } = useFetch(
    "characters/" + characterId + "/comics" + "?limit=1&"
  );

  useEffect(() => {
    setCharacter(data[0]);
  }, [isLoading]);

  useEffect(() => {
    if (errors === true) {
      navigate("/marvel", { replace: true });
    }
  }, [errors]);

  useEffect(() => {
    setComics(comicData);
    console.log(comicData);
  }, [isLoadingComic]);

  return (
    <>
      {!character ? (
        <h2>Loading character information</h2>
      ) : (
        <>
          <h1 className="animate__animated animate__fadeInLeft">
            {character?.name}
          </h1>
          <hr />
          <div className="row animate__animated animate__fadeInLeft">
            <div className="col-12 col-sm-4 ">
              <img
                className="card-img"
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt=""
              />
            </div>
            <div className="col-12 col-sm-4 ">
              <ul className="mt-2 list-group list-group-flush">
                {character.description && (
                  <li className="list-group-item">
                    Description: {character.description}
                  </li>
                )}
                <li className="list-group-item">
                  Comics: {character.stories.available}
                </li>
                <li className="list-group-item">
                  Series: {character.series.available}
                </li>
                <li className="list-group-item">
                  Stories: {character.stories.available}
                </li>
                <li className="list-group-item">
                  Last Modified: {new Date(character.modified).toUTCString()}
                </li>
              </ul>
            </div>
          </div>
          <h2 className="mt-2 animate__animated animate__fadeInLeft">Comics</h2>
          <hr />
          <div className="row animate__animated animate__fadeInLeft">
            {comics.length === 0 && <h5>No comics found</h5>}
            <div className="col-12">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {comics?.map((comic, index) => (
                    <div
                      key={comic.id}
                      className={`carousel-item  ${
                        index === 0 ? "active" : ""
                      } `}
                      data-bs-interval="1000"
                    >
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        className="d-block"
                        width={"500px"}
                        height="600px"
                        style={{ objectFit: "cover" }}
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
