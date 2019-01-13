
/**************************************
 * Action types
 *************************************/
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const SET_VIEW_MODE = 'setViewMode';
export const TOGGLE_VIEW_MODE = 'toggleViewMode';

/**************************************
 * Action creators
 *************************************/
export function increment(value) {
    return { type: INCREMENT, value };
}

export function decrement(value) {
    return { type: DECREMENT, value };
}

export function setViewMode(viewMode) {
    return { type: SET_VIEW_MODE, viewMode };
}

export function toggleViewMode() {
    return { type: TOGGLE_VIEW_MODE };
}