import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeroCard } from "../../components/heroes/index";
import { operations } from "../../service";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";

export const Search = () => {
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "Spider-Man" } = queryString.parse(location.search);

  const onSearchCharacter = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate("?q=" + searchText.trim());
    setIsSearching(true);
  };

  useEffect(() => {
    if (q.trim() <= 1) return;
    operations.searchByKeyword(q).then((results) => {
      setResults(results);
      setIsSearching(false);
    });
  }, [q]);

  return (
    <>
      <h1>Search</h1>
      <hr />
      {!isSearching ? (
        <>
          <form
            className="form-control d-flex flex-row"
            onSubmit={onSearchCharacter}
          >
            <input
              type="text"
              placeholder="type a hero..."
              name="searchText"
              autoComplete="off"
              className="form-control"
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary m-2">
              Search
            </button>
          </form>

          {results.length >= 1 && (
            <div
              style={{ backgroundColor: "#3D3C42", color: "white" }}
              className="alert alert-success mt-2"
            >
              {results.length} results with <b>'{q}'</b>
            </div>
          )}

          {results.length === 0 && q.trim() !== "" && (
            <div className="alert alert-danger mt-2">
              No results found with <b>'{q}'</b>
            </div>
          )}

          <div className="row rows-cols-1 row-cols-md-3 g-3">
            {results.map((heroe) => (
              <HeroCard key={heroe.id} {...heroe} />
            ))}
          </div>
        </>
      ) : (
        <h4>Searching...</h4>
      )}
    </>
  );
};
