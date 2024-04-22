import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';


function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            )
        }
        fetchData()
    } , [] );

    console.log(movie);

  return (
    <header className='banner h-[600px]' style={{
        backgroundSize: "cover", 
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center"
        }} >
        <div className="text-4xl  text-red-700 pt-10 pl-10">NET~CHILL</div>
    
        <div className="ml-20 pt-36">
            <h1 className='text-5xl py-3 font-bold'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='py-3 space-x-4'>
                <button className='bg-red-500 px-3 py-1 rounded-lg'>Play</button>
                <button className='bg-red-500 px-3 py-1 rounded-lg'>My List</button>
            </div>
            <h2 className='w-96'>
                {movie?.overview}
            </h2>
        </div>
      
    </header>
  )
}

export default Banner
