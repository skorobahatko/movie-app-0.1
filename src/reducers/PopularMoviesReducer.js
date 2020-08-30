import {IS_MOVIES_LOADING, MOVIES_HAS_ERROR, POPULAR_MOVIES_FETCH_DATA} from "../actions/Actions";
import {defaultItemsData} from "./Reducers";

export function popularMovies (state= defaultItemsData.popularMovies, action) {
    let newState = {...state};
    switch (action.type) {
        case IS_MOVIES_LOADING:
            newState.isLoading = action.isLoading;

            return  newState;

        case MOVIES_HAS_ERROR:
            newState.error = action.hasError;

            return  newState;

        case POPULAR_MOVIES_FETCH_DATA:
            newState.popMovItems = action.items;

            return  newState;

        default: return newState
    }
}
