import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../content/Movies'
import { useParams } from 'react-router-dom';
import { fetchDetails } from './../../store/actions/movies-actions';

import './movie.css'

const Movie = () => {
    // const movies= useSelector(state=>state.movies);
    // const dispatch= useDispatch();
    const params=useParams();
    // useEffect(()=>{
    //     if(!window.location.hash.includes("search")){
    //         dispatch(fetchDetails(params))
    //     }
    // },[params])

    const [movie,setMovie]=useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=6424f847ee23c379f914c233ea92ac4d&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovie(data))
    },[params.movie])

  return (
    <div className="movie text-white bg-black position-relative">
        {Object.keys(movie).length>0 ?
        <div className="p-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="image rounded-3">
                        <img className='img-fluid rounded-3' src={`https://image.tmdb.org/t/p/original/${movie["poster_path"]}`} alt={movie["original_title"]} />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="details">
                        <div className=' text-center'>
                            <h1>{movie["title"]} ({new Date(movie["release_date"]).getFullYear()})</h1>
                            <h3 className='fw-normal my-4'>{movie["tagline"]}</h3>
                            <div className='d-flex justify-content-around align-items-center'>
                                <span className='bg-danger text-white px-4 py-2 rounded-3'>{movie["vote_average"]}/10</span>
                                {/* <p className='fs-5'>107min / Jun 29 2022 / English</p> */}
                            </div>
                            <div className='d-flex justify-content-around my-4'>
                                {movie["genres"].map(gen=>{
                                    return <p key={gen["id"]}>{gen["name"]}</p>
                                })}
                            </div>
                        </div>
                        <div className='overview mb-5'>
                            <h4>Overview</h4>
                            <p>{movie["overview"]}</p>
                        </div>
                        {/* <div>
                            <h4>Top Cast</h4>
                            <div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                                <div>
                                    <img src="https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" alt="" />
                                    <p>keri</p>
                                    <span>sari</span>
                                </div>
                            </div>
                            <div>
                                <button>imdb</button>
                                <button>trailer</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            
            {/* <div className="recomnd">
                <h3>You might also like</h3>
                <Movies movies={movies}/>
            </div> */}
    </div> : null}
    </div>
  )
}

export default Movie