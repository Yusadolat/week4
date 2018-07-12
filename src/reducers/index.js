import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// calling the default reducer to create a link
import numbers from './numbers';


const rootReducers = combineReducers({
    numbers,
    form: formReducer
    
});

export default rootReducers;