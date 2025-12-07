import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, releaseYear, rating }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={title} className="poster-image" />
        <div className="rating-badge">{rating}</div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
