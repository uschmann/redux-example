
/**************************************
 * Action types
 *************************************/
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const SET_VIEW_MODE = 'setViewMode';
export const TOGGLE_VIEW_MODE = 'toggleViewMode';
export const START_TIMER = 'startTimer';
export const STOP_TIMER = 'stopTimer';

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

let timer = null;

export function startTimer(interval = 1000, value = 1) {
    return function (dispatch) {
        if(timer === null) {
            timer = setInterval(() => {
                dispatch(increment(value));
            }, interval);
    
            dispatch({ type: START_TIMER, timer });
        }
    }
}

export function stopTimer() {
    return function(dispatch) {
        if(timer !== null) {
            clearInterval(timer);
            timer = null;
            dispatch({ type: STOP_TIMER });
        }
    }
}