import {combineReducers} from 'redux';

import {
    LOGIN,
    LOGINSTART,
    LOGINEND,
} from '../actions/login';

function loginRequest(state ={}, action) {
    console.log("4444444444444")
    console.log(state)
    console.log(action)
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
    console.log("9999999999999999999999");
    console.log(action);
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
            console.log("888888888888888")
            console.log(action)
            return Object.assign({}, state, {
                [action.what]: requestFetch(state = {}, action)
            });
        default:
            return state;
    }
}

const Todo = combineReducers({loginRequest,postBy});
export default Todo;