import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/Layout';
import Content from './Pages/content/Content';
import Movie from './Pages/movie/Movie';
// import Error from './Pages/error/Error';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route path='/:path/:page' element={<Content />} />
                    <Route path='/search/:word/:page' element={<Content />} />
                    <Route path='/:movie' element={<Movie />} />
                </Route>
                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </>
    )
}

export default App;