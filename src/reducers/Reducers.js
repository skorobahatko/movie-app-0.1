import {IS_MOVIES_LOADING, MOVIES_HAS_ERROR, MOVIES_FETCH_DATA} from "../actions/Actions";
import {combineReducers} from "redux";

const defaultItemsData = {
    popularMovies: {
        items: [],
        isLoading: false,
        error: ''
    },
    topRatedMovies: {
        items: [],
        isLoading: false,
        error: {}
    },
    searchInMovies: {
        items: [],
        isLoading: false,
        error: {}
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
            newState.items = action.items;

            return  newState;

            default: return newState
    }
}

// export function itemsIsLoading (state= defaultItemsData.isLoading, action) {
//     switch (action.type) {
//         case IS_MOVIES_LOADING:
//             return  action.isLoading;
//
//             default: return state;
//     }
// }
// export function errorHasCatch (state= defaultItemsData.error, action) {
//     switch (action.type) {
//         case MOVIES_HAS_ERROR:
//             console.log (action.error)
//             return  action.error;
//
//             default: return state;
//     }
// }
// export function itemsFetchData (state= defaultItemsData.items, action) {
//     switch (action.type) {
//         case MOVIES_FETCH_DATA:
//             console.log (action.items);
//             console.log (defaultItemsData);
//
//             return  action.items;
//
//             default: return state;
//     }
//
// }


export const createRootReducer = () => {
    return combineReducers( {
        popularMovies
        // itemsIsLoading,
        // errorHasCatch,
        // itemsFetchData
    })
};