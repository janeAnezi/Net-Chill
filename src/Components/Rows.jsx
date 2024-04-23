import React, { useEffect, useState } from 'react';
import axios from '../axios'; 
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MovieDetails from './MovieDetails'; 

const base_url = 'https://image.tmdb.org/t/p/original/';

export default function Rows({ title, fetchURL }) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          try {
            const urlParams = new URLSearchParams(new URL(url).search); 
            setTrailerUrl(urlParams.get('v'));
          } catch (error) {
            console.error('Error constructing URL:', error);
            setTrailerUrl(''); // Reset trailer URL if an error occurs
          }
        })
        .catch((error) => console.log(error));
    }
    setSelectedMovieId(movie.id); // Set selected movie ID when a user clicks on a movie
  };

  const handleCloseDetails = () => {
    setSelectedMovieId(null); // Reset selected movie ID when closing movie details
  };

  return (
    <div className="overflow-hidden p-4">
      <h2 className="text-xl p-2 text-yellow-300">{title}</h2>
      <div className="flex flex-no-wrap">
        {movies.map((movie, index) => (
          <div key={index} className="flex-shrink-0 px-2 relative transition-transform hover:cursor-pointer hover:scale-110">
            <Link to={`/movie/${movie.id}`}> {/* Wrap the image with Link */}
              <img onClick={() => handleClick(movie)} src={`${base_url}${movie.poster_path}`} alt={movie.name} className="w-40" />
            </Link>
            <p className="text-center">{movie.name}</p>
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={{ height: '390', width: '100%' }} />}
      {selectedMovieId && <MovieDetails movieId={selectedMovieId} onClose={handleCloseDetails} />}
    </div>
  );
}
