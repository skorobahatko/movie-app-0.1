import {GENRES_HAS_ERROR, GET_GENRES, IS_GENRES_LOADING} from "../actions/Actions";
import {defaultItemsData} from "./Reducers";

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

        default: return state
    }
}

