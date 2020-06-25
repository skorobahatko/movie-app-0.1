import {accessToken} from "../components/constants/movies";
import {itemsIsLoading} from "../reducers/Reducers";

export const IS_MOVIES_LOADING = 'IS_MOVIES_LOADING';
export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
export const MOVIES_FETCH_DATA = 'MOVIES_FETCH_DATA';
// export const IS_MOVIES_LOADING = 'IS_MOVIES_LOADING';
// export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
// export const MOVIES_FETCH_DATA = 'MOVIES_FETCH_DATA';


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


// export const getGenres = (genres) => {
//     return {
//         type: GET_GENRES,
//         payload: genres
//     }
// };


//

export function itemsFetchData (url) {
    console.log ('fetch');
    return (dispatch) => {
        dispatch (isMoviesLoading(true));
        console.log ('true');
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status)
                }
                dispatch(isMoviesLoading(false));
                console.log ('false');
                console.log (response);
                return response
            })
            .then((response) => response.json())
            .then((items) => dispatch(moviesFetchData(items)))
            .catch((e) => dispatch(moviesHasError(e)))
    }
}
