import {batch} from "react-redux";

export const IS_MOVIES_LOADING = 'IS_MOVIES_LOADING';
export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
export const MOVIES_FETCH_DATA = 'MOVIES_FETCH_DATA';
export const GET_GENRES = 'GET_GENRES';
export const GENRES_HAS_ERROR = 'GENRES_HAS_ERROR';
export const IS_GENRES_LOADING = 'IS_GENRES_LOADING';


// action for showing is movies loading
export const isMoviesLoading = (boolean) => {
    return {
        type: IS_MOVIES_LOADING,
        isLoading: boolean
    }
};

// action for showing err
export const moviesHasError = (boolean) => {
    return {
        type: MOVIES_HAS_ERROR,
        hasError: boolean
    }
};

// action for getting data from api into redux store
export const moviesFetchData = (items) => {
    const {results} = items;
    return {
        type: MOVIES_FETCH_DATA,
        items: results
    }
};

export const getGenres = (genres) => {
    return {
        type: GET_GENRES,
        payload: genres
    }
};
export const isGenresLoading = (boolean) => {
    return {
        type: IS_GENRES_LOADING,
        payload: boolean
    }
};
export const genresLoadingError = (boolean) => {
    return {
        type: GENRES_HAS_ERROR,
        payload: boolean
    }
};

export function itemsFetchData (url) {
    console.log ('fetchMovies');
    return (dispatch) => {
        dispatch (isMoviesLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status)
                }
                return response
            })
            .then((response) => response.json())
            .then((items) => {
                batch(() => {
                    dispatch(moviesFetchData(items))
                    dispatch(isMoviesLoading(false))
                })
            })
            .catch((e) => dispatch(moviesHasError(e)))
    }
}

export function genresFetchData (url) {
    return (dispatch) => {
        dispatch (isGenresLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status)
                }
                return response
            })
            .then((response) => response.json())
            .then((items) => {
                batch(() => {
                    dispatch(getGenres(items))
                    dispatch(isGenresLoading(false))
                })
            })
            .catch((e) => dispatch(genresLoadingError(e)))
    }
}
