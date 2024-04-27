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
    <div className="flex justify-between pr-12 pl-20 py-20 custom bg-slate-950">
      {/* Display movie poster */}
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt={movieDetails.title} className='w-96' />
      </div>
      <div className="ml-4 mt-4 text-lg text-gray-400">
        <h2 className="text-3xl text-slate-200 font-semibold pt-2 pb-8">{movieDetails.title}</h2>
        <p className=" pb-8">{movieDetails.release_date}</p>
        <p className=" pb-24">{movieDetails.overview}</p>
        <button onClick={onClose} className="bg-slate-500 text-white py-0.5 px-2 mt-3 rounded-md text-sm hover:bg-red-600 hover:skew-y-12">Close</button>
      </div>
    </div>
  );
};

export default MovieDetails;
