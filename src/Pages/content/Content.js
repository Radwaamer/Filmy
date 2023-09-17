import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import FirstMovie from '../content/FirstMovie';
import './content.css'
import Movies from './Movies';
import Pagesbar from './Pagesbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/actions/movies-actions';
import { fetchSearch } from '../../store/actions/movies-actions'
// import Loader from '../../Components/Loader/Loader';

function Content() {

    const movies= useSelector(state=>state.movies);

    const params=useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(Object.keys(params).length==0){
            navigate("/popular/1");
            params.path="popular";
            params.page=1;
        }
    },[params]);

    const dispatch= useDispatch();
    useEffect(()=>{
        if(!window.location.hash.includes("search")){
            dispatch(fetchMovies(params))
        }
        else if(window.location.hash.includes("search")){
            dispatch(fetchSearch(params))
        }
    },[params])

    return (
        <>
        <div className="landing text-white bg-black position-relative">
            <div className="p-4">
                {movies.length!==0 ? <>
                    <FirstMovie movies={movies} />
                    <Movies movies={movies}/>
                    <Pagesbar movies={movies}/>
                </>: null}
            </div>
        </div>
        </>
    )
}

export default Content