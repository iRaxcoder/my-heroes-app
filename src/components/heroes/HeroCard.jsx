import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = (props = {}) => {
  //console.log(props);
  const img = props?.thumbnail?.path + "." + props?.thumbnail?.extension;
  return (
    <div className="col-md-3 animate__animated animate__fadeInLeft">
      <div className="card mb-3">
        <img
          src={img}
          className="card-img"
          style={{ height: "200px", objectFit: "cover" }}
          alt={props?.name + "'s img"}
        />
        <div className="card-body">
          <h5 className="card-title">{props?.name}</h5>
          <p className="card-text">
            {props?.description
              ? props?.description.slice(0, 100).concat("...")
              : "no description available"}
          </p>
          <p className="card-text">
            <b>Stories: </b>
            {props?.comics?.available}
          </p>
          <p className="card-text">
            <b>Series: </b>
            {props?.series?.available}
          </p>
          <p className="card-text">
            <b>Stories: </b>
            {props?.stories?.available}
          </p>
          <p className="card-text">
            <small className="text-muted">
              Last updated: {new Date(props?.modified).toUTCString()}
            </small>
          </p>
          <Link style={{ color: "red" }} to={"/hero/" + props?.id}>
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
