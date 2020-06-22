import {applyMiddleware, createStore, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createRootReducer} from "../reducers/Reducers";
import thunk from "redux-thunk";


// connected combine reducer, middleware(thunk)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = function() {
    return createStore(
            createRootReducer(),
            composeEnhancer(applyMiddleware(thunk)))
};
export default configureStore;