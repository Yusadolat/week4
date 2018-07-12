// default reducer
// Note: You can remove this reducer and create your own reducer

import { CHANGE_NUMBER } from '../actions';
import { ADD_TWO } from '../actions';

const numbers = (state={
    numberOne: 0,
    numberTwo: 100
    },
    action) => {
    switch(action.type) {
        case CHANGE_NUMBER: {
            return state = {...state, numberOne: state.numberOne + action.payload}
        }
        case ADD_TWO: {
            return state = {...state, numberTwo: state.numberTwo + action.payload}
        }

        default: 
            return state;
    }
}

export default numbers;