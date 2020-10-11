import {SEARCH_HAS_ERROR, SEARCH_MOVIES_DATA, IS_SEARCH_MOVIES_LOADING} from "../actions/Actions";
import {defaultItemsData} from "./Reducers";

export function SearchMoviesReducer(state = defaultItemsData.searchInMovies, action) {
    let newState = { ...state };
    switch (action.type) {
        case IS_SEARCH_MOVIES_LOADING:
            newState.isLoading = action.isLoading;

            return newState;

        case SEARCH_HAS_ERROR:
            newState.error = action.error;

            return newState;

        case SEARCH_MOVIES_DATA:
            newState.searchItems = action.items.items;
            newState.countOfItems = action.items.countOfItems;

            return newState;

        default:
            return newState
    }
}
