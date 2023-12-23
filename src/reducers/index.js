import todoReducers from './todoReducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;