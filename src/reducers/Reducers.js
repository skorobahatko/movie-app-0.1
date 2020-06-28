import {
    IS_MOVIES_LOADING, MOVIES_HAS_ERROR, MOVIES_FETCH_DATA, GENRES_HAS_ERROR, IS_GENRES_LOADING, GET_GENRES
} from "../actions/Actions";
import {combineReducers} from "redux";

const defaultItemsData = {
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


export function popularMovies (state= defaultItemsData.popularMovies, action) {
    let newState = {...state};
    switch (action.type) {
        case IS_MOVIES_LOADING:
            newState.isLoading = action.isLoading;

            return  newState;

        case MOVIES_HAS_ERROR:
            newState.error = action.hasError

            return  newState;

        case MOVIES_FETCH_DATA:
            newState.popMovItems = action.items;

            return  newState;

            default: return newState
    }
}
export function topRatedMovies (state= defaultItemsData.topRatedMovies, action) {
    let newState = {...state};
    switch (action.type) {
        case IS_MOVIES_LOADING:
            newState.isLoading = action.isLoading;

            return  newState;

        case MOVIES_HAS_ERROR:
            newState.error = action.hasError;

            return  newState;

        case MOVIES_FETCH_DATA:
            newState.topMovItems = action.items;

            return  newState;

            default: return newState
    }
}
export function genresFetch (state= defaultItemsData.genres, action) {
    let newState = {...state};
    switch (action.type) {
        case IS_GENRES_LOADING:
            newState.isGenresLoading = action.payload;

            return  newState;

        case GENRES_HAS_ERROR:
            newState.genresHasError = action.payload;

            return  newState;

        case GET_GENRES:
            newState.genres = action.payload;

            return  newState;

        default: return newState
    }
}




export const createRootReducer = () => {
    return combineReducers( {
        popularMovies,
        topRatedMovies,
        genresFetch
        // itemsIsLoading,
        // errorHasCatch,
        // itemsFetchData
    })
};