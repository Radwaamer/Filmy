import {get , search ,details} from '../actions/movies-actions';

export const moviesReducer=(state=[],action)=>{
    switch(action.type){
        case get: 
            return {...action.payload};
        case search:
            return {...action.payload};
        case details:
            return {...action.payload}
        default:
            return state;
    };
};