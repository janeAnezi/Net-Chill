import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner';
import './index.css';
import SearchBox from './Components/SearchBox';
import AddToFavourites from './Components/AddFav';
import RemoveFavourites from './Components/RemovFav';
import MovieList from './Components/MovieList';
import Rows from './Components/Rows';
import requests, { API_KEY } from './request';
import Nav from './Components/Nav';
import MovieDetailsPage from './pages/MovieDetaisPage';
import Home from './Components/Home';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`;
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.results) {
        setMovies(responseJson.results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("Favourite Movies")) || [];
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("Favourite Movies", JSON.stringify(item));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [ ...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const filteredFavourites = favourites.filter((m) => m.imdbID !== movie.imdbID);
    setFavourites(filteredFavourites);
    saveToLocalStorage(filteredFavourites);
  }

  return (
    <Router>
      <div className='bg-slate-950 bg-blend-darken text-white'>
        <Nav />
        <Banner />
        <div className='absolute -top-1 right-5'>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
        <MovieList title="Movies" movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddToFavourites}/>
        <Rows title="NET~CHILL ORIGINALS" fetchURL={requests.fetchOriginals} />
        <MovieList title="Favourites" movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
        <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Rows title="Action" fetchURL={requests.fetchActionMovies} />
        <Rows title="Romance" fetchURL={requests.fetchRomanceMovies} />
        <Rows title="Comedy" fetchURL={requests.fetchComedyMovies} />
        <Rows title="Horror" fetchURL={requests.fetchHorrorMovies} />
        <Rows title="Documentaries" fetchURL={requests.fetchDocumentries} />
      </div>
    </Router>
  );
}

export default App;
