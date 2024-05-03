import {legacy_createStore as createStore} from 'redux';
import { combineReducers } from "redux"
import postReducer from './reducer.js'

export const store = createStore(combineReducers({postReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
