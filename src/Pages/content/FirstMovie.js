import React from 'react'
import { Link } from 'react-router-dom'

const FirstMovie = (props) => {
    let movies= props.movies;
    return (
        <Link to={`/${movies["results"][0]["id"]}`} className="first-movie d-block position-relative mb-5">
            <div className="image rounded-2 overflow-hidden">
                <img className='img-fluid w-100 h-100 rounded-2' src={`https://image.tmdb.org/t/p/original${movies["results"][0]["backdrop_path"]}`} alt={movies["results"][0]["title"]} />
            </div>
            <div className="layout position-absolute top-0 start-0 w-100 h-100 rounded-2"></div>
            <div className="text col-md-6 position-absolute bottom-0 start-0 p-4">
                <h3 className='fw-normal mb-3'>{movies["results"][0]["title"]}</h3>
                <p>{movies["results"][0]["overview"]}</p>
                <span className='btn bg-danger text-white mt-3 px-4'>{movies["results"][0]["vote_average"]}/10</span>
            </div>
        </Link>
    )
}

export default FirstMovie;