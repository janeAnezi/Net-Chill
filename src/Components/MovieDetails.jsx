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
    return <div className='bg-slate-950'>Loading...</div>;
  }

  return (
    <div className="flex justify-between ml-20 my-20 sm:flex-col lg:flex-row">
      {/* Display movie poster */}
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} className=" h-auto" />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{movieDetails.title}</h2>
        <p className="text-gray-700">{movieDetails.release_date}</p>
        <p className="text-gray-700">{movieDetails.overview}</p>
        <button onClick={onClose} className="bg-slate-500 text-white py-0.5 px-2 mt-3 rounded-md text-sm">Close</button>
      </div>
    </div>
  );
};

export default MovieDetails;
