import React from 'react'
import { Link } from 'react-router-dom';

const Movies = (props) => {
    let movies=props.movies;
    let movie=movies["results"].map((mov,index)=>(
                (index!=0) &&(
                    <Link key={mov["id"]} className="col-md-3 mb-5" to={`/${mov["id"]}`}>
                        <div className="movie-card bg-black rounded-5">
                            <div className="image overflow-hidden rounded-5">
                                <img src={`https://image.tmdb.org/t/p/original${mov["poster_path"]}`} className="card-img h-100 rounded-5" alt={mov["original_title"]} />
                            </div>
                            <div>
                                <div className="text-center py-4 px-2">
                                    <h4 className=' text-nowrap overflow-hidden overflow-ellipsis fw-normal mb-3'>{mov["original_title"]}</h4>
                                    <span className='btn bg-danger text-white'>{mov["vote_average"]}/10</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            ));

    return (
        <>
            <div className="movies">
                <div className="row">
                    {movie}
                </div>
            </div>
        </>
    )
}

export default Movies