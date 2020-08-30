import {combineReducers} from "redux";
import {genresFetch} from "./GenresReducer";
import {popularMovies} from "./PopularMoviesReducer";
import {topRatedMovies} from "./TopRatedReducer";
import {SelfMovieReducer} from "./SelfMoviePageReducer";
import {SearchMoviesReducer} from "./SearchMoviesReducer";

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
        searchItems: [],
        isLoading: false,
        error: ''
    },
    genres: {
        genres: [],
        isGenresLoading: false,
        genreHasError: ''
    },
    selfMovie: {
        movie: {},
        isLoading: false,
        error: ''
    }
};
export const createRootReducer = () => {
    return combineReducers( {
        genresFetch,
        popularMovies,
        topRatedMovies,
        SelfMovieReducer,
        SearchMoviesReducer
    })
};







