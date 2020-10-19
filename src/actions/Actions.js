import {batch} from "react-redux";
import {accessToken} from "../components/constants/accessToken";

export const IS_MOVIES_LOADING = 'IS_MOVIES_LOADING';
export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
export const POPULAR_MOVIES_FETCH_DATA = 'POPULAR_MOVIES_FETCH_DATA';
export const TOP_RATED_MOVIES_FETCH_DATA = 'TOP_RATED_MOVIES_FETCH_DATA';
export const GET_GENRES = 'GET_GENRES';
export const GENRES_HAS_ERROR = 'GENRES_HAS_ERROR';
export const IS_GENRES_LOADING = 'IS_GENRES_LOADING';
export const MOVIE_SELF_DATA = 'MOVIE_SELF_DATA';
export const IS_MOVIE_LOADING = 'IS_MOVIE_LOADING';
export const SELF_MOVIE_HAS_ERROR = 'SELF_MOVIE_HAS_ERROR';
export const SEARCH_MOVIES_DATA = 'SEARCH_MOVIES_DATA';
export const IS_SEARCH_MOVIES_LOADING = 'IS_SEARCH_MOVIES_LOADING';
export const SEARCH_HAS_ERROR = 'SEARCH_HAS_ERROR';


export const isMoviesLoading = (boolean) => {
    return {
        type: IS_MOVIES_LOADING,
        isLoading: boolean
    }
};
export const moviesHasError = (boolean) => {
    return {
        type: MOVIES_HAS_ERROR,
        hasError: boolean
    }
};
export const moviesFetchData = (items) => {
    const {results, total_pages} = items;
    return {
        type: POPULAR_MOVIES_FETCH_DATA,
        items: {items: results, pages: total_pages}
    }
};

export const topRatedMoviesFetchData = (items) => {
    const {results, total_pages} = items;
    return {
        type: TOP_RATED_MOVIES_FETCH_DATA,
        items: {items: results, pages: total_pages}
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

export const selfMovieData = (item) => {
    return {
        type: MOVIE_SELF_DATA,
        payload: item
    }
};
export const isSelfMovieLoading = (boolean) => {
    return {
        type: IS_MOVIE_LOADING,
        payload: boolean
    }
};
export const isSelfMovieHasError = (boolean) => {
    return {
        type: SELF_MOVIE_HAS_ERROR,
        payload: boolean
    }
};

export const searchMoviesData = (items) => {
    const {results, total_results} = items;
    return {
        type: SEARCH_MOVIES_DATA,
        items: {items: results, countOfItems: total_results}
    }
}
export const isSearchMoviesLoading = (boolean) => {
    return {
        type: IS_SEARCH_MOVIES_LOADING,
        isLoading: boolean
    }
}
export const searchMoviesHasError = (boolean) => {
    return {
        type: SEARCH_HAS_ERROR,
        error: boolean
    }
}

// http requests for popular / top rated / genres / info about one movie

export function popularItemsFetchData (url) {
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

export function topRatedItemsFetchData (url) {
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
                    dispatch(topRatedMoviesFetchData(items))
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

export function selfMovieFetch (id) {
    return (dispatch) => {
        dispatch(isSelfMovieLoading(true));
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${accessToken}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status)
                }
                return response
            })
            .then((response) => response.json())
            .then((item) => {
                batch(() => {
                    dispatch(selfMovieData(item))
                    dispatch(isSelfMovieLoading(false))
                })
            })
            .catch((e) => dispatch(isSelfMovieHasError(e)))
    }
}

export function searchMoviesFetch(url) {
    console.log ('search');
    return (dispatch) => {
        dispatch (isSearchMoviesLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status)
                }
                return response
            })
            .then((response) => response.json())
            .then((items) => {
                console.log ('ITEMS')
                console.log (items)
                batch(() => {
                    dispatch(searchMoviesData(items));
                    dispatch(isSearchMoviesLoading(false))
                })
            })
            .catch((e) => dispatch(searchMoviesHasError(e)))
    }
}
