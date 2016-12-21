import {combineReducers} from 'redux';

import {
    LOGINSTART,
    LOGINEND,
} from '../actions/login';


function requestFetch(state = {}, action) {
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
        default:
            return state;
    }
}

function postBy(state = {
    //是否正在获取最新
    isFetching: false,
    //内容
    role:null,
    userName:null
}, action) {
    switch (action.type) {
        case LOGINSTART:
        case LOGINEND:
            console.log("888888888888888")
            console.log(action)
            return Object.assign({}, state,  requestFetch(state[action.name], action)   );
        default:
            return state;
    }
}

const Todo = combineReducers({postBy});
export default Todo;