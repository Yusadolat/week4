export const CHANGE_NUMBER = 'change_number';
export const ADD_TWO = 'add_two';

// default function to display redux action format
export function addOne() {

    // action object format being return to a reducer
    return {
        type: CHANGE_NUMBER,
        payload: 1
    }
}

export function addTwo() {

    // action object format being return to a reducer
    return {
        type: ADD_TWO,
        payload: 2
    }
}