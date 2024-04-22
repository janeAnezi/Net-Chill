import React from "react";

const MovieList = (props) => {
  const { FavouriteComponent, movies, handleFavouritesClick } = props;

  if (!movies || movies.length === 0) {
    // If movies array is empty or undefined, render a message or null
    return <p className="text-red-600">Movies</p>;
  }

  return (
    <> 
      <div className="overflow-hidden p-4">
      <h1 className=' text-white px-3 py-1 rounded-lg cursor-pointer'>{props.title}</h1>
        <div className="flex flex-no-wrap">
          {movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 p-2 relative transition-transform hover:cursor-pointer hover:scale-110">
              <img src={movie.Poster} alt="movie" className="w-40" />
              <p className="text-center">{movie.Title}</p>
              {handleFavouritesClick && (
                <div onClick={() => handleFavouritesClick(movie)} className="flex justify-center items-center absolute bg-slate-900 h-20 w-40 transition ease-in-out opacity-0 bottom-8 text-sm text-center hover:opacity-90 hover:text-white">
                  {FavouriteComponent && <FavouriteComponent />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
