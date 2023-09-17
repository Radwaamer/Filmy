import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {BsFilm, BsStar, BsFillPlayCircleFill} from 'react-icons/bs'
import {GiFilmProjector} from 'react-icons/gi'
import {RiMovie2Fill} from 'react-icons/ri'

import './sidebar.css'

const Sidebar = () => {

  const params=useParams();

  const items={
    categories:[
      {id:1,icon: <BsFilm className='fs-4'/>,               name:"popular"  ,   path:"popular"},
      {id:2,icon: <BsStar className='fs-4'/>,               name:"top rated",   path:"top_rated"},
      {id:3,icon: <GiFilmProjector className='fs-4'/>,      name:"upcoming",    path:"upcoming"},
      {id:4,icon: <BsFillPlayCircleFill className='fs-4'/>, name:"now playing", path:"now_playing"}
    ]
  };

  const sidebarItems= Object.keys(items).map((key,index)=>(
    <div key={index} className={`${key} pt-4 pb-2`}>
        <div className="container">
          <h6 className='text-white-50 fw-normal'>{key}</h6>
          {items[key].map(item=>(
            <NavLink key={item.id} to={`/${item.name.replace(" ","_")}/${params.page=1}`} className={`d-flex gap-4 fs-5 py-3${item.name.replace(" ","_")===params.path ? " active" : ""}`}>
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
  ));

  return (
    <aside className='position-fixed top-0 start-0 bg-dark text-white text-capitalize border-end'>

      <Link to={"/popular/1"} className="logo border-bottom py-4 d-block">
        <h1 className='text-uppercase text-center text-danger'>Film<span className='text-white'>y <RiMovie2Fill/></span></h1>
      </Link>

      <div className="sidebar-items">
      {sidebarItems}
      </div>

    </aside>
  )
}

export default Sidebar