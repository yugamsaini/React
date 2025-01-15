import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.image?.medium || 'https://via.placeholder.com/210x295'}
        alt={movie.name}
        className="w-full h-64 object-contain bg-black" /* Ensuring full image visibility */
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.name}</h2>
        <p className="text-gray-400 text-sm">
          {movie.genres?.join(', ') || 'No genres available'}
        </p>
        <p className="mt-2 text-sm text-gray-300">
          {movie.summary
            ? movie.summary.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100) + '...'
            : 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
