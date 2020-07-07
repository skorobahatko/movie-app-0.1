import {IS_MOVIES_LOADING, MOVIES_FETCH_DATA, MOVIES_HAS_ERROR} from "../actions/Actions";
import {defaultItemsData} from "./Reducers";

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
