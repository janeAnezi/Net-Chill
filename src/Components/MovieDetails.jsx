import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { API_KEY, BASE_URL } from '../request';

const MovieDetails = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between">
      {/* Display movie poster */}
      <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} className="w-32 h-auto" />

      <div className="ml-4">
        {/* Display movie title */}
        <h2 className="text-xl font-semibold">{movieDetails.title}</h2>
        {/* Display movie overview */}
        <p className="text-gray-700">{movieDetails.overview}</p>
        {/* You can add more movie details here */}
        
        {/* Close button */}
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 mt-2 rounded-md">Close</button>
      </div>
    </div>
  );
};

export default MovieDetails;
