import React, { useEffect, useState } from 'react'

import './search.css'
import { useDispatch } from './../../../node_modules/react-redux/es/hooks/useDispatch';
import { fetchSearch } from '../../store/actions/movies-actions';
import { useNavigate, useParams } from 'react-router-dom';

const Search = () => {

  const [search,setSearch]=useState("");
  const handleValue=(e)=>{
    setSearch(e.target.value);
  };

  const dispatch= useDispatch();
  const navigate = useNavigate();
  const params=useParams();
  useEffect(()=>{
    if(!window.location.hash.includes("search")){
        setSearch("");
    }
},[params])


  return (
    <div className="search">
      <form onSubmit={(e)=>{
        e.preventDefault();
        if (search.trim()!=""){
          navigate(`search/${search}/1`);
          dispatch(fetchSearch(params));
        }
      }} className='position-relative mx-auto'>
        <input onChange={(e)=>handleValue(e)} className='border-bottom rounded-5 border-start px-3 py-2 pe-5' type="search" name="search" id="search" placeholder='Search for a movie' value={search}/>
        <button className="icon btn position-absolute top-50 translate-middle-y"><i className='fa-solid fa-magnifying-glass'></i></button>
      </form>
    </div>
  )
}

export default Search