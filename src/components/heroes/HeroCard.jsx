import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = (props) => {
  console.log(props);
  const img = props.thumbnail.path + "." + props.thumbnail.extension;
  return (
    <div className="col-md-3">
      <div class="card mb-3">
        <img
          src={img}
          class="card-img"
          style={{ height: "200px", objectFit: "cover" }}
          alt={props.name + "'s img"}
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
            {props.description
              ? props.description.slice(0, 100).concat("...")
              : "no description available"}
          </p>
          <p class="card-text">
            <p class="fw-bold">
              Comics: <small>{props.comics.available}</small>
            </p>
          </p>
          <p class="card-text">
            <p class="fw-bold">
              Series: <small>{props.series.available}</small>
            </p>
          </p>
          <p class="card-text">
            <p class="fw-bold">
              Stories: <small>{props.stories.available}</small>
            </p>
          </p>
          <p class="card-text">
            <small class="text-muted">
              Last updated: {new Date(props.modified).toUTCString()}
            </small>
          </p>
          <Link to={"/hero/" + props.id}>More...</Link>
        </div>
      </div>
    </div>
  );
};
