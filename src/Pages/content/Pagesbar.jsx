import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './pagesbar.css'

const Pagesbar = (props) => {
    const movies=props.movies;
    const params=useParams();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(9)
    useEffect(()=>{
        const size= ()=>{
            if(window.innerWidth<830){
                setWindowWidth(2)
            }
            else if(window.innerWidth<992){
                setWindowWidth(4)
            }
            else if(window.innerWidth<1200){
                setWindowWidth(6)
            }
            else if(window.innerWidth<1600){
                setWindowWidth(9)
            }
        };
        size();
        window.addEventListener('resize',()=>{
            size();
        });
    },[windowWidth]);

    const handlePageClick = (event) => {
        params.word==undefined? navigate(`/${params.path}/${event.selected+1}`) : navigate(`/search/${params.word}/${event.selected+1}`)
    };

  return (
    <div className='pagesbar overflow-hidden overflow-ellipsis'>
        <div className="container d-flex gap-3 flex-nowrap">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={windowWidth}
                marginPagesDisplayed={2}
                pageCount={movies["total_pages"]>500? 500:movies["total_pages"]}
                previousLabel="<prev"
                renderOnZeroPageCount={null}
                className="text-black d-flex gap-3 mx-auto fw-bold align-items-center"
                pageLinkClassName="bg-white d-flex align-items-center justify-content-center rounded-3"
                previousClassName="text-white"
                nextClassName="text-white"
                breakClassName="text-white"
                forcePage={+params.page-1}
            />
        </div>
    </div>
  )
}

export default Pagesbar;