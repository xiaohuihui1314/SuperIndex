import {combineReducers} from 'redux';
import {
    LOGIN,
    REGISTER,
    LOGINSTART,
    LOGINEND,
} from '../actions/index';


function loginRequest(state = 'reactjs', action) {
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
    states:false,
    userName:null,
    //内容
    items: []
}, action) {
    switch (action.type) {
        case LOGINSTART:
            return Object.assign({}, state, {
                isFetching: true,
                states:false,
                userName:null
            });
        case LOGINEND:
            return Object.assign({}, state, {
                isFetching: false,
                states:false,
                userName:null,
                items: action.posts
            });
    }
}

function postBy(state = {}, action) {
    switch (action.type) {
        case LOGINSTART:
        case LOGINEND:
            console.log("postBypostBypostBypostBypostBypostBypostBypostBypostBypostBypostBy")
            console.log(action);
            return Object.assign({}, state, {
                [action.login]: requestFetch(state = {}, action)
            });
        default:
            return state;
    }
}

const Todo = combineReducers({loginRequest, postBy});
export default Todo;