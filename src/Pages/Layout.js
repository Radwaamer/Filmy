import React from 'react'
import { Outlet} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <>
        <Sidebar />
        <div className="main">
            <Header />
            <Outlet />
        </div>
    </>
  )
}

export default Layout