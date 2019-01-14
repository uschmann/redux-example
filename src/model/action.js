import wait from '../utils/wait'

/**************************************
 * States
 *************************************/
const HERO_STATE_IDLE = 'idle';
const HERO_STATE_TRANSITION = 'transition';
const HERO_STATE_WAIT = 'wait';
const HERO_STATE_RETURN = 'return';

const HERO_STATE_MOVE_TOWARD = 'moveToward';
const HERO_STATE_DEAL_DAMAGE = 'dealDamage';
const HERO_STATE_RETURN_AFTER_ATTACK = 'returnAfterAttack';

/**************************************
 * Action types
 *************************************/
// Hero
export const SET_HERO_STATE = 'SET_HERO_STATE';
export const SET_HERO_POSITION = 'SET_HERO_POSITION';

// Monster
export const MONSTER_ATTACK = 'MONSTER_ATTACK';


/**************************************
 * Action creators
 *************************************/
// Hero
export function setHeroState(state) {
    return { type: SET_HERO_STATE, state };
}

export function setHeroPosition(x, y) {
    return { type: SET_HERO_POSITION, x, y };
}

export function dodge(x, y) {
    return function(dispatch, getState) {
        const { hero } = getState();
        if(hero.currentState == HERO_STATE_IDLE) {
            dispatch(setHeroState(HERO_STATE_TRANSITION));
            wait(100)
            .then(() => {
                dispatch(setHeroState(HERO_STATE_WAIT));
                dispatch(setHeroPosition(x, y));
            })
            .then(() => wait(1000))
            .then(() => {
                dispatch(setHeroState(HERO_STATE_RETURN));
            })
            .then(() => wait(100))
            .then(() => {
                dispatch(setHeroPosition(1, 1));
                dispatch(setHeroState(HERO_STATE_IDLE));
            });
        }
    }
}

export function heroAttack() {
    return function(dispatch, getState) {
        const { hero } = getState();
        if(hero.currentState == HERO_STATE_IDLE) {
            dispatch(setHeroState(HERO_STATE_MOVE_TOWARD));
            wait(100)
            .then(() => dispatch(setHeroState(HERO_STATE_DEAL_DAMAGE)))
            .then(() => wait(100))
            .then(() => dispatch(setHeroState(HERO_STATE_RETURN_AFTER_ATTACK)))
            .then(() => wait(100))
            .then(() => dispatch(setHeroState(HERO_STATE_IDLE)))
        }
    }
}

// Monster
export function monsterAttack() {
    return {
        type: MONSTER_ATTACK
    }
}