import {combineReducers} from "redux";
import {genresFetch} from "./GenresReducer";
import {popularMovies} from "./PopularMoviesReducer";
import {topRatedMovies} from "./TopRatedReducer";

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







