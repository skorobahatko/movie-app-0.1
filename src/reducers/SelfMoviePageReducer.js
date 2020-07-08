import {MOVIE_SELF_DATA, SELF_MOVIE_HAS_ERROR, IS_MOVIE_LOADING} from "../actions/Actions";
import {defaultItemsData} from "./Reducers";

export const SelfMovieReducer = (state = defaultItemsData.selfMovie, action) => {
    const newState = {...state};
    switch (action.type) {
        case MOVIE_SELF_DATA:
            newState.movie = action.payload;
            return newState;
        case IS_MOVIE_LOADING:
            newState.isLoading = action.payload;
            return newState;
        case SELF_MOVIE_HAS_ERROR:
            newState.error = action.payload;
            return newState;
        default: return state
    }
}
