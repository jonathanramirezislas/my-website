import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { bytesReducer } from '../reducers/exampleReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    bytes:bytesReducer,
    //+ 
})

export const store =createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);