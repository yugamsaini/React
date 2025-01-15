import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setMovies(data);
      setFilteredMovies(data);
    };
    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.show.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Movie Database</h1>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
