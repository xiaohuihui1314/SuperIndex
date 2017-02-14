import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
const rootReducer = combineReducers({
    loginReducer,
    registerReducer
});

export default rootReducer
