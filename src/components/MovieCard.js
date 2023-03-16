import React from "react";
import StarRating from "./StarRating";
import { NavLink } from "react-router-dom";

const MovieCard = ({ item, deleteMovie }) => {
  return (
    <div className="zoom">
      <div className="movie-card">
        <NavLink
          to={`/description/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <StarRating rating={item.rating} />
          <p>{item.date}</p>
        </NavLink>
        <button className="btn" onClick={() => deleteMovie(item.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
