import React from 'react'
import Search from './Search';

const Header = () => {
  return (
    <>
      <header className='border bg-dark text-white py-3'>
        <Search />
      </header>
    </>
  )
}

export default Header