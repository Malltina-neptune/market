import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers';

const rootReducer = combineReducers({productReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
