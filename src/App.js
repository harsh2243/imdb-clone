import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  // Sample movie data
  const sampleMovies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      rating: 9.3,
      poster: 'https://via.placeholder.com/200x300?text=Shawshank'
    },
    {
      id: 2,
      title: 'The Godfather',
      releaseYear: 1972,
      rating: 9.2,
      poster: 'https://via.placeholder.com/200x300?text=Godfather'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      releaseYear: 2008,
      rating: 9.0,
      poster: 'https://via.placeholder.com/200x300?text=Dark+Knight'
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      releaseYear: 1994,
      rating: 8.9,
      poster: 'https://via.placeholder.com/200x300?text=Pulp+Fiction'
    },
    {
      id: 5,
      title: 'Forrest Gump',
      releaseYear: 1994,
      rating: 8.8,
      poster: 'https://via.placeholder.com/200x300?text=Forrest+Gump'
    },
    {
      id: 6,
      title: 'Inception',
      releaseYear: 2010,
      rating: 8.8,
      poster: 'https://via.placeholder.com/200x300?text=Inception'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>IMDb Clone</h1>
        <p>Popular Movies</p>
      </header>
      <main className="movies-container">
        {sampleMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
