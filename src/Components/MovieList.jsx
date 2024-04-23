import React from "react";

const MovieList = ({ FavouriteComponent, movies, handleFavouritesClick, title }) => {

  // Check if movies exist and is an array
  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    // If movies array is empty or undefined, render a message or null
    return <p className="text-red-600">No movies to display</p>;
  } else {
    // If movies array is not empty, render the list of movies
    return (
      <div className="overflow-hidden p-4">
        <h1 className='text-white px-3 py-1 rounded-lg cursor-pointer'>{title}</h1>
        <div className="flex flex-no-wrap">
          {movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 p-2 relative transition-transform hover:cursor-pointer hover:scale-110">
              {/* Check if movie.poster_path exists before accessing it */}
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" className="w-40" />
              {/* Check if movie.original_title exists before accessing it */}
              <p className="text-left">{movie.original_title}</p>
              {handleFavouritesClick && (
                <div onClick={() => handleFavouritesClick(movie)} className="flex justify-center items-center absolute bg-slate-900 h-20 w-40 transition ease-in-out opacity-0 bottom-8 text-sm text-center hover:opacity-90 hover:text-white">
                  {FavouriteComponent && <FavouriteComponent />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MovieList;
