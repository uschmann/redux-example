import { combineReducers } from 'redux';
import value from './value';
import viewMode from './viewMode';
import timer from './timer';

export default combineReducers({
    value,
    viewMode,
    timer
});