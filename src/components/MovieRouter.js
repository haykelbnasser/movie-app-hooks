import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


function MovieRouter () {
    const { id } = useParams();
    const location = useLocation();
    return (
        <div key={id}>
            <h1>{location.state.title}</h1>
            <iframe 
            title={location.state.title}
            width="1280" 
            height="720" 
            src={location.state.src}
             frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
            <p> {location.state.description} </p>

        </div>
    )
}
export default MovieRouter;