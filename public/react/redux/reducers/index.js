import {combineReducers} from 'redux';
/*import {
    LOGIN,
    REGISTER,
    LOGINSTART,
    LOGINEND,
} from '../actions/index';*/
import {
    LOGIN,
    REGISTER,
    LOGINSTART,
    LOGINEND,
} from '../actions/login';

function loginRequest(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.login;
        default:
            return state;
    }
}
function requestFetch(state = {
    //是否正在获取最新
    isFetching: false,
    //内容
    role:null,
    userName:null,
}, action) {
    switch (action.type) {
        case LOGINSTART:
            return Object.assign({}, state, {
                isFetching: true,
                role:null,
                userName:null
            });
        case LOGINEND:
            return Object.assign({}, state, {
                isFetching: false,
                role:action.loginData.role,
                userName:action.loginData.userName
            });
    }
}

function postBy(state = {}, action) {
    switch (action.type) {
        case LOGINSTART:
        case LOGINEND:
            return Object.assign({}, state, {
                user: requestFetch(state = {}, action)
            });
        default:
            return state;
    }
}

const Todo = combineReducers({postBy});
export default Todo;