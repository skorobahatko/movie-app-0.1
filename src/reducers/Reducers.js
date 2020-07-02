import {combineReducers} from "redux";
import {genresFetch} from "./genresReducer/GenresReducer";
import {popularMovies} from "./popularMoviesReducer/PopularMoviesReducer";
import {topRatedMovies} from "./topRatedMoviesReducer/TopRatedReducer";

export const defaultItemsData = {
    popularMovies: {
        popMovItems: [],
        isLoading: false,
        error: ''
    },
    topRatedMovies: {
        topMovItems: [],
        isLoading: false,
        error: ''
    },
    searchInMovies: {
        items: [],
        isLoading: false,
        error: ''
    },
    genres: {
        genres: [],
        isGenresLoading: false,
        genreHasError: ''
    }
};
export const createRootReducer = () => {
    return combineReducers( {
        genresFetch,
        popularMovies,
        topRatedMovies
    })
};







