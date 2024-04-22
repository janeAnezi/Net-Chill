import React, { useEffect, useState } from 'react';
import axios from '../axios'; 

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows( { title, fetchURL}) {
    
  const [movies, setMovies] = useState([]);

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

  console.log(movies);

  return (
   
    <div className="overflow-hidden p-4">
        <h2 className='text-xl p-2 text-yellow-300'>{title}</h2>
        <div className="flex flex-no-wrap">
            {movies.map((movie, index) => (
                <div key={index} className="flex-shrink-0 px-2 relative transition-transform hover:cursor-pointer hover:scale-110">
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} className="w-40" />
                    <p className="text-center">{movie.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Rows;
