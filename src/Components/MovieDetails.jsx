import React, { useState, useEffect } from 'react';
import axios from '../axios';

const MovieDetails = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`/movie/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

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
