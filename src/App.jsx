import React, { useEffect, useState } from 'react';
import Banner from './Components/Banner';
import './index.css';
import SearchBox from './Components/SearchBox';
import AddToFavourites from './Components/AddFav';
import MovieList from './Components/MovieList';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9591cb8`;
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("Favourite Movies"));
    setFavourites(movieFavourites)
  }, [])
  const saveToLocalStorage = (item) => {
    localStorage.setItem("Favourite Movies", JSON.stringify(item));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [ ...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }


  return (
    <>
      <div className='text-white w-full'>
        <Banner />
        <div className='absolute -top-1 right-5'>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList  movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddToFavourites}/>
        
      </div>
    </>
  )
}

export default App
