import { combineReducers } from 'redux';
import value from './value';
import viewMode from './viewMode';

export default combineReducers({
    value,
    viewMode
});