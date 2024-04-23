import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';

function Banner() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.fetchOriginals);
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[randomIndex]);
            } catch (error) {
                setError(error);
            }
        };
        
        fetchData();

        // Cleanup function
        return () => {
            // Cleanup code here if needed
        };
    }, []);

    if (error) {
        // Handle error, e.g., show a message to the user
        return <div>Error: {error.message}</div>;
    }

    if (!movie) {
        // Optionally, you can show a loading indicator while waiting for the data
        return <div>Loading...</div>;
    }

    return (
        <header className='h-[750px]' style={{
            backgroundSize: "cover", 
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
            backgroundPosition: "center center"
            }} >
        
            <div className="ml-8 pt-36 lg:ml-20">
                <h1 className='text-5xl py-3 font-bold w-80'>
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className='py-3 space-x-4'>
                    <button className='bg-red-500 px-3 py-1 rounded-lg'>Play</button>
                    <button className='bg-red-500 px-3 py-1 rounded-lg'><a href={`https://image.tmdb.org/t/p/original${movie.original_title}`} target="_blank" rel="noopener noreferrer">View</a>
</button>
                </div>
                <h2 className='w-80 pt-2 leading-relaxed'>
                    {movie.overview}
                </h2>
            </div>
            <div className='baner-gradient'></div>
        </header>
    );
}

export default Banner;
