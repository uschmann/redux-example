import { SET_VIEW_MODE, TOGGLE_VIEW_MODE } from '../action';


export default function viewMode(viewMode = 'string', action) {
    switch(action.type) {
        case SET_VIEW_MODE:
            return action.viewMode;
        case TOGGLE_VIEW_MODE:
            return viewMode == 'string' ? 'json' : 'string';
        default:
            return viewMode;
    }
}