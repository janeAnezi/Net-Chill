import React, { useState, useEffect } from 'react';
import axios from '../axios';
import {API_KEY, BASE_URL} from '../request';

const MovieDetails = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (movie && movie.imdb_id) {
          const response = await axios.get(`${BASE_URL}/movie/${movie.imdb_id}?api_key=${API_KEY}`);
          setMovieDetails(response.data);
        } else {
          console.error('Movie IMDb ID not found');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movie]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Display other movie details here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MovieDetails;
