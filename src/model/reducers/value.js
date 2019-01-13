import { INCREMENT, DECREMENT } from '../action';


export default function counterApp(value = 0, action) {
    switch(action.type) {
        case INCREMENT: 
            return value + action.value;
        case DECREMENT: 
            return value - action.value;
        default: 
            return value;
    }
}