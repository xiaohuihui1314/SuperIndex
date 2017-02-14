
import {
    REGISTESTART,
    REGISTEEND,
} from '../actions/register';


function requestFetch(state = {}, action) {
    switch (action.type) {
        case REGISTESTART:
            return Object.assign({}, state, {
                registerState: false,
                isFetching: true,
            });
        case REGISTEEND:
            return Object.assign({}, state, {
                registerState: true,
                isFetching: false,
            });
        default:
            return state;
    }
}

export const registerReducer = function registerReducer(state = {
    //是否正在获取最新
    registerState: false,
    isFetching: true,
}, action) {
    switch (action.type) {
        case REGISTESTART:
        case REGISTEEND:
            return Object.assign({}, state, requestFetch(state[action.name], action));
        default:
            return state;
    }
};

export {
    registerReducer as default
}

