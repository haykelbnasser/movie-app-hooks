import React, { useState } from 'react'
import { MoviesData } from '../assets/MoviesData'
import MoviesList from './MoviesList'
import Navbar from './Navbar'
import Link from 'react-router-dom'
 



function Movies() {
  const [MovieData,setMovieData] = useState(MoviesData);
  const [Search , setSearch]=useState('');
  const handleSearch=(e)=>setSearch(e.target.value);
 const addMovie = (newMovie) => setMovieData([...MovieData ,newMovie]);
  return (
    <div className='container-fluid'> 
  
   <Navbar
    handleSearch={handleSearch}
    handleAdd={addMovie}
   />
    
    <MoviesList
      
  MoviesArray={
    Search ? MovieData.filter((movie)=>
    movie.title.toLowerCase().includes(Search.toLowerCase())
    )
    :MovieData
  }
   />
  
    </div>
 


  )

}

export default Movies;
