import { combineReducers } from 'redux';
import { SET_HERO_STATE, SET_HERO_POSITION } from '../action';


const initialState = {
    hero: {
        currentState: 'idle',
        statistic: {
            hp: 100,
            maxHp: 100,
            attack: 10,
            defence: 10
        },
        position: {
            x: 1,
            y: 1
        }
    },
    monster: {
        currentState: 'idle',
        statistic: {
            hp: 100,
            maxHp: 100,
            attack: 10,
            defence: 10
        },
        attack: {
            positions: [
                {
                    x: 1,
                    y: 1
                }
            ]
        }
    }
};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_HERO_STATE:
            return Object.assign({}, state, {
                hero: Object.assign({}, state.hero, {
                    currentState: action.state
                })
            });

        case SET_HERO_POSITION:
            return Object.assign({}, state, {
                hero: Object.assign({}, state.hero, {
                    position: Object.assign({}, { x: action.x, y: action.y })
                })
            });
        default:
            return state;
    }
}

/*export default combineReducers({

});
*/