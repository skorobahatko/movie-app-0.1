import {IS_MOVIES_LOADING, MOVIES_HAS_ERROR, MOVIES_FETCH_DATA} from "../actions/Actions";
import {combineReducers} from "redux";

const defaultItemsData = {
    items: [],
    isLoading: false,
    error: ''
};

export function itemsIsLoading (state= defaultItemsData.isLoading, action) {
    switch (action.type) {
        case IS_MOVIES_LOADING:
            return  action.isLoading;

            default: return state;
    }
}
export function errorHasCatch (state= defaultItemsData.error, action) {
    switch (action.type) {
        case MOVIES_HAS_ERROR:
            return  action.error;

            default: return state;
    }
}
export function itemsFetchData (state= defaultItemsData.items, action) {
    switch (action.type) {
        case MOVIES_FETCH_DATA:
            console.log (action.items);
            console.log (defaultItemsData);

            return  action.items;

            default: return state;
    }

}


export const createRootReducer = () => {
    return combineReducers( {
        itemsIsLoading,
        errorHasCatch,
        itemsFetchData
    })
};