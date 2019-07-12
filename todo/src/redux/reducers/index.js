import { combineReducers } from 'redux';
import todos from './todos';
import visibilytyFilter from './visibilytyFilter';

export default combineReducers({ todos, visibilytyFilter });