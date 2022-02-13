import React from 'react';
import MovieCard from './MovieCard'

export default function MoviesList({MoviesArray}) {
  return (
  <div className='row mt-2'>
      {MoviesArray.map((movie , key ) =>(
          <MovieCard movie={movie} key={key} />
      ))}
  </div>

  );
  
}
