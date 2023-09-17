export const get="get";
export const search="search";
export const details="details";

export const  getMovies=(movies)=>{
    return {
        type:get,
        payload:movies
    };
};

export const searchMovies=(movies)=>{
    return {
        type: search,
        payload: movies
    };
};

export const getDetails=(details)=>{
    return{
        type:details,
        payload:details
    };
};

export const fetchMovies=(paramss)=>{
    return async(dispatch)=>{
        const response= await fetch(`https://api.themoviedb.org/3/movie/${paramss.path}?api_key=6424f847ee23c379f914c233ea92ac4d&language=en-US&page=${paramss.page}`);
        const data= await response.json();
        dispatch(getMovies(data));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
};

export const fetchSearch=(paramss)=>{
    return async(dispatch)=>{
        const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6424f847ee23c379f914c233ea92ac4d&language=en-US&query=${paramss.word}&page=${paramss.page}&include_adult=false`);
        const data= await res.json();
        dispatch(searchMovies(data));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
};

export const fetchDetails=(paramss)=>{
    return async(dispatch)=>{
        const res=await fetch(`https://api.themoviedb.org/3/movie/${paramss.movie}/recommendations?api_key=6424f847ee23c379f914c233ea92ac4d&language=en-US&page=1`);
        const data= await res.json();
        dispatch(searchMovies(data));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
};