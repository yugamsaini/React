import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="text-center text-gray-400">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.show.id} movie={movie.show} />
      ))}
    </div>
  );
};

export default MovieList;
