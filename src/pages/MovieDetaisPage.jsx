import React from 'react'
import MovieDetails from '../Components/MovieDetails'

function MovieDetaisPage() {
  return (
    <div>
      <MovieDetails movieId={movie.id} onClose={handleCloseDetails} />
    </div>
  )
}

export default MovieDetaisPage
