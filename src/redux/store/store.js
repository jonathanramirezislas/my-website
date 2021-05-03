import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { colorReducer } from '../reducers/colorReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    color:colorReducer,
})

export const store =createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);