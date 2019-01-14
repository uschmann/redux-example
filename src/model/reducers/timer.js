import { START_TIMER, STOP_TIMER } from '../action';

export default function timer(timer = null, action) {
    switch(action.type) {
        case START_TIMER:
            return action.timer;
        case STOP_TIMER:
            return null;
        default:
            return timer;
   }
}