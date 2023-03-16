import React from 'react'
import {Link,useParams} from 'react-router-dom'

function Description({movies}) {
    const {id} = useParams();
    const movie = movies.find(el=> el.id === id)
  return (
    <div>
        <h1>{movie.name}</h1>
        <img src={movie.image} alt={movie.name} style={{ width:"350px", height:"400px"}}/>
        <div >
            <h3>Description:</h3>
            <p>{movie.description}</p>
        </div>
        <div >
            <h3>Movie Trailer:</h3>
            <p><a href={movie.trailerVideoLink} target="_blank" rel='noopener noreferrer'>Show me</a></p>
        </div>
        <div><Link to='/'><button className='primary'>Home</button></Link></div>
    </div>
  )
}

export default Description