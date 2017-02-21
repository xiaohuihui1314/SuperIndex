import {
    LOGINSTART,
    LOGINEND,
} from '../actions/login';
function requestFetch(state = {}, action) {
    switch (action.type) {
        case LOGINSTART:
            return Object.assign({}, state, {
                loginState: false,
                isFetching: true,
                role: null,
                userName: null
            });
        case LOGINEND:
            return Object.assign({}, state, {
                loginState: true,
                isFetching: false,
                role: action.loginData.role,
                userName: action.loginData.userName
            });
        default:
            return state;
    }
}

export const loginReducer = function loginReducer(state = {
    //是否正在获取最新
    loginState: false,
    isFetching: true,
    //内容
    role: null,
    userName: null
}, action) {
    switch (action.type) {
        case LOGINSTART:
        case LOGINEND:
            return Object.assign({}, state, requestFetch(state[action.name], action));
        default:
            return state;
    }
};

export {
    loginReducer as default
}

