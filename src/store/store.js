import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux"
import { moviesReducer } from "./reducers/movies-reducers";

const appReducer=combineReducers({
    movies: moviesReducer
});
export const store= createStore(appReducer,applyMiddleware(thunk))